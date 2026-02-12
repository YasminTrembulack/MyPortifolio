import styled, { keyframes } from "styled-components";
import { colors, fonts } from "../../styles/theme";
import { badgeVariants, type BadgeVariant } from "./badge.types";

/* Animations */
const blink = keyframes`
  0%,100% { opacity: 1; }
  50% { opacity: 0; }
`;

const gridMove = keyframes`
  from { background-position: 0 0; }
  to { background-position: 30px 30px; }
`;

export const BlinkingCursor = styled.span`
  width: 10px;
  height: 3px;

  background: ${colors.bluePrimary};
  box-shadow: 0 0 8px ${colors.bluePrimary};

  display: none;

  opacity: 0;
  transform: translateY(2px);
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;

  animation: ${blink} 1s step-end infinite;
`;

/* Card base */
export const Card = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 24px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: ${colors.background};
  border: 1px solid ${colors.softBlack};
  border-radius: 16px;

  font-family: ${fonts.primary};
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);

  border-color: ${colors.greyDark};

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
    border-color: ${colors.bluePrimary};
  }

  &:hover ${BlinkingCursor} {
    display: inline-block;
    opacity: 1;
    transform: translateY(0);
    animation-play-state: running;
  }
`;

export const CardGrid = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;

  background-image:
    linear-gradient(${colors.greyDark} 1px, transparent 1px),
    linear-gradient(90deg, ${colors.greyDark} 1px, transparent 1px);
  background-size: 30px 30px;

  mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
  opacity: 0.3;

  ${Card}:hover & {
    animation: ${gridMove} 20s linear infinite;
    opacity: 0.6;
  }
`;

export const CardGlow = styled.div`
  position: absolute;
  top: -60px;
  right: -60px;
  width: 180px;
  height: 180px;

  background: radial-gradient(circle, ${colors.blueSoft}, transparent 70%);
  filter: blur(40px);
  z-index: -1;

  transition: transform 0.4s ease;

  ${Card}:hover & {
    transform: scale(1.4);
  }
`;

/* Header */
export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  z-index: 2;
`;

/* Actions */
export const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
  z-index: 2;
`;

export const IconButton = styled.button`
  background: transparent;
  border: none;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;

  color: ${colors.greyLight};
  transition: all 0.2s ease;

  &:hover {
    background: ${colors.blueMuted};
    color: ${colors.white};
    transform: translateY(-2px);
  }

  svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }
`;

export const RepoTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 6px;

  font-family: ${fonts.decorative};
  font-size: 22px;
  font-weight: 500;
  color: ${colors.softWhite};
`;

export const RepoDescription = styled.p`
  min-height: 48px;
  font-family: ${fonts.terciary};
  font-size: 15px;
  line-height: 1.6;
  color: ${colors.grey};
  margin-bottom: 24px;
  z-index: 2;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

/* Tags */
export const TagWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  z-index: 2;
`;

export const Badge = styled.span<{ variant?: BadgeVariant }>`
  font-family: ${fonts.decorative};
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 6px;

  background: ${({ variant = "default" }) => badgeVariants[variant].bg};
  color: ${({ variant = "default" }) => badgeVariants[variant].color};
  border: 1px solid
    ${({ variant = "default" }) => badgeVariants[variant].border};

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 0 12px
      ${({ variant = "default" }) => badgeVariants[variant].glow};
  }
`;
