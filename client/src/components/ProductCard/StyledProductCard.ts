import styled from "styled-components";

export const StyledProductCard = styled.article`
  font-size: 0.8em;
  border: 3px solid ${(p) => p.theme.bgBorder};
  width: 270px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 5px 5px 0px ${(p) => p.theme.bgBorder};
  position: relative;
  transition: all 0.25s ease-in-out;
  height: 400px;
  /* margin-right: 4.5em; */
  /* margin-top: 2em; */
  

  &:hover {
    transform: translate(5px, 5px);
    box-shadow: none;
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
    height: 50%;
  }

  .card__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    transition: filter 0.5s ease;
  }

  &:hover .card__img {
    filter: grayscale(100%);
  }

  .card__content {
    padding: 0.5em 1em;
    height: 50%;
    position: relative;
    display: flex;
    flex-direction: column;
    background: #0bbffc;
   
  }

  .card__title {
    font-size: 1.2em;
    font-weight: 200;
    color: #000;
  }

  .card__price {
    font-size: 1.2em;
    color: #000;
  }

  .card__price::before {
    content: "";
    background: ${(p) => p.theme.bgSub};
    display: block;
    width: 20%;
    height: 5px;
    margin: 0.5em 0;
    
  }

  button {
    font-size: 0.9em;
    margin-top: auto;
    margin-bottom: 0.5em;
    z-index: 100;
    min-width: 200px;
    &:focus {
      outline: none;
    }
  }

 
  
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
