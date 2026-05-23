import { Grid } from "./Projects.styles";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { useIntersection } from "../../hooks/useIntersection";
import { projects } from "../../data/projects";
import { BaseSection } from "../../components/BaseSection/BaseSection";

export function Projects() {
  const { ref, isVisible } = useIntersection();

  return (
    <BaseSection
      id="projects"
      title="Projects"
      description="Projects I’ve built to explore ideas, solve problems, and improve my skills."
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
