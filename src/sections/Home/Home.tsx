import { useEffect, useRef, useState } from "react";
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
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    <Section id="home" ref={sectionRef}>
      <Content>
        <div>
          <Title $visible={visible}>
            Hello, I'm <strong>Yasmin Trembulack Agostinho</strong>.
          </Title>

          <Subtitle $visible={visible}>
            <span>“Turning ideas into code.”</span>
            <span>“Learning, building, evolving.”</span>
          </Subtitle>

          <Actions $visible={visible}>
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
