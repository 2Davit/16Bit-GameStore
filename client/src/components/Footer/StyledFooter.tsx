import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #1b1a1f;
  padding: 3em 0;
  text-align: center;
  color: #fff;
  margin-top: auto;
  position: relative;
  width: 100%;
  bottom: -12em;

  .about__us {
    display: none;
  }

  a {
    color: #51a5fe;
    text-decoration: none;

    &:hover {
      color: #0b53d7;
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
        color: #51a5fe;
      }
    }
  }

  p {
    max-width: 600px;
    margin: 2.5em auto 0;
    padding-top: 2em;
    font-size: 0.8em;
    line-height: 2;
    color: #7e7e7e;
    position: relative;

    &::before {
      content: "";
      width: 150px;
      display: block;
      margin: 0 auto;
      border-top: 1px solid #333;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
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
