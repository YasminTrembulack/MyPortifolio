
import { forwardRef } from "react";
import { flower } from "../../assets/ascii-art";
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

export const SectionHeader = forwardRef<HTMLElement, SectionHeaderProps>(
  ({ variant, isVisible, description, title, eyebrow, $headerAlign, $marginBottom }) => {
    return (
      <Header $align={$headerAlign} $visible={isVisible} $marginBottom={$marginBottom}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <Title>
          <TitleIcon $variant={variant}>{flower}</TitleIcon>
          <TitleText>{title}</TitleText>
        </Title>
        { description && <Subtitle>{description}</Subtitle>}
      </Header>
    );
  }
);