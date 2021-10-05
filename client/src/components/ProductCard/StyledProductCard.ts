import styled from 'styled-components';

export const StyledProductCard = styled.article`
	/* font-family: 'Press Start 2P'; */
	font-size: 0.8em;
	border: 3px solid ${p => p.theme.bgBorder};
	width: 260px;
	border-radius: 10px;
	overflow: hidden;
	box-shadow: 5px 5px 0px ${p => p.theme.bgBorder};
	position: relative;
	transition: all 0.1s ease-in-out;
	height: 400px;

	&:hover
	{ 
		transform: translate(5px, 5px);
		box-shadow: none;
	}

	.card__link {
		color: transparent;
		position: absolute;
		top: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
	}

	.card__imgContainer {
		width: 100%;
		height: 50%;
	}

	.card__img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top center;
		transition: filter 0.5s ease;
	}

	&:hover .card__img {
		filter: grayscale(100%);
	}

	.card__content {
		padding: 0.5em 1em;
		height: 50%;
		position: relative;
		display: flex;
		flex-direction: column;
	}

	.card__title {
		font-size: 1.2em;
		color: #fff !important;
		font-weight: 900;

	}

	.card__price {
		font-size: 1.2em;
		font-weight: 900;
		position: relative;
	}

	.card__price::before {
		content: '';
		background: ${p => p.theme.bgSub};
		display: block;
		width: 20%;
		height: 5px;
		margin: 0.5em 0;
	}
	
	button {
		font-size: 0.9em;
		margin-top: auto;
		margin-bottom: .5em;
		z-index: 100;
		min-width: 200px;
	}
	
	.card__noStock {
		margin-top: auto;
		margin-bottom: .5em;
	}

`;

export const MiniCard = styled.article`
	position: relative;
	display: flex;
	border: 2px solid #51A5FE;
	border-radius: 0.5em;
	margin-bottom: 1em;
	align-items: center;
	justify-content: flex-start;
	padding: 1em 1.5em 1em 1em;

	a {
		color: currentColor;
		text-decoration: none;

		&:hover {
			color: #51A5FE;
		}
	}

	&:hover {
		border: 2px solid #0B53D7;
	}

	.article__img{
		height: 100px;
		flex: 0 0 150px;
		margin-right: 1em;
		border-radius: 10px;
		overflow: hidden;
	}

	
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.delete__product {
		position: absolute;
		right: 10px;
		top: 10px;
		background: none;
		border: none;
		width: 25px;
		height: 25px;
		transition: opacity 0.4s ease;
		
		svg {
			width: 25px;
			height: 25px;
			fill: #51A5FE;
			}

		&:hover svg {
			fill: #0B53D7;
		}

		&:focus {
			outline: none;
		}
		&:active{
			transform: translateY(1px);
		}
	}	

	.article__quantitybuttons{			
		span{
			margin-left: 5px;
			font-size:0.8em;
		
		}
	}
`