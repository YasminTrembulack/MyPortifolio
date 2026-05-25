import styled from "styled-components";
import { fadeLeft, fadeRight, fadeUp, type AnimationProps } from "../../styles/transitions";

export type InfoListProps = {
  $flexDirection?: "row" | "column";
  $gap?: number;
}

export type InfoItemProps = {
  $variant?: "blue" | "grey"; 
}

export type InfoRevealProps = AnimationProps & {
  $fade?: "up" | "left" | "right";
}

export const InfoList = styled.div<InfoListProps>`
  display: flex;
  flex-direction: ${props => props.$flexDirection};
  gap: ${props => props.$gap}rem;

`;

export const InfoReveal = styled.div<InfoRevealProps>`
  ${({ $fade }) => {
    if ($fade === "up") return fadeUp;
    if ($fade === "left") return fadeLeft;
    if ($fade === "right") return fadeRight;

    return "";
  }};
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  gap: 16px;
`;
 
export const Content = styled.div``;

export const InfoItem = styled.div<InfoItemProps>`
  display: flex;
  align-items: center;
  cursor: pointer;

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  svg {
    width: 24px;
    height: 24px;
    color: ${({ theme, $variant }) => 
      $variant === "grey" ? theme.colors.greyLight : theme.colors.blueSoft};
  }

  &:hover svg {
    color: ${({ theme, $variant }) => $variant === "grey" ? theme.colors.softBlack : theme.colors.bluePrimary};
  }

  &:hover{
    transform: translateY(-2px);
  }
`;

export const InfoTitle = styled.h4`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.softWhite};

`;

export const InfoText = styled.p`
  color: ${({ theme }) => theme.colors.grey};
`;