import styled from "styled-components";

export const StyledPaginate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 3.2rem;
`;


export const StyledButton = styled.button`
  background-color: var(--clr-primary);
  border-color: var(--clr-primary);
  width: 2rem;
  border-radius: 50%;
  &:hover {
    background-image: linear-gradient(
      45deg,
      var(--clr-primary),
      var(--clr-primary-2)
    );
    border-radius: 0%;
  }
`;
