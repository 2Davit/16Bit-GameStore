import styled from "styled-components";
import SVG from "react-inlinesvg";
import { Container } from "../../GlobalStyles/GlobalStyles";

export const TotalNav = styled.div`
  width: 100vw;
  height: 90px;
  background: ${p => p.theme.backgroundNav};
  /* border-bottom: 1px solid rgba(6,31,60,0.9192051820728291);   */
  @media screen and (max-width: 414px){
    
    height: auto;
  }
`

export const StyledNavBar = styled(Container)`

  display: flex;
  justify-content: center;
  span{
      font-size: ${p => p.theme.fontSize};
    }
  
  a {
    text-decoration: none;
    color: currentColor;
    text-align: center;

    &:hover {
      color: var(--clr-primary);
    }
  }

  svg {
    fill: currentColor;
  }

  .navbar__top {
    width: 100%;
    display: flex;
    
    align-items: center;

    .search{
      height: 100%;
      width: 60%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .navbar__logo {
      /* flex-basis: 300px; */
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 20%;
      height: 100%;
      margin-left: 1rem;
    }

    form {
      /* margin: 0 2em; */
      /* flex-basis: 400px; */
    }

    .navbar__options {
      margin-top: 20px;
      width: 30%;
      height: 100%;
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;
      /* margin-right: 5vw; */

      & > li {
        /* background: red; */
        position: relative;
        display: flex;
        width: 33%;
        height: 100%;
        justify-content: center;
        align-items: flex-end;
        flex-direction: column;
        font-size: .9rem;
      }
      li svg {
        
        width: 30px; 
        height: 30px; 
      }

      li:hover {
        color: var(--clr-primary);
      }

      .navbar__profile-pic {
        
        width: 87%;
        border: 3px solid var(--clr-white);
        border-radius: 50%;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .cart__number {
        font-size: 0.8em;
        height: 20px;
        width: 20px;
        background: red;
        margin: 0;
        border-radius: 50%;
        position: absolute;
        top: 10%;
        right: -9%;
      }
      li:hover .cart__number {
        color: var(--clr-white);
      }

      button {
        background: none;
        border: none;
        color: inherit;

        &:focus {
          outline: none;
        }
      }
    }
  }

  .navbar__bottom {
    .navbar-bottom__menu {
      margin: 0 auto;
      display: flex;
      justify-content: center;
      list-style: none;
      position: relative;
      left: 2.5em;

      & > li + li {
        /* margin-left: 3.5em; */
      }
    }
  }
  /* @media (max-width: 1000px) {
    .navbar__top {
      background: red;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 0;
      form {
        flex-basis: 0;
      }
      .navbar__logo {
        margin-bottom: 2em;
        flex-basis: 0;
      }
      .navbar__options {
        flex-basis: 0;
        margin: 2em 0 0;
        font-size: 0.9em;
        li svg {
          width: 35px;
        }
        & > li + li {
          margin-left: 1.5em;
        }
      }
    }
    .navbar__bottom {
    .navbar-bottom__menu {
      top: 1em;
      left: 0;

      & > li + li {
        margin-left: 2em;
      }
    }
  }
  } */

  @media screen and (max-width: 414px){
        width: 100%;
        /* height:500px ; */
        .navbar__logo{
          /* background: red; */
          width: 30% !important;
          height: 100%;
          
        }
        .search{
          height: 100%;
          width: 70% !important;
          /* background: yellow; */
        }
        .navbar__options{
          /* background: pink; */
          display:none !important;
        }
    }
`;

export const StyledSVG = styled(SVG)`
  width: 10px;
  
`;

export const Img = styled.img`
  width: 100px;
  height: 70px;
  @media screen and (max-width: 414px){
    width: 100px;
    height: 70px;

  }
`;

export const NavbarResponsive = styled.div`
  
  display:none !important;

  
  @media screen and (max-width: 414px){
    display: block !important;
    width: 100%;
    /* height: 500px; */
    
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 !important;

    span{
      font-size: ${p => p.theme.fontSize};
    }

    .navbar__options {
      /* background: red; */
      width: 100%;
      height: 80px;
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;
      /* margin-right: 5vw; */

      & > li {
        
        
        display: flex;
        width: 33%;
        height: 100%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: .9rem;
       
      }
      li svg {
        
        width: 30px; 
        height: 30px; 
      }

      

      .navbar__profile-pic {
        
        width: 87%;
        /* height: 100%; */
        border: 3px solid var(--clr-white);
        border-radius: 50%;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .cart__number {
        font-size: 0.8em;
        height: 20px;
        width: 20px;
        background: red;
        margin: 0;
        border-radius: 50%;
        position: absolute;
        top: 10%;
        right: 10%;
      }
      li:hover .cart__number {
        color: var(--clr-white);
      }

      button {
        background: none;
        border: none;
        color: inherit;

        &:focus {
          outline: none;
        }
      }
    }
  }

  .navbar__bottom {
    .navbar-bottom__menu {
      margin: 0 auto;
      display: flex;
      justify-content: center;
      list-style: none;
      position: relative;
      left: 2.5em;

      & > li + li {
        /* margin-left: 3.5em; */
      }
    }
  }
`

export const CartIconDiv = styled.div`
  position: relative;
`
export const CartIconNumber = styled.p`

  background: red;
  border-radius: 9999px;
  min-width: 20px;
  min-height: 21px;
  font-size: 15px !important;
  margin: 0;
  top: -10px;
  left: 20px !important;
  position: absolute;
`

export const CartIconRed = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;

`