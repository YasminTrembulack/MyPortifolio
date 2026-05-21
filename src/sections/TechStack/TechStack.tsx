import { useState } from "react";
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
import { useIntersection } from "../../hooks/useIntersection";

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
  const { ref, isVisible } = useIntersection();

  const filtered =
    active === "all" ? techs : techs.filter((t) => t.category === active);

  return (
    <Section id="tech-stack" ref={ref}>
      <Container>
        <Header $visible={isVisible}>
          <ContentHeader>
            <HeaderIcon>{flower}</HeaderIcon>
            <Title>Tech Stack</Title>
          </ContentHeader>
          <Subtitle>
            Technologies that help me bring ideas to life and turn imagination into code.
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

        <Grid $visible={isVisible} key={active}>
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
