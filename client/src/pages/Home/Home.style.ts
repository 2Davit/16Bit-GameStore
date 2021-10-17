import styled from "styled-components";
import { Container } from "../../GlobalStyles/GlobalStyles";

export const ContainerHome = styled(Container)`
  display: flex;
  flex-direction: column;

  .searchGames {
    background: #000;
    text-align: center;
    margin-top: 2em;
  }
  .cont__filterCatalog {
    margin-top: 2em;
    display: grid;
    grid-template-columns: 0.2fr 4fr 0.2fr;
    grid-template-areas: "filter catalog .";
  }
`;
