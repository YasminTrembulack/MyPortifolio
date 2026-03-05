import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  padding-top: 4rem;
  padding-bottom: 0rem;
  background: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.h2`
  font-size: 2.7rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
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
export const HeaderIcon = styled.pre`
  font-family: ${({ theme }) => theme.fonts.decorative};
  white-space: pre;

  font-size: 35px;
  margin: 0;
  color: ${({ theme }) => theme.colors.yellowAccent};
  text-align: center;
`;

export const Header = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const Subtitle = styled.p`
  margin-top: 0.75rem;
  color: ${({ theme }) => theme.colors.greyLight};
  max-width: 620px;
`;

// -----------------------------------------------------------

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin: 40px 0;
  flex-wrap: wrap;
`;

export const Tab = styled.button<{ active: boolean }>`
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  cursor: pointer;

  background: ${({ theme, active }) =>
    active ? theme.colors.blueHover : theme.colors.softBlack};

  color: ${({ theme }) => theme.colors.white};

  box-shadow: ${({ active, theme }) =>
    active ? `0 0 8px ${theme.colors.blueSoft}` : "none"};

  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    background: ${({ theme, active }) =>
      active ? theme.colors.blueHover : theme.colors.blueMuted};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 140px);
  gap: 16px;
  justify-content: center;
  margin: auto;
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.03);

  border-radius: 15px;
  padding: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  aspect-ratio: 1.5 / 1;

  transition:
    transform 0.18s ease,
    background 0.18s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.045);
  }
`;

export const Icon = styled.div`
  font-size: 24px;
  margin-bottom: 8px;
`;

export const Name = styled.p`
  font-size: 14px;
  opacity: 0.9;
  text-align: center;
`;
