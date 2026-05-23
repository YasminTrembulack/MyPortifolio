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

export function About() {
  const { ref, isVisible } = useIntersection();
  const theme = useTheme();

  return (
    <Section id="about" ref={ref}>
      <Container>
        <PhotoWrapper>
          <AsciiArt
            $color={`${theme.colors.yellowAccent}`}
            $left="0.4rem"
            $top="-1.5rem"
            $font_size="6.5px"
            $line_height="0.4"
            $children={gothic_window}
          />
          <Photo src="/me.png" alt="Yasmin Trembulack" />
        </PhotoWrapper>

        <Content>
          <SectionHeader 
            title="About Me"
            variant="blue"
            ref={ref}
            isVisible={isVisible} 
            $headerAlign="start"
            $marginBottom={0}
          />

          <Tags $visible={isVisible}>
            <Tag>Software Engineer</Tag>
            <Tag>Full Stack Developer</Tag>
            <Tag>Data Engineer</Tag>
          </Tags>

          <Text $visible={isVisible}>
            I am a Software Engineering student, driven by curiosity and the
            desire to create efficient solutions. I am interested in developing
            well-structured applications, with a focus on functionality,
            clarity, and best development practices.
          </Text>

          <Text $visible={isVisible}>
            I believe in continuous learning and value teamwork, understanding
            collaboration as an essential part of building better solutions. I
            am constantly improving my skills to grow as a developer and deliver
            increasingly consistent results.
          </Text>

          <Divider isVisible={isVisible} variant="blue" ref={ref}/>
          <Socials />
        </Content>
      </Container>
    </Section>
  );
}
