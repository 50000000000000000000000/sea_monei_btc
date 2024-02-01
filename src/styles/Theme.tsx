import { createTheme, responsiveFontSizes } from "@mui/material";

export let theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#000",
    },
  },
});
theme = responsiveFontSizes(theme);
