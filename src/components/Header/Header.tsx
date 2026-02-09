import { useEffect, useState } from "react";
import { Container, Nav, NavItem } from "./Header.styles";
import HomeIcon from "../../assets/icons/home.svg?react";
import AboutIcon from "../../assets/icons/about.svg?react";
import ProjectsIcon from "../../assets/icons/projects.svg?react";
import ExperienceIcon from "../../assets/icons/experience.svg?react";
import TechStackIcon from "../../assets/icons/tech-stack.svg?react";
import CertificationsIcon from "../../assets/icons/certifications.svg?react";
import ContactIcon from "../../assets/icons/contact.svg?react";
import { scrollToSection } from "../../utils/scrollToSection";

const sections = [
  { label: "Home", id: "home", icon: HomeIcon },
  { label: "About", id: "about", icon: AboutIcon },
  { label: "Projects", id: "projects", icon: ProjectsIcon },
  { label: "Experience", id: "experience", icon: ExperienceIcon },
  { label: "Tech Stack", id: "tech-stack", icon: TechStackIcon },
  { label: "Certifications", id: "certifications", icon: CertificationsIcon },
  { label: "Contact", id: "contact", icon: ContactIcon },
];

export function Header() {
  const [activeSection, setActiveSection] = useState<string>("home");

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
      </Nav>
    </Container>
  );
}
