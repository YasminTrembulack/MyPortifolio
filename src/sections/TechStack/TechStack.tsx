import { useEffect, useRef, useState } from "react";
import {
  Card,
  Container,
  ContentHeader,
  Grid,
  Header,
  HeaderIcon,
  Icon,
  Name,
  Section,
  Subtitle,
  Tab,
  Tabs,
  Title,
} from "./TechStack.styles";
import { flower } from "../../assets/ascii-art";
import { techs } from "./techs";

export const categories = [
  "All",
  "Languages",
  "Frontend",
  "Backend",
  "Cloud",
  "Database",
  "AI",
  "Engineering",
  "IoT",
];

export function TechStack() {
  const [active, setActive] = useState("all");
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const filtered =
    active === "all" ? techs : techs.filter((t) => t.category === active);

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
    <Section id="tech-stack" ref={sectionRef}>
      <Container>
        <Header $visible={visible}>
          <ContentHeader>
            <HeaderIcon>{flower}</HeaderIcon>
            <Title>Tech Stack</Title>
          </ContentHeader>
          <Subtitle>
            Technologies that help me bring ideas to life and turn imagination
            into code.
          </Subtitle>
        </Header>
        <Tabs>
          {categories.map((cat) => (
            <Tab
              key={cat}
              $active={active === cat.toLowerCase()}
              onClick={() => setActive(cat.toLowerCase())}
            >
              {cat}
            </Tab>
          ))}
        </Tabs>

        <Grid $visible={visible} key={active}>
          {filtered.map((tech, index) => (
            <Card key={tech.name} $index={index}>
              <Icon $gradient={tech.gradient}>{tech.icon}</Icon>
              <Name>{tech.name}</Name>
            </Card>
          ))}
        </Grid>

      </Container>
    </Section >
  );
}
