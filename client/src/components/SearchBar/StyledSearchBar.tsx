import styled from "styled-components";

export const FormSearchBar = styled.form`
  background: var(--clr-white);
  border: 2px solid var(--clr-primary);
  border-radius: 99em;
  width: 90%;
  height: 50%;
  
  display: flex;
  justify-content: start;
  
  padding: 0 0.7em;

  &:hover,
  &:focus-within {
    box-shadow: inset 0 0 7px rgba(0, 0, 0, 0.15);
  }

  button {
    width: 20px;
    background: transparent;
    border: none;
    margin-left: 0.5em;
    transition: transform 0.2s cubic-bezier(0.25, 0.1, 0.75, 2);
    transform-origin: center;
    text-align: right;
    &:hover,
    &:focus {
      filter: brightness(75%);
      transform: rotateZ(15deg);
    }

    img {
      height: 20px;
    }
  }

  input {
    background: transparent;
    border: none;
    font-size: 12px;
    padding: 0.7em 1em;
    width: 90%;
  }

  button:focus,
  input:focus {
    outline: none;
  }
`;

export const SearchResults = styled.div`
  display: flex;
  flex-direction: column;
  width: 23.2%;
  
  /* height: 50%; */
  position: absolute;
  top: 5.5%;
  z-index: 90;
  @media screen and (max-width: 414px){
    top: 7.2%;
    width: 50%;
  }
`;
