import { scrollToSection } from "../../utils/scrollToSection";
import * as S from "./Hero.styles";
import useIntersection from "../../hooks/useIntersection";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { ref, isVisible } = useIntersection();
  const { t } = useTranslation();

  return (
    <S.Section id="hero" ref={ref}>
      <S.Content>
        <div>
          <S.Title $visible={isVisible}>
            {t("hero.title")}<strong>Yasmin Trembulack Agostinho</strong>.
          </S.Title>

          <S.Subtitle $visible={isVisible}>
            <span>“{t("hero.subtitle1")}”</span>
            <span>“{t("hero.subtitle2")}”</span>
          </S.Subtitle>

          <S.Actions $visible={isVisible}>
            <S.Button onClick={() => scrollToSection("contact")}>
              🡪 {t("hero.contact")}
            </S.Button>
            <S.Button href="/cv-yasmin.pdf" download>
              {t("hero.downloadCv")}
            </S.Button>
          </S.Actions>
        </div>
      </S.Content>
    </S.Section>
  );
}
