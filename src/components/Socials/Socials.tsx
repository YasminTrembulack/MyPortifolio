import { Container } from "./Socials.styles";

import GithubIcon from "../../assets/icons/github.svg?react";
import LinkedinIcon from "../../assets/icons/linkedin.svg?react";

type Props = {
  $color?: string;
  $hover?: string;
};

export function Socials({ ...props }: Props) {
  return (
    <Container {...props}>
      <a href="https://github.com/YasminTrembulack" target="_blank">
        <GithubIcon />
      </a>
      <a href="https://www.linkedin.com/in/yasmintrembulack/" target="_blank">
        <LinkedinIcon />
      </a>
    </Container>
  );
}
