import { scrollToSection } from "../../utils/scrollToSection";
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
            Hello, I'm <strong>Yasmin Trembulack Agostinho</strong>.
          </Title>

          <Subtitle>
            <span>“Turning ideas into code.”</span>
            <span>“Learning, building, evolving.”</span>
          </Subtitle>

          <Actions>
            <Button onClick={() => scrollToSection("contact")}>
              🡪 Contact
            </Button>
            <Button href="/cv-yasmin.pdf" download>
              Download CV
            </Button>
          </Actions>
        </div>
      </Content>
    </Section>
  );
}
