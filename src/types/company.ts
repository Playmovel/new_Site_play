export interface ApelidoRede {
  active: boolean;
  apelido_tim: string;
  apelido_vivo: string;
  apelido_avt?: string;
}

export interface RedesSociais {
  facebook: string | null;
  instagram: string | null;
  linkedin: string | null;
  whatsapp: string | null;
  atendimento: string | null;
  bool_facebook: boolean;
  bool_instagram: boolean;
  bool_linkedin: boolean;
  bool_whatsapp: boolean;
  bool_atendimento: boolean;
}

export interface Cobertura {
  cobertura_tim: string | null;
  cobertura_vivo: string | null;
  bool_cobertura_tim: boolean;
  bool_cobertura_vivo: boolean;
}

export interface AppThemeColors {
  primary: string;
  secondary: string;
}

export interface AppTheme {
  darkLightMode?: boolean;
  colors: AppThemeColors;
}

// Default theme colors (generic/neutral for loading state)
export const defaultThemeColors: AppThemeColors = {
  primary: "#6b7280",
  secondary: "#1f2937",
};

// Ensure color has # prefix
function ensureHashPrefix(color: string): string {
  if (!color) return color;
  return color.startsWith("#") ? color : `#${color}`;
}

// Parse appTheme safely. Pode vir como string JSON (contrato esperado pelo
// CompanyController::consultaEmpresasemtokenAppSite) ou como objeto ja
// decodificado (quando o cast 'sitetheme' => 'array' do CompanyModel ativa).
// Tolerar ambos pra nao quebrar o tema do site se o backend mudar.
export function parseAppTheme(
  appTheme: unknown,
): AppTheme | null {
  if (!appTheme) return null;

  try {
    const parsed = (typeof appTheme === "string"
      ? JSON.parse(appTheme)
      : appTheme) as AppTheme;

    // Validate the structure
    if (parsed?.colors?.primary && parsed?.colors?.secondary) {
      // Ensure colors have # prefix for CSS compatibility
      return {
        ...parsed,
        colors: {
          primary: ensureHashPrefix(parsed.colors.primary),
          secondary: ensureHashPrefix(parsed.colors.secondary),
        },
      };
    }
    return null;
  } catch {
    console.warn("Failed to parse appTheme:", appTheme);
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
  link_chat: boolean;
  pospago: boolean;
  link_contrato: string;
  consultor: string;
  // Pode vir como string JSON ou como objeto ja decodificado dependendo do
  // cast no CompanyModel. parseAppTheme tolera ambos.
  appTheme: string | AppTheme | null;
  appversion: string | null;
  mvnoparent: string | null;
  mvnoparentid: string | null;
  logotipo: string;
  // O contrato atual (SGM v2) devolve string[]; o legado ainda manda string
  // simples ou string JSON. Normalizar sempre com normalizeCompanyNetworks.
  rede: string | string[];
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
  link_direciona_venda?: string | null;
  redes_sociais?: RedesSociais | string | null;
  cobertura?: Cobertura | null;
}

export interface CompanyRequest {
  companyid: number;
}
