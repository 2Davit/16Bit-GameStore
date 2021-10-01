import styled from 'styled-components';
import SVG from 'react-inlinesvg';

export const  StyledCartSideBar = styled.div`
		.modal {
		position: fixed;
		right: 0;
		top: 0;
		height: 100vh;
		width: 500px;
		padding: 4em 2em;
		overflow: auto;
		box-shadow: 0 0 50px rgba(0,0,0,0.7);


		.modal__title{
			color: #51A5FE;
			margin: 1em 0;
			text-align: center;
		}

		.modal__subtotal {
			display: flex;
			justify-content: space-between;
			font-size: 1.2em;
			text-transform: uppercase;
			margin-bottom: 2em;

		}
		.modal__close {
			position: absolute;
			top: 2em;
			left: 2em;
			height: 40px;
			width: 40px;
			border: none;
			background: none;

			&:hover {
				svg{
					fill: #1b1a1f;
				}
			}
			&:focus {
				outline: none;
				color: #1b1a1f;
			}

			&:active{
				transform: scale(0.9);
			}
		}

		.modal__buttons {
      position:relative;
      top: 6em;
			display: flex;
			justify-content: space-between;
			margin: 0 0.2em;
		}

			}
`

export const StyledCloseBtn = styled(SVG)`
	width: 40px;
	height: 40px;
	fill: #999;  
`