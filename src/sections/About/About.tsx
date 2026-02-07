import {
  Section,
  Container,
  PhotoWrapper,
  Photo,
  Content,
  Title,
  Text,
  TypingWrapper,
  Actions,
  Button,
  Socials,
  Divider,
} from "./About.styles";

import GithubIcon from "../../assets/icons/github.svg?react";
import LinkedinIcon from "../../assets/icons/linkedin.svg?react";
import { AsciiArt } from "../../components/Decorative/AsciiArt";
import { border } from "../../assets/ascii-art";

export function About() {
  return (
    <Section id="about">
      <Container>
        <PhotoWrapper>
          <AsciiArt
            color="#f5c77a"
            left="-9rem"
            top="-6.5rem"
            font_size="9.7px"
            line_height="0.38"
          >
            {border}
          </AsciiArt>
          <Photo src="/me.png" alt="Yasmin Trembulack" />
        </PhotoWrapper>

        <Content>
          <Title>Olá, sou a Yasmin Trembulack Agostinho!</Title>

          <TypingWrapper>
            <img
              src="https://readme-typing-svg.herokuapp.com?font=Consolas&size=30&pause=1000&color=F7F7F7&vCenter=true&width=435&lines=Software+Engineer;Full+Stack+Developer"
              alt="Typing roles"
            />
          </TypingWrapper>

          <Text>
            Sou estudante de Engenharia de Software, apaixonada por criar
            interfaces modernas, funcionais e bem estruturadas, sempre buscando
            aprender novas tecnologias e evoluir como desenvolvedora.
          </Text>

          <Actions>
            <Button primary href="#contact">
              Contato
            </Button>
            <Button href="/cv.pdf" download>
              Download CV
            </Button>
          </Actions>
          <Divider />
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
    </Section>
  );
}
