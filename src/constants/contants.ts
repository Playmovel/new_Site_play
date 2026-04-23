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

// Valores padrão (fallback) - serão substituídos pelos dados da API
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

export const defaultConstants: VarType = {
  nameEmpresa: "Play Móvel",
  companyId: companyId,
  linkAppApple: "https://apps.apple.com/us/app/play-m%C3%B3vel/id1624910613",
  linkAppAndroid:
    "https://play.google.com/store/apps/details?id=app.mobile.ios.infiniti&pli=1",
  linkPedirChip: "https://loja.playmovel.com.br/Shop",
  linkPoliticaDePrivacidade: `https://privacidade.operadora.app.br/#/Play`,
  linkTermosDeAdesao: `https://privacidade.operadora.app.br/#/adesao/Play`,
  linkSuporte: `https://atendimento.operadora.app.br/?companyId=${companyId}`,
  linkChat: `https://atendimento.operadora.app.br/?companyId=${companyId}`,
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

// Função para transformar dados da API em constants
export const mapCompanyDataToConstants = (data: CompanyData): VarType => {
  // Formata as redes sociais com URLs corretas
  const redesSociais: RedesSociais | null = data.redes_sociais
    ? {
        ...data.redes_sociais,
        facebook: ensureExternalUrl(data.redes_sociais.facebook),
        instagram: ensureExternalUrl(data.redes_sociais.instagram),
        linkedin: ensureExternalUrl(data.redes_sociais.linkedin),
        whatsapp: ensureExternalUrl(data.redes_sociais.whatsapp),
      }
    : null;

  // Formata a cobertura com URLs corretas
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
    linkAppApple:
      ensureExternalUrl(data.link_appstore) || defaultConstants.linkAppApple,
    linkAppAndroid:
      ensureExternalUrl(data.link_playstore) || defaultConstants.linkAppAndroid,
    linkPedirChip:
      ensureExternalUrl(data.link_direciona_venda) ||
      ensureExternalUrl(data.link_chat) ||
      "",
    linkPoliticaDePrivacidade:
      ensureExternalUrl(data.politica_privacidade) || "",
    linkTermosDeAdesao: ensureExternalUrl(data.termos_uso) || "",
    linkSuporte: ensureExternalUrl(data.link_chat) || "",
    linkChat: ensureExternalUrl(data.link_chat) || "",
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

// Mantém compatibilidade com código existente
export const constants = defaultConstants;
