import { useMemo, useState } from "react";
import rawData from "./docs-data.json";
import "./docs.css";

/* ---- Tipos ---- */
interface Field { key: string; example: string; description: string }
interface Params { mode: string | null; fields: Field[]; raw: string | null; lang: string | null }
interface RespEx { name: string; code: number | null; status: string; lang: string; body: string | null }
interface Endpoint {
  type: "endpoint";
  id: string;
  name: string;
  method: string;
  host: string;
  path: string;
  fullUrl: string;
  description: string;
  auth: boolean;
  params: Params;
  responses: RespEx[];
}
interface Folder { type: "folder"; name: string; description: string; children: TreeNode[] }
type TreeNode = Folder | Endpoint;
interface Collection {
  id: string;
  label: string;
  name: string;
  description: string;
  baseUrl: string;
  total: number;
  tree: TreeNode[];
}
interface DocsData { collections: Collection[] }

const data = rawData as unknown as DocsData;

function flatten(nodes: TreeNode[]): Endpoint[] {
  const out: Endpoint[] = [];
  for (const n of nodes) {
    if (n.type === "endpoint") out.push(n);
    else out.push(...flatten(n.children));
  }
  return out;
}

const methodClass = (m: string) => (m.toUpperCase() === "GET" ? "get" : "post");

function statusClass(code: number | null) {
  if (code == null) return "other";
  if (code >= 200 && code < 300) return "ok";
  if (code >= 400) return "err";
  return "other";
}

function pretty(body: string | null, lang: string | null) {
  if (!body) return "";
  const t = body.trim();
  if (lang === "json" || t.startsWith("{") || t.startsWith("[")) {
    try { return JSON.stringify(JSON.parse(body), null, 2); } catch { return body; }
  }
  return body;
}

/* ---- Árvore (sidebar) ---- */
function Tree({ nodes, prefix, collapsed, toggle, selectedId, onSelect }: {
  nodes: TreeNode[]; prefix: string; collapsed: Set<string>;
  toggle: (k: string) => void; selectedId: string | null; onSelect: (id: string) => void;
}) {
  return (
    <>
      {nodes.map((n, i) => {
        if (n.type === "endpoint") {
          return (
            <button key={n.id} className={"docs-ep" + (selectedId === n.id ? " active" : "")} onClick={() => onSelect(n.id)}>
              <span className={"m m-" + methodClass(n.method)}>{n.method}</span>
              <span className="t">{n.name}</span>
            </button>
          );
        }
        const key = prefix + "/" + n.name + i;
        const isCollapsed = collapsed.has(key);
        return (
          <div key={key} className={"docs-folder" + (isCollapsed ? " collapsed" : "")}>
            <button className="docs-folder-head" onClick={() => toggle(key)}>
              <svg className="chev" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
              {n.name}
            </button>
            <div className="docs-folder-kids">
              <Tree nodes={n.children} prefix={key} collapsed={collapsed} toggle={toggle} selectedId={selectedId} onSelect={onSelect} />
            </div>
          </div>
        );
      })}
    </>
  );
}

