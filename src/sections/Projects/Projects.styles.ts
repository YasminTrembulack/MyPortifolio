import styled from "styled-components";
import { colors, fonts } from "../../styles/theme";

export const Section = styled.section`
  min-height: 100vh;
  padding: 4rem 0;
  background: ${colors.background};
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.div`
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  font-size: 2.7rem;
  font-weight: 600;
  color: ${colors.white};
  margin: 0.5rem 0;
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
  color: ${colors.yellowAccent};
  text-align: center;
`;

export const Subtitle = styled.p`
  margin-top: 0.75rem;
  color: ${colors.greyLight};
  max-width: 520px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;
