import {
  Card,
  CardGrid,
  CardGlow,
  CardHeader,
  Icon,
  RepoTitle,
  Container,
  RepoSubTitle,
  Year,
} from "./CertificationCard.styles";
import MedalReward from "../../assets/icons/medal.svg?react";
import MedalRewardFilled from "../../assets/icons/medal-filled.svg?react";
import { useState } from "react";

type Props = {
  title: string;
  institution: string;
  link: string;
};

export function CertificationCard({ title, institution }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <Container>
      <Card onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
        <CardGlow />
        <CardGrid />

        <CardHeader>
          <RepoTitle>
            {title}
          </RepoTitle>
          <Year>2023</Year>
        </CardHeader>
        <RepoSubTitle>{institution}</RepoSubTitle>
      </Card>
      <Icon>
        <MedalReward className={!hovered ? "active" : ""} />
        <MedalRewardFilled className={hovered ? "active" : ""} />
      </Icon>
    </Container>
  );
}
