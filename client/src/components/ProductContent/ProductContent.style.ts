import styled from 'styled-components'
import { Link } from 'react-router-dom'
import  {GoArrowRight} from 'react-icons/go'
import {GoArrowLeft} from 'react-icons/go'


export const ContainerMainContent = styled.div`
    height: 100%;
    width: 100%;

`
export const ContainerNav = styled.div`
    height: 5%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #000000;
    
`
export const ContainerCards = styled.div`
    height: 95%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
`
export const Searchbar = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
`
export const AddBtns = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    
`
export const AddBtn = styled(Link)`
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
    export const Search = styled.input`
        height: 60%;
        width: 40%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        border-radius: 1.5rem;
        border: none;
        outline: none;
        margin-left: 5px;
        padding: 0px 10px;
    `
    export const IconContainer = styled.div`
    margin: 1rem auto 0 auto;
    text-align: center;
    `
    interface BtnPropsIcon {
        byeBtnI: boolean;
    }
    
    export const IconNext = styled(GoArrowRight)<BtnPropsIcon>` 
        font-size: 1.5rem;
        color: ${({byeBtnI}) => byeBtnI ? '#b4743d' : '#B55400'};
    `
    export const IconPrev = styled(GoArrowLeft)<BtnPropsIcon>`
        font-size: 1.5rem;
        color: ${({byeBtnI}) => byeBtnI ? '#b4743d' : '#B55400'};

    `
    interface BtnProps {
        byeBtn: boolean;
    }
    export const BtnPaged1 = styled.button<BtnProps>`
        border:none;
        margin: 0 .5rem;
        border-radius: 3px;
        background: ${({byeBtn}) => byeBtn ? '#515f75' : '#222831'};
        &:hover{
            background: ${({byeBtn}) => byeBtn ? '#515f75' : '#393E46'};
        }
        &:focus{
            outline: none;
            background: ${({byeBtn}) => byeBtn ? '#515f75' : '#393E46'};
        }
    `
    export const BtnPaged2 = styled.button<BtnProps>`
        border:none;
        margin: 0 .5rem;
        border-radius: 3px;
        background: ${({byeBtn}) => byeBtn ? '#515f75' : '#222831'};
        &:hover{
            background: ${({byeBtn}) => byeBtn ? '#515f75' : '#393E46'} ;
        }
        &:focus{
            outline: none;
            background: ${({byeBtn}) => byeBtn ? '#515f75' : '#393E46'};
        }
    `

    export const ContainerNotExist = styled.div`
        height: 70%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h5{
            color: #393E46;
            font-size: 1rem;
        }
    `

export const H2 = styled.h2`
        color: #000;
        font-size: 2rem;
    `
