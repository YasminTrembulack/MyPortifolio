import styled from "styled-components";

export type SectionProps = {
  $paddingBottom?: number;
  $paddingTop?: number;
  $minHeight?: number;
};

export const Section = styled.section<SectionProps>`
  min-height: ${({ $minHeight = 100 }) => $minHeight}vh;
  padding-top: ${({ $paddingTop = 0 }) => $paddingTop}rem;
  padding-bottom: ${({ $paddingBottom = 0 }) => $paddingBottom}rem;
  background: ${({ theme }) => theme.colors.background};
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;