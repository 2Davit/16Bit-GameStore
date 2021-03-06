import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background: ${p => p.theme.footerBack};
  border-top: ${p => p.theme.footerBorderTop};
  padding: 3em 0;
  text-align: center;
  width: 100vw;

  /* a {
    color: #eeeeee;
    text-decoration: none;
    

    &:hover {
      color: var(--clr-primary-2);
    }
  } */

  ul {
    display: flex;
    justify-content: center;
    margin: 1rem 0;
    list-style: none;



    li {
      margin: 0 2em;
    }
  }

  p {
    max-width: 60%;
    margin: auto;
    padding-top: 2em;
    font-size: 0.8em;
    line-height: 2;
    color: #eeeeee;
    position: relative;

    &::before {
      content: "";
      width: 75%;
      border-top: 1px solid #222831;
      position: absolute;
      top: 0;
      left: 10%;
    }
  }
  .navbar__bottom_logo {
    position: relative;
    display: flex;
    justify-content: center;
    left: -1em;
  }

  .navbar__bottom {
    position: relative;
    left: -1.5em;
    width: 100vw;
  }

  @media (max-width: 1000px) {
    padding: 3em 1.5em;

    .about__us {
      display: inline;
    }
    ul {
      flex-direction: column;
      & > li + li {
        margin: 1em 0 0 0;
      }
    }

    .navbar__bottom {
      ul {
        margin: 0 auto;
      }
    }

    p::before {
      content: "";
      width: 100%;
      border-top: 1px solid #333;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;

export default StyledFooter;

export const LinkStyled = styled(Link)`
  color: ${p => p.theme.footerColor};
  
  &:hover{
    color: ${p => p.theme.footerColorHover};
    text-decoration: none;
  }
`
