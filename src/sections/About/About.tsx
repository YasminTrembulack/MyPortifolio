import {
  Section,
  Container,
  PhotoWrapper,
  Photo,
  Content,
  Text,
  Tags,
  Tag
} from "./About.styles";

import { AsciiArt } from "../../components/Decorative/AsciiArt";
import { gothic_window } from "../../assets/ascii-art";
import { Socials } from "../../components/Socials/Socials";
import { useTheme } from "styled-components";
import { useIntersection } from "../../hooks/useIntersection";
import { SectionHeader } from "../../components/SectionHeader/SectionHeader";
import { Divider } from "../../components/Divider/Divider";
import { useTranslation } from "react-i18next";

export function About() {
  const { ref, isVisible } = useIntersection();
  const { t } = useTranslation();
  
  const theme = useTheme();

  return (
    <Section id="about" ref={ref}>
      <Container>
        <PhotoWrapper>
          <AsciiArt
            $color={`${theme.colors.yellowAccent}`}
            $left="1rem"
            $top="-3.1rem"
            $font_size="6.5px"
            $line_height="0.4"
            $children={gothic_window}
          />
          <Photo src="/me.png" alt="Yasmin Trembulack" />
        </PhotoWrapper>

        <Content>
          <SectionHeader 
            title={t("about.title")}
            variant="blue"
            ref={ref}
            isVisible={isVisible} 
            $headerAlign="start"
            $marginBottom={0}
          />

          <Tags $visible={isVisible}>
            <Tag>{t("about.tags.softwareEngineer")}</Tag>
            <Tag>{t("about.tags.fullStack")}</Tag>
            <Tag>{t("about.tags.dataEngineer")}</Tag>
          </Tags>

          <Text $visible={isVisible}>
            {t("about.text1")}
          </Text>

          <Text $visible={isVisible}>
            {t("about.text2")}
          </Text>

          <Divider isVisible={isVisible} variant="blue" ref={ref}/>
          <Socials />
        </Content>
      </Container>
    </Section>
  );
}
