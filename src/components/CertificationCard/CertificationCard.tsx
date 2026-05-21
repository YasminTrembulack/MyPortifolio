import {
  Card,
  CardGrid,
  CardGlow,
  CardHeader,
  ActionButtons,
  IconButton,
  RepoTitle,
  RepoDescription,
} from "./CertificationCard.styles";
import GithubIcon from "../../assets/icons/github.svg?react";

type Props = {
  title: string;
  description: string;
  link: string;
};

export function CertificationCard({ title, description }: Props) {
  return (
    <Card>
      <CardGlow />
      <CardGrid />

      <CardHeader>
        <RepoTitle>
          {title}
        </RepoTitle>

        <ActionButtons>
          <IconButton aria-label="View on GitHub">
            <GithubIcon />
          </IconButton>
        </ActionButtons>
      </CardHeader>

      <RepoDescription>{description}</RepoDescription>
    </Card>
  );
}
