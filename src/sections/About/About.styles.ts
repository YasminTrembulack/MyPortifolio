import styled from "styled-components";
import { colors, fonts } from "../../styles/theme";

export const Section = styled.section`
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
  gap: 12rem;

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

  border-top-left-radius: 150px;
  border-top-right-radius: 150px;

  mask-image:
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.85) 30%,
      rgba(0, 0, 0, 1) 60%
    ),
    radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 1) 45%,
      rgba(0, 0, 0, 0.85) 70%,
      rgba(0, 0, 0, 0.4) 85%,
      rgba(0, 0, 0, 0) 95%
    );

  mask-composite: intersect;

  -webkit-mask-image:
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.85) 30%,
      rgba(0, 0, 0, 1) 60%
    ),
    radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 1) 45%,
      rgba(0, 0, 0, 0.85) 70%,
      rgba(0, 0, 0, 0.4) 85%,
      rgba(0, 0, 0, 0) 95%
    );

  -webkit-mask-composite: destination-in;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: start;
  gap: 0.75rem;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;
export const Icon = styled.pre`
  font-family: ${fonts.decorative};
  white-space: pre;

  font-size: 35px;
  margin: 0;
  color: ${colors.bluePrimary};
  text-align: center;
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
  font-family: ${fonts.terciary};
  font-weight: regular;
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

export const Tags = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: start;

  margin-top: 1.5rem;
  margin-bottom: 2rem;

  font-family: ${fonts.secundary};
`;

export const Tag = styled.span`
  padding: 0.45rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;

  color: ${colors.white};

  background: linear-gradient(
    135deg,
    ${colors.blueMuted},
    ${colors.yellowMuted}
  );

  border-radius: 10px;
  box-shadow: 0 0 14px ${colors.yellowMuted};

  backdrop-filter: blur(6px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 22px ${colors.yellowSoft};
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
      width: 24px;
      height: 24px;
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
