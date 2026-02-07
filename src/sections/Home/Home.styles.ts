import styled, { keyframes } from "styled-components";
import { colors } from "../../styles/theme";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(32px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Section = styled.section`
  position: relative;
  height: 100vh;
  background-image: url("/leaves-bg.jpg");
  background-size: cover;
  background-position: center;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  color: ${colors.softWhite};

  animation: ${fadeUp} 1.2s ease forwards;
`;

export const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  color: ${colors.softWhite};

  font-size: 3.5rem;
  font-weight: 400;

  line-height: 1.071;
  max-width: 900px;

  margin-top: 0;
  margin-bottom: 0.6rem;

  strong {
    color: ${colors.bluePrimary};
    font-weight: 900;
  }
`;

export const Subtitle = styled.p`
  font-family: "lora-regular", serif;
  font-size: 1rem;
  line-height: 2.4rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  color: ${colors.softWhite};

  span {
    display: inline-block;
  }
  span::after {
    content: "|";
    text-align: center;
    display: inline-block;
    padding: 0 8px 0 14px;
  }
  span:first-child::before {
    content: "|";
    text-align: center;
    display: inline-block;
    padding: 0 14px 0 8px;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

export const Button = styled.a<{ secondary?: boolean }>`
  padding: 0.8rem 2rem;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;

  background: ${({ secondary }) =>
    secondary ? "transparent" : colors.yellowAccent};
  color: ${({ secondary }) =>
    secondary ? colors.softWhite : colors.softBlack};
  border: 2px solid ${colors.yellowAccent};

  &:hover {
    transform: translateY(-4px);
    background: ${({ secondary }) =>
      secondary ? colors.yellowAccent : colors.yellowHover};
    color: ${colors.softBlack};
  }
`;
