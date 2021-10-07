import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
    background: #222831;
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
        border-radius: 10px;
    `
