import { createContext, useContext, useState } from "react";

type UndertaleContextType = {
  isTyping: boolean;
  setIsTyping: (v: boolean) => void;
  isClosing: boolean; // <-- Novo
  setIsClosing: (v: boolean) => void; // <-- Novo
  isMusicPlaying: boolean;
  setIsMusicPlaying: (v: boolean) => void;
};

const UndertaleContext = createContext<UndertaleContextType | undefined>(undefined);

export function UndertaleProvider({ children }: { children: React.ReactNode }) {
  const [isTyping, setIsTyping] = useState(false);
  const [isClosing, setIsClosing] = useState(false); // <-- Novo
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  return (
    <UndertaleContext.Provider value={{ isTyping, setIsTyping, isClosing, setIsClosing, isMusicPlaying, setIsMusicPlaying }}>
      {children}
    </UndertaleContext.Provider>
  );
}

export function useUndertale() {
  const context = useContext(UndertaleContext);
  if (!context) throw new Error("useUndertale deve ser usado dentro de UndertaleProvider");
  return context;
}