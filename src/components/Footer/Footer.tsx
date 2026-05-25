import { scrollToSection } from "../../utils/scrollToSection";
import {
  Brand,
  FooterBottom,
  FooterContainer,
  FooterTop,
  Links,
  Social,
} from "./Footer.styles";

import { useTranslation } from "react-i18next";
import Socials from "../Socials/Socials";
import Divider from "../Divider/Divider";
import useIntersection from "../../hooks/useIntersection";

export function Footer() {
  const { ref, isVisible } = useIntersection();
  const { t } = useTranslation();  

  return (
    <FooterContainer>
      <FooterTop ref={ref} $visible={isVisible}>
        <Brand>
          <h3>Yasmin</h3>
          <p>{t("footer.description")}</p>
        </Brand>

        <Links>
          <h4>{t("footer.quickLinks")}</h4>
          <a onClick={() => scrollToSection("home")}>{t('footer.links.home')}</a>
          <a onClick={() => scrollToSection("about")}>{t('footer.links.about')}</a>
          <a onClick={() => scrollToSection("projects")}>{t('footer.links.projects')}</a>
          <a onClick={() => scrollToSection("contact")}>{t('footer.links.contact')}</a>
        </Links>

        <Social>
          <h4>{t("footer.followMe")}</h4>
          <Socials
            contacts={["email", "linkedin", "github"]}
            $flexDirection="row"
            $visible={isVisible}
            $variant="grey"
            $fade="left"
          />
        </Social>
      </FooterTop>

      <Divider ref={ref} isVisible={isVisible} variant="grey"/>

      <FooterBottom ref={ref} $visible={isVisible}>
        © {new Date().getFullYear()} Yasmin. {t("footer.copyright")}
      </FooterBottom>
    </FooterContainer>
  );
}
