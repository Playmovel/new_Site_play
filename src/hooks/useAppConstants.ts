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

export type RedeType = "TIM" | "VIVO" | "AMBOS";

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

  const constants = useMemo(() => {
    if (data) {
      return mapCompanyDataToConstants(data);
    }
    return defaultConstants;
  }, [data]);

  const rede = useMemo<RedeType>(() => {
    if (data?.rede === "TIM" || data?.rede === "VIVO" || data?.rede === "AMBOS") {
      return data.rede;
    }
    return "AMBOS";
  }, [data]);

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
    apelidoRede,
    themeColors,
    buttonTextStyle,
  };
}
