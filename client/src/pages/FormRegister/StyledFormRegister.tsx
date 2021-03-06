import styled from "styled-components";
import checkMark from "../../assets/img/svg/checkMark.svg";

export const FormStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


  input.checked {
    background: url(${checkMark}) no-repeat;
    background-position: top 50% right 10px;
    background-size: 25px;
    background-color: var(--clr-dark);
    color: var(--clr-white);
  }

  form {
    position: relative;

  }
  .form__title {
    margin-top: 1.5em;
    position: relative;
    left: 25%;
  }

  label {
    display: block;
    position: relative;
    width: 400px;
    margin: 2em 2em;
    @media (max-width: 414px) {
      width: 90%;
      margin: 2em 1em;
    }

    span {
      position: absolute;
      left: 1em;
      top: -0.75em;
      background: #000;
      padding: 0 0.5em;
      font-size: 0.8em;
    }

    input,
    textarea {
      font: inherit;
      background: #000;
      color: var(--clr-white);
      font-size: 0.8em;
      padding: 1em;
      border: 3px solid var(--clr-primary);
      border-radius: 0.4em;
      width: 100%;
      outline: none;
    }
    & > textarea {
      line-height: 1.6;
    }

    &::after {
      content: "";
      position: absolute;
      top: 2px;
      bottom: -5px;
      left: 5px;
      width: 100%;
      border-radius: 0.4em;
      background: var(--clr-primary);
      opacity: 0.2;
      transition: opacity 0.2s ease;
      z-index: -1;
    }

    &:focus-within::after {
      opacity: 1;
    }
  }

  a {
    text-decoration: none;
  }
  /* button {
    position: relative;
    left: 30%;
    margin-bottom: 2em;
  } */
`;
