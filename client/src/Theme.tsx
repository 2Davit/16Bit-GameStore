import { FC, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyles/GlobalStyles";
import { ButtonTheme } from "./components";

const themes = {
  original: {
    bg: "#2c2f31",
    color: "#2c2f31",
    font: `Raleway`,
  },
  retro: {
    bg: "#2c2f31",
    color: "#2c2f31",
    font: `'Press Start 2P', cursive`,
  },
};

interface Props {
  children?: any;
  none?: string;
}

export const Theme: FC<Props> = ({ children, none }) => {
  const [theme, setTheme] = useState<any>(themes.retro);
  const [icon, setIcon] = useState<boolean>(true);

  const updateTheme = () => {
    if (theme === themes.original) {
      setTheme(themes.retro);
      setIcon(false);
    } else {
      setTheme(themes.original);
      setIcon(true);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <ButtonTheme none={none} updateTheme={updateTheme} theme={icon} />
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
