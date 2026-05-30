import styled, { keyframes, css } from "styled-components";

const fallAnimation = keyframes`
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(10px); filter: blur(4px); }
`;
export const FooterMessageWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
  gap: 1rem;
  height: 25px;
`;

export const SoulWrapper = styled.div<{ $active: boolean }>`
  cursor: pointer;
  user-select: none;
  transition: transform 0.2s ease;
  transform: scale(${({ $active }) => ($active ? 1 : 1.1)});

  
  &:hover {   transform: scale(${({ $active }) => ($active ? 1.1 : 1.2)});}
  svg { width: 22px; height: 22px; display: block; }
`;

export const Message = styled.p<{ $leaving: boolean }>`
  font-family: ${({ theme }) => theme.fonts.undertale || "monospace"};
  color: #000000;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0;


  ${({ $leaving }) => $leaving && css`animation: ${fallAnimation} 0.4s forwards;`}

`;
