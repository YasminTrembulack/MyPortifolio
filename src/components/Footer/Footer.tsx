import { scrollToSection } from "../../utils/scrollToSection";
import {
  Brand,
  Divider,
  FooterBottom,
  FooterContainer,
  FooterTop,
  Links,
  Social,
} from "./Footer.styles";

import { Socials } from "../Socials/Socials";
import { colors } from "../../styles/theme";

export function Footer() {
  return (
    <FooterContainer>
      <FooterTop>
        <Brand>
          <h3>Yasmin</h3>
          <p>
            Full Stack Developer dedicated to building modern, accessible, and
            refined experiences.
          </p>
        </Brand>

        <Links>
          <h4>Quick links</h4>
          <a onClick={() => scrollToSection("home")}>Home</a>
          <a onClick={() => scrollToSection("about")}>About</a>
          <a onClick={() => scrollToSection("projects")}>Projects</a>
          <a onClick={() => scrollToSection("contact")}>Contact</a>
        </Links>

        <Social>
          <h4>Follow me</h4>
          <Socials
            $color={`${colors.greyLight}`}
            $hover={`${colors.softBlack}`}
          />
        </Social>
      </FooterTop>

      <Divider />

      <FooterBottom>
        © {new Date().getFullYear()} Yasmin. All rights reserved.
      </FooterBottom>
    </FooterContainer>
  );
}
