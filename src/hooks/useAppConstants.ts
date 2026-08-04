import { useMemo } from "react";
import { useCompanyData } from "./useCompanyData";
import {
  defaultConstants,
  mapCompanyDataToConstants,
  type VarType,
} from "../constants/contants";
import type { ApelidoRede, AppThemeColors } from "../types/company";
import { parseAppTheme, defaultThemeColors } from "../types/company";
import { getButtonTextColor } from "../utils/colorContrast";
import {
  normalizeCompanyNetworks,
  type RedeNetwork,
} from "../utils/redeHelpers";

// "AMBOS" e o valor do seletor "todas as coberturas", nao uma rede.
export type RedeType = RedeNetwork | "AMBOS";

interface ButtonTextStyle {
  color: string;
  isLight: boolean;
}

interface UseAppConstantsReturn {
  constants: VarType;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  rede: RedeType;
  redes: RedeNetwork[];
  apelidoRede: ApelidoRede | null;
  themeColors: AppThemeColors;
  buttonTextStyle: ButtonTextStyle;
}

const defaultApelidoRede: ApelidoRede = {
  active: false,
  apelido_tim: "",
  apelido_vivo: "",
};

export function useAppConstants(): UseAppConstantsReturn {
  const { data, isLoading, isError, error } = useCompanyData();

  const constants = useMemo<VarType>(() => {
    if (data) {
      return mapCompanyDataToConstants(data);
    }

    return defaultConstants;
  }, [data]);

  const redes = useMemo<RedeNetwork[]>(() => {
    return normalizeCompanyNetworks(data?.rede);
  }, [data]);

  // Compatibilidade com quem ainda espera um escalar (Navbar): uma unica rede
  // vira ela mesma, mais de uma vira "AMBOS".
  const rede = useMemo<RedeType>(() => {
    return redes.length === 1 ? redes[0] : "AMBOS";
  }, [redes]);

  const apelidoRede = useMemo(() => {
    return data?.apelido_rede ?? defaultApelidoRede;
  }, [data]);

  const themeColors = useMemo<AppThemeColors>(() => {
    if (data?.appTheme) {
      const parsed = parseAppTheme(data.appTheme);

      if (parsed?.colors) {
        return parsed.colors;
      }
    }

    return defaultThemeColors;
  }, [data]);

  const buttonTextStyle = useMemo<ButtonTextStyle>(() => {
    return getButtonTextColor(themeColors.primary);
  }, [themeColors.primary]);

  return {
    constants,
    isLoading,
    isError,
    error: error ?? null,
    rede,
    redes,
    apelidoRede,
    themeColors,
    buttonTextStyle,
  };
}
