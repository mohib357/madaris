import type { ThemeConfig } from "@/types/institution";

/**
 * Injects CSS custom properties into the document root
 * based on institution's theme config.
 * Call this in a Client Component (useEffect) or inline style.
 */
export function applyTheme(theme: ThemeConfig): Record<string, string> {
  return {
    "--color-primary": theme.primaryColor,
    "--color-primary-dark": theme.primaryDark,
    "--color-primary-light": theme.primaryLight,
    "--color-primary-foreground": theme.primaryForeground,
  };
}

/**
 * Returns a Tailwind-compatible inline style object for use in JSX.
 */
export function themeStyle(theme: ThemeConfig): React.CSSProperties {
  return applyTheme(theme) as React.CSSProperties;
}
