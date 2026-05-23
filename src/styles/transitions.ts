import { css } from "styled-components";

const smooth = "cubic-bezier(0.22, 1, 0.36, 1)";

export type AnimationProps = {
  $visible?: boolean;
  $delay?: number;
};

export const fadeUp = css<AnimationProps>`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};

  transform: ${({ $visible }) =>
    $visible
      ? "translateY(0px) scale(1)"
      : "translateY(18px) scale(0.98)"};

  filter: ${({ $visible }) =>
    $visible ? "blur(0px)" : "blur(6px)"};

  transition:
    opacity 0.7s ${smooth},
    transform 0.7s ${smooth},
    filter 0.7s ${smooth};

  transition-delay: ${({ $delay = 0 }) => $delay}ms;
`;

export const fadeLeft = css<AnimationProps>`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};

  transform: ${({ $visible }) =>
    $visible
      ? "translateX(0px)"
      : "translateX(24px)"};

  filter: ${({ $visible }) =>
    $visible ? "blur(0px)" : "blur(6px)"};

  transition:
    opacity 0.7s ${smooth},
    transform 0.7s ${smooth},
    filter 0.7s ${smooth};

  transition-delay: ${({ $delay = 0 }) => $delay}ms;
`;

export const fadeRight = css<AnimationProps>`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};

  transform: ${({ $visible }) =>
    $visible
      ? "translateX(0px)"
      : "translateX(-24px)"};

  filter: ${({ $visible }) =>
    $visible ? "blur(0px)" : "blur(6px)"};

  transition:
    opacity 0.7s ${smooth},
    transform 0.7s ${smooth},
    filter 0.7s ${smooth};

  transition-delay: ${({ $delay = 0 }) => $delay}ms;
`;

export const fadeScale = css<AnimationProps>`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};

  transform: ${({ $visible }) =>
    $visible
      ? "scale(1)"
      : "scale(0.94)"};

  filter: ${({ $visible }) =>
    $visible ? "blur(0px)" : "blur(10px)"};

  transition:
    opacity 0.8s ${smooth},
    transform 0.8s ${smooth},
    filter 0.8s ${smooth};

  transition-delay: ${({ $delay = 0 }) => $delay}ms;
`;