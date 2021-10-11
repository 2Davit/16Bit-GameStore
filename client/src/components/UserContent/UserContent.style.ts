import styled from 'styled-components'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'


export const UserMainContainer = styled.div`
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

export const UserContainer = styled.div<Props>`
display: flex;
background: ${({backg}) => backg}; 
min-width: 95%;
`
export const UserButtons = styled.button<Props>`
background: ${({backg}) => backg}; ;
border: none;
/* border-bottom: 1px solid #222831; */
width: 6.25%;
`

export const InfoUser = styled.span`
color: black;
border: 1px solid #222831;
color: #000000;
width: 14.3752%;
padding: 0.25rem;
`
export const InfoUserMini = styled.span`
color: black;
color: #000000;
border: 1px solid #222831;
width: 7.812%;
padding: 0.25rem;
`

export const TitleUser = styled.span`
color: #eeeeee;
border: 1px solid #222831;

width: 14.3752%;
padding: 0.25rem;
`
export const TitleUserMini = styled.span`
color: #eeeeee;
border: 1px solid #222831;

width: 7.812%;
padding: 0.25rem;
`

export const TitleBlankDiv = styled.span`
background: #222831;
width: 12.5%;
`

export const IconUsersEdit = styled(AiFillEdit)`
    color:  #c3630f;
    font-size: 1.6rem;
`
export const IconUsersDelete = styled(AiFillDelete)`
    color:  #911F27;
    font-size: 1.6rem;    
`