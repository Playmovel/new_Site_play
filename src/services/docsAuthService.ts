import { api } from "./api";

/**
 * Login da documentação da API (/docs) reusando a MESMA verificação do SGM:
 * POST /api/login no backend sistema.playmovel.com.br, com CPF + senha.
 * (mesmo endpoint/payload que o new-sgm-v2 usa em services/authApi.ts).
 *
 * Só validamos as credenciais contra o backend para liberar a leitura da doc —
 * NÃO guardamos o token (a doc é estática), apenas um flag de sessão.
 */
export interface DocsUser {
  name: string;
}

interface LoginResponse {
  token?: unknown;
  name?: string;
  companyName?: string;
  nome?: string;
  erro?: string;
  descricao?: string;
}

export async function loginDocs(cpfRaw: string, password: string): Promise<DocsUser> {
  const cpf = (cpfRaw || "").replace(/\D/g, "");

  try {
    const res = await api.post<LoginResponse>("/api/login", {
      cpf,
      password,
      latitude: "Geolocalização indisponível",
      longitude: "Geolocalização indisponível",
      acao_realizada: "Login",
      tipo_login: "SGM",
      origem: "NOVO SGM",
    });

    const data = res.data;
    if (data && typeof data.token === "string" && data.token) {
      return { name: data.name || data.companyName || data.nome || "" };
    }
    // alguns backends RPC devolvem 200 com { erro, descricao }
    throw new Error(data?.descricao || data?.erro || "CPF ou senha inválidos.");
  } catch (e: unknown) {
    const ax = e as {
      response?: { status?: number; data?: { erro?: string; descricao?: string } | string };
      message?: string;
    };
    if (ax?.response) {
      const d = ax.response.data;
      const msg = typeof d === "string" ? d : d?.descricao || d?.erro;
      throw new Error(msg || "Não foi possível entrar. Confira o CPF e a senha.");
    }
    if (e instanceof Error) throw e;
    throw new Error("Não foi possível entrar. Tente novamente.");
  }
}
