import { scrollToSection } from "../../../utils/scrollToSection";
import * as S from "./Footer.styles";

import { useTranslation } from "react-i18next";
import Socials from "../../shared/Socials/Socials";
import Divider from "../../ui/Divider/Divider";
import useIntersection from "../../../hooks/useIntersection";
import { useRef } from "react";
import { UndertaleFooterMessage } from "../../../sections/UndertaleFooterMessage/UndertaleFooterMessage";

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref, isVisible } = useIntersection();
  const { t } = useTranslation();  

  return (
    <S.FooterContainer  ref={containerRef}>
      <S.FooterTop ref={ref} $visible={isVisible}>
        <S.Brand>
          <h3>Yasmin</h3>
          <p>{t("footer.description")}</p>
        </S.Brand>

        <S.Links>
          <h4>{t("footer.quickLinks")}</h4>
          <a onClick={() => scrollToSection("hero")}>{t('footer.links.hero')}</a>
          <a onClick={() => scrollToSection("about")}>{t('footer.links.about')}</a>
          <a onClick={() => scrollToSection("projects")}>{t('footer.links.projects')}</a>
          <a onClick={() => scrollToSection("contact")}>{t('footer.links.contact')}</a>
        </S.Links>

        <S.Social>
          <h4>{t("footer.followMe")}</h4>
          <Socials
            contacts={["email", "linkedin", "github"]}
            $flexDirection="row"
            $visible={isVisible}
            $variant="grey"
            $fade="left"
          />
        </S.Social>
      </S.FooterTop>

      <Divider ref={ref} isVisible={isVisible} variant="grey"/>

      <S.FooterBottom ref={ref} $visible={isVisible}>
        <UndertaleFooterMessage />
        © {new Date().getFullYear()} Yasmin. {t("footer.copyright")}
      </S.FooterBottom>
    </S.FooterContainer>
  );
}
