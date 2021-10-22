import { Link } from "react-router-dom";
import styled from "styled-components";
import Arcade from "../../assets/Landing.png"
import Space from "../../assets/LandingGif.gif"

export const StyledLanding = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgb(25, 25, 25);
`;
export const ArcadeLanding = styled.div`
  width: 700px; 
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${Arcade});
  background-position: center center;
  background-size: cover;
  
  background-repeat: no-repeat;

  @media (max-width: 414px) {
    width: 400px; 
    height: 400px;
  }
`;
export const ArcadeGi = styled.div`
  width: 370px; 
  height: 280px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${Space});
  background-position: center center;
  background-size: cover;
  
  background-repeat: no-repeat;

  @media (max-width: 414px) {
    width: 225px; 
    height: 130px;
  }
`;
export const TitleLanding = styled.h1`
  font-size: 6rem;
  @media (max-width: 414px) {
    font-size: 2rem;
  }
`;
export const ContinerBtnLanding = styled(Link)`
  text-decoration: none;
  background: #000000;
  margin: 0;
  padding: 1em;
  border-left: 10px solid rgb(9, 85, 103);
  border-right: 10px solid rgb(9, 85, 103);
  border-bottom: 10px solid rgb(9, 85, 103);
  width: 700px;
  display:flex;
  justify-content: center;
  @media (max-width: 414px) {
    width: 400px;
  }
`;
export const ButtonL = styled.button`
  border: none;
  outline: none;
  background: transparent;
  padding: 1em;

  
  display: block;
  width: auto;
  height: auto;
  padding: 0;
  text-align: center;
  font-size: 2.5em;
  @media (max-width: 414px) {
    font-size: 1.2em;
  }
  font-family: 'Press Start 2P', cursive;
  transform: perspective(200px) rotateX(5deg);
  letter-spacing: .2em;
  user-select: none;
  text-shadow: 
    0 -1px 0 #fff, 
    0 1px 0 #004d40, 
    0 2px 0 #00483B, 
    0 3px 0 #004639, 
    0 4px 0 #004336, 
    0 5px 0 #004134, 
    0 6px 0 #003F32, 
    0 7px 0 #003D30, 
    0 8px 0 #003A2D, 
    0 9px 0 #00382B, 
    0 10px 0 #003528, 
    0 11px 0 #003225, 
    0 12px 0 #002F22, 
    0 13px 0 #002B1E, 
    0 14px 0 #00281C, 
    0 15px 0 #001F13, 
    0 22px 30px rgba(0,0,0, 0.9),
    0 22px 30px rgba(0, 0, 0, 0.9),
    0 22px 15px rgba(0, 0, 0, 0.9),
    0 11px 15px rgba(0, 0, 0, 0.9),
    0 15px 20px yellow,
    0 15px 11px rgba(0, 0, 0, 0.9),
    0 16px 11px rgba(0, 0, 0, 0.9);

  transition: text-shadow .3s ease .3s, 
    transform .3s ease .3s,
    letter-spacing .3s ease .3s;

  &:hover {
    transition: text-shadow .33s ease, 
      transform .3s ease,
      letter-spacing .3s ease;
    text-shadow: 0 0 0 #004134,
      0 1px 0 #00483B,
      0 2px 0 #003528,
      0 3px 3px rgba(0, 0, 0, 0.9);
    transform: translate(0px, 15px) 
      perspective(200px) 
      rotateX(10deg);
    letter-spacing: .125em;
  }


  &:focus{
    outline: none;
  }
`;
