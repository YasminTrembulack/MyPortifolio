import styled, { css, keyframes } from "styled-components";

export const TimelineWrapper = styled.div`
  position: relative;
  max-width: 1000px;
  padding-top: 2rem;
  margin: auto;
`;

/* Linha base */
export const TimelineLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  width: 1px;
  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent,
    ${({ theme }) => theme.colors.yellowAccent},
    transparent
  );
  transform: translateX(-50%);
`;

/* Linha de progresso */
export const ProgressLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  width: 2px;
  height: 0;

  background: ${({ theme }) => theme.colors.yellowSoft};
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.yellowSoft};

  transform: translateX(-50%);
  transition: height 0.25s ease-out;
`;

export const Item = styled.div`
  position: relative;
  margin-bottom: 50px;
`;

export const CardIcon = styled.pre`
  font-family: ${({ theme }) => theme.fonts.decorative};
  white-space: pre;

  font-size: 2px;
  line-height: 1.4;
  margin-right: 16px;

  color: ${({ theme }) => theme.colors.bluePrimary};

  background-clip: text;

  pointer-events: none;
  user-select: none;
`;

export const MarkerWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  z-index: 4;
  pointer-events: none;
`;

export const MarkerIcon = styled.span<{
  $active?: boolean;
}>`
  z-index: 3;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 60px;
  height: 60px;

  color: ${({ theme }) => theme.colors.yellowAccent};

  opacity: ${({ $active }) => ($active ? 1 : 0.5)};
  transform: scale(${({ $active }) => ($active ? 1.1 : 0.95)});

  background: #f0d58c;
  background: radial-gradient(circle, rgb(7, 7, 7) 0%, rgba(0, 0, 0, 0) 75%);

  /* brilho do próprio svg */
  ${({ $active }) =>
    $active &&
    `
      filter: drop-shadow(0 0 10px rgba(240,213,140,0.6));
    `}

  transition:
    opacity 0.3s ease,
    transform 0.3s ease,
    filter 0.3s ease,
    box-shadow 0.3s ease;

  & > svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
`;

export const Card = styled.div<{ $side: "left" | "right"; $visible: boolean }>`
  width: 100%;
  max-width: 400px;
  padding: 24px;

  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  border-radius: 16px;

  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.greyDark};

  font-family: ${({ theme }) => theme.fonts.primary};

  /* 🔥 IMPORTANTE: cria contexto */
  isolation: isolate;

  /* base shadow */
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.35);

  ${({ $side }) =>
    $side === "left"
      ? css`left: 0;`
      : css`left: 55%;`}

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateX(
    ${({ $visible, $side }) =>
      $visible ? "0" : $side === "left" ? "-120px" : "120px"}
  );

  filter: blur(${({ $visible }) => ($visible ? "0px" : "8px")});

  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.bluePrimary};

    box-shadow:
      0 30px 70px rgba(0, 0, 0, 0.5),
      0 0 35px ${({ theme }) => theme.colors.blueMuted};
  }
`;

export const CardGlow = styled.div`
  position: absolute;
  top: -80px;
  right: -80px;

  width: 220px;
  height: 220px;

  background: radial-gradient(
    circle,
    ${({ theme }) => theme.colors.blueMuted} 0%,
    transparent 70%
  );

  filter: blur(55px);

  z-index: 0;

  opacity: 0;

  transform: scale(0.8);

  transition:
    transform 0.5s ease,
    opacity 0.5s ease;

  ${Card}:hover & {
    opacity: 0.9;
    transform: scale(1.3);
  }
`;

const gridMove = keyframes`
  from { background-position: 0 0; }
  to { background-position: 30px 30px; }
`;

export const CardGrid = styled.div`
  position: absolute;
  inset: 0;

  z-index: 1;

  pointer-events: none;

  opacity: 0.2;

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

  ${Card}:hover & {
    opacity: 0.4;
    animation: ${gridMove} 20s linear infinite;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
`;

export const CardTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 6px;

  font-family: ${({ theme }) => theme.fonts.decorative};
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.softWhite};

  margin-bottom: 5px;
`;

export const Year = styled.span`
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.terciary};
  color: ${({ theme }) => theme.colors.bluePrimary};
  display: block;
  margin-bottom: 6px;
`;

export const Icon = styled.span<{ $active: boolean }>`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.softWhite};
  transition: transform 0.3s ease;

  ${({ $active }) =>
    $active &&
    css`
      transform: rotate(45deg);
    `}
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
