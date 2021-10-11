import styled, { createGlobalStyle } from "styled-components";
import SVG from "react-inlinesvg";

interface DefaultTheme {
  bg: any;
  color: string;
  font: string;
}

export const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`

:root {
  --clr-primary: #9b5df7;
  --clr-primary-2: #763fc7;
  --clr-secondary: #5630e4;
  --clr-secondary-2: #4424b9;
  --clr-secondary-3: #5a50f0;
  --clr-white: #f5f4f8;
  --clr-middle: #7e7e7e;
  --clr-middle-2: #eee;
  --clr-dark: #1f0156;
  --clr-dark-1: #370276;
  --clr-dark-2: #090029;  
}

/* width */
::-webkit-scrollbar {
  width: 14px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #000;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--clr-primary);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--clr-primary-2);
}

::selection {
  background-color: var(--clr-primary);
  color: var(--clr-white);
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

    body {
		background:url("https://eightbitweapon.files.wordpress.com/2014/07/8-bit-weapon-bits-with-byte-background.png");
		background-position:center right;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
        margin: 0;
        padding: 0;
        font-family: ${(p) => p.theme.font};
		background-color: ${(p) => p.theme.bg};
        color:white;
		min-height: 100vh;
		min-width: 100vw;
		overflow-x: hidden ;
    }

	ul{
		padding-inline-start: 0;
	}

`;

export const Container = styled.div`
  width: 100%;
  /* max-width: 800px; */
  height: 100%;
  margin: 0;
  padding: 0;
`;

// Styled components globales:
export const Btn = styled.button`
  font-weight: 900;
  border-radius: 10em;
  padding: 0.7em 1.2em;
  transition: transform 25ms ease, box-shadow 25ms ease;
  min-width: 175px;
  letter-spacing: 0.03em;
  height: fit-content;

  &.btn-sec {
    color: white;
    background-color: var(--clr-dark-1);
    box-shadow: rgb(0 0 0 / 50%) 5px 5px 0px;
    border: 2px solid white;
    &:hover {
      border: 2px solid var(--clr-primary);
      background-color: var(--clr-primary);
    }
  }

  &.btn-card {
    color: white;
    background-color: var(--clr-primary);
    border-color: var(--clr-primary);
    box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.15);
  }


  &.btn-card:hover {
    background-image: linear-gradient(
      45deg,
      var(--clr-primary),
      var(--clr-primary-2)
    );
  }
  &.btn-card:focus {
    outline: none;
  }


  &.btn-img {
    position: relative;
    padding: 1em 4em 1em 1.2em;
  }

  &.btn-img svg {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 25px;
    height: 25px;
    fill: currentColor;
  }
  &.btn-card-disabled {
    color: white;
    background-color: grey;
    border-color: var(--clr-primary);
    box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.15);
  }
`;

export const QuantityButton = styled.button`
  color: var(--clr-white);
  background-color: var(--clr-primary);
  border-radius: 100%;
  border: none;
  width: 25px;
  height: 25px;
  font-weight: 400;

  &:active {
    background-color: var(--clr-primary-2);
  }
  &:focus {
    outline: none;
  }
`;

export const Hr = styled.hr`
  height: 1px;
  margin: 3em auto;
  border: none;
  background: #ccc;
`;

export const Dropdown = styled.li`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  top: -1px;

  &:hover > ul {
    display: block;
    list-style: none;
  }

  & > ul {
    display: none;
    position: absolute;
    left: 50%;
    top: 120%;
    transform: translateX(-50%);
    padding-top: 1em;
    font-size: 0.9em;
    color: var(--clr-dark);
    background-color: var(--clr-white);
    box-shadow: 0 0 20px rgba(0, 0, 0);
    border-radius: 0.4em;
    z-index: 10;

    &::before {
      content: "";
      width: 0px;
      height: 0px;
      position: absolute;
      top: -19px;
      left: 50%;
      transform: translateX(-50%);
      border: 10px solid transparent;
      border-bottom-color: var(--clr-white);
    }

    a,
    .dropdown__button {
      text-align: center;
      display: block;
      width: 100%;
      padding: 1em 2em;
      text-decoration: none;
      color: currentColor;
      &:hover {
        background-color: var(--clr-primary-2);
        color: var(--clr-white);
      }
    }
  }
`;

export const Flex = styled.div`
	display: flex;
	justify-content: 'center';
	align-items: 'center';	
	@media (max-width: 1000px) {
		flex-direction: column;
	}
`

export const StyledSVG = styled(SVG)``;
