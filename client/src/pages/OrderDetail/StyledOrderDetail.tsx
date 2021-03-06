import styled from "styled-components";
import SVG from "react-inlinesvg";

export const StepOne = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  height: 100vh;

  @media (max-width:414px){
    height:100%;
    margin-bottom: 20px !important;
  }
  & > div:first-child {
    margin-right: 4em;
    flex: 1;
  }

  & > div:last-child {
    flex-basis: 500px;
    position: relative;
  }

  aside {
    border: 3px solid var(--clr-primary);
    border-radius: 0.5em;
    padding: 3em;
    position: sticky;

    h3 {
      /* margin-bottom: 3.5em; */
      text-align: center;
    }

    .coupon {
      flex-direction: column;
      button {
        margin-bottom: 2em;
      }
    }

    .aside__total,
    .aside__subtotal,
    .aside__discount {
      display: flex;
      justify-content: space-between;

      p:last-child {
        font-weight: 900;
      }
    }

    .aside__subtotal {
      margin-bottom: 0.5em;
    }

    .aside__total {
      font-size: 1.5em;
      margin-bottom: 1em;
    }

    hr {
      margin: 2em 0;
      height: 1px;
      border: none;
      background: #ccc;
    }

    button {
      display: block;
      margin: 0 auto;
    }
  }

  @media (max-width: 1200px) {
    max-width: 800px;
    margin: 0 auto;
    flex-direction: column;

    & > div:first-child {
      margin-right: 0;
    }
    & > div:last-child {
      margin: 0;
    }
    aside {
      position: static;
    }
  }
`;

export const StepTwo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2em;

  h2,
  svg {
    margin: 0 auto;
  }

  label {
    display: block;
    position: relative;
    width: 500px;
    margin: 2em auto;
    @media (max-width: 600px) {
      width: 80%;
    }
  }

  input {
    font: inherit;
    background: #000;
    color: var(--clr-white);
    font-size: 0.8em;
    padding: 1em;
    border: 3px solid var(--clr-primary);
    border-radius: 0.4em;
    width: 100%;
    outline: none;
    margin: 1em auto;
  }
  button {
    display: block;
    margin: 1em auto;
  }

  .errorMsg {
    color: var(--clr-error);
    background: #000;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const StepThree = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  .step__info {
    text-align: center;
    p {
      font-size: 1.5em;
      line-height: 1.2em;
    }

    span {
      font-size: 1.5em;
      font-weight: 900;
      color: var(--clr-primary);
    }
  }
  img {
    width: 15em;
    height: 15em;
    margin: 2em auto 2em;
  }
`;

export const GameClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  width: 25px;
  height: 25px;
  background: transparent;

  svg {
    fill: var(--clr-primary);
    transition: fill 0.2s ease-in-out;
    width: 25px;
    height: 25px;
  }

  &:hover svg {
    fill: var(--clr-primary-2);
  }
`;

export const StyledSVG = styled(SVG)``;
