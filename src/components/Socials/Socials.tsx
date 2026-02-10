import { Container } from "./Socials.styles";

import GithubIcon from "../../assets/icons/github.svg?react";
import LinkedinIcon from "../../assets/icons/linkedin.svg?react";
import EmailIcon from "../../assets/icons/email.svg?react";

type Props = {
  $color?: string;
  $hover?: string;
};

export function Socials({ ...props }: Props) {
  return (
    <Container {...props}>
      <a href="https://www.linkedin.com/in/yasmintrembulack/" target="_blank">
        <LinkedinIcon />
      </a>
      <a href="https://github.com/YasminTrembulack" target="_blank">
        <GithubIcon />
      </a>
      <a href="mailto:yasmin.agostinho.012@gmail.com" target="_blank">
        <EmailIcon />
      </a>
    </Container>
  );
}
