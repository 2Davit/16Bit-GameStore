import styled from "styled-components";
import { Container } from "../../GlobalStyles/GlobalStyles";

export const ContainerHome = styled(Container)`
  display: flex;
  flex-direction: column;
`;

export const ContainerCarrusel = styled.div`
    /* background: green; */
    width: 100%;
    height: 30%;
    margin-bottom: 5rem;

    @media screen and (max-width: 414px){
      height: 100%;
      margin-top: 3rem;
      margin-bottom: 2rem;
    }
`
export const ContainerCatalog = styled.div`
    /* background: red; */
    width: 100%;
    height: 60%;
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    /* display: grid;
    grid-template-columns: 0.2fr 4fr 0.2fr;
    grid-template-areas: "filter catalog ."; */
  

  @media screen and (max-width: 700px) {
    /* grid-template-rows: .5fr auto;
    grid-template-columns: 100%;
    grid-template-areas:  'filter' 'catalog'; */
  }

`
export const ContainerPaginate = styled.div`
    /* background: yellow; */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10%;
`
