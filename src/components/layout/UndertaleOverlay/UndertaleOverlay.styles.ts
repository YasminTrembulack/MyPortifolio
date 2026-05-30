import styled, { keyframes, css } from "styled-components";

const floatParticle = keyframes`
  0% { transform: translateY(-10vh) translateX(0) rotate(0deg); opacity: 0; }
  10% { opacity: 0.5; }
  90% { opacity: 0.5; }
  100% { transform: translateY(110vh) translateX(30px) rotate(360deg); opacity: 0; }
`;

// --- NOVAS ANIMAÇÕES DE TRANSIÇÃO ---
const slideIn = keyframes`
  0% {
    transform: translateY(100%); /* Começa totalmente escondido abaixo da tela */
    opacity: 0;
  }
  100% {
    transform: translateY(0); /* Sobe para a posição original */
    opacity: 1;
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(100%); /* Desliza de volta para baixo */
    opacity: 0;
  }
`;

export const OverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  overflow: hidden;
  pointer-events: none;
  z-index: 9999;
`;

export const FlowerParticlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const flowerFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8); /* Dá um leve efeito de crescimento ao aparecer */
  }
  100% {
    /* O opacity final será controlado pelo componente via prop, aqui vai até 1 de escala */
    transform: scale(1);
  }
`;

// 1. Atualizamos a tipagem para aceitar o $delay opcional
type FlowerProps = {
  $top: string;
  $left: string;
  $height?: string;
  $width?: string;
  $opacity?: number;
  $delay?: string; // <-- NOVA PROP
};

// 2. Aplicamos a animação e o delay no Styled Component
export const FlowerImage = styled.img<FlowerProps>`
  position: absolute;
  height: ${({ $height }) => $height || "100px"};
  width: ${({ $width }) => $width || "100px"};
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  
  /* Começa invisível para esperar o delay da animação */
  opacity: 0; 

  /* Aplica a animação de entrada */
  animation: ${flowerFadeIn} 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards;
  
  /* Aplica o delay dinâmico que enviaremos pelo React */
  animation-delay: ${({ $delay }) => $delay || "0s"};

  /* Garante que o opacity final respeite o valor aleatório sorteado */
  animation-fill-mode: forwards;
  @keyframes ${flowerFadeIn} {
    to {
      opacity: ${({ $opacity }) => $opacity || 0.4};
    }
  }
`;

export const FlowerParticle = styled.div`
  position: absolute;
  width: 6px;
  height: 6px;
  background-color: #ffeb3b;
  border-radius: 50% 0 50% 0;
  animation: ${floatParticle} linear infinite;
  box-shadow: 0 0 4px #ffeb3b;
`;

// --- ATUALIZADO COM TRANSITION/ANIMATION ---
export const PlayerWrapper = styled.div<{ $isLeaving?: boolean }>`
  position: fixed; 
  bottom: 0rem;    
  right: 0rem;     
  width: 240px;  
  height: 200px; 
  
  display: flex;
  align-items: flex-end; 
  justify-content: flex-end; 
  padding: 1.5rem;
  
  overflow: hidden; 
  pointer-events: auto; 
  z-index: 10000;       

  /* Executa slideIn por padrão ao nascer. Se $isLeaving for true, executa slideOut */
  animation: ${slideIn} 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;

  ${({ $isLeaving }) =>
    $isLeaving &&
    css`
      animation: ${slideOut} 0.4s cubic-bezier(0.25, 1, 0.5, 1) forwards;
    `}
`;

export const BackgroundImage = styled.div`
  position: absolute; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  background-image: url("/images/undertale-player-bg.png"); 
  background-size: cover;
  background-position: center;
  
  opacity: 0.5; 
  z-index: 1; 
`;

export const MusicPlayerContainer = styled.div<{ $isPlaying: boolean }>`
  z-index: 2; 
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: #000; 
  border: 2px solid ${({ $isPlaying }) => ($isPlaying ? "#ffeb3b" : "#fff")};
  padding: 0.5rem 0.75rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
`;

export const PlayerButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  padding: 2px;
  &:hover { color: #ffeb3b; }
`;

export const TrackInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: monospace;
  font-size: 0.75rem;
  color: #fff;
  white-space: nowrap;
`;