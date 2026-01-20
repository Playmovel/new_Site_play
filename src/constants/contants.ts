import type { CompanyData } from "../types/company";

export type VarType = {
  nameEmpresa: string;
  companyId: number;
  linkAppApple: string;
  linkAppAndroid: string;
  linkPedirChip: string;
  linkPoliticaDePrivacidade: string;
  linkTermosDeAdesao: string;
  linkSuporte: string;
  logotipo: string;
  linkWebsite: string;
  appScreenshot: string;
};

// Valores padrão (fallback) - serão substituídos pelos dados da API
const companyId = Number(import.meta.env.VITE_COMPANY_ID) || 46;

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
  logotipo: "",
  linkWebsite: "",
  appScreenshot: "",
};

// Função para transformar dados da API em constants
export const mapCompanyDataToConstants = (data: CompanyData): VarType => {
  const parceiro = data.nomeparceiro || data.tradename || "Play";
  const parceiroLower = parceiro.toLowerCase().replace(/\s+/g, "");

  return {
    nameEmpresa: data.tradename || data.companyname || defaultConstants.nameEmpresa,
    companyId: data.companyId || defaultConstants.companyId,
    linkAppApple: data.link_appstore || defaultConstants.linkAppApple,
    linkAppAndroid: data.link_playstore || defaultConstants.linkAppAndroid,
    linkPedirChip: `https://loja.${parceiroLower}.com.br/Shop`,
    linkPoliticaDePrivacidade: `https://privacidade.operadora.app.br/#/${parceiro}`,
    linkTermosDeAdesao: `https://privacidade.operadora.app.br/#/adesao/${parceiro}`,
    linkSuporte: data.link_chat || defaultConstants.linkSuporte,
    logotipo: data.logotipo || "",
    linkWebsite: data.link_website || "",
    appScreenshot: data.app_screenshot || "",
  };
};

// Mantém compatibilidade com código existente
export const constants = defaultConstants;
