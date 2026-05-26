import { useEffect, useState } from "react";
import * as S from "./Header.styles";
import HeroIcon from "../../../assets/icons/hero.svg?react";
import AboutIcon from "../../../assets/icons/about.svg?react";
import ProjectsIcon from "../../../assets/icons/projects.svg?react";
import ExperienceIcon from "../../../assets/icons/experience.svg?react";
import TechStackIcon from "../../../assets/icons/tech-stack.svg?react";
import CertificationsIcon from "../../../assets/icons/certifications.svg?react";
import ContactIcon from "../../../assets/icons/contact.svg?react";
import BrazilIcon from "../../../assets/icons/flag-brazil.svg?react";
import UsaIcon from "../../../assets/icons/flag-us.svg?react";
import { scrollToSection } from "../../../utils/scrollToSection";

import { useTranslation } from "react-i18next";



export default function Header() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const { t, i18n } = useTranslation();

  const sections = [
    { label: t("header.hero"), id: "hero", icon: HeroIcon },
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
    <S.Container>
      <S.Nav>
        {sections.map(({ label, id, icon: Icon }) => (
          <S.NavItem
            key={id}
            $active={activeSection === id}
            data-active={activeSection === id}
            onClick={() => scrollToSection(id)}
          >
            <Icon />
            <span>{label}</span>
          </S.NavItem>
        ))}
          <S.NavItem
            $active={false}
            data-active={false}
            onClick={toggleLanguage}
          >
          {i18n.language === "en" ?  <UsaIcon />: <BrazilIcon />}
          <span>
            {i18n.language === "en" ? "En-US" : "Pt-BR"}
          </span>
        </S.NavItem>
      </S.Nav>
    </S.Container>
  );
}
