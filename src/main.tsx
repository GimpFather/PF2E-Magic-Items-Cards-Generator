import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme.ts";
import { IntlProvider } from "react-intl";
import en_EN from "./en_EN.json";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <IntlProvider messages={en_EN} locale="en">
        <App />
      </IntlProvider>
    </ThemeProvider>
  </StrictMode>
);
