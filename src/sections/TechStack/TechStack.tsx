import { useState } from "react";
import {
  Card,
  Grid,
  Icon,
  Name,
  Tab,
  Tabs,
} from "./TechStack.styles";
import { techs } from "../../data/techs";
import { useIntersection } from "../../hooks/useIntersection";
import { BaseSection } from "../../components/BaseSection/BaseSection";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const filtered =
    active === "all" ? techs : techs.filter((t) => t.category === active);

  return (
    <BaseSection
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
      </div>
    </BaseSection>
  );
}
