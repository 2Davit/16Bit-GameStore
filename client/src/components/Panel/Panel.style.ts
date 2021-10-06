import styled from 'styled-components'
import { AiFillHome } from 'react-icons/ai'
import { FaMoneyBillWave } from 'react-icons/fa'
import { BiJoystickAlt } from 'react-icons/bi'
import { HiUsers } from 'react-icons/hi'

export const ContainerPanel = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #222831;
`
export const  ContainerImageUser = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
`
export const  Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 30px;
`
export const  NameImage = styled.h5`
    font-size: .8rem;
`
export const  BtnAdminPanel = styled.button`
    height: 50px;
    width: 100%;
    border: none;
    background: transparent;
    color: #ffffff;
    /* text-align: start; */
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    &:hover{
        border-left: 3px solid #B55400;
        border-right: 3px solid transparent;
        background: #393E46;
    }
    &:focus{
        color: #B55400;
        background: #393E46;
        outline: none;
        border-left: 3px solid #B55400;
        border-right: 3px solid transparent;
    }
`

export const IconHome = styled(AiFillHome)`
    font-size: 1.2rem;
    margin: 0 5px 2px 0;
`
export const IconSales = styled(FaMoneyBillWave)`
    font-size: 1.2rem;
    margin: 0 5px 2px 0;
`
export const IconProducts = styled(BiJoystickAlt)`
    font-size: 1.2rem;
    margin: 0 5px 2px 0;
`
export const IconUsers = styled(HiUsers)`
    font-size: 1.2rem;
    margin: 0 5px 2px 0;
`
