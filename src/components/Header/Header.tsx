import { useEffect, useState } from "react";
import { Container, Nav, NavItem } from "./Header.styles";
import HomeIcon from "../../assets/icons/home.svg?react";
import AboutIcon from "../../assets/icons/about.svg?react";
import ProjectsIcon from "../../assets/icons/projects.svg?react";
import ExperienceIcon from "../../assets/icons/experience.svg?react";
import TechStackIcon from "../../assets/icons/tech-stack.svg?react";
import CertificationsIcon from "../../assets/icons/certifications.svg?react";
import ContactIcon from "../../assets/icons/contact.svg?react";
import BrazilIcon from "../../assets/icons/flag-brazil.svg?react";
import UsaIcon from "../../assets/icons/flag-us.svg?react";
import { scrollToSection } from "../../utils/scrollToSection";

import { useTranslation } from "react-i18next";



export function Header() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const { t, i18n } = useTranslation();

  const sections = [
    { label: t("header.home"), id: "home", icon: HomeIcon },
    { label: t("header.about"), id: "about", icon: AboutIcon },
    { label: t("header.projects"), id: "projects", icon: ProjectsIcon },
    { label: t("header.experience"), id: "experience", icon: ExperienceIcon },
    { label: t("header.techStack"), id: "tech-stack", icon: TechStackIcon },
    { label: t("header.certifications"), id: "certifications", icon: CertificationsIcon },
    { label: t("header.contact"), id: "contact", icon: ContactIcon },
  ];

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "pt" : "en");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      },
    );

    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Container>
      <Nav>
        {sections.map(({ label, id, icon: Icon }) => (
          <NavItem
            key={id}
            $active={activeSection === id}
            data-active={activeSection === id}
            onClick={() => scrollToSection(id)}
          >
            <Icon />
            <span>{label}</span>
          </NavItem>
        ))}
          <NavItem
            $active={false}
            data-active={false}
            onClick={toggleLanguage}
          >
          {i18n.language === "en" ?  <UsaIcon />: <BrazilIcon />}
          <span>
            {i18n.language === "en" ? "En-US" : "Pt-BR"}
          </span>
        </NavItem>
      </Nav>
    </Container>
  );
}
