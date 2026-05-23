import styled from "styled-components";
import { fadeLeft, fadeRight, type AnimationProps } from "../../styles/transitions";

export const Content = styled.div`
  width: 100%;
  padding: 0 1rem;

  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const Side = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Right = styled(Side)<AnimationProps>`
  ${fadeLeft};
`;

export const Left = styled(Side)``;

export const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.15rem;

`;

export const InfoItem = styled.div<{
  $visible: boolean;
  $delay?: number;

}>`
  ${fadeRight}
  display: flex;
  gap: 16px;
  align-items: center;

  svg {
    width: 24px;
    height: 24px;
  }

  a {
    color: ${({ theme }) => theme.colors.bluePrimary};

    transition:
      transform 0.3s ease,
      color 0.3s ease;
  }

  &:hover a {
    color: ${({ theme }) => theme.colors.blueHover};
    transform: translateY(-2px);
  }
`;

export const InfoTitle = styled.h4`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.softWhite};

`;

export const InfoText = styled.p`
  color: ${({ theme }) => theme.colors.grey};
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