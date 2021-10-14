import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { FaMoneyBillWave } from "react-icons/fa";
import { BiJoystickAlt } from "react-icons/bi";
import { HiUsers } from "react-icons/hi";
import { Link } from "react-router-dom";

export const ContainerPanel = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  background: #222831;
`;
export const LogoLink = styled(Link)`

    width: 100%;
    height: 5%;
    background: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
    text-decoration: none;
   } 
`
export const LogoAdmin = styled.img`
    width: 65%;
    height: 100%;
    object-fit: cover;
    `
export const H2 = styled.h2`
   color: #fff;
   font-size: 1.8em;
   margin: 0;
   &:hover{
       color: #eeeeee;
   }
     
`
export const  ContainerImageUser = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
`
export const  NameImage = styled.h5`
    font-size: .8rem;
    margin: 10px 0 0 0;
`
export const  Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 10px 0 20px ;
`
export const  BtnAdminPanel = styled.button`
    height: 50px;
    width: 100%;
    border: none;
    background: transparent;
    color: #eeeeee;
    /* text-align: start; */
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    padding: 10px;
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
`;
export const IconSales = styled(FaMoneyBillWave)`
  font-size: 1.2rem;
  margin: 0 5px 2px 0;
`;
export const IconProducts = styled(BiJoystickAlt)`
  font-size: 1.2rem;
  margin: 0 5px 2px 0;
`;
export const IconUsers = styled(HiUsers)`
  font-size: 1.2rem;
  margin: 0 5px 2px 0;
`;
