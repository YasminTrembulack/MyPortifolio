import { useState } from "react";
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
import type { Certification } from "../../data/certifications";


export function CertificationCard({ title, institution, year }: Certification) {
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
          <Year>{year}</Year>
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
