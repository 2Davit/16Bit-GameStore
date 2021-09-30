import styled, { createGlobalStyle } from 'styled-components';
import SVG from 'react-inlinesvg';


export const GlobalStyle = createGlobalStyle`

    body {
        margin: 0;
        padding: 0;
        font-family: 'Press Start 2P', cursive;
        background-color:#2c2f31;
        color:white;
		
    }

`

// Styled components globales:
export const Btn = styled.button`
	font-weight: 900;
	border-radius: 10em;
	padding: .7em 1.2em;
	transition: transform 25ms ease, box-shadow 25ms ease;
	min-width: 175px;
	letter-spacing: 0.03em;
    height: fit-content;
	

    &.btn-card {
		color: white;
		background-color: #51A5FE;
		border-color: #51A5FE;
		box-shadow: 2px 2px 0px rgba(0,0,0,.15);
        
	}
    &.btn-card:hover {
        background-image: linear-gradient(45deg, #51A5FE, #0B53D7);
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



`



export const StyledSVG = styled(SVG)`
`