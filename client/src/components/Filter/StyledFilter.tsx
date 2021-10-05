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
  border: 3px solid #51a5fe;
  border-radius: 0.5em;
  width: 200px;
  padding: 0.5em 3em 0.5em 0.7em;
  -moz-appearance: none;
  -webkit-appearance: none;
  background: url(${arrow}) 95% center no-repeat;
  margin-left: 1em;
  text-transform: uppercase;
  color: #51a5fe;
  cursor: inherit;
  &::-ms-expand {
    display: none;
  }

  &:hover,
  &:focus {
    outline: 0;
    border-color: #0b53d7;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  }
  &.select__order-admin {
    width: 100%;
    max-width: 200px;
    margin: 0 auto;
    font-size: 1em;
  }
`;
