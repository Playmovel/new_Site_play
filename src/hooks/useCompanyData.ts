import { useQuery } from "@tanstack/react-query";
import { fetchCompanyData } from "../services/companyService";
import type { CompanyData } from "../types/company";

export const COMPANY_QUERY_KEY = ["company"];

export function useCompanyData() {
  return useQuery<CompanyData, Error>({
    queryKey: COMPANY_QUERY_KEY,
    queryFn: fetchCompanyData,
    staleTime: 1000 * 60 * 30, // 30 minutos
    gcTime: 1000 * 60 * 60, // 1 hora (antigo cacheTime)
    retry: 2,
    refetchOnWindowFocus: false,
  });
}
