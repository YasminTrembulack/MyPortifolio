import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  min-height: 88vh;
  padding: 4rem 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #000;
`;

export const Container = styled.div`
  max-width: 1100px;
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
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.5rem;
`;

export const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #cfcfcf;
  margin-bottom: 2rem;
`;

export const Subtitle = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  span {
    padding: 0.45rem 1rem;
    border-radius: 999px;
    background: #1f273a;
    color: #7aa2ff;
    font-size: 0.9rem;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;

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

  color: ${({ primary }) => (primary ? "#000" : "#fff")};
  background: ${({ primary }) =>
    primary ? "#7aa2ff" : "rgba(255,255,255,0.08)"};

  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
`;

export const Socials = styled.div`
  display: flex;
  gap: 0.8rem;

  a {
    color: #7aa2ff;
    transition:
      opacity 0.2s,
      color 0.2s;

    svg {
      width: 18px;
      height: 18px;
    }

    &:hover {
      color: #ffffffc4;
    }
  }

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const AsciiFlower = styled.pre`
  position: absolute;
  right: 2rem;
  bottom: 0;

  font-family: "Courier New", monospace;
  font-size: 4px;
  line-height: 1.5;

  color: rgba(122, 162, 255, 0.45); /* azul discreto */
  pointer-events: none;
  user-select: none;

  @media (max-width: 900px) {
    display: none; /* some no mobile */
  }

  animation: float 6s ease-in-out infinite;

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
