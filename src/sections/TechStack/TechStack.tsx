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
import { useState } from "react";
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

  const filtered =
    active === "all" ? techs : techs.filter((t) => t.category === active);

  return (
    <Section id="tech-stack">
      <Container>
        <Header>
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

        <Grid>
          {filtered.map((tech) => (
            <Card key={tech.name}>
              <Icon $gradient={tech.gradient}>{tech.icon}</Icon>
              <Name>{tech.name}</Name>
            </Card>
          ))}
        </Grid>

      </Container>
    </Section >
  );
}