/* ---- Detalhe do endpoint ---- */
function EndpointView({ ep, baseUrl }: { ep: Endpoint; baseUrl: string }) {
  const [copied, setCopied] = useState(false);
  const host = ep.host || baseUrl;
  const copy = () => {
    navigator.clipboard?.writeText(host + ep.path).then(
      () => { setCopied(true); window.setTimeout(() => setCopied(false), 1500); },
      () => {},
    );
  };
  const { params } = ep;
  return (
    <article>
      <div className="ep-head">
        <span className={"badge badge-" + methodClass(ep.method)}>{ep.method}</span>
        <h2 className="ep-title">{ep.name}</h2>
      </div>
      <div className="ep-path">
        <span><span className="host">{host}</span>{ep.path}</span>
        <button className="ep-copy" onClick={copy}>{copied ? "copiado ✓" : "copiar"}</button>
      </div>
      {ep.auth && (
        <div className="ep-auth">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>
          Requer autenticação (token)
        </div>
      )}
      {ep.description && <p className="ep-desc">{ep.description}</p>}

      <div className="ep-section">
        <h3>Parâmetros</h3>
        {params.mode === "urlencoded" || params.mode === "formdata" ? (
          params.fields.length ? (
            <table className="params">
              <thead><tr><th>Campo</th><th>Exemplo</th><th>Descrição</th></tr></thead>
              <tbody>
                {params.fields.map((f, i) => (
                  <tr key={f.key + i}>
                    <td className="k">{f.key}</td>
                    <td className="ex">{f.example || "—"}</td>
                    <td className="ds">{f.description || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : <p className="empty-note">Sem parâmetros.</p>
        ) : params.raw ? (
          <>
            <p className="empty-note" style={{ marginBottom: 10 }}>Corpo ({params.lang || "raw"}):</p>
            <pre className="code">{pretty(params.raw, params.lang)}</pre>
          </>
        ) : <p className="empty-note">Sem corpo documentado.</p>}
      </div>

      <div className="ep-section">
        <h3>Respostas</h3>
        {ep.responses.length ? (
          ep.responses.map((r, i) => (
            <div className="resp" key={i}>
              <div className="resp-head">
                <span className={"status " + statusClass(r.code)}>{r.code ?? "—"} {r.status}</span>
                <span className="resp-name">{r.name}</span>
              </div>
              {r.body != null && <pre className="code">{pretty(r.body, r.lang)}</pre>}
            </div>
          ))
        ) : <p className="empty-note">Sem exemplos de resposta documentados.</p>}
      </div>
    </article>
  );
}

/* ---- Página ---- */
export default function DocsPage() {
  const [colId, setColId] = useState(data.collections[0]?.id ?? "");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());

  const col = useMemo(
    () => data.collections.find((c) => c.id === colId) ?? data.collections[0],
    [colId],
  );
  const allEndpoints = useMemo(() => flatten(col.tree), [col]);
  const selected = useMemo(
    () => allEndpoints.find((e) => e.id === selectedId) ?? null,
    [allEndpoints, selectedId],
  );

  const q = query.trim().toLowerCase();
  const matches = useMemo(
    () => (q ? allEndpoints.filter((e) => (e.name + " " + e.path).toLowerCase().includes(q)) : []),
    [q, allEndpoints],
  );

  const toggle = (k: string) =>
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(k)) next.delete(k); else next.add(k);
      return next;
    });

  const switchCollection = (id: string) => {
    setColId(id);
    setSelectedId(null);
    setQuery("");
    setCollapsed(new Set());
  };

  return (
    <div className="docs">
      <aside className="docs-side">
        <div className="docs-brand">play<i>.</i><span>API</span></div>

        {data.collections.length > 1 && (
          <div className="docs-colsel">
            {data.collections.map((c) => (
              <button
                key={c.id}
                className={"docs-coltab" + (c.id === colId ? " on" : "")}
                onClick={() => switchCollection(c.id)}
                title={c.label}
              >
                {c.label}
                <b>{c.total}</b>
              </button>
            ))}
          </div>
        )}

        <input className="docs-search" placeholder="Buscar endpoint…" value={query} onChange={(e) => setQuery(e.target.value)} />

        <nav className="docs-tree">
          {q ? (
            matches.length ? (
              matches.map((n) => (
                <button key={n.id} className={"docs-ep" + (selectedId === n.id ? " active" : "")} onClick={() => setSelectedId(n.id)}>
                  <span className={"m m-" + methodClass(n.method)}>{n.method}</span>
                  <span className="t">{n.name}</span>
                </button>
              ))
            ) : <p className="empty-note" style={{ padding: "8px 10px" }}>Nada encontrado.</p>
          ) : (
            <Tree nodes={col.tree} prefix={"root-" + col.id} collapsed={collapsed} toggle={toggle} selectedId={selectedId} onSelect={setSelectedId} />
          )}
        </nav>
      </aside>

      <main className="docs-main">
        <div className="docs-top">
          <h1>{col.name} · API Reference</h1>
          <span className="docs-base">{col.baseUrl}</span>
          <span className="docs-count">{col.total} endpoints</span>
        </div>

        {selected ? (
          <EndpointView ep={selected} baseUrl={col.baseUrl} />
        ) : (
          <div className="docs-intro">
            <h2>Documentação da API</h2>
            {col.description
              ? <p>{col.description.slice(0, 900)}</p>
              : <p>Selecione um endpoint no menu à esquerda para ver os parâmetros e exemplos de resposta.</p>}
            <div className="docs-note">
              {col.label} — {col.total} endpoints, gerados a partir da collection do Postman.
              Dados sensíveis (tokens, CPF, telefone, e-mail) foram mascarados. Troque de
              collection no topo do menu e selecione um endpoint para começar.
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
