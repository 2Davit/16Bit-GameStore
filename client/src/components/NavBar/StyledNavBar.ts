import styled from 'styled-components';
import SVG from 'react-inlinesvg';


export const StyledNavBar = styled.nav`
	background: #1b1a1f;
	padding: 2em 0;
	color: #fff;
	position: relative;

	a {
		text-decoration: none;
		color: currentColor;
		font-weight: 500;
      
        text-align:center;;

		&:hover {
			color: #51a5fe;
		}
	}

	svg  { fill: currentColor; }
	
	.navbar__top {
		display: flex;
		justify-content: space-between;
		align-items: center;
        margin: 1em;

		.navbar__logo {
			color: #fff;
			flex-basis: 300px;
		}
		
		form {
			margin: 0 2em;
			flex-basis: 400px;
            
		}

		.navbar__options {
			list-style: none;
			display: flex;
			align-items: center;
			flex-basis: 300px;
            justify-content: space-between;
            
            

			.navbar__profile-pic {
				width: 40px;
				height: 40px;
				border: 3px solid #fff;
				border-radius: 50%;
				overflow: hidden;
                

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}

			& > li {
				position: relative;
				cursor: pointer;
                display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				cursor: pointer;
			}

			

			

			li:hover {
				color: #51a5fe;

				.navbar__profile-pic {
					border-color: #51a5fe;
				}
			
			}

			.cart__number {
				font-size: 0.8em;
				background: #51a5fe;
				line-height: 1;
				padding: .3em .5em;
				border-radius: 99em;
				position: absolute;
				top: -5px;
				right: -5px;
			}
			li:hover .cart__number { color: #fff }

			button {
				background: none;
				border: none;
				color: inherit;
				font: inherit;
                &:focus{
                    outline:none;
                }
			}
		}
	}


	.navbar__bottom {

		.navbar-bottom__menu {
			margin: 0 auto;
			display: flex;
			justify-content: center;
			align-items: center;
			list-style: none;
			color: currentColor;
			cursor: default;

			& > li + li { margin-left: 3.5em; }
		}
	}
	@media (max-width: 1000px){
		.navbar__top{
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin-bottom: 0;
			form {
				flex-basis: 0;
			}
			.navbar__logo{
				margin-bottom: 2em;
				flex-basis: 0;
			}
			.navbar__options{
				flex-basis: 0;
				margin: 2em 0 0;
				font-size: .9em;
				li svg{
					width: 35px;
				}
				& > li + li { margin-left: 1.5em; }
			}
		}
		.navbar__bottom{
			display: none;
		}
	}
`

export const StyledSVG = styled(SVG)`
width:50px;
height:50px;
`