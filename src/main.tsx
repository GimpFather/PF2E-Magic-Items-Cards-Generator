import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme.ts";
import { IntlProvider } from "react-intl";
import en_EN from "./en_EN.json";
import AppRouting from "./AppRouting.tsx";
import { BrowserRouter } from "react-router";
import "./app.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <IntlProvider messages={en_EN} locale="en">
        <BrowserRouter>
          <AppRouting />
        </BrowserRouter>
      </IntlProvider>
    </ThemeProvider>
  </StrictMode>
);
