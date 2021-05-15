export function applyTheme(theme) {
  const root = document.documentElement;
  Object.keys(theme).forEach((cssVar) => {
    root.style.setProperty(cssVar, theme[cssVar]);
  });
}

export function createTheme({
  primary,
  primaryLight,
  secondary,
  secondaryLight,
  accent,
  accentLight,
  textBase,
}) {
  return {
    "--theme-primary": primary,
    "--theme-primary-light": primaryLight,
    "--theme-secondary": secondary,
    "--theme-secondary-light": secondaryLight,
    "--theme-accent": accent,
    "--theme-accent-light": accentLight,
    "--theme-text-base": textBase,
  };
}
