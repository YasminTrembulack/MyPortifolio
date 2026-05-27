import styled from "styled-components";

export type SectionProps = {
  $paddingBottom?: number;
  $paddingTop?: number;
  $minHeight?: number;
};

export type GridProps = {
  $gridTemplateColumns: string;
}

export const Section = styled.section<SectionProps>`
  min-height: ${({ $minHeight = 100 }) => $minHeight}vh;
  padding-top: ${({ $paddingTop = 5 }) => $paddingTop}rem;
  padding-bottom: ${({ $paddingBottom = 3 }) => $paddingBottom}rem;
  background: ${({ theme }) => theme.colors.background};
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Grid = styled.div<GridProps>`
  display: grid;
  background: ${({ theme }) => theme.colors.background};
  grid-template-columns: ${({ $gridTemplateColumns }) => $gridTemplateColumns};

  gap: 2rem;
`;