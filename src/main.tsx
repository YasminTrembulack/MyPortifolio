import { UndertaleProvider } from "./context/UndertaleContext/UndertaleContext.tsx";
import { ThemeProvider } from "styled-components";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { theme } from "./styles/theme.ts";
import App from "./App.tsx";
import "./i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <UndertaleProvider>
        <App />
      </UndertaleProvider>
    </ThemeProvider>
  </StrictMode>,
);
