import { FC, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyles/GlobalStyles";
import { ButtonTheme } from "./components";

const themes = {
  original: {
    bg: "#000000",
    bgSub:
      " linear-gradient(174deg, rgba(222,2,2,1) 0%, rgba(255,222,0,1) 95%)",
    bgBorder: "#ffde00",
    color: "#fff",
    font: `'Raleway', cursive`,
    fontAdmin: `'Raleway', cursive`,
  },
  retro: {
    bg: "#2c2f31",
    bgSub: "#9b5df7",
    bgBorder: "#9b5df7",
    color: "#F5F4F8",
    font: `'Press Start 2P', cursive`,
    fontAdmin: `'Raleway', cursive`,
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
