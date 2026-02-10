import styled from "styled-components";
import { colors } from "../../styles/theme";

export const Container = styled.div<{
  $color?: string;
  $hover?: string;
}>`
  display: flex;
  gap: 0.8rem;

  a {
    color: ${({ $color }) => $color || colors.blueSoft};

    transition:
      opacity 0.2s,
      color 0.2s;

    svg {
      width: 24px;
      height: 24px;
    }

    &:hover {
      color: ${({ $hover }) => $hover || colors.bluePrimary};
    }
  }

  @media (max-width: 900px) {
    justify-content: center;
  }
`;
