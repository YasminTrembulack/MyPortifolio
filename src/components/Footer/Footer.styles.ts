import styled from "styled-components";
import { colors } from "../../styles/theme";

export const FooterContainer = styled.footer`
  background: ${colors.softWhite};
  color: ${colors.background};

  padding: 4rem 2rem 2rem;
`;

export const FooterTop = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Brand = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 0.95rem;
    color: ${colors.greyDark};
    line-height: 1.6;
    max-width: 350px;
  }
`;

export const Links = styled.div`
  h4 {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  a {
    display: block;
    font-size: 0.95rem;
    color: ${colors.greyDark};
    text-decoration: none;
    margin-bottom: 0.5rem;

    &:hover {
      color: ${colors.black};
    }
  }
`;

export const Social = styled.div`
  h4 {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

export const Divider = styled.div`
  height: 1px;
  background: ${colors.greyLight};
  margin: 3rem 0 1.5rem;
`;

export const FooterBottom = styled.div`
  text-align: center;
  font-size: 0.85rem;
  color: ${colors.grey};
`;
