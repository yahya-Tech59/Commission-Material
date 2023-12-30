import {
  Box,
  Button,
  Paper,
  IconButton,
  ThemeProvider,
  CssBaseline,
  createTheme,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useState } from "react";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3A57E8",
    },
    secondary: {
      main: "#00a2ff",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3A57E8",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#00a2ff",
    },
    background: {
      default: "#333",
      paper: "#444",
    },
  },
});

const [darkMode, setDarkMode] = useState(false);

const toggleDarkMode = () => {
  setDarkMode((prevDarkMode) => !prevDarkMode);
};

const theme = darkMode ? darkTheme : lightTheme;

export const Theme = () => {
  return (
    <div>
      <Box sx={{ position: "absolute", ml: 192, mt: 3.5 }}>
        <Button onClick={toggleDarkMode} sx>
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </Button>
      </Box>
    </div>
  );
};
