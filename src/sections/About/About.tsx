import * as S from  "./About.styles";

import AsciiArt from "../../components/Decorative/AsciiArt";
import { gothic_window } from "../../assets/ascii-art";
import { useTheme } from "styled-components";
import useIntersection from "../../hooks/useIntersection";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Divider from "../../components/Divider/Divider";
import { useTranslation } from "react-i18next";
import Socials from "../../components/Socials/Socials";

export function About() {
  const { ref, isVisible } = useIntersection();
  const { t } = useTranslation();
  
  const theme = useTheme();

  return (
    <S.Section id="about" ref={ref}>
      <S.Container>
        <S.PhotoWrapper>
          <AsciiArt
            $color={`${theme.colors.yellowAccent}`}
            $left="1.3rem"
            $top="-3.1rem"
            $font_size="6.5px"
            $line_height="0.4"
            $children={gothic_window}
          />
          <S.Photo src="/me.png" alt="Yasmin Trembulack" />
        </S.PhotoWrapper>

        <S.Content>
          <SectionHeader 
            title={t("about.title")}
            variant="blue"
            ref={ref}
            isVisible={isVisible} 
            $headerAlign="start"
            $marginBottom={0}
          />

          <S.Tags $visible={isVisible}>
            <S.Tag>{t("about.tags.softwareEngineer")}</S.Tag>
            <S.Tag>{t("about.tags.fullStack")}</S.Tag>
            <S.Tag>{t("about.tags.dataEngineer")}</S.Tag>
          </S.Tags>

          <S.Text $visible={isVisible}>
            {t("about.text1")}
          </S.Text>

          <S.Text $visible={isVisible}>
            {t("about.text2")}
          </S.Text>

          <Divider isVisible={isVisible} variant="blue" ref={ref}/>
          <Socials
              contacts={["email", "linkedin", "github"]}
              $flexDirection="row"
              $visible={isVisible}
              $fade="left"
            />
        </S.Content>
      </S.Container>
    </S.Section>
  );
}
