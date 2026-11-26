import { useState, type FormEvent } from "react";
import DocsPage from "./DocsPage";
import { loginDocs } from "../../services/docsAuthService";
import "./docs.css";

/**
 * Protege a /docs: só mostra a documentação depois do login (CPF + senha),
 * validado pelo mesmo /api/login do SGM. Guarda apenas um flag de sessão no
 * sessionStorage (por aba) — não o token.
 */
const KEY = "play-docs-auth";

function readSession(): { name: string } | null {
  try {
    const raw = sessionStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as { name: string }) : null;
  } catch {
    return null;
  }
}

function formatCpf(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  return d
    .replace(/^(\d{3})(\d)/, "$1.$2")
    .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1-$2");
}

export default function DocsAuthGate() {
  const [user, setUser] = useState<{ name: string } | null>(() => readSession());
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setError("");
    setLoading(true);
    try {
      const u = await loginDocs(cpf, password);
      try { sessionStorage.setItem(KEY, JSON.stringify(u)); } catch { /* ignore */ }
      setUser(u);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Não foi possível entrar.");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    try { sessionStorage.removeItem(KEY); } catch { /* ignore */ }
    setUser(null);
    setCpf("");
    setPassword("");
    setError("");
  };

  if (user) return <DocsPage onLogout={logout} />;

  return (
    <div className="docs-login">
      <form className="docs-login-card" onSubmit={onSubmit}>
        <div className="docs-login-brand">play<i>.</i><span>API</span></div>
        <h1>Documentação da API</h1>
        <p>Acesso restrito. Entre com seu login do SGM.</p>

        <label className="docs-login-field">
          <span>CPF</span>
          <input
            type="text"
            inputMode="numeric"
            autoComplete="username"
            placeholder="000.000.000-00"
            value={cpf}
            onChange={(e) => setCpf(formatCpf(e.target.value))}
            required
          />
        </label>

        <label className="docs-login-field">
          <span>Senha</span>
          <input
            type="password"
            autoComplete="current-password"
            placeholder="Sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        {error && <div className="docs-login-err">{error}</div>}

        <button className="docs-login-btn" type="submit" disabled={loading}>
          {loading ? "Entrando…" : "Entrar"}
        </button>
      </form>
    </div>
  );
}
