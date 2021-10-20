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
  

`
export const MobileCatalog = styled.div`
    /* background: red; */
    display:none;

    @media screen and (max-width: 414px){
      width: 100%;
    height: 60%;
    margin-top: 2em;
    display: flex;
    flex-direction: column;
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

export const MobilePaginate = styled.div`

display: none;


@media screen and (max-width: 414px){
  display: block;
  width: 60%;
  height: 30%;
  background: var(--clr-primary);
  margin-top: 3rem;
  padding: .4rem 2rem;
  text-align: center;
  border-radius: 1.5rem;

  }
`
export const MobileDisabled = styled.div`

display: none;


@media screen and (max-width: 414px){
  display: block;
  width: 60%;
  height: 30%;
  background: #222831;
  margin-top: 3rem;
  padding: .4rem 2rem;
  text-align: center;
  border-radius: 1.5rem;

  }
`

export const ScrollUp = styled.a`

display: none;


@media screen and (max-width: 414px){
  display:block;
  padding-top: .5rem;
  width: 40px;
  height: 40px;
  background: var(--clr-primary);
  margin: 3rem auto 0 auto;
  text-align: center;
  border-radius: 1.5rem;
  color:#eeeeee;

  }
`
