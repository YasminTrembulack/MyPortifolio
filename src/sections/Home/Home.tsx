import {
  Section,
  Content,
  Title,
  Subtitle,
  Actions,
  Button,
} from "./Home.styles";

export function Home() {
  return (
    <Section id="home">
      <Content>
        <div>
          <Title>
            Hello, I'm <strong>Yasmin Trembulack</strong>.
          </Title>

          <Subtitle>
            <span>“Transformando ideias em código.”</span>
          </Subtitle>

          <Actions>
            <Button href="#contact">Contato</Button>
            <Button secondary href="/cv-yasmin.pdf" download>
              Download CV
            </Button>
          </Actions>
        </div>
      </Content>
    </Section>
  );
}
