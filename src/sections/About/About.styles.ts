import styled from "styled-components";
import { colors } from "../../styles/theme";

export const Section = styled.section`
  position: relative;
  min-height: 88vh;
  padding: 4rem 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(${colors.black}, ${colors.background});
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const PhotoWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Photo = styled.img`
  width: 380px;
  height: 560px;
  object-fit: cover;
  border-radius: 16px;

  box-shadow: 0 0 40px rgba(0, 90, 200, 0.25);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const Title = styled.h2`
  font-size: 2.7rem;
  font-weight: 600;
  color: ${colors.white};
  margin: 0.5rem 0;
`;

export const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${colors.softWhite};
  margin: 2rem 0;
`;

export const Subtitle = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  span {
    padding: 0.45rem 1rem;
    border-radius: 999px;
    background: ${colors.gradientSoft};
    color: ${colors.white};
    border: 1px solid ${colors.yellowMuted};
  }
`;

export const TypingWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: start;

  padding: 0.5rem 1.2rem;

  color: ${colors.white};
  background: linear-gradient(
    135deg,
    ${colors.blueMuted},
    ${colors.yellowMuted}
  );

  border-radius: 10px;
  box-shadow: 0 0 18px rgba(122, 162, 255, 0.15);

  img {
    height: 40px;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const Button = styled.a<{ primary?: boolean }>`
  padding: 0.7rem 1.6rem;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;

  color: ${({ primary }) => (primary ? colors.black : colors.white)};
  background: ${({ primary }) =>
    primary ? colors.bluePrimary : colors.blueSoft};

  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
`;

export const Socials = styled.div`
  display: flex;
  gap: 0.8rem;

  a {
    color: ${colors.blueSoft};
    transition:
      opacity 0.2s,
      color 0.2s;

    svg {
      width: 18px;
      height: 18px;
    }

    &:hover {
      color: ${colors.bluePrimary};
    }
  }

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const Divider = styled.hr`
  width: 100%;
  height: 1px;
  border: none;
  margin: 1.5rem 0 1.2rem;
  opacity: 0.45;

  background-color: ${colors.blueSoft};
`;
