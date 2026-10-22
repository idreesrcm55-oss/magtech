/*
  THEME (JS MIRROR)
  ---------------------------------------------------------------
  The real source of truth for colors is src/index.css (:root variables).
  This file reads those variables at runtime for places that need a JS color
  value (charts, canvas, meta theme-color). Nothing to edit here.
*/
const readVar = (name) =>
  typeof window === "undefined"
    ? ""
    : `rgb(${getComputedStyle(document.documentElement).getPropertyValue(name).trim()})`;

export const THEME = {
  primary: () => readVar("--color-primary"),
  primaryDark: () => readVar("--color-primary-dark"),
  secondary: () => readVar("--color-secondary"),
  accent: () => readVar("--color-accent"),
  dark: () => readVar("--color-dark"),
  body: () => readVar("--color-body"),
  light: () => readVar("--color-light"),
};
