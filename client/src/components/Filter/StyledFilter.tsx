import styled from "styled-components";
import arrow from "../../assets/img/svg/arrow-down.svg";

export const StyledFilter = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 0 0 40px 0;
  padding: 1rem;
  /* margin: 0 3em 0 1em; */
  height: 20%;
  width: 100%;
  background:#48a0f33e;
  border-top-left-radius: 99px;
  border-bottom-right-radius: 99px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 10px;

  section{
    
    display: flex;
    flex-direction: column;
    margin-left: 3.8rem;
    justify-content: center;
  }
  h5 {
    width: 100%;
    margin-top: 1em;
  }
  button {
    width: 50%;

  }
  h2 {
    color: var(--clr-primary);
  }

  @media screen and (max-width: 700px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 2rem;

    h2 {
      width: 100%;
      text-align: center;
    }
  }
`;

export const SelectStyled = styled.select`
  font-family: inherit;
  font-size: 0.7em;
  border: none;
  border-radius: 0.5em;
  width: 200px;
  padding: 0.5em 3em 0.5em 0.7em;
  -moz-appearance: none;
  -webkit-appearance: none;
  background: url(${arrow}) 95% center no-repeat ;
  text-transform: uppercase;
  transition: all 0.25s ease-in-out;
  color: #e1e1e1;
  cursor: inherit;
  &::-ms-expand {
    display: none;
  }

  &:hover,
  &:focus {
    border: none;
    outline: none;
    scroll-behavior: smooth;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    background-color: #0a3364 ;
    color: #eeeeee;
    
  }


 
`;
