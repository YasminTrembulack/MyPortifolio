import { useEffect, useRef, useState } from "react";
import {
  Section,
  Container,
  Header,
  Title,
  Subtitle,
  Grid,
  ContentHeader,
  Icon,
} from "./Projects.styles";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { flower } from "../../assets/ascii-art";

export function Projects() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    <Section id="projects" ref={sectionRef}>
      <Container>
        <Header $visible={visible}>
          <ContentHeader>
            <Icon>{flower}</Icon>
            <Title>Projects</Title>
          </ContentHeader>
          <Subtitle>Some of the projects I’ve worked on</Subtitle>
        </Header>

        <Grid $visible={visible}>
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
