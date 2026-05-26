import { useState } from "react";
import {
  Card,
  Grid,
  Icon,
  Name,
  Tab,
  Tabs,
} from "./Skills.styles";
import { techs } from "../../content/techs";
import useIntersection from "../../hooks/useIntersection";
import Section from "../../components/ui/Section/Section";
import { useTranslation } from "react-i18next";

export const categories = [
  "all",
  "languages",
  "frontend",
  "backend",
  "cloud",
  "database",
  "ai",
  "engineering",
  "iot",
];

export default function Skills() {
  const [active, setActive] = useState("all");
  const { ref, isVisible } = useIntersection();
  const { t } = useTranslation();

  const filtered =
    active === "all" ? techs : techs.filter((t) => t.category === active);

  return (
    <Section
      id="tech-stack"
      title={t("techStack.title")}
      description={t("techStack.description")}
      variant="yellow"
      ref={ref}
      isVisible={isVisible}
      $headerAlign="center"
      $paddingBottom={4}
      $paddingTop={5}
    >
      <div>
      <Tabs>
            {categories.map((cat) => (
              <Tab
                key={cat}
                $active={active === cat.toLowerCase()}
                onClick={() => setActive(cat.toLowerCase())}
              >
                {t(`techStack.categories.${cat}`)}
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
      </div>
    </Section>
  );
}
