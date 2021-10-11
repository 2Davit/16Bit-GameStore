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
background: ${({backg}) => backg}; 
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