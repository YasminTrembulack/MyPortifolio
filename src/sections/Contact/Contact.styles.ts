import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  padding-top: 6rem;
  padding-bottom: 2rem;

  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content:center;

  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.softWhite};

  margin-bottom: 50px;
`;

export const Header = styled.div<{ $visible: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width:100%;

  opacity: 0;
  transform: translateY(32px);
  transition:
    opacity 1.2s ease,
    transform 1.2s ease;

  ${({ $visible }) =>
    $visible &&
    `
      opacity: 1;
      transform: translateY(0);
    `}
`;

export const Container = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.75rem;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const Icon = styled.pre`
  font-family: ${({ theme }) => theme.fonts.decorative};
  white-space: pre;

  font-size: 35px;
  margin: 0;
  color: ${({ theme }) => theme.colors.yellowAccent};

  text-align: center;
`;

export const Right = styled.div`
  display:flex;
  flex-direction: column;
  gap: 1rem;
  flex: 8;
`;

export const Left = styled.div`
  display:flex;
  flex-direction: column;
  gap: 1rem;
  flex: 2;
`;


export const Title = styled.h2`
  text-align: center;

  font-size: 2.7rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
`;


export const Subtitle = styled.p`
  margin-top: 0.75rem;
  color: ${({ theme }) => theme.colors.greyLight};
  text-align: center;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.greyDark  };
  opacity: 0.6;
  margin: 24px 0;
`;

export const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.15rem;

`;

export const InfoItem = styled.div<{ $visible: boolean }>`
  display: flex;
  gap: 16px;
  align-items: center;

  a {
    color: ${({ theme }) =>  theme.colors.bluePrimary};

    transition:
      opacity 0.2s,
      color 0.2s;

    svg {
      width: 24px;
      height: 24px;
    }

  }
  &:hover {
    a{
      color: ${({ theme }) => theme.colors.blueHover};
    }
  }
  opacity: 0;
  transform: translateY(32px);
  transition:
    opacity 1.2s ease,
    transform 1.2s ease;

  ${({ $visible }) =>
    $visible &&
    `
      opacity: 1;
      transform: translateY(0);
    `}

`;

export const InfoTitle = styled.h4`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.softWhite};

`;

export const InfoText = styled.p`
  color: #6b7280;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Field = styled.div``;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.softWhite};

`;

export const Input = styled.input`
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.softWhite};
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 6px;
  padding: 12px 16px;
  outline: none;

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.bluePrimary};
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.softWhite};

  border-radius: 6px;
  padding: 12px 16px;
  resize: none;
  outline: none;

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.bluePrimary};
  }
`;

export const Button = styled.button`
  padding: 0.8rem 2rem;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;

  background:  ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.softWhite};
  border: 2px solid ${({ theme }) => theme.colors.yellowAccent};

  &:hover {
    transform: translateY(-4px);
    background: ${({ theme }) => theme.colors.yellowAccent};
    color: ${({ theme }) => theme.colors.softBlack};
  }
`;