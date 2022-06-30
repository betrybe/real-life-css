import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#12E497",
    },
    background: {
      default: '#ECECEC'
    }
  },
  typography: {
    h1: {
      fontSize: "3.4rem",
      fontWeight: 500
    }
  }
});

export default theme;
