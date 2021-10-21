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
  background: ${p => p.theme.carouselBackg};
  border-top-left-radius: ${p => p.theme.top};
  border-bottom-right-radius: ${p => p.theme.top};
  border-bottom-left-radius: ${p => p.theme.bottom};
  border-top-right-radius: ${p => p.theme.bottom};
  border: ${p => p.theme.carouselBorder};
  
  @media screen and (max-width: 414px){
  
    gap: 0;
    margin: 0;
    padding: 0;
    
    width: 100%;
    height: 65px;
    overflow-x: scroll;
    grid-template-columns: repeat(4, 50%);

    &::-webkit-scrollbar:vertical{
      width: 50px !important;
    }
  }
  section{
    
    display: flex;
    flex-direction: column;
    margin-left: 3.8rem;
    justify-content: center;
    width: 100%;
    @media screen and (max-width: 414px){
      margin: 0;
      width: 100%;
      margin-left: 220px;
    }
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
  color: ${p => p.theme.selectTextColor};
  cursor: inherit;
  &::-ms-expand {
    display: none;
  }

  &:hover,
  &:focus {
    border:none;
    outline: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    background-color: ${p => p.theme.selectHoverColor};
    color: ${p => p.theme.slectHoverColor};
    
  }

  @media screen and (max-width: 414px){
    /* width: 100% */
  }
 
`;

export const BtnDisabled = styled.button`
    padding: 0.6em .4em;
    border-radius: ${ p => p.theme.filterButtonBorder };
    background: #222831;
    border: none;
    width: 100%;
    color: #5f5f5f;
    &:focus{
      outline: none;
    }

    @media screen and (max-width: 414px){
      width: 100%;
     height: 45px;
     padding: 0;
     margin-left: 3rem;
     font-size: ${p => p.theme.fontSize};
  }
  
`
export const BtnRemoveFilter = styled.button`
    color: #eeeeee;
    border-radius: ${ p => p.theme.filterButtonBorder };
    background-color: ${ p => p.theme.removeFilBtn};
    border: ${ p => p.theme.removeBorderBtn};
    color: ${ p => p.theme.removeColorBtn};
    padding: 0.6em .4em;
    width: 100%;
    &:hover {
      background-color: #B3141C;
      color: ${ p => p.theme.removeColorBtnHover};
    }
    &:focus{
    outline: none;
  }
  @media screen and (max-width: 414px){
    width: 100%;
     height: 45px;
     padding: 0;
     margin-left: 3rem;
     font-size: ${p => p.theme.fontSize};
  }
`

export const BtnOnSale = styled.button`
  color: ${ p => p.theme.onsaleColorBtn};
  border-radius: ${ p => p.theme.filterButtonBorder };
  background-color: ${ p => p.theme.onSaleFilBtn};
  padding: 0.6em .4em;
  border: ${ p => p.theme.onSaleBorderBtn};
  width: 100%;

  &:hover{
    background-color: ${ p => p.theme.onSaleFilBtnHover};
    color: ${ p => p.theme.onsaleColorBtnHover };
  }
  &:focus{
    outline: none;
  }
  @media screen and (max-width: 414px){
     width: 100%;
     height: 45px;
     padding: 0;
     margin-left: 3rem;
     font-size: ${p => p.theme.fontSize};
  }
`
