import { FC, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyles/GlobalStyles";
import { ButtonTheme } from "./components";
import backGabo from './assets/img/back.jpeg'

const themes = {
  original: {
    background: "linear-gradient(0deg, rgba(6,31,60,1) 0%, rgba(21,90,164,1) 100%);",
    backgroundNav: "rgba(21,90,164,0.6615021008403361)",
    bg: "#000000",
    bgSub:
      " linear-gradient(174deg, rgba(222,2,2,1) 0%, rgba(255,222,0,1) 95%)",
    bgBorder: "#ffde00",
    color: "#fff",
    font: `'Raleway', cursive`,
    fontAdmin: `'Raleway', cursive`,
  },
  retro: {
    background: `url(${backGabo})`,
    backgroundNav: "linear-gradient(180deg, #0266c8, transparent);",
    bg: "#2c2f31",
    bgSub: "#f741d5",
    bgBorder: "#00a8ff",
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
  const [theme, setTheme] = useState<any>(themes.original);
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
