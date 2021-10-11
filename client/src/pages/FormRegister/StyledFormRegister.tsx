import styled from "styled-components";

export const FormStyled = styled.form`
  position: relative;
  left: 2vw;

  .form__title {
    margin-top: 1.5em;
    position: relative;
    left: 25%;
  }

  label {
    display: block;
    position: relative;
    width: 400px;
    margin: 2em auto;
    @media (max-width: 600px) {
      width: 100%;
    }

    span {
      position: absolute;
      left: 1em;
      top: -0.75em;
      background: #000;
      padding: 0 0.5em;
      font-size: 0.8em;
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
  button {
    position: relative;
    left: 30%;
    margin-bottom: 2em;
  }
`;
