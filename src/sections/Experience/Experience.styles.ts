import styled, { css, keyframes } from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  padding-top: 6rem;
  padding-bottom: 2rem;

  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.softWhite};
`;

export const Title = styled.h2`
  text-align: center;

  font-size: 2.7rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
`;

export const ContentHeader = styled.div`
  text-align: center;
  margin-bottom: 120px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Eyebrow = styled.span`
  font-size: 0.7rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.softWhite};
  opacity: 0.5;
  margin-bottom: 14px;
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
`;

export const HeaderIcon = styled.pre`
  font-family: ${({ theme }) => theme.fonts.decorative};
  white-space: pre;

  font-size: 35px;
  margin: 0;
  color: ${({ theme }) => theme.colors.bluePrimary};
  text-align: center;
`;

export const Subtitle = styled.p`
  max-width: 520px;
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.softWhite};
  opacity: 0.65;
`;

export const TimelineWrapper = styled.div`
  position: relative;
  max-width: 1000px;
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
  margin-bottom: 90px;
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

export const Card = styled.div<{
  $side: "left" | "right";
  $visible: boolean;
}>`
  width: 45%;
  padding: 24px;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.softBlack};
  border-radius: 16px;

  position: relative;
  cursor: pointer;

  ${({ $side }) =>
    $side === "left"
      ? css`
          left: 0;
        `
      : css`
          left: 55%;
        `}

  box-shadow:
    0 30px 70px rgba(0, 0, 0, 0.5),
    0 0 30px ${({ theme }) => theme.colors.blueMuted};

  opacity: 0;
  filter: blur(8px);

  transition:
    transform 0.9s cubic-bezier(0.22, 0.61, 0.36, 1),
    opacity 0.6s ease,
    filter 0.6s ease,
    border-color 0.3s ease;

  ${({ $visible, $side }) =>
    !$visible &&
    css`
      transform: translateX(${$side === "left" ? "-120px" : "120px"});
    `}

  ${({ $visible }) =>
    $visible &&
    css`
      transform: translateX(0);
      opacity: 1;
      filter: blur(0);
    `}

  &:hover {
    border-color: ${({ theme }) => theme.colors.bluePrimary};
  }
`;

const gridMove = keyframes`
  from { background-position: 0 0; }
  to { background-position: 30px 30px; }
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

  ${Card}:hover & {
    animation: ${gridMove} 20s linear infinite;
    opacity: 0.6;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Year = styled.span`
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.secundary};
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
