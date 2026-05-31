import { useEffect, useRef, useState } from "react";
import UndertaleRedSoulIcon from "../../../../../assets/icons/undertale-red-soul.svg?react";
import UndertaleRedSoulBrokeIcon from "../../../../../assets/icons/undertale-red-soul-broke.svg?react";
import { useUndertale } from "../../../../../context/UndertaleContext/UndertaleContext";
import * as S from "./UndertaleFooterMessage.styles";

const text = "* Despite everything, it's still you.";

export function UndertaleFooterMessage() {
    const { isTyping, setIsTyping, isClosing, setIsClosing, setIsMusicPlaying } = useUndertale();
    const [displayedText, setDisplayedText] = useState("");

    const textAudioRef = useRef<HTMLAudioElement | null>(null);
    // --- NOVO: Referência para o som de dano ---
    const damageAudioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        textAudioRef.current = new Audio("/sounds/undertale-text.mp3");
        damageAudioRef.current = new Audio("/sounds/undertale-damage.mp3"); 
        damageAudioRef.current.volume = 0.2;
    }, []);

    useEffect(() => {
        if (!isTyping) return;
        let index = 0;

        const interval = setInterval(() => {
            setDisplayedText(text.slice(0, index + 1));

            if (text[index] !== " " && textAudioRef.current) {
                textAudioRef.current.currentTime = 0;
                textAudioRef.current.play().catch(() => { });
            }

            index++;
            if (index >= text.length) {
                clearInterval(interval);
            }
        }, 40);

        return () => clearInterval(interval);
    }, [isTyping]);

    const handleSoulClick = () => {
        if (isTyping) {
            setIsClosing(true); // Avisa o Footer E o Overlay ao mesmo tempo!
            
            setTimeout(() => {
                if (damageAudioRef.current) {
                    damageAudioRef.current.currentTime = 0; // Garante que comece do início se clicar rápido
                    damageAudioRef.current.play().catch(() => { });
                }
                setIsTyping(false); // Esconde as caixas de texto após a animação terminar
                setDisplayedText("");
                setIsClosing(false); // Reseta o estado para a próxima vez que abrir
            }, 400); // 400ms bate certinho com o slideOut do CSS

            return;
        }

        setDisplayedText("");
        setIsTyping(true);
        setIsMusicPlaying(true);
    };

    return (
        <S.FooterMessageWrapper>
            <S.SoulWrapper $active={isTyping} onClick={handleSoulClick}>
                {isTyping ? <UndertaleRedSoulIcon /> : <UndertaleRedSoulBrokeIcon />}
            </S.SoulWrapper>

            {isTyping && (
                <S.Message $leaving={isClosing}>
                    {displayedText}
                </S.Message>
            )}
        </S.FooterMessageWrapper>
    );
}