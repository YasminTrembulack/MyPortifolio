import {
  Card,
  CardGrid,
  CardGlow,
  CardHeader,
  ActionButtons,
  IconButton,
  RepoTitle,
  BlinkingCursor,
  RepoDescription,
  TagWrapper,
  Badge,
} from "./ProjectCard.styles";
import GithubIcon from "../../assets/icons/github.svg?react";
import { badgeVariants, type BadgeVariant } from "./badge.types";

type Props = {
  title: string;
  description: string;
  techs: string[];
  link: string;
};

const normalizeTech = (tech: string): BadgeVariant => {
  const key = tech.toLowerCase().replace(/\s|\./g, "");

  return key in badgeVariants ? (key as BadgeVariant) : "default";
};

export function ProjectCard({ title, description, techs }: Props) {
  return (
    <Card>
      <CardGlow />
      <CardGrid />

      <CardHeader>
        <RepoTitle>
          {title}
          <BlinkingCursor />
        </RepoTitle>

        <ActionButtons>
          <IconButton aria-label="View on GitHub">
            <GithubIcon />
          </IconButton>
        </ActionButtons>
      </CardHeader>

      <RepoDescription>{description}</RepoDescription>
      <TagWrapper>
        {techs.map((tech) => (
          <Badge key={tech} variant={normalizeTech(tech)}>
            {tech}
          </Badge>
        ))}
      </TagWrapper>
    </Card>
  );
}
