import styled from "styled-components";
import { colors } from "../../styles/theme";

export const Art = styled.pre<{
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  font_size?: string;
  line_height?: string;
  color?: string;
  useGradient?: boolean;
  animation?: boolean;
}>`
  position: absolute;

  ${({ top }) => top && `top: ${top};`}
  ${({ right }) => right && `right: ${right};`}
  ${({ bottom }) => bottom && `bottom: ${bottom};`}
  ${({ left }) => left && `left: ${left};`}

  font-family: "DotGothic16", monospace;
  white-space: pre;

  font-size: ${({ font_size }) => font_size || "5px"};
  line-height: ${({ line_height }) => line_height || "1.2"};

  ${({ color, useGradient = true }) =>
    color
      ? `
        color: ${color};
      `
      : useGradient
        ? `
        background: ${colors.gradientPrimary};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      `
        : `
        color: ${colors.bluePrimary};
      `}

  background-clip: text;

  pointer-events: none;
  user-select: none;

  ${({ animation = true }) =>
    animation &&
    `
    animation: float 7s ease-in-out infinite;
  `}

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-6px);
    }
  }
`;
