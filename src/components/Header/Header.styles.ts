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
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.7),
    0 0 0 1px rgba(255, 255, 255, 0.1);

  transition: box-shadow 0.3s ease;
`;

export const NavItem = styled.button<{ $active?: boolean }>`
  border: none;
  border-radius: 999px;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.softWhite : "transparent"};

  padding: 0.75rem 1.1rem;
  cursor: pointer;

  display: flex;
  align-items: center;

  gap: 0;

  color: ${({ $active, theme }) =>
    $active ? theme.colors.background : theme.colors.greyLight};
  font-size: 1rem;
  font-weight: 500;

  transition:
    background 0.35s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.35s cubic-bezier(0.4, 0, 0.2, 1),
    gap 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
    flex-shrink: 0;
  }

  span {
    white-space: nowrap;
    overflow: hidden;

    max-width: 0;
    opacity: 0;
    transform: translateX(-6px);

    transition-delay: 0s;
    transition:
      max-width 0.45s cubic-bezier(0.4, 0, 0.2, 1),
      opacity 0.25s ease,
      transform 0.35s ease;
  }

  &:not(:hover) span {
    transition-delay: 0.05s;
  }

  &:hover {
    gap: 0.6rem;
    color: ${({ $active, theme }) =>
      $active ? theme.colors.background : theme.colors.softWhite};
  }

  &:hover span {
    max-width: 120px;
    opacity: 1;
    transform: translateX(0);
  }
`;
