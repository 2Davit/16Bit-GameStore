import styled from 'styled-components';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import { Link } from 'react-router-dom';


export const CarouselContainer = styled(Link)`
    height: 250px;
    display: flex;
    width: 80%;
    text-decoration: none;
    margin: 1rem auto;
    &:hover{
        text-decoration: none;
    }
`

export const Image = styled.img`
position:relative;
    height: 100%;
    width: 30%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
    &:hover{
		filter: grayscale(100%);
	}
`

export const CarouselSubContainer = styled.div`
    background: ${p => p.theme.bgSub};
    height: 100%;
    width: 70%;
    padding: 1rem;
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
    h1{
        color: ${p => p.theme.color};
    };
    span{
        color: ${p => p.theme.color};
    };
    p{
        color: ${p => p.theme.color};
    };
`


export const OnSale = styled.img`
    transform: rotate(-20deg);
    position: relative;
    width: 190px;
    height: 120px;
    left: 2em;
    top: -3em;
`


export const Button = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 0 1rem;
    border: none;
    outline: none;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${p => p.theme.bgSub};
    &:hover{
        border: none;
        outline: none;
        text-decoration: none;
    }
    &:focus{
        border: none;
        outline: none;
        text-decoration: none;
    }
`

export const IconRight = styled(BiRightArrow)`
    color: ${p => p.theme.color};
`

export const IconLeft = styled(BiLeftArrow)`
    color: ${p => p.theme.color};
`