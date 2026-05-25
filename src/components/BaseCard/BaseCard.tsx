import type { HTMLAttributes, ReactNode } from "react";

import * as S from "./BaseCard.styles";
import type { AnimationProps } from "../../styles/transitions";

interface BaseCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  $minHeight?: number;
  $side?: "left" | "right";
}

interface TitleProps {
  children: ReactNode;
  showCursor?: boolean;
}

function BaseCard({
  children,
  $minHeight,
  $delay,
  $visible = true,
  $side,
  ...rest
}: BaseCardProps & AnimationProps) {
  return (
    <S.CardReveal
      $visible={$visible}
      $delay={$delay}
      $side={$side}>
      <S.Card
        $minHeight={$minHeight}
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

BaseCard.Header = function Header({ children }: { children: ReactNode }) {
  return <S.Header>{children}</S.Header>;
}

BaseCard.Title = function Title({
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

BaseCard.Description = function Description({ children }: { children: ReactNode }) {
  return <S.Description>{children}</S.Description>
}

export default BaseCard;