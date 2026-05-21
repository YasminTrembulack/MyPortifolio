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
} from "./Certifications.styles";
import { CertificationCard } from "../../components/CertificationCard/CertificationCard";
import { flower } from "../../assets/ascii-art";

export function Certifications() {
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
    <Section id="certifications" ref={sectionRef}>
      <Container>
        <Header $visible={visible}>
          <ContentHeader>
            <Icon>{flower}</Icon>
            <Title>Certifications</Title>
          </ContentHeader>
          <Subtitle>Some of the certifications I’ve obtained throughout my journey.</Subtitle>
        </Header>

        <Grid $visible={visible}>
          <CertificationCard
            title="Técnico Desenvolvimento de Sistemas"
            institution="Robert Bosch Limitada"
            link="#"
          />
          <CertificationCard
            title="Analytics Dashboard"
            institution="Robert Bosch Limitada"
            link="#"
          />
          <CertificationCard
            title="Analytics Dashboard"
            institution="Robert Bosch Limitada"
            link="#"
          />

        </Grid>
      </Container>
    </Section>
  );
}
