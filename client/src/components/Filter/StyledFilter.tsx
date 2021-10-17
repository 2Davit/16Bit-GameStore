import styled from "styled-components";
import arrow from "../../assets/img/svg/arrow-down.svg";

export const StyledFilter = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  padding: 1rem;
  width: 20%;
  top: 30vh;
  background: #000;
  z-index: 555px;
  h5 {
    width: 100%;
    margin-top: 1em;
  }
  button {
    width: 200px;
    margin-top: 1em;
  }
  h2 {
    color: var(--clr-primary);
  }
`;

export const SelectStyled = styled.select`
  font-family: inherit;
  font-size: 0.7em;
  border: 3px solid var(--clr-primary);
  border-radius: 0.5em;
  width: 200px;
  padding: 0.5em 3em 0.5em 0.7em;
  -moz-appearance: none;
  -webkit-appearance: none;
  background: url(${arrow}) 95% center no-repeat;
  margin-left: 1em;
  text-transform: uppercase;
  color: var(--clr-primary);
  cursor: inherit;
  &::-ms-expand {
    display: none;
  }

  &:hover,
  &:focus {
    outline: 0;
    border-color: var(--clr-primary-2);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  }
`;
