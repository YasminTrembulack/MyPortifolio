import { useEffect, useRef, useState } from "react";
import {
  Section,
  Container,
  PhotoWrapper,
  Photo,
  Content,
  Title,
  Text,
  Tags,
  Divider,
  Tag,
  ContentHeader,
  Icon,
} from "./About.styles";

import { AsciiArt } from "../../components/Decorative/AsciiArt";
import { flower, gothic_window } from "../../assets/ascii-art";
import { Socials } from "../../components/Socials/Socials";
import { useTheme } from "styled-components";

export function About() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const theme = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Section id="about" ref={sectionRef}>
      <Container>
        <PhotoWrapper>
          <AsciiArt
            $color={`${theme.colors.yellowAccent}`}
            $left="0.5rem"
            $top="-1.5rem"
            $font_size="6.5px"
            $line_height="0.4"
            $children={gothic_window}
          />
          <Photo src="/me.png" alt="Yasmin Trembulack" />
        </PhotoWrapper>

        <Content>
          <ContentHeader $visible={visible}>
            <Icon>{flower}</Icon>
            <Title>About Me</Title>
          </ContentHeader>

          <Tags $visible={visible}>
            <Tag>Software Engineer</Tag>
            <Tag>Full Stack Developer</Tag>
            <Tag>Data Engineer</Tag>
          </Tags>

          <Text $visible={visible}>
            I am a Software Engineering student, driven by curiosity and the
            desire to create efficient solutions. I am interested in developing
            well-structured applications, with a focus on functionality,
            clarity, and best development practices.
          </Text>

          <Text $visible={visible}>
            I believe in continuous learning and value teamwork, understanding
            collaboration as an essential part of building better solutions. I
            am constantly improving my skills to grow as a developer and deliver
            increasingly consistent results.
          </Text>

          <Divider />
          <Socials />
        </Content>
      </Container>
    </Section>
  );
}
