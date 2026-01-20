import { useEffect, useCallback } from "react";
import type { AppThemeColors } from "../types/company";
import { defaultThemeColors } from "../types/company";

/**
 * Applies theme colors to CSS variables on the document root
 */
export function applyThemeColors(colors: AppThemeColors): void {
  const root = document.documentElement;

  // Set primary and secondary colors
  root.style.setProperty("--color-primary", colors.primary);
  root.style.setProperty("--color-secondary", colors.secondary);
}

/**
 * Hook to manage and apply theme colors
 */
export function useTheme(colors: AppThemeColors | null, isLoading: boolean) {
  const applyColors = useCallback((themeColors: AppThemeColors) => {
    applyThemeColors(themeColors);
  }, []);

  useEffect(() => {
    // Apply colors when loading is complete and we have colors
    if (!isLoading && colors) {
      applyColors(colors);
    }
  }, [colors, isLoading, applyColors]);

  return {
    applyColors,
    currentColors: colors ?? defaultThemeColors,
  };
}

/**
 * Apply theme colors synchronously (for use before React renders)
 * This can be called directly without hooks
 */
export function applyThemeColorsSync(colors: AppThemeColors): void {
  applyThemeColors(colors);
}
