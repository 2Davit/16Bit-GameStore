import styled from "styled-components";
import SVG from "react-inlinesvg";

export const StyledNavBar = styled.nav`
  background: linear-gradient(180deg, #1f0156, #000);  
  background-position: center center;
  background-size: cover;
   background-repeat: no-repeat;
  padding: 2em 0;


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
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1em;

    .navbar__logo {
      flex-basis:300px;
    }

    form {
      margin: 0 2em;
      flex-basis: 400px;
    }

    .navbar__options {
      list-style: none;
      display: flex;
      align-items: center;
       flex-basis: 300px;
     

      & >li {
        position: relative;
         }

      li:hover {
        color: var(--clr-primary);
            }

      .cart__number {
        font-size: 0.8em;
        background: var(--clr-primary);
        line-height: 1;
        padding: 0.3em 0.5em;
        border-radius: 99em;
        position: absolute;
        top: -5px;
        right: 0;
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
      position:relative;
      left: 2.5em;
     
      & > li + li {
        margin-left: 3.5em;
      }
    }
  }
  @media (max-width: 1000px) {
    .navbar__top {
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
  }
`;

export const StyledSVG = styled(SVG)`
`;
