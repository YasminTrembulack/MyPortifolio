import { useTranslation } from "react-i18next";

import * as S from "./Projects.styles";

import useIntersection from "../../hooks/useIntersection";
import { projects } from "../../data/projects";

import BaseSection from "../../components/BaseSection/BaseSection";
import BaseCard from "../../components/BaseCard/BaseCard";

import { badgeVariants, type BadgeVariant } from "./badge.types";

import GithubIcon from "../../assets/icons/github.svg?react";


const normalizeTech = (tech: string): BadgeVariant => {
  const key = tech.toLowerCase().replace(/\s|\./g, "");
  return key in badgeVariants ? (key as BadgeVariant) : "default";
};

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
      <BaseSection.Grid>
        {projects.map((p, index) => (
          <BaseCard key={index} $visible={isVisible} $delay={index * 300}>

            <BaseCard.Header>
              <BaseCard.Title showCursor>
                {p.title}
              </BaseCard.Title>

              <S.ActionButtons>
                <S.IconButton aria-label="View on GitHub">
                  <GithubIcon />
                </S.IconButton>
              </S.ActionButtons>
            </BaseCard.Header>

            <BaseCard.Description>{p.description}</BaseCard.Description>
            <S.TagWrapper>
              {p.techs.map((tech) => (
                <S.Badge key={tech} $variant={normalizeTech(tech)}>
                  {tech}
                </S.Badge>
              ))}
            </S.TagWrapper>
          </BaseCard>
        ))}
      </BaseSection.Grid>
    </BaseSection>
  );
}
