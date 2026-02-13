import styled, { keyframes } from "styled-components";

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
  color: ${({ theme }) => theme.colors.softWhite};

  animation: ${fadeUp} 1.2s ease forwards;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.softWhite};

  font-size: 2.8rem;
  font-weight: 400;

  line-height: 1.071;
  max-width: 1000px;

  margin-top: 0;
  margin-bottom: 0.6rem;

  strong {
    color: ${({ theme }) => theme.colors.bluePrimary};
    font-weight: 800;
  }
`;

export const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.secundary};
  font-size: 1rem;
  line-height: 2.4rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  color: ${({ theme }) => theme.colors.softWhite};
  margin: 1rem 0;

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
  margin: 1rem 0;
`;

export const Button = styled.a`
  padding: 0.8rem 2rem;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;

  background: "transparent";
  color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.yellowAccent};

  &:hover {
    transform: translateY(-4px);
    background: ${({ theme }) => theme.colors.yellowAccent};
    color: ${({ theme }) => theme.colors.softBlack};
  }
`;
