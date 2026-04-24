import { api } from "./api";

export interface PlanoAPI {
  id?: number;
  planid?: string;
  description: string;
  descricao_infiniti?: string;
  value: string;
  gigas: string;
  min: string;
  sms?: string;
  mostraApp?: boolean;
  rede?: string;
  modelo?: string;
}

interface PlanosResponse {
  Original: PlanoAPI[];
  personalizado: PlanoAPI[];
}

export function normalizePlanosResponse(data: PlanosResponse): PlanoAPI[] {
  const filteredPersonalizado = data.personalizado.filter(
    (plan) => plan.mostraApp === true,
  );
  const filteredOriginal = data.Original.filter(
    (plan) => plan.mostraApp === true,
  );
  const allPlans = [...filteredPersonalizado, ...filteredOriginal];

  return allPlans.sort((a, b) => {
    const gigasA = parseInt(a.gigas, 10) || 0;
    const gigasB = parseInt(b.gigas, 10) || 0;
    return gigasA - gigasB;
  });
}

export async function fetchCompanyPlans(companyId: number): Promise<PlanoAPI[]> {
  const response = await api.post<PlanosResponse>(
    "/api/app/planos/visualizar",
    {
      companyid: String(companyId),
    },
  );

  return normalizePlanosResponse(response.data);
}

export function parsePlanoValue(value?: string | null): number | null {
  if (!value) {
    return null;
  }

  const sanitizedValue = value.replace(/[^\d,.-]/g, "").trim();
  const normalizedValue = sanitizedValue.includes(",")
    ? sanitizedValue.replace(/\./g, "").replace(",", ".")
    : sanitizedValue;
  const numericValue = Number(normalizedValue);

  return Number.isFinite(numericValue) ? numericValue : null;
}

export function formatPlanoValue(value: number): string {
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function getLowestPlanoValueLabel(planos: PlanoAPI[]): string | null {
  const validValues = planos
    .filter((plan) => plan.mostraApp === true)
    .map((plan) => parsePlanoValue(plan.value))
    .filter((value): value is number => value !== null);

  if (validValues.length === 0) {
    return null;
  }

  return formatPlanoValue(Math.min(...validValues));
}
