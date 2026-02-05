import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  top: 10px;
  left: 0;

  width: 100%;
  height: 7vh;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1000;
`;

export const Nav = styled.nav`
  background: rgba(0, 0, 0, 0.85);

  padding: 0 0.75rem;
  height: 100%;

  display: flex;
  align-items: center;
  gap: 1rem;

  border-radius: 999px;
`;

export const NavItem = styled.button`
  background: none;
  border: none;
  border-radius: 999px;

  padding: 0.75rem 1.25rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: #fff;
  font-size: 1rem;
  font-weight: 500;

  transition:
    opacity 0.2s,
    background 0.2s;

  svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
  }

  &:hover {
    opacity: 0.8;
    background: rgba(216, 216, 216);
    color: #0e0e0e;
  }
`;
