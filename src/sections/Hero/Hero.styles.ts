import styled from "styled-components";

export const Section = styled.section`
  position: fixed;
  top: 0;
  width: 100%;
  height: 64px;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  z-index: 1000;
`;
