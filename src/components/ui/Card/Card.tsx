import type { HTMLAttributes, ReactNode } from "react";

import * as S from "./Card.styles";
import type { AnimationProps } from "../../../styles/transitions";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface TitleProps {
  children: ReactNode;
  showCursor?: boolean;
}

interface CardHeaderProps {
  children: ReactNode;
};

function Card({
  children,
  $delay,
  $visible = true,
  $side,
  $maxWidth,
  ...rest
}: CardProps 
  & S.CardProps
  & AnimationProps
  & S.CardRevealProps
) {
  return (
    <S.CardReveal
      $visible={$visible}
      $delay={$delay}
      $side={$side}>
      <S.Card
        $maxWidth={$maxWidth}
        $side={$side}
        {...rest}
      >
        <S.Glow />
        <S.Grid />
        {children}
      </S.Card>
    </S.CardReveal>
  );
}

Card.Header = function Header({ children, $marginBottom }: CardHeaderProps & S.HeaderProps) {
  return <S.Header $marginBottom={$marginBottom}>{children}</S.Header>;
}

Card.Title = function Title({
  children,
  showCursor,
}: TitleProps) {
  return (
    <S.Title>
      {children}
      {showCursor && <S.Cursor />}
    </S.Title>
  );
}

Card.Description = function Description({ children }: { children: ReactNode }) {
  return <S.Description>{children}</S.Description>
}

export default Card;