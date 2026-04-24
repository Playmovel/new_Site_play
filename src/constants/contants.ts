import type {
  CompanyData,
  RedesSociais,
  Cobertura,
  ApelidoRede,
} from "../types/company";
import { ensureExternalUrl } from "../utils/urlHelpers";

export type VarType = {
  nameEmpresa: string;
  companyId: number;
  linkAppApple: string;
  linkAppAndroid: string;
  linkPedirChip: string;
  linkPoliticaDePrivacidade: string;
  linkTermosDeAdesao: string;
  linkSuporte: string;
  linkChat: string;
  logotipo: string;
  linkIcon: string;
  linkWebsite: string;
  appScreenshot: string;
  printApp: string;
  redesSociais: RedesSociais | null;
  cobertura: Cobertura | null;
  rede: "TIM" | "VIVO" | "AMBOS";
  apelidoRede: ApelidoRede | null;
  whatsappAtendimentoLink: string;
};

// Valores padrao (fallback) - serao substituidos pelos dados da API
const companyId = Number(import.meta.env.VITE_COMPANY_ID) || 407;

function buildWhatsAppLink(phone?: string | null): string {
  const digitsOnly = phone?.replace(/\D/g, "") ?? "";

  if (!digitsOnly) {
    return "";
  }

  const phoneWithCountryCode = digitsOnly.startsWith("55")
    ? digitsOnly
    : `55${digitsOnly}`;

  return `https://wa.me/${phoneWithCountryCode}`;
}

function parseRedesSociais(
  redesSociais: CompanyData["redes_sociais"],
): RedesSociais | null {
  if (!redesSociais) {
    return null;
  }

  if (typeof redesSociais === "string") {
    try {
      return JSON.parse(redesSociais) as RedesSociais;
    } catch {
      console.warn("Failed to parse redes_sociais:", redesSociais);
      return null;
    }
  }

  return redesSociais;
}

export const defaultConstants: VarType = {
  nameEmpresa: "Play Movel",
  companyId,
  linkAppApple: "",
  linkAppAndroid: "",
  linkPedirChip: "https://loja.playmovel.com.br/Shop",
  linkPoliticaDePrivacidade: "https://privacidade.operadora.app.br/#/Play",
  linkTermosDeAdesao: "https://privacidade.operadora.app.br/#/adesao/Play",
  linkSuporte: "",
  linkChat: "",
  logotipo: "",
  linkIcon: "",
  linkWebsite: "",
  appScreenshot: "",
  printApp: "",
  redesSociais: null,
  cobertura: null,
  rede: "AMBOS",
  apelidoRede: null,
  whatsappAtendimentoLink: "",
};

// Funcao para transformar dados da API em constants
export const mapCompanyDataToConstants = (data: CompanyData): VarType => {
  const parsedRedesSociais = parseRedesSociais(data.redes_sociais);

  const redesSociais: RedesSociais | null = parsedRedesSociais
    ? {
        ...parsedRedesSociais,
        facebook: ensureExternalUrl(parsedRedesSociais.facebook),
        instagram: ensureExternalUrl(parsedRedesSociais.instagram),
        linkedin: ensureExternalUrl(parsedRedesSociais.linkedin),
        whatsapp: ensureExternalUrl(parsedRedesSociais.whatsapp),
        atendimento: ensureExternalUrl(parsedRedesSociais.atendimento),
      }
    : null;

  const chatLink = ensureExternalUrl(redesSociais?.atendimento);

  const cobertura: Cobertura | null = data.cobertura
    ? {
        ...data.cobertura,
        cobertura_tim: ensureExternalUrl(data.cobertura.cobertura_tim),
        cobertura_vivo: ensureExternalUrl(data.cobertura.cobertura_vivo),
      }
    : null;

  return {
    nameEmpresa:
      data.tradename || data.companyname || defaultConstants.nameEmpresa,
    companyId: data.companyId || defaultConstants.companyId,
    linkAppApple: ensureExternalUrl(data.link_appstore) || "",
    linkAppAndroid: ensureExternalUrl(data.link_playstore) || "",
    linkPedirChip: ensureExternalUrl(data.link_direciona_venda) || "",
    linkPoliticaDePrivacidade:
      ensureExternalUrl(data.politica_privacidade) || "",
    linkTermosDeAdesao: ensureExternalUrl(data.termos_uso) || "",
    linkSuporte: chatLink,
    linkChat: chatLink,
    logotipo: ensureExternalUrl(data.logotipo) || "",
    linkIcon: ensureExternalUrl(data.linkicon) || "",
    linkWebsite: ensureExternalUrl(data.link_website) || "",
    appScreenshot: ensureExternalUrl(data.app_screenshot) || "",
    printApp: ensureExternalUrl(data.link_printapp) || "",
    redesSociais,
    cobertura,
    rede: (data.rede as "TIM" | "VIVO" | "AMBOS") || "AMBOS",
    apelidoRede: data.apelido_rede || null,
    whatsappAtendimentoLink: buildWhatsAppLink(data.telefone || data.celular),
  };
};

// Mantem compatibilidade com codigo existente
export const constants = defaultConstants;
