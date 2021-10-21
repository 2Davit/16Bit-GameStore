import { FC, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyles/GlobalStyles";
import { ButtonTheme } from "./components";
import backRetro from "./assets/back.png";
import blueBack from "./assets/img/blueBack.svg";

const themes = {
  original: {
    background: `url(${blueBack})`,
    backgroundNav: "rgba(21,90,164,0.6615021008403361)",
    fontSize: "1rem",
    fontSizeTitle: "2.4rem",
    borderSearch: '#00a8ff',
    radiusSearch: '99em',
    backgroundSearch: '#ffffff',
    colorSearch: '',
    carouselBackg: 'rgba(0,168,255,0.4500175070028011)',
    carouselColor: '#ffffff',
    top: '99px',
    bottom: '10px',
    carouselBorder: 'none',
    carouselBorderOnsale: 'none',
    carouselBorderRadius: '2rem',
    carouselBtnArrow: '2em',
    carouselBtnBack: '#00a8ff',
    filterButtonBorder: '10em',
    removeFilBtn: '#911F27',
    removeBorderBtn: 'none',
    removeColorBtn: '#ffffff',
    removeColorBtnHover: '#ffffff',
    onSaleFilBtn: '#0a3364',
    onSaleFilBtnHover: '#00a8ff',
    onSaleBorderBtn: 'none',
    onsaleColorBtn: '#ffffff',
    onsaleColorBtnHover: '#ffffff',
    selectTextColor: '#e1e1e1',
    selectHoverColor: '#0a3364',
    slectHoverColor: '#eeeeee',
    paginateBtnRadius: '99em',
    paginateFontSize: '1.2rem',
    paginateBackBtn: '#00a8ff',
    paginateBtnColor: '#ffffff',
    footerBack: 'linear-gradient(0deg, transparent, #0a3364)',
    footerBorderTop: 'none',
    footerColor: '#ffffff',
    footerColorHover: '#00a8ff',
    bg: "#000000",
    bgSub:
      " linear-gradient(174deg, rgba(222,2,2,1) 0%, rgba(255,222,0,1) 95%)",
    bgBorder: "none",
    color: "#fff",
    font: `'Poppins', sans-serif`,
    fontAdmin: `'Raleway', cursive`,
  },
  retro: {
    background: `url(${backRetro})`,
    backgroundNav: "transparent",
    fontSize: ".65rem",
    fontSizeTitle: "2rem",
    borderSearch: 'rgb(55, 244, 59)',
    radiusSearch: '0',
    backgroundSearch: '#000000',
    colorSearch: 'rgb(55, 244, 59)',
    carouselBackg: 'black',
    carouselColor: 'rgb(55, 244, 59)',
    top: '0',
    bottom: '0',
    carouselBorder: '8px double rgb(253, 44, 201)',
    carouselBorderOnsale: '6px dashed greenyellow',
    carouselBorderRadius: '0',
    carouselBtnArrow: '0',
    carouselBtnBack: 'rgb(155, 99, 244)',
    filterButtonBorder: '0',
    removeFilBtn: 'transparent',
    removeBorderBtn: '4px double red',
    removeColorBtn: 'red',
    removeColorBtnHover: '#000000',
    onSaleFilBtn: 'transparent',
    onSaleFilBtnHover: '#0175b1',
    onSaleBorderBtn: '5px double #00a8ff',
    onsaleColorBtn: '#00a8ff',
    onsaleColorBtnHover: '#000000',
    selectTextColor: 'rgb(55, 244, 59)',
    selectHoverColor: 'rgb(55, 244, 59)',
    slectHoverColor: '#000000',
    paginateBtnRadius: '0',
    paginateFontSize: '1rem',
    paginateBackBtn: 'rgb(55, 244, 59)',
    paginateBtnColor: '#000000',
    footerBack: 'rgb(52, 26, 129)',
    footerBorderTop: '12px double rgb(253, 44, 201)',
    footerColor: 'greenyellow',
    footerColorHover: 'green',
    bg: "#2c2f31",
    bgSub: "#f741d5",
    bgBorder: "5px 5px 0px rgb(253, 44, 201)",
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
