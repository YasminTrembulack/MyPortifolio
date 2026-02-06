import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  height: 100vh;
  background-image: url("/leaves-bg.jpg");
  background-size: cover;
  background-position: center;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;

    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.6) 50%,
      #000 100%
    );
  }
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      rgba(0, 60, 120, 0.15),
      transparent 60%
    );
    pointer-events: none;
  }
`;

export const StarsLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
`;

export const Star = styled.pre<{
  top: number;
  left: number;
  scale: number;
  opacity: number;
}>`
  position: absolute;
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;

  transform: scale(${({ scale }) => scale});
  opacity: ${({ opacity }) => opacity};

  color: #ffffff;
  font-size: 6px;
  line-height: 1;
  white-space: pre;
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;

  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
`;
