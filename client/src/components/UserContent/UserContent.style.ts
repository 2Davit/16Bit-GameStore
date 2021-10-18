import styled from "styled-components";
import { AiFillDelete } from "react-icons/ai";
import { GiHammerDrop, GiHealing } from "react-icons/gi";
import { FaCrown } from "react-icons/fa";

export const UserMainContainer = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: column;

  align-items: center;
`;
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
  &:hover {
    border-bottom: 3px solid #b55400;
    border-top: 3px solid transparent;
    background: #393e46;
    color: #eeeeee;
    text-decoration: none;
  }
  &:focus {
    color: #b55400;
    background: #393e46;
    outline: none;
    border-bottom: 3px solid #b55400;
    border-top: 3px solid transparent;
  }
`;
// export const NavBtnContainer = styled.div`
//     height: 100%;
//     width: 50%;
//     display: flex;
//     align-items: center;

// `

export const TitleContainer = styled.div`
  display: flex;
  background: #222831;
  color: #ffffff;
  min-width: 95%;
  margin-top: 2rem;
`;
interface Props {
  backg: string;
}

export const UserContainer = styled.div<Props>`
  display: flex;
  background: ${({ backg }) => backg};
  min-width: 95%;
`;
export const UserButtons = styled.button<Props>`
  background: ${({ backg }) => backg};
  border: none;
  /* border-bottom: 1px solid #222831; */
  width: 6.25%;
`;

export const InfoUser = styled.span`
  color: black;
  border: 1px solid #222831;
  color: #000000;
  width: 14.3752%;
  padding: 0.25rem;
`;
export const InfoUserMini = styled.span`
  color: black;
  color: #000000;
  border: 1px solid #222831;
  width: 7.812%;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleUser = styled.span`
  color: #eeeeee;
  border: 1px solid #222831;

  width: 14.3752%;
  padding: 0.25rem;
`;
export const TitleUserMini = styled.span`
  color: #eeeeee;
  border: 1px solid #222831;

  width: 7.812%;
  padding: 0.25rem;
`;

export const TitleBlankDiv = styled.span`
  background: #222831;
  width: 12.5%;
`;

export const IconUsersBan = styled(GiHammerDrop)`
  color: #c3630f;
  font-size: 1.6rem;
`;
export const IconUsersUnban = styled(GiHealing)`
  color: green;
  font-size: 1.6rem;
`;
export const IconUsersDelete = styled(AiFillDelete)`
  color: #911f27;
  font-size: 1.6rem;
`;
export const IconUsersAdmin = styled(FaCrown)`
  color: #2b9a1c;
  font-size: 1.4rem;
`;
export const IconUsersAdmin2 = styled(FaCrown)`
  color: #c1bcbc;
  font-size: 1.4rem;
`;
