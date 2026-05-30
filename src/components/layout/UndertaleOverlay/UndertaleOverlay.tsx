import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Music, Play, Pause } from "lucide-react";
import { useUndertale } from "../../../context/UndertaleContext/UndertaleContext";
import * as S from "./UndertaleOverlay.styles";

export function UndertaleOverlay() {
  const { isTyping, isClosing, isMusicPlaying, setIsMusicPlaying } = useUndertale();
  const bgAudioRef = useRef<HTMLAudioElement | null>(null);

  // Inicialização do Áudio
  useEffect(() => {
    const audio = new Audio("/sounds/undertale_bg.mp3");
    audio.loop = true;
    audio.volume = 0;
    bgAudioRef.current = audio;
    return () => audio.pause();
  }, []);

  // Função de Fade (Volume Gradual)
  const fadeAudio = (audio: HTMLAudioElement, target: number) => {
    const step = 0.05;
    const interval = setInterval(() => {
      if (!audio) return;
      const diff = target - audio.volume;
      if (Math.abs(diff) <= step) {
        audio.volume = target;
        clearInterval(interval);
        if (target === 0) audio.pause();
        return;
      }
      audio.volume += diff > 0 ? step : -step;
    }, 50);
  };

  // 1. Efeito focado APENAS em resetar a música quando fechar o overlay
  useEffect(() => {
    if (isClosing && bgAudioRef.current) {
      bgAudioRef.current.currentTime = 0; // Volta para o início apenas na animação de fechar
    }
  }, [isClosing]);

  // 2. Controle de Play / Pause / Fade
  useEffect(() => {
    const audio = bgAudioRef.current;
    if (!audio) return;

    if (isMusicPlaying && isTyping && !isClosing) {
      if (audio.paused) {
        // Removido o currentTime = 0 daqui! Agora ele apenas continua de onde parou.
        audio.play().catch(() => { });
      }
      fadeAudio(audio, 0.4);
    } else {
      fadeAudio(audio, 0);
    }
  }, [isMusicPlaying, isTyping, isClosing]);

  // Só renderiza se estiver digitando ou fechando
  if (!isTyping && !isClosing) return null;

  return createPortal(
    <S.OverlayContainer>
      {/* Partículas */}
      {!isClosing && (
        <S.FlowerParticlesContainer>
          {[...Array(12)].map((_, i) => (
            <S.FlowerParticle
              key={i}
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${7 + Math.random() * 5}s`
              }}
            />
          ))}


          {[...Array(120)].map((_, i) => {
            const tamanhoAleatorio = `${40 + Math.random() * 40}px`;
            const opacidadeAleatoria = 0.2 + Math.random() * 0.4;

            // Calcula o atraso baseado na posição da flor na lista (0s, 0.2s, 0.4s...)
            const delayCascata = `${i * 0.2}s`;

            return (
              <S.FlowerImage
                key={i}
                src="images/undertale-flower.png"
                alt="Flower"
                $top={`${Math.random() * 7}%`}
                $left={`${Math.random() > 0.5 ? Math.random() * 31 : 65 + Math.random() * 30}%`}
                $height={tamanhoAleatorio}
                $width={tamanhoAleatorio}
                $opacity={opacidadeAleatoria}
                $delay={delayCascata} // <-- PASSANDO O DELAY AQUI
              />
            );
          })}
        </S.FlowerParticlesContainer>
      )}

      <S.PlayerWrapper $isLeaving={isClosing}>
        <S.BackgroundImage />
        <S.MusicPlayerContainer $isPlaying={isMusicPlaying}>
          <S.PlayerButton onClick={() => setIsMusicPlaying(!isMusicPlaying)}>
            {isMusicPlaying ? <Pause size={14} /> : <Play size={14} />}
          </S.PlayerButton>
          <S.TrackInfo>
            <Music size={12} />
            <span>Undertale OST</span>
          </S.TrackInfo>
        </S.MusicPlayerContainer>
      </S.PlayerWrapper>
    </S.OverlayContainer>,
    document.body
  );
}