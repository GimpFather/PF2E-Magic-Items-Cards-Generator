import { createTheme } from "@mui/material";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/700.css";

export const theme = createTheme({
  typography: {
    fontFamily: `'DM Sans', sans-serif`,
    itemName: {
      fontFamily: `'DM Sans', sans-serif`,
      fontSize: "1rem",
      fontWeight: 700,
    },
    itemText: {
      fontFamily: `'DM Sans', sans-serif`,
      fontSize: "0.667rem",
      fontWeight: 500,
    },
  },
});
