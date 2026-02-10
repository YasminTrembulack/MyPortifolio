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
import { colors } from "../../styles/theme";
import { Socials } from "../../components/Socials/Socials";

export function About() {
  return (
    <Section id="about">
      <Container>
        <PhotoWrapper>
          <AsciiArt
            $color={`${colors.yellowAccent}`}
            $left="0.5rem"
            $top="-1.5rem"
            $font_size="6.5px"
            $line_height="0.4"
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
          <Socials />
        </Content>
      </Container>
    </Section>
  );
}
