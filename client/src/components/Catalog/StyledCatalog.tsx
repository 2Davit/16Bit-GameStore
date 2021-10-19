import styled from "styled-components";

export const StyledCatalog = styled.div`
  display: flex;
  grid-area: catalog;
  flex-wrap: wrap;
  gap: 2em;

  @media screen and (max-width: 700px) {
    width: 100%;
    justify-content: center;
  }
`;
