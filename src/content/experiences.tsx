import { bosch } from "../assets/ascii-art";

type Experience = {
  icon: string;
  year: string;
  location: string;
  title: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    icon: bosch,
    year: "[2023 - 2025]",
    location: "Robert Bosch, Curitiba/PR - Brazil.",
    title: "ETS - Desenvolvimento de Sistemas",
    description:
      "Início na Bosch como aprendiz técnica com foco em lógica, backend e fundamentos de arquitetura.",
  },
  {
    icon: bosch,
    year: "[2025 - 2026]",
    location: "Robert Bosch, Curitiba/PR - Brazil.",
    title: "BDO - Xpertify Team",
    description:
      "Atuação com Azure, APIs REST, testes automatizados e arquitetura de sistemas escaláveis.",
  },
  {
    icon: bosch,
    year: "[2026 - actual]",
    location: "Robert Bosch, Curitiba/PR - Brazil.",
    title: "BDO - KMS Team",
    description:
      "Atuação com Azure, APIs REST, testes automatizados e arquitetura de sistemas escaláveis.",
  },
];