import { useQuery } from "@tanstack/react-query";
import { fetchCompanyPlans } from "../services/planService";
import type { PlanoAPI } from "../services/planService";

export const COMPANY_PLANS_QUERY_KEY = ["company-plans"];

export function usePlanos(companyId: number) {
  return useQuery<PlanoAPI[], Error>({
    queryKey: [...COMPANY_PLANS_QUERY_KEY, companyId],
    queryFn: () => fetchCompanyPlans(companyId),
    enabled: Number.isFinite(companyId) && companyId > 0,
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 60,
    retry: 2,
    refetchOnWindowFocus: false,
  });
}
