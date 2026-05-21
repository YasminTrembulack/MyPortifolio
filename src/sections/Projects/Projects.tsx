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
          <ProjectCard
            title="Personal Portfolio"
            description="Personal portfolio website built with modern frontend technologies, focusing on performance and responsive design."
            techs={["React", "TypeScript", "HTML", "JavaScript"]}
            link="#"
          />
          <ProjectCard
            title="Analytics Dashboard"
            description="Web dashboard for data visualization with backend API integration and database persistence."
            techs={["React", "JavaScript", "Node", "MySQL"]}
            link="#"
          />

          <ProjectCard
            title="E-commerce Platform"
            description="Full-featured e-commerce application with authentication, product management and database integration."
            techs={["Next", "TypeScript", "Node", "MongoDB"]}
            link="#"
          />

          <ProjectCard
            title="REST API Service"
            description="RESTful API built with Python for managing resources and handling database operations."
            techs={["Python", "FastAPI", "MySQL"]}
            link="#"
          />

          <ProjectCard
            title="IoT Monitoring System"
            description="IoT system for monitoring sensors and devices with real-time data processing."
            techs={["SQL Server", "CSharp", "IoT"]}
            link="#"
          />
        </Grid>
      </Container>
    </Section>
  );
}
