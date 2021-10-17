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

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        height: max-content;
        width: 100vw;
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

    @media screen and (max-width: 1000px) {
        width: 100%;
        height: 50vh;
        margin: 0 auto;
        border-radius: 2rem;
        object-fit: cover;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
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

    @media screen and (max-width: 1000px) {
     width: 100%;
     border-radius: 2rem;
     position: relative;
     border-top-left-radius: 0;
     border-top-right-radius: 0;

     h1 {
         text-overflow: ellipsis;
         overflow: hidden;
     }
    }
`


export const OnSale = styled.img`
    transform: rotate(-20deg);
    position: relative;
    width: 190px;
    height: 120px;
    left: 2em;
    top: -3em;

    @media screen and (max-width: 400px) {
        width:50%;
        height: 26%;
        position: absolute;
        right: -1em;
        left: auto;
        top: -.9em;
    }
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

    @media screen and (max-width: 1000px) {
     display: none;
    }
`

export const IconRight = styled(BiRightArrow)`
    color: ${p => p.theme.color};

    @media screen and (max-width: 1000px) {
     display: none;
    }
`

export const IconLeft = styled(BiLeftArrow)`
    color: ${p => p.theme.color};

    @media screen and (max-width: 1000px) {
        display: none;
    }
`