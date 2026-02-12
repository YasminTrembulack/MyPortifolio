import { colors } from "../../styles/theme";

export type BadgeVariant =
  // Programming Languages
  | "csharp"
  | "c"
  | "python"
  | "java"

  // Frontend
  | "html"
  | "javascript"
  | "typescript"
  | "react"
  | "next"

  // Frameworks & Tools
  | "fastapi"
  | "spring"
  | "flask"
  | "django"
  | "node"

  // Databases
  | "sqlserver"
  | "mysql"
  | "mongodb"

  // IoT
  | "iot"
  | "default";

export const badgeVariants = {
  // Languages
  csharp: {
    bg: "rgba(35,145,32,0.15)",
    color: "#239120",
    border: "rgba(35,145,32,0.35)",
    glow: "rgba(35,145,32,0.45)",
  },
  c: {
    bg: "rgba(0,89,156,0.15)",
    color: "#00599C",
    border: "rgba(0,89,156,0.35)",
    glow: "rgba(0,89,156,0.45)",
  },
  python: {
    bg: "rgba(20,53,76,0.15)",
    color: "#3776AB",
    border: "rgba(20,53,76,0.35)",
    glow: "rgba(20,53,76,0.45)",
  },
  java: {
    bg: "rgba(237,139,0,0.15)",
    color: "#ED8B00",
    border: "rgba(237,139,0,0.35)",
    glow: "rgba(237,139,0,0.45)",
  },

  // Frontend
  html: {
    bg: "rgba(227,76,38,0.15)",
    color: "#E34F26",
    border: "rgba(227,76,38,0.35)",
    glow: "rgba(227,76,38,0.45)",
  },
  javascript: {
    bg: "rgba(247,223,30,0.15)",
    color: "#F7DF1E",
    border: "rgba(247,223,30,0.35)",
    glow: "rgba(247,223,30,0.45)",
  },
  typescript: {
    bg: colors.blueMuted,
    color: colors.bluePrimary,
    border: colors.blueSoft,
    glow: colors.blueSoft,
  },
  react: {
    bg: "rgba(97,218,251,0.15)",
    color: "#61DAFB",
    border: "rgba(97,218,251,0.35)",
    glow: "rgba(97,218,251,0.45)",
  },
  next: {
    bg: "rgba(255,255,255,0.08)",
    color: "#FFFFFF",
    border: "rgba(255,255,255,0.25)",
    glow: "rgba(255,255,255,0.35)",
  },

  // Frameworks & Tools
  fastapi: {
    bg: "rgba(16,185,129,0.15)",
    color: "#109989",
    border: "rgba(16,185,129,0.35)",
    glow: "rgba(16,185,129,0.45)",
  },
  spring: {
    bg: "rgba(109,179,63,0.15)",
    color: "#6DB33F",
    border: "rgba(109,179,63,0.35)",
    glow: "rgba(109,179,63,0.45)",
  },
  flask: {
    bg: "rgba(255,255,255,0.1)",
    color: "#FFFFFF",
    border: "rgba(255,255,255,0.25)",
    glow: "rgba(255,255,255,0.35)",
  },
  django: {
    bg: "rgba(9,46,32,0.15)",
    color: "#092E20",
    border: "rgba(9,46,32,0.35)",
    glow: "rgba(9,46,32,0.45)",
  },
  node: {
    bg: "rgba(109,165,95,0.15)",
    color: "#6DA55F",
    border: "rgba(109,165,95,0.35)",
    glow: "rgba(109,165,95,0.45)",
  },

  // Databases
  sqlserver: {
    bg: "rgba(204,41,39,0.15)",
    color: "#CC2927",
    border: "rgba(204,41,39,0.35)",
    glow: "rgba(204,41,39,0.45)",
  },
  mysql: {
    bg: "rgba(68,121,161,0.15)",
    color: "#4479A1",
    border: "rgba(68,121,161,0.35)",
    glow: "rgba(68,121,161,0.45)",
  },
  mongodb: {
    bg: "rgba(78,169,75,0.15)",
    color: "#4EA94B",
    border: "rgba(78,169,75,0.35)",
    glow: "rgba(78,169,75,0.45)",
  },

  iot: {
    bg: "rgba(255,111,0,0.15)",
    color: "#FF6F00",
    border: "rgba(255,111,0,0.35)",
    glow: "rgba(255,111,0,0.45)",
  },

  default: {
    bg: "#2a2a2a",
    color: "#f5f5f5",
    border: "#444",
    glow: "#666",
  },
};
