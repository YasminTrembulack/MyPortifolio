import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  padding-top: 6rem;
  padding-bottom: 2rem;

  display: flex;
  align-items: center;
  justify-content:center;

  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.softWhite};
`;

export const Container = styled.div`
  max-width: 1100px;
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

export const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.softWhite};
  font-family: ${({ theme }) => theme.fonts.terciary};
  font-weight: regular;
`;

export const Subtitle = styled.p`
  max-width: 520px;
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.softWhite};
  opacity: 0.65;
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
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  padding: 12px 16px;
  outline: none;

  &:focus {
    box-shadow: 0 0 0 2px #6d28d9;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  padding: 12px 16px;
  resize: none;
  outline: none;

  &:focus {
    box-shadow: 0 0 0 2px #6d28d9;
  }
`;

export const Button = styled.button`
  background: #3b0086;
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #2f006b;
  }
`;