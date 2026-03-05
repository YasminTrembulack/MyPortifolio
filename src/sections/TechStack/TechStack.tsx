import { Card, Container, ContentHeader, Grid, Header, HeaderIcon, Icon, Name, Section, Subtitle, Tab, Tabs, Title } from "./TechStack.styles";
import { flower } from "../../assets/ascii-art";
import { useState } from "react";


export type Tech = {
  name: string;
  icon: string;
  category: string;
};

export const techs: Tech[] = [
  { name: "React", icon: "⚛️", category: "frontend" },
  { name: "AXR", icon: "🧩", category: "frontend" },
  { name: "HTML5", icon: "🟧", category: "frontend" },
  { name: "CSS3", icon: "🟦", category: "frontend" },
  { name: "JavaScript", icon: "🟨", category: "frontend" },
  { name: "Tailwind", icon: "💨", category: "frontend" },

  { name: "Bootstrap", icon: "🟪", category: "backend" },
  { name: "PHP", icon: "🐘", category: "backend" },
  { name: "Laravel", icon: "🔴", category: "backend" },
  { name: "Python", icon: "🐍", category: "backend" },
  { name: "REST API", icon: "🟢", category: "backend" },
  { name: "Flutter", icon: "📱", category: "mobile" },
];

export const categories = [
  "All",
  "Frontend",
  "Backend",
  "Mobile",
  "Database",
  "Devops",
  "Design & Tools",
  // "AI-Assignments",
];

export function TechStack() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? techs
      : techs.filter((t) => t.category === active);

  return (
    <Section id="tech-stack">
      <Container>
        <Header>
          <ContentHeader>
            <HeaderIcon>{flower}</HeaderIcon>
            <Title>Tech Stack</Title>
          </ContentHeader>
          <Subtitle>Technologies that help me bring ideas to life and turn imagination into code.</Subtitle>
        </Header>
        <Tabs>
          {categories.map((cat) => (
            <Tab
              key={cat}
              active={active === cat}
              onClick={() => setActive(cat)}
            >
              {cat}
            </Tab>
          ))}
        </Tabs>

        <Grid>
          {filtered.map((tech) => (
            <Card key={tech.name}>
              <Icon>{tech.icon}</Icon>
              <Name>{tech.name}</Name>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
