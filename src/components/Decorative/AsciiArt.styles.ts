import styled from "styled-components";
import { colors, fonts } from "../../styles/theme";

export const ArtText = styled.pre<{
  $top?: string;
  $right?: string;
  $bottom?: string;
  $left?: string;
  $font_size?: string;
  $line_height?: string;
  $color?: string;
  $useGradient?: boolean;
  $animation?: boolean;
}>`
  position: absolute;

  ${({ $top }) => $top && `top: ${$top};`}
  ${({ $right }) => $right && `right: ${$right};`}
  ${({ $bottom }) => $bottom && `bottom: ${$bottom};`}
  ${({ $left }) => $left && `left: ${$left};`}

  font-family: ${fonts.decorative};
  white-space: pre;

  font-size: ${({ $font_size }) => $font_size || "5px"};
  line-height: ${({ $line_height }) => $line_height || "1.2"};

  ${({ $color, $useGradient = true }) =>
    $color
      ? `
        color: ${$color};
      `
      : $useGradient
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

  ${({ $animation = true }) =>
    $animation &&
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

export const ArtImage = styled.img<{
  $top?: string;
  $right?: string;
  $bottom?: string;
  $left?: string;
  $width?: string;
  $height?: string;
  $opacity?: string;
  $animation?: boolean;
}>`
  position: absolute;

  ${({ $top }) => $top && `top: ${$top};`}
  ${({ $right }) => $right && `right: ${$right};`}
  ${({ $bottom }) => $bottom && `bottom: ${$bottom};`}
  ${({ $left }) => $left && `left: ${$left};`}

  width: ${({ $width }) => $width || "120px"};
  height: ${({ $height }) => $height || "auto"};

  opacity: ${({ $opacity }) => $opacity ?? 0.8};

  pointer-events: none;
  user-select: none;

  ${({ $animation = true }) =>
    $animation &&
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
