import { api } from "./api";
import type { CompanyData, CompanyRequest } from "../types/company";

export const fetchCompanyData = async (): Promise<CompanyData> => {
  const companyId = Number(import.meta.env.VITE_COMPANY_ID);

  const requestBody: CompanyRequest = {
    companyid: companyId,
  };

  const response = await api.post<CompanyData>(
    "/api/consultaempresaNovoAppSite",
    requestBody,
  );

  return response.data;
};
