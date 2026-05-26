import styled, { css } from "styled-components";

export const TimelineWrapper = styled.div`
  position: relative;
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

export const Item = styled.div<{ $side: "left" | "right" }>`
  display: flex;
  align-items: flex-start;
  justify-content: ${({ $side }) => $side === "left" ? "start" : "end"};
  margin-bottom: 2rem;
  position: relative;
`;

export const HeaderText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Subtitle = styled.div`
  display: flex;
  justify-content: start;
  gap: 10px;
  color: ${({ theme }) => theme.colors.grey};
  font-size: 0.75rem;
  letter-spacing: 0.12em;
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

type MarkerIconProps = {
  $active?: boolean;
}

export const MarkerIcon = styled.span<MarkerIconProps>`
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
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.terciary};
  color: ${({ theme }) => theme.colors.bluePrimary};
  display: block;
`;

export const Icon = styled.span<{ $active: boolean }>`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.softWhite};
  transition: transform 0.3s ease;
  margin-left: 5px;

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
