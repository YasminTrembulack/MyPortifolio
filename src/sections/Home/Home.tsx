import { scrollToSection } from "../../utils/scrollToSection";
import {
  Section,
  Content,
  Title,
  Subtitle,
  Actions,
  Button,
} from "./Home.styles";
import { useIntersection } from "../../hooks/useIntersection";
import { useTranslation } from "react-i18next";

export function Home() {
  const { ref, isVisible } = useIntersection();
  const { t } = useTranslation();

  return (
    <Section id="home" ref={ref}>
      <Content>
        <div>
          <Title $visible={isVisible}>
            {t("hero.title")}<strong>Yasmin Trembulack Agostinho</strong>.
          </Title>

          <Subtitle $visible={isVisible}>
            <span>“{t("hero.subtitle1")}”</span>
            <span>“{t("hero.subtitle2")}”</span>
          </Subtitle>

          <Actions $visible={isVisible}>
            <Button onClick={() => scrollToSection("contact")}>
              🡪 {t("hero.contact")}
            </Button>
            <Button href="/cv-yasmin.pdf" download>
              {t("hero.downloadCv")}
            </Button>
          </Actions>
        </div>
      </Content>
    </Section>
  );
}
