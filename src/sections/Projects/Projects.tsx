import { Grid } from "./Projects.styles";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { useIntersection } from "../../hooks/useIntersection";
import { projects } from "../../data/projects";
import { BaseSection } from "../../components/BaseSection/BaseSection";
import { useTranslation } from "react-i18next";

export function Projects() {
  const { ref, isVisible } = useIntersection();
  const { t } = useTranslation();

  return (
    <BaseSection
      id="projects"
      title={t("projects.title")}
      description={t("projects.description")}
      variant="yellow"
      ref={ref}
      isVisible={isVisible}
      $headerAlign="start"
      $paddingBottom={0}
      $paddingTop={4}
    >
      <Grid $visible={isVisible}>
        {projects.map((p, index) => (
          <ProjectCard
            key={index}
            title={p.title}
            description={p.description}
            techs={p.techs}
            link={p.link}
          />
        ))}
      </Grid>
    </BaseSection>
  );
}
