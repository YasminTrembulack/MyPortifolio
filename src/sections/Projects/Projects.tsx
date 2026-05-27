import { useTranslation } from "react-i18next";

import * as S from "./Projects.styles";

import useIntersection from "../../hooks/useIntersection";
import { projects } from "../../content/projects";

import Section from "../../components/ui/Section/Section";
import Card from "../../components/ui/Card/Card";

import { badgeVariants, type BadgeVariant } from "./badge.types";

import GithubIcon from "../../assets/icons/github.svg?react";


const normalizeTech = (tech: string): BadgeVariant => {
  const key = tech.toLowerCase().replace(/\s|\./g, "");
  return key in badgeVariants ? (key as BadgeVariant) : "default";
};

export default function Projects() {
  const { ref, isVisible } = useIntersection();
  const { t } = useTranslation();

  return (
    <Section
      id="projects"
      title={t("projects.title")}
      description={t("projects.description")}
      variant="yellow"
      ref={ref}
      isVisible={isVisible}
    >
      <Section.Grid $gridTemplateColumns="repeat(auto-fit, minmax(280px, 1fr))">
        {projects.map((p, index) => (
          <Card key={index} $visible={isVisible} $delay={index * 300}>

            <Card.Header>
              <Card.Title showCursor>
                {p.title}
              </Card.Title>

              <S.ActionButtons>
                <S.IconButton aria-label="View on GitHub">
                  <GithubIcon />
                </S.IconButton>
              </S.ActionButtons>
            </Card.Header>

            <Card.Description>{p.description}</Card.Description>
            <S.TagWrapper>
              {p.techs.map((tech) => (
                <S.Badge key={tech} $variant={normalizeTech(tech)}>
                  {tech}
                </S.Badge>
              ))}
            </S.TagWrapper>
          </Card>
        ))}
      </Section.Grid>
    </Section>
  );
}
