import styled from "styled-components";

export const Div = styled.div<{
  $visible: boolean;
  $variant: "blue" | "yellow";
  $marginTop?: number;
  $marginBottom?: number;
}>`
  width: 100%;
  height: 1px;
  border: none;

  margin-bottom: ${({ $marginBottom = 24 }) => $marginBottom}px;
  margin-top: ${({ $marginTop = 24 }) => $marginTop}px;

  opacity: ${({ $visible }) => ($visible ? 0.45 : 0)};

  background-color: ${({ theme, $variant = "blue" }) =>
    $variant === "yellow" ? theme.colors.yellowSoft : theme.colors.blueSoft};

  transform: ${({ $visible }) => ($visible ? "scaleX(1)" : "scaleX(0)")};
  transition-delay: 300ms;

  transform-origin: center;

  transition:
    transform 0.8s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.8s ease;
`;
