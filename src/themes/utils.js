export function applyTheme(theme) {
  const root = document.documentElement;
  Object.keys(theme).forEach((cssVar) => {
    root.style.setProperty(cssVar, theme[cssVar]);
  });
}

export function createTheme({
  primary,
  secondary,
  accent,
  accentLight,
  textBase,
}) {
  return {
    "--theme-primary": primary,
    "--theme-secondary": secondary,
    "--theme-accent": accent,
    "--theme-accent-light": accentLight,
    "--theme-text-base": textBase,
  };
}
