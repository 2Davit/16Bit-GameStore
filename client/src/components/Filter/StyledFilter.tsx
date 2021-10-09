import styled from "styled-components";
import arrow from "../../assets/img/svg/arrow-down.svg";

export const StyledFilter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 1rem;

  h5 {
    text-align: center;
  }
  button {
    width: 200px;
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
