import styled from "styled-components";
import { fadeUp, type AnimationProps } from "../../../styles/transitions";

type HeaderProps = AnimationProps & {
  $marginBottom?: number;
  $align?: "center" | "start"; 
}

type TitleIconProps = {
  $variant: "blue" | "yellow";
};

export const Header = styled.div<HeaderProps>`  
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${({ $marginBottom = 2 }) => $marginBottom}rem;
  
  align-items: ${({ $align = "start" }) => $align};

  ${fadeUp};
`;

export const Eyebrow = styled.span`
  font-size: 0.7rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.softWhite};
  opacity: 0.5;
  margin-bottom: 5px;
`;

export const TitleIcon = styled.pre<TitleIconProps>`
  font-size: 35px;
  white-space: pre;
  text-align: center;
  margin: 0;

  color: ${({ theme }) => theme.colors.bluePrimary};
  color: ${({ theme, $variant }) =>
    $variant === "yellow" ? theme.colors.yellowSoft : theme.colors.bluePrimary};

  font-family: ${({ theme }) => theme.fonts.decorative};
`;

export const Title = styled.div`
  display: flex;
  justify-content: start;
  gap: 0.75rem;
`;

export const TitleText = styled.h1`
  font-size: 2.7rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  margin: 0.5rem 0;
`;

export const Subtitle = styled.p`
  margin-top: 0.75rem;
  color: ${({ theme }) => theme.colors.greyLight};
`;
