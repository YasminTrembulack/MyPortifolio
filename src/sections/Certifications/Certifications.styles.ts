import styled, { css, keyframes } from "styled-components";
import { fadeUp, type AnimationProps } from "../../styles/transitions";

const gridMove = keyframes`
  from { background-position: 0 0; }
  to { background-position: 30px 30px; }
`;

export const Container = styled.div<AnimationProps>`
  position: relative;
  break-inside: avoid;

  ${fadeUp};
`;

export const Card = styled.div`
  position: relative;
  overflow: hidden;

  width: 100%;
  max-width: 400px;
  min-height: 142px;

  padding: 24px;

  display: flex;
  flex-direction: column;
  justify-content: start;

  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.greyDark};
  border-radius: 16px;

  font-family: ${({ theme }) => theme.fonts.primary};

  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);

  ${Container}:hover & {
    transform: translateY(-4px);

    border-color: ${({ theme }) => theme.colors.bluePrimary};

    box-shadow:
      0 30px 70px rgba(0, 0, 0, 0.5),
      0 0 30px ${({ theme }) => theme.colors.blueMuted};
  }
`;

export const CardGrid = styled.div`
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

  ${Container}:hover & {
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

  background: radial-gradient(
    circle,
    ${({ theme }) => theme.colors.blueMuted},
    transparent 70%
  );

  filter: blur(40px);

  z-index: 0;
  opacity: 0;
  transform: scale(0.9);

  transition:
    transform 0.4s ease,
    opacity 0.4s ease;

  ${Container}:hover & {
    transform: scale(1.4);
    opacity: 0.9;
  }
`;

export const CardHeader = styled.header`
  position: relative;
  z-index: 2;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-bottom: 10px;
`;

export const Icon = styled.div`
  position: absolute;
  right: 5px;
  bottom: -20px;
  width: 50px;
  height: 50px;

  color: ${({ theme }) => theme.colors.yellowAccent};

  svg {
    position: absolute;
    inset: 0;

    width: 50px;
    height: 50px;

    fill: currentColor;

    transition:
      opacity 0.3s ease,
      transform 0.3s ease;

    opacity: 0;
    transform: scale(0.9) rotate(-10deg);
  }

  svg.active {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
`;

export const RepoTitle = styled.h3`
  display: flex;

  font-family: ${({ theme }) => theme.fonts.decorative};
  font-size: 22px;
  font-weight: 500;

  color: ${({ theme }) => theme.colors.softWhite};
`;

export const Year = styled.h3`
  display: flex;

  font-family: ${({ theme }) => theme.fonts.decorative};
  font-size: 18px;
  font-weight: 500;

  text-align: center;

  color: ${({ theme }) => theme.colors.blueHover};
`;

export const RepoSubTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.terciary};
  font-size: 15px;

  color: ${({ theme }) => theme.colors.grey};

  z-index: 2;
`;

export const Body = styled.div<{ $active: boolean }>`
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.4s ease;

  ${({ $active }) =>
    $active &&
    css`
      max-height: 300px;
      opacity: 1;
      margin-top: 16px;
    `}
`;