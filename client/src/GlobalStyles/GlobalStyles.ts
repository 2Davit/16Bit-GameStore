import styled, { createGlobalStyle } from "styled-components";
import SVG from "react-inlinesvg";
import backGabo from '../assets/img/back.jpeg'

interface DefaultTheme {
  bg: any;
  color: string;
  font: string;
  background: string;
}

export const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`

#root {
  overflow-x: hidden;
}

:root {
  --clr-primary: #00a8ff;
  --clr-primary-2: #00a8ff;
  --clr-secondary: #5630e4;
  --clr-secondary-2: #4424b9;
  --clr-secondary-3: #5a50f0;
  --clr-white: #f5f4f8;
  --clr-middle: #7e7e7e;
  --clr-middle-2: #eee;
  --clr-dark: #1f0156;
  --clr-dark-1: #370276;
  --clr-dark-2: #090029;  
  --clr-error: #D53051;
  --clr-error-2: #972038;
}



/* width */
::-webkit-scrollbar {
  // display:none;
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
		background: ${p => p.theme.background};
		background-position:center right;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
        margin: 0;
        padding: 0;
        font-family: ${(p) => p.theme.font};
        color:white;
		min-height: 100vh;
		min-width: 100vw;
		overflow-x: hidden;
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

  max-width: 1300px;
    min-width: 300px;
    margin-right: auto;
    margin-left: auto;
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

  &.btn-fav{
    background:red ;  
    width: 1em;
    height: 3em;
  }
  &.btn-sec {
    color: #eeeeee;
    background-color: #911F27;
    border:none;
    &:hover {
      background-color: #B3141C;
    }
    &:focus{
      outline: none;
    }
  }

  &.btn-card {
    color: white;
    background-color: #0a3364;
    border-color: var(--clr-primary);
    border: none;
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

  &.btn-sinstock{
   background: #000; 
   border:3px solid transparent;
   outline: 3px solid var(--clr-primary);
   color:var(--clr-primary);
  }
  &.btn-sinstock:hover{
    cursor:inherit;
  }
  &.btn-sinstock:focus{
    outline: 3px solid var(--clr-primary);
  }
  &.btn-disabled{
    background: #222831;
    border: none;
    color: #5f5f5f;

    
  }
  &.btn-disabled:focus{
    outline: none;
  }

  &.btn-danger {
    color: var(--clr-error);
    border-color: var(--clr-error);
    box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.15);

    &:hover {
      color: var(--clr-white);
      background-color: var(--clr-error);
    }
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
    min-width: 150px;
    position: absolute;
    left: 50%;
    top: 110%;
    transform: translateX(-50%);
    padding-top: 1em;
    font-size: 0.9em;
    color: var(--clr-dark);
    background-color: var(--clr-white);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
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

    .dropdown__first-name {
      color: var(--clr-primary);
      font-weight: 900;
      border-bottom: 1px solid #ccc;
      text-align: center;
    }
  }
`;

export const Badge = styled.span`
	display: inline-block;
	min-width: 175px;
	margin-top: 1em;
	padding: .7em 1.2em;
	font-size: .75em;
	font-weight: 900;
	text-align: center;
	color: var(--clr-white);
	border-radius: 10em;

	&.warning {
		background-color: var(--clr-warning);
	}
	
	&.error {
		background-color: var(--clr-error);
	}

	&.success {
		background-color: var(--clr-success);
	}

	&.secondary {
		background-color: var(--clr-secondary);
	}

	&.dark {
		background-color: var(--clr-dark);
	}

	&.small {
		width: 50px;
	}
`

export const StyledSVG = styled(SVG)``;

export const BtnCartCard = styled.button`
min-width: 0;
width: 20%;
height: 20%;
background: red !important;
border: none !important;
 img {
    
    width: 100%;
    height: 100%;
  }
`

export const OfferImg = styled.img`
position: absolute;
top: 0;
left: 0;
width: 20%;
height: 20%;
`