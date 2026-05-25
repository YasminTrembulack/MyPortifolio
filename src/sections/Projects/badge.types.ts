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
  | "postgresql"
  | "firebase"
  | "elasticsearch"

  // Cloud & DevOps
  | "azure"
  | "docker"

  // IoT
  | "iot"
  | "default";

export const badgeVariants = {
  // Languages
  csharp: {
    bg: "#239120",
    color: "#FFFFFF",
    border: "#1e7d1b",
    glow: "#1e7d1b",
  },
  c: {
    bg: "#00599C",
    color: "#FFFFFF",
    border: "#004a82",
    glow: "#004a82",
  },
  python: {
    bg: "#3776AB",
    color: "#FFFFFF",
    border: "#2c5f8a",
    glow: "#2c5f8a",
  },
  java: {
    bg: "#ED8B00",
    color: "#FFFFFF",
    border: "#c77400",
    glow: "#c77400",
  },

  // Frontend
  html: {
    bg: "#E34F26",
    color: "#FFFFFF",
    border: "#c33f1c",
    glow: "#c33f1c",
  },
  javascript: {
    bg: "#F7DF1E",
    color: "#111111",
    border: "#d4be17",
    glow: "#d4be17",
  },
  typescript: {
    bg: "#3178C6",
    color: "#FFFFFF",
    border: "#265fa0",
    glow: "#265fa0",
  },
  react: {
    bg: "#61DAFB",
    color: "#111111",
    border: "#4fc3e3",
    glow: "#4fc3e3",
  },
  next: {
    bg: "#111111",
    color: "#FFFFFF",
    border: "#2a2a2a",
    glow: "#2a2a2a",
  },

  // Frameworks & Tools
  fastapi: {
    bg: "#109989",
    color: "#FFFFFF",
    border: "#0e7f72",
    glow: "#0e7f72",
  },
  spring: {
    bg: "#6DB33F",
    color: "#FFFFFF",
    border: "#5a9533",
    glow: "#5a9533",
  },
  flask: {
    bg: "#222222",
    color: "#FFFFFF",
    border: "#333333",
    glow: "#333333",
  },
  django: {
    bg: "#092E20",
    color: "#FFFFFF",
    border: "#071f16",
    glow: "#071f16",
  },
  node: {
    bg: "#6DA55F",
    color: "#FFFFFF",
    border: "#5a8a4f",
    glow: "#5a8a4f",
  },

  // Databases
  sqlserver: {
    bg: "#CC2927",
    color: "#FFFFFF",
    border: "#a8201f",
    glow: "#a8201f",
  },
  mysql: {
    bg: "#4479A1",
    color: "#FFFFFF",
    border: "#386685",
    glow: "#386685",
  },
  mongodb: {
    bg: "#4EA94B",
    color: "#FFFFFF",
    border: "#3f8a3d",
    glow: "#3f8a3d",
  },
  postgresql: {
    bg: "#336791",
    color: "#FFFFFF",
    border: "#2a5578",
    glow: "#2a5578",
  },
  firebase: {
    bg: "#FFCA28",
    color: "#111111",
    border: "#e0b022",
    glow: "#e0b022",
  },
  elasticsearch: {
    bg: "#005571",
    color: "#FFFFFF",
    border: "#00465c",
    glow: "#00465c",
  },

  // Cloud & DevOps
  azure: {
    bg: "#0078D4",
    color: "#FFFFFF",
    border: "#0062ad",
    glow: "#0062ad",
  },
  docker: {
    bg: "#2496ED",
    color: "#FFFFFF",
    border: "#1d7ecb",
    glow: "#1d7ecb",
  },

  // Others
  iot: {
    bg: "#FF6F00",
    color: "#FFFFFF",
    border: "#d95f00",
    glow: "#d95f00",
  },
  default: {
    bg: "#2a2a2a",
    color: "#f5f5f5",
    border: "#3a3a3a",
    glow: "#3a3a3a",
  },
};
