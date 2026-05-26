
import { forwardRef } from "react";
import { flower } from "../../../assets/ascii-art";
import { Eyebrow, Header, Subtitle, Title, TitleIcon, TitleText } from "./SectionHeader.styles";

export type SectionHeaderProps = {
  title: string;
  description?: string;
  variant: "blue" | "yellow";
  isVisible: boolean;
  $marginBottom?: number;
  $headerAlign?: "center" | "start";
  eyebrow?: string;
};

const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  function SectionHeader(props, ref) {
    return (
      <Header
        ref={ref}
        $align={props.$headerAlign}
        $visible={props.isVisible}
        $marginBottom={props.$marginBottom}
      >
        {props.eyebrow && <Eyebrow>{props.eyebrow}</Eyebrow>}

        <Title>
          <TitleIcon $variant={props.variant}>{flower}</TitleIcon>
          <TitleText>{props.title}</TitleText>
        </Title>

        {props.description && <Subtitle>{props.description}</Subtitle>}
      </Header>
    );
  }
);

export default SectionHeader;