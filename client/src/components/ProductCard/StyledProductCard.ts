import styled from "styled-components";

export const StyledProductCard = styled.article`
  font-size: 0.8em;
  /* border: 3px solid ${(p) => p.theme.bgBorder}; */
  width: 275px;
  border-radius: 10px;
  overflow: hidden;
  /* box-shadow: 5px 5px 0px ${(p) => p.theme.bgBorder}; */
  position: relative;
   transition: all 0.35s ease-in-out; 
  height: 400px;
  /* margin-right: 4.5em; */
  /* margin-top: 2em; */
  

   &:hover {
    transform: scale(1.05);
    box-shadow: 4px 5px 13px 5px rgba(0,0,0,0.36);
    -webkit-box-shadow: 4px 5px 13px 5px rgba(0,0,0,0.36);
    -moz-box-shadow: 4px 5px 13px 5px rgba(0,0,0,0.36);
    

    .card__content {
    padding: 0.5em 1em;
    height: 40%;
    position: absolute;
    width:100%;
    bottom: 0;
    display: flex;
    flex-direction: column;
    background: rgba(40, 40, 40, 0.70);
      
  }
  .div{
    &:hover{
      top: 10%;
    }
  }
  /* button {
    bottom: 0;
    font-size: 0.9em;
    margin-top: auto;
    margin-bottom: 0.5em;
    z-index: 100;
    min-width: 200px;
    &:focus {
      outline: none;
    }
  } */
  } 

  .card__link {
    color: transparent;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }

  .card__imgContainer {
    width: 100%;
    height: 100%;
    
  }

  .card__img {
    position:relative;
    width: 100%;
    height: 100%;
    object-position: center center;
    background-size: cover;
  }

  /* &:hover .card__img {
    filter: grayscale(100%);
  } */

  .card__content {
    padding: 0.5em 1em;
    height: 30%;
    position: absolute;
    width:100%;
    bottom: -10%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: rgba(40, 40, 40, 0.70);
    transition: all 0.35s ease-in-out; 

  }

  .card__title {
    font-size: 1.4em;
    font-weight: bold;
    color: #eeeeee;
  }

  .card__price {
    font-size: 1.4em;
    color: #eeeeee;
  }

  /* .card__price::before {
    content: "";
    background: ${(p) => p.theme.bgSub};
    display: block;
    width: 20%;
    height: 5px;
    margin: 0.5em 0;
    
  } */

  /* button {
    bottom: -50%;
    font-size: 0.9em;
    margin-top: auto;
    margin-bottom: 0.5em;
    z-index: 100;
    min-width: 200px;
    transition: all .45s ease-in; 
    &:focus {
      outline: none;
    }
  } */

`;

export const MiniCard = styled.article`
  position: relative;
  display: flex;
  border: 2px solid var(--clr-primary);
  border-radius: 0.5em;
  margin-bottom: 1em;
  align-items: center;
  justify-content: flex-start;
  padding: 1em 1.5em 1em 1em;

  a {
    color: currentColor;
    text-decoration: none;

    &:hover {
      color: var(--clr-primary);
    }
  }

  &:hover {
    border: 2px solid var(--clr-primary-2);
  }

  .article__img {
    height: 100px;
    flex: 0 0 150px;
    margin-right: 1em;
    border-radius: 10px;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .delete__product {
    position: absolute;
    right: 10px;
    top: 10px;
    background: none;
    border: none;
    width: 25px;
    height: 25px;
    transition: opacity 0.4s ease;

    svg {
      width: 25px;
      height: 25px;
      fill: var(--clr-primary);
    }

    &:hover svg {
      fill: var(--clr-primary-2);
    }

    &:focus {
      outline: none;
    }
    &:active {
      transform: translateY(1px);
    }
  }

  .article__quantitybuttons {
    span {
      margin-left: 5px;
      font-size: 0.8em;
    }
  }
`;

export const DivBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  
  
  z-index: 999;

  
`
