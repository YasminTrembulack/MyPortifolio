import styled from "styled-components";

export const Grid = styled.div<{ $visible: boolean }>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;

  opacity: 0;
  transform: translateY(32px);
  transition:
    opacity 1.2s ease 0.2s,
    transform 1.2s ease 0.2s;

  ${({ $visible }) =>
    $visible &&
    `
      opacity: 1;
      transform: translateY(0);
    `}
`;
