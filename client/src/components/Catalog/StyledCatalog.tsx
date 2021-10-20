import styled from "styled-components";

export const StyledCatalog = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem;
  width: 100%;
  height: 90%;
  
  /* grid-area: catalog;
  flex-wrap: wrap;
  gap: 2em; */

  @media screen and (max-width: 700px) {
    width: 100%;
    justify-content: center;
  }
  @media screen and (max-width: 414px){
    gap: 2rem;
    width: 100%;
    display: flex; 
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    
  }
`;
