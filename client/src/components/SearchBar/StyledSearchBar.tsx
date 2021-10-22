import styled from "styled-components";

export const FormSearchBar = styled.form`
  background: ${p => p.theme.backgroundSearch};
  border: 2px solid ${p => p.theme.borderSearch};
  border-radius: ${p => p.theme.radiusSearch};
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
    font-size: ${p => p.theme.fontSize};
    padding: 0.7em 1em;
    width: 90%;
    color: ${p => p.theme.colorSearch};
    &::placeholder{
      color: ${p => p.theme.colorSearch};
    }
  }

  button:focus,
  input:focus {
    outline: none;
  }
`;

export const SearchResults = styled.div`
  display: flex;
  flex-direction: column;
  width: 41%;
  color: white;
  /* height: 50%; */
  position: absolute;
  top: 9%;
  z-index: 90;
  @media screen and (max-width: 414px){
    top: 7.2%;
    width: 50%;
  }
`;
