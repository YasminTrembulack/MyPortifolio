import {
  Section,
  Container,
  PhotoWrapper,
  Photo,
  Content,
  Title,
  Text,
  Tags,
  Socials,
  Divider,
  Tag,
  ContentHeader,
  Icon,
} from "./About.styles";

import GithubIcon from "../../assets/icons/github.svg?react";
import LinkedinIcon from "../../assets/icons/linkedin.svg?react";
import { AsciiArt } from "../../components/Decorative/AsciiArt";
import { flower, gothic_window } from "../../assets/ascii-art";
import { colors } from "../../styles/theme";

export function About() {
  return (
    <Section id="about">
      <Container>
        <PhotoWrapper>
          <AsciiArt
            $color={`${colors.yellowAccent}`}
            $left="-9rem"
            $top="-6.5rem"
            $font_size="9.7px"
            $line_height="0.38"
            $children={gothic_window}
          />
          <Photo src="/me.png" alt="Yasmin Trembulack" />
        </PhotoWrapper>

        <Content>
          <ContentHeader>
            <Icon>{flower}</Icon>
            <Title>About Me</Title>
          </ContentHeader>

          <Tags>
            <Tag>Software Engineer</Tag>
            <Tag>Full Stack Developer</Tag>
            <Tag>Data Engineer</Tag>
          </Tags>

          <Text>
            I am a Software Engineering student, driven by curiosity and the
            desire to create efficient solutions. I am interested in developing
            well-structured applications, with a focus on functionality,
            clarity, and best development practices.
          </Text>

          <Text>
            I believe in continuous learning and value teamwork, understanding
            collaboration as an essential part of building better solutions. I
            am constantly improving my skills to grow as a developer and deliver
            increasingly consistent results.
          </Text>

          <Divider />

          <Socials>
            <a href="https://github.com/YasminTrembulack" target="_blank">
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/yasmintrembulack/"
              target="_blank"
            >
              <LinkedinIcon />
            </a>
          </Socials>
        </Content>
      </Container>
    </Section>
  );
}
