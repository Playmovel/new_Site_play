/**
 * Utility functions for color contrast calculations
 */

/**
 * Converts a hex color to RGB values
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  // Remove # if present
  const cleanHex = hex.replace(/^#/, "");

  // Handle shorthand hex (e.g., #fff)
  const fullHex =
    cleanHex.length === 3
      ? cleanHex
          .split("")
          .map((c) => c + c)
          .join("")
      : cleanHex;

  if (fullHex.length !== 6) return null;

  const result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);

  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

/**
 * Calculates the relative luminance of a color
 * Based on WCAG 2.0 formula
 */
export function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const sRGB = c / 255;
    return sRGB <= 0.03928 ? sRGB / 12.92 : Math.pow((sRGB + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Determines if a color is considered "light" based on luminance
 * @param hex - The hex color to check
 * @param threshold - Luminance threshold (default 0.5, higher = more colors considered dark)
 * @returns true if the color is light, false if dark
 */
export function isLightColor(hex: string, threshold: number = 0.5): boolean {
  const rgb = hexToRgb(hex);
  if (!rgb) return false;

  const luminance = getLuminance(rgb.r, rgb.g, rgb.b);
  return luminance > threshold;
}

/**
 * Gets the appropriate text color (dark or light) for a given background color
 * @param backgroundColor - The background hex color
 * @returns The text color to use for good contrast
 */
export function getContrastTextColor(backgroundColor: string): string {
  return isLightColor(backgroundColor) ? "#1a1a1a" : "#ffffff";
}

/**
 * Gets CSS variable-friendly text color class
 * @param backgroundColor - The background hex color
 * @returns CSS color value for text
 */
export function getButtonTextColor(backgroundColor: string): {
  color: string;
  isLight: boolean;
} {
  const isLight = isLightColor(backgroundColor);
  return {
    color: isLight ? "var(--bg-dark-1)" : "var(--text-primary)",
    isLight,
  };
}
