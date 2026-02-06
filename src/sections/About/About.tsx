import {
  Section,
  Container,
  PhotoWrapper,
  Photo,
  Content,
  Title,
  Text,
  Subtitle,
  Actions,
  Button,
  Socials,
  AsciiFlower,
} from "./About.styles";

import GithubIcon from "../../assets/icons/github.svg?react";
import LinkedinIcon from "../../assets/icons/linkedin.svg?react";
import { sunflower } from "../../assets/ascii-art";

export function About() {
  return (
    <Section id="about">
      <Container>
        <PhotoWrapper>
          <Photo src="/me.png" alt="Yasmin Trembulack" />
        </PhotoWrapper>

        <Content>
          <Title>Olá, sou a Yasmin Trembulack</Title>

          <Subtitle>
            <span>Software Engineer</span>
            <span>Full Stack Development</span>
          </Subtitle>

          <Text>
            Sou estudante de Engenharia de Software, apaixonada por criar
            interfaces modernas, funcionais e bem estruturadas, sempre buscando
            aprender novas tecnologias e evoluir como desenvolvedora.
          </Text>

          <Actions>
            <Button primary href="/cv.pdf" download>
              Download CV
            </Button>
            <Button href="#contact">Contato</Button>
          </Actions>

          <Socials>
            <a href="https://github.com/seuuser" target="_blank">
              <GithubIcon />
            </a>
            <a href="https://linkedin.com/in/seuuser" target="_blank">
              <LinkedinIcon />
            </a>
          </Socials>
        </Content>
      </Container>
      <AsciiFlower>{sunflower}</AsciiFlower>
    </Section>
  );
}
