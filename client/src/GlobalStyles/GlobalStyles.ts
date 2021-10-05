import styled, { createGlobalStyle } from 'styled-components';
import SVG from 'react-inlinesvg';

interface DefaultTheme {
    bg: string;
	color: string;
	font: string;
}

export const GlobalStyle = createGlobalStyle<{theme: DefaultTheme }>`


    body {
        margin: 0;
        padding: 0;
        font-family: ${p => p.theme.font};
		background-color: ${p => p.theme.bg};
        color:white;
		min-height: 100vh;

    }

	ul{
		padding-inline-start: 0;
	}

`


export const Container = styled.div`
	width: 100%;
	/* max-width: 800px; */
	height: 100%;
	margin: 0;
	padding: 0;
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


	&.btn-sec {
			color: white;
			background-color: #2c2f31;
			box-shadow: rgb(0 0 0 / 50%) 5px 5px 0px;
			border: 2px solid white;
			&:hover {
				border: 2px solid #51A5FE;
				background-color: #51A5FE;
			}
		}

		&.btn-youtube {
			color: white;
			background-color: #2c2f31;
			box-shadow: rgb(0 0 0 / 50%) 5px 5px 0px;
			border: 2px solid white;
			&:hover {
				border: 2px solid #FE5EC4;
				background-color: #FE5EC4;
			}
		}

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

export const QuantityButton = styled.button`
	color: #fff;
	background-color: #51A5FE;
	border-radius: 100%;
	border: none;
	width: 25px;
	height: 25px;
	font-weight: 400;
	

	&:active {
		background-color: #0B53D7;
	}
	&:focus{
		outline:none;
	}
`

export const Hr = styled.hr`
	height: 1px;
	margin: 3em auto;
	border: none;
	background: #CCC;
`

export const Dropdown = styled.li`
	position: relative;
	padding-bottom: .8em;
	margin-bottom: -.8em;
	cursor: default;

	.dropdown-columns{
		columns: 3;
		column-rule: 1px solid #ccc;
		padding: 1em;

		li {
			break-inside: avoid;
			-webkit-column-break-inside: avoid;
			page-break-inside: avoid;

			a{ border-radius: .4em }
			&:last-of-type a { border-radius: .4em }
		}
	}

	&:hover > ul {
		display:block;
		list-style: none;
	}

	& > ul {
		display: none;
		min-width: 150px;
		position: absolute;
		left: 50%;
		top: 100%;
		transform: translateX(-50%);
		padding-top: 1em;
		font-size: 0.9em;
		color: #1b1a1f;
		background-color: #fff;
		box-shadow: 0 0 20px rgba(0,0,0,.7);
		border-radius: .4em;
		z-index: 10;

		&::before {
			content: '';
			width: 0px;
			height: 0px;
			position: absolute;
			top: -19px;
			left: 50%;
			transform: translateX(-50%);
			border: 10px solid transparent;
			border-bottom-color: #fff;
		}

		& li {
			margin: 0;
			width: 100%;
			cursor: pointer;
			
			&:last-of-type a, &:last-of-type button {
				border-radius: 0 0 .3em .3em;
			}
		}


		a, .dropdown__button {
			text-align: center;
			display: block;
			width: 100%;
			padding: 1em 2em;
			text-decoration: none;
			color: currentColor;
			&:hover {
				background-color: #0b53d7 !important;
				color: #fff!important;
			}
		}
			

		.dropdown__first-name {
			color: #51a5fe;
			font-size: 1.3em;
			font-family: Poppins, Raleway, sans-serif;
			font-weight: 900;
			border-bottom: 1px solid #CCC;
			padding-bottom: .5em;
			margin-bottom: .5em !important;
			text-align: center;
		}
	}

`

export const StyledSVG = styled(SVG)`
`