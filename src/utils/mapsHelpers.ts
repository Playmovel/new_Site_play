import type { EnderecoSite } from "../types/company";

function formatCep(cep: string | null): string {
  const d = (cep ?? "").replace(/\D/g, "");
  return d.length === 8 ? `${d.slice(0, 5)}-${d.slice(5)}` : "";
}

function hasCoords(e: EnderecoSite): boolean {
  return (
    typeof e.latitude === "number" &&
    typeof e.longitude === "number" &&
    Number.isFinite(e.latitude) &&
    Number.isFinite(e.longitude)
  );
}

/** "Rua X, 220 B - Sala 3" */
export function formatRua(e: EnderecoSite): string {
  const rua = [e.logradouro, e.numero].filter(Boolean).join(", ");
  return [rua, e.complemento].filter(Boolean).join(" - ");
}

/** "Centro - Tabatinga/AM - CEP 69550-081" */
export function formatCidade(e: EnderecoSite): string {
  const cidadeUf = [e.cidade, e.uf].filter(Boolean).join("/");
  const cep = formatCep(e.cep);
  return [e.bairro, cidadeUf, cep && `CEP ${cep}`].filter(Boolean).join(" - ");
}

// Sem coordenadas, o Google resolve pelo texto do endereco.
function destino(e: EnderecoSite): string {
  if (hasCoords(e)) return `${e.latitude},${e.longitude}`;
  return [formatRua(e), e.bairro, e.cidade, e.uf, formatCep(e.cep), "Brasil"]
    .filter(Boolean)
    .join(", ");
}

/** Embed do Google Maps (nao exige chave de API). */
export function mapsEmbedUrl(e: EnderecoSite): string {
  return `https://maps.google.com/maps?q=${encodeURIComponent(destino(e))}&z=17&output=embed`;
}

/** Abre a rota ate a loja no Google Maps (app no celular, web no desktop). */
export function mapsDirectionsUrl(e: EnderecoSite): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destino(e))}`;
}

/** Abre a navegacao no Waze. Com coordenada usa ll; sem, busca pelo texto. */
export function wazeUrl(e: EnderecoSite): string {
  if (hasCoords(e)) {
    return `https://waze.com/ul?ll=${e.latitude},${e.longitude}&navigate=yes`;
  }
  return `https://waze.com/ul?q=${encodeURIComponent(destino(e))}&navigate=yes`;
}
