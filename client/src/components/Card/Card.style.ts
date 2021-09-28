
import styled from 'styled-components';


export const CardContainer = styled.div `
    border: solid 3px red;
    height: 300px;
    width: 220px;
    position: relative;
`

export const CardImage = styled.img `
    height: 100%;
    width: 100%;
    object-fit: cover;
`

interface CardSubProps {
    readonly visible: boolean;
  }


export const CardSubContainer = styled.div<CardSubProps> `
    width: 100%;
    height: 100%;
    background-color: blue;
    position: absolute;
    top: 0;
    display: ${({visible}) => visible ? 'block' : 'none'};
`


export const CardButton = styled.button`
    position: absolute;
    z-index: 900;
    right: 0;

`



export const CardTitle = styled.h2 `
    color: white;
    
`

export const CardPrice = styled.h3 `
    color: white;
    
`

export const AddToCart = styled.button `
position: relative;
bottom: 3.5rem;
`