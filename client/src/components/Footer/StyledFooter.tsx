import styled from "styled-components";

const StyledFooter = styled.footer`
  background: linear-gradient(180deg, #000, #1f0156);
  padding: 3em 0;
  text-align: center;

  a {
    color: var(--clr-primary);
    text-decoration: none;

    &:hover {
      color: var(--clr-primary-2);
    }
  }

  ul {
    display: flex;
    justify-content: center;
    margin: 1em 0;
    list-style: none;

    li {
      margin: 0 2em;
    }

    a {
      color: currentColor;

      &:hover {
        color: var(--clr-primary);
      }
    }
  }

  p {
    max-width: 60%;
    margin: 2.5em auto 0;
    padding-top: 2em;
    font-size: 0.8em;
    line-height: 2;
    color: var(--clr-middle);
    position: relative;

    &::before {
      content: "";
      width: 250px;
      border-top: 1px solid #333;
      position: absolute;
      top: 0;
      left: 35%;
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
    margin-top: 2em;
  }

  @media (max-width: 1000px) {
    padding: 3em;

    .about__us {
      display: inline;
    }
    ul {
      flex-direction: column;
      & > li + li {
        margin: 1em 0 0;
      }
    }
  }
`;

export default StyledFooter;
