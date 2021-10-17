import styled from "styled-components";

export const StyledPaginate = styled.div`
  display: flex;
  justify-content: center;
  margin: 2em 0;
  font-size: 1.2em;
`;

export const StyledButton = styled.button`
  width: 2em;
  height: 2em;
  border-radius: 99em;
  border: 2px solid transparent;
  margin: 0 0.5em;
  background: var(--clr-primary);
  color: var(--clr-white);

  &:hover {
    border-color: var(--clr-white);
  }
  &:focus {
    background: var(--clr-white);
    color: var(--clr-primary);
    transition: opacity 0.2s ease;
    outline: none;
  }
`;
