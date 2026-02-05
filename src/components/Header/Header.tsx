import { Container, Nav, NavItem } from "./Header.styles";
import HomeIcon from "../../assets/icons/home.svg?react";
import AboutIcon from "../../assets/icons/about.svg?react";
import ProjectsIcon from "../../assets/icons/projects.svg?react";
import ExperienceIcon from "../../assets/icons/experience.svg?react";
import TechStackIcon from "../../assets/icons/tech-stack.svg?react";
import CertificationsIcon from "../../assets/icons/certifications.svg?react";
import ContactIcon from "../../assets/icons/contact.svg?react";

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
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container>
      <Nav>
        {sections.map(({ label, id, icon: Icon }) => (
          <NavItem key={id} onClick={() => scrollToSection(id)}>
            <Icon />
            {label}
          </NavItem>
        ))}
      </Nav>
    </Container>
  );
}
