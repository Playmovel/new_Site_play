import type {
  CompanyData,
  RedesSociais,
  Cobertura,
  ApelidoRede,
  EnderecoSite,
} from "../types/company";
import { ensureExternalUrl } from "../utils/urlHelpers";
import {
  normalizeCompanyNetworks,
  type RedeNetwork,
} from "../utils/redeHelpers";

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
  rede: RedeNetwork | "AMBOS";
  redes: RedeNetwork[];
  apelidoRede: ApelidoRede | null;
  whatsappAtendimentoLink: string;
  // null = parceiro nao cadastrou ou desligou "Exibir no site".
  enderecoLoja: EnderecoSite | null;
};

// Valores padrao (fallback) - serao substituidos pelos dados da API
const companyId = Number(import.meta.env.VITE_COMPANY_ID) || 407;

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

// So devolve o endereco quando o parceiro ligou "Exibir no site" e ha o
// minimo para mostrar e localizar (logradouro + cidade).
function parseEnderecoLoja(
  endereco: CompanyData["endereco_site"],
): EnderecoSite | null {
  if (!endereco) return null;

  let parsed: EnderecoSite | null = null;
  if (typeof endereco === "string") {
    try {
      parsed = JSON.parse(endereco) as EnderecoSite;
    } catch {
      console.warn("Failed to parse endereco_site:", endereco);
      return null;
    }
  } else {
    parsed = endereco;
  }

  if (!parsed?.exibir || !parsed.logradouro || !parsed.cidade) return null;
  return parsed;
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
  redes: ["TIM", "VIVO"],
  apelidoRede: null,
  whatsappAtendimentoLink: "",
  enderecoLoja: null,
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

  const companyNetworks = normalizeCompanyNetworks(data.rede);

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
    rede: companyNetworks.length === 1 ? companyNetworks[0] : "AMBOS",
    redes: companyNetworks,
    apelidoRede: data.apelido_rede || null,
    whatsappAtendimentoLink: redesSociais?.whatsapp || "",
    enderecoLoja: parseEnderecoLoja(data.endereco_site),
  };
};

// Mantem compatibilidade com codigo existente
export const constants = defaultConstants;
