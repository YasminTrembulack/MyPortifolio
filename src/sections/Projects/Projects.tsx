import {
  Section,
  Container,
  Header,
  Title,
  Subtitle,
  Grid,
  ContentHeader,
  Icon,
  Divider,
} from "./Projects.styles";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { flower } from "../../assets/ascii-art";
import { useIntersection } from "../../hooks/useIntersection";
import { projects } from "../../data/projects";

export function Projects() {
  const { ref, isVisible } = useIntersection();

  return (
    <Section id="projects" ref={ref}>
      <Container>
        <Header $visible={isVisible}>
          <ContentHeader>
            <Icon>{flower}</Icon>
            <Title>Projects</Title>
          </ContentHeader>
          <Subtitle>Projects I’ve built to explore ideas, solve problems, and improve my skills.</Subtitle>
        </Header>
        <Divider />
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
      </Container>
    </Section>
  );
}
