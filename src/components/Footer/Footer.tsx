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
import { useTheme } from "styled-components";
import { useTranslation } from "react-i18next";

export function Footer() {
  const theme = useTheme();
  const { t } = useTranslation();  

  return (
    <FooterContainer>
      <FooterTop>
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
            $color={`${theme.colors.greyLight}`}
            $hover={`${theme.colors.softBlack}`}
          />
        </Social>
      </FooterTop>

      <Divider />

      <FooterBottom>
        © {new Date().getFullYear()} Yasmin. {t("footer.copyright")}
      </FooterBottom>
    </FooterContainer>
  );
}
