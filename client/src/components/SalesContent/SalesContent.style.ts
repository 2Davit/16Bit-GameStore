import styled from 'styled-components'


export const OrderMainContainer = styled.div`
width:100%;
height:95%;
display: flex;
flex-direction: column;

align-items: center;
`

export const TitleContainer = styled.div`
display: flex;
background: #222831;
color: #ffffff;
min-width: 95%;
margin-top: 2rem;
`
interface Props {
    backg: string;
}

export const OrderContainer = styled.div<Props>`
display: flex;
background: ${({ backg }) => backg}; 
min-width: 95%;
`

export const InfoOrder = styled.span`
border: 1px solid #222831;
color: #000000;
width:16.666%;
padding: 0.25rem;
`

export const TitleOrder = styled.span`
color: #eeeeee;
border: 1px solid #222831;
width:16.666%;
padding: 0.25rem;
`

export const OrderSelect = styled.select`
    width: 20%;
    margin-right: 1rem;
background: transparent;
font-weight: bold;
border: none;
    &:focus{
    outline: none;
    }
color: #eeeeee;
    option{
        background: #222831;
    }

`
export const NavBtn = styled.button`
height: 100%;
    width: 20%;
    background: transparent;
    border: none;
    color: #eeeeee;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    &:hover{
        border-bottom: 3px solid #B55400;
        border-top: 3px solid transparent;
        background: #393E46;
        color: #eeeeee;
        text-decoration: none;
    }
    &:focus{
        color: #B55400;
        background: #393E46;
        outline: none;
        border-bottom: 3px solid #B55400;
        border-top: 3px solid transparent;
    }
`
