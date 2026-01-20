export interface ApelidoRede {
  active: boolean;
  apelido_tim: string;
  apelido_vivo: string;
}

export interface AppThemeColors {
  primary: string;
  secondary: string;
}

export interface AppTheme {
  darkLightMode: boolean;
  colors: AppThemeColors;
}

// Default theme colors (generic/neutral for loading state)
export const defaultThemeColors: AppThemeColors = {
  primary: "#6b7280",
  secondary: "#1f2937",
};

// Parse appTheme JSON string safely
export function parseAppTheme(appThemeString: string | null | undefined): AppTheme | null {
  if (!appThemeString) return null;

  try {
    const parsed = JSON.parse(appThemeString) as AppTheme;

    // Validate the structure
    if (parsed?.colors?.primary && parsed?.colors?.secondary) {
      return parsed;
    }
    return null;
  } catch {
    console.warn("Failed to parse appTheme:", appThemeString);
    return null;
  }
}

export interface CompanyData {
  companyId: number;
  companyname: string;
  cnpj: string;
  tradename: string;
  nomeparceiro: string;
  email: string;
  celular: string;
  telefone: string;
  cep: string;
  endereco: string;
  numeroendereco: string;
  complemento: string | null;
  bairro: string;
  inscricaomunicipal: string | null;
  inscricaoestadual: string;
  observacoes: string | null;
  walletid: string;
  link_playstore: string;
  link_appstore: string;
  link_website: string;
  link_chat: string;
  pospago: boolean;
  link_contrato: string;
  consultor: string;
  appTheme: string;
  appversion: string | null;
  mvnoparent: string | null;
  mvnoparentid: string | null;
  logotipo: string;
  rede: string;
  modulo_esim: boolean;
  valor_esim: string;
  apelido_rede: ApelidoRede;
  image_header_app: string;
  token: string;
  app_screenshot?: string;
  link_printapp?: string;
  linkicon?: string;
  termos_uso?: string | null;
  politica_privacidade?: string | null;
  vendas_chip?: string | null;
}

export interface CompanyRequest {
  companyid: number;
}
