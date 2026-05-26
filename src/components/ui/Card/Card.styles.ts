import styled, { keyframes } from "styled-components";
import { fadeLeft, fadeRight, fadeUp, type AnimationProps } from "../../../styles/transitions";

export type CardRevealProps = {
  $side?: "left" | "right";
} & AnimationProps;

export type CardProps = {
  $side?: "left" | "right";
  $minHeight?: number;
};

export type HeaderProps = {
  $marginBottom?: number;
  $gap?: number;
}

const blink = keyframes`
  0%,100% { opacity: 1; }
  50% { opacity: 0; }
`;

const gridMove = keyframes`
  from { background-position: 0 0; }
  to { background-position: 30px 30px; }
`;

export const Cursor = styled.span`
  width: 10px;
  height: 3px;

  background: ${({ theme }) => theme.colors.bluePrimary};
  box-shadow: 0 0 8px ${({ theme }) => theme.colors.bluePrimary};

  display: none;

  animation: ${blink} 1s step-end infinite;
`;

export const CardReveal = styled.div<CardRevealProps>`
  ${({ $side }) => {
    if ($side === "left") return fadeLeft;
    if ($side === "right") return fadeRight;
    return fadeUp;
  }}
`;

export const Card = styled.div<CardProps>`
  width: 100%;
  max-width: 550px;
  padding: 24px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: ${({ $minHeight = 0 }) => $minHeight}px;

  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.softBlack};
  border-radius: 16px;

  font-family: ${({ theme }) => theme.fonts.primary};
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);

  border-color: ${({ theme }) => theme.colors.greyDark};

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
    border-color: ${({ theme }) => theme.colors.bluePrimary};
    box-shadow:
    0 30px 70px rgba(0, 0, 0, 0.5),
    0 0 30px ${({ theme }) => theme.colors.blueMuted};
  }
  
  &:hover ${Cursor} {
    display: inline-block;
    opacity: 1;
    transform: translateY(0);
    animation-play-state: running;
  }

  ${({ $side }) => {
    return $side && `cursor: pointer;`;
  }}  

  isolation: isolate;
  // verificar se é possivel remover isso
`;

export const Glow = styled.div`
  position: absolute;
  top: -60px;
  right: -60px;
  width: 180px;
  height: 180px;

  background: radial-gradient(
    circle,
    ${({ theme }) => theme.colors.blueMuted},
    transparent 70%
  );
  filter: blur(40px);
  z-index: -1;

  transition: transform 0.4s ease;

  ${Card}:hover & {
    transform: scale(1.4);
  }
`;

export const Grid = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;

  background-image:
    linear-gradient(
      ${({ theme }) => theme.colors.softBlack} 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.softBlack} 1px,
      transparent 1px
    );
  background-size: 30px 30px;

  mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
  opacity: 0.3;

  ${Card}:hover & {
    animation: ${gridMove} 20s linear infinite;
    opacity: 0.6;
  }
`;

export const Header = styled.div<HeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ $marginBottom = 0.5 }) => $marginBottom}rem;
  gap: ${({ $gap = 0.7 }) => $gap}rem;
  z-index: 2;
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 22px;
  display: flex;
  align-items: center;
  gap: 6px;

  font-family: ${({ theme }) => theme.fonts.decorative};
  color: ${({ theme }) => theme.colors.softWhite};
`;

export const Description = styled.p`
  min-height: 48px;
  font-family: ${({ theme }) => theme.fonts.terciary};
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: 24px;
  z-index: 2;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;