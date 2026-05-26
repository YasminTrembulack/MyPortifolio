export type Project = {
  title: string;
  description: string;
  techs: string[];
  link: string;
};

export const projects: Project[] = [
  {
    title: "Personal Portfolio",
    description:
      "Personal portfolio website built with modern frontend technologies, focusing on performance and responsive design.",
    techs: ["React", "TypeScript", "HTML", "JavaScript"],
    link: "#",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Web dashboard for data visualization with backend API integration and database persistence.",
    techs: ["React", "JavaScript", "Node", "MySQL"],
    link: "#",
  },
  {
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce application with authentication, product management and database integration.",
    techs: ["Next", "TypeScript", "Node", "MongoDB"],
    link: "#",
  },
  {
    title: "REST API Service",
    description:
      "RESTful API built with Python for managing resources and handling database operations.",
    techs: ["Python", "FastAPI", "MySQL"],
    link: "#",
  },
  {
    title: "IoT Monitoring System",
    description:
      "IoT system for monitoring sensors and devices with real-time data processing.",
    techs: ["SQL Server", "CSharp", "IoT"],
    link: "#",
  },
];