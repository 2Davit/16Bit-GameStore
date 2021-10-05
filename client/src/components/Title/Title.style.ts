import styled from "styled-components";


export const GameStore = styled.button`
background: none;
border: 2px solid ${p => p.theme.bgSub} ;
border-radius: 2rem;
color: white;
letter-spacing: .25rem;
font-weight: bold;
&:hover{
    border: 2px solid white;
    color: #51A5FE;
    }
`