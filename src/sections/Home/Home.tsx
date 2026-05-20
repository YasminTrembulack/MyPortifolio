import { scrollToSection } from "../../utils/scrollToSection";
import {
  Section,
  Content,
  Title,
  Subtitle,
  Actions,
  Button,
} from "./Home.styles";
import { useIntersection } from "../../hooks/useIntersection";

export function Home() {
  const { ref, isVisible } = useIntersection();

  return (
    <Section id="home" ref={ref}>
      <Content>
        <div>
          <Title $visible={isVisible}>
            Hello, I'm <strong>Yasmin Trembulack Agostinho</strong>.
          </Title>

          <Subtitle $visible={isVisible}>
            <span>“Turning ideas into code.”</span>
            <span>“Learning, building, evolving.”</span>
          </Subtitle>

          <Actions $visible={isVisible}>
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
