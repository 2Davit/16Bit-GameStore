import styled from "styled-components";

export const StyledProductCard = styled.article`
  font-size: 0.8em;
  width: 275px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${(p) => p.theme.bgBorder};
  position: relative;
  transition: all 0.35s ease-in-out;
  height: 400px;
  font-size: ${(p) => p.theme.fontSize};
 
    .btn-fav {
    border: none;
    position: absolute;
    right: 0;
    margin-top: 0.5em;
    margin-right: 0.5em;
    background:white;
    padding: 0.5em 0em;
    border-radius: 999px;
    animation: attention 2s ease infinite;
    z-index: 9999;

    svg {
      fill: #FF7B7B;
      height: 20px;
      transition: all 0.2s ease-in-out;
    }
    &:hover {
      svg {
        fill: #F02E2E;
      }
    }
    &:focus {
      outline: none;
    }
  }
  .card__content__favorite {
      padding: 0.5em 1em;
      height: 40%;
      position: absolute;
      width: 100%;
      bottom: 0;
      display: flex;
      flex-direction: column;
      background:  ${(p) => p.theme.cardContentBackground};;

    }

  &:hover {
    transform: scale(1.05);
    box-shadow: 4px 5px 13px 5px rgba(0, 0, 0, 0.36);
    -webkit-box-shadow: 4px 5px 13px 5px rgba(0, 0, 0, 0.36);
    -moz-box-shadow: 4px 5px 13px 5px rgba(0, 0, 0, 0.36);

    .card__content {
      padding: 0.5em 1em;
      height: 40%;
      position: absolute;
      width: 100%;
      bottom: 0;
      display: flex;
      flex-direction: column;
      background:  ${(p) => p.theme.cardContentBackground};;
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
    position: relative;
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
    height: 40%;
    position: absolute;
    width: 100%;
    bottom: -10%;
    display: flex;
    flex-direction: column;
    border-top: 2px solid ${(p) => p.theme.cardContentTopBorder};
    background: ${(p) => p.theme.cardContentBackground};
    transition: all 0.35s ease-in-out;

    @media screen and (max-width: 414px) {
      bottom: 0%;
    }
  }

  .card__title {
    font-size: 1.2em;
    color: #eeeeee;
    line-height: 20px;
  }

  .card__price {
    font-size: 1.2em;
    color: #eeeeee;
    width: 20%;
    margin: 20px 0 0 0;
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
export const DivBtn = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
  z-index: 999;
  position: absolute;
  bottom: -15px !important;
  margin-bottom: 1rem !important;
  margin-top: 0 !important;
`;

export const MiniCard = styled.article`
  position: relative;
  display: flex;
  border: 2px solid ${p => p.theme.cartColor};
  border-radius: 0.5em;
  margin-bottom: 1em;
  align-items: center;
  justify-content: flex-start;
  padding: 1em 1.5em 1em 1em;
  font-size: ${p => p.theme.fontSize};
  a {
    color: currentColor;
    text-decoration: none;

    &:hover {
      color: ${p => p.theme.cartColor};
    }
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

export const PriceGenreCont = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 1rem;
`;
export const GenresContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
export const Genres = styled.h5`
  background: ${p => p.theme.cardGenreBackground}; 
  width: 45%;
  height: 100%;
  margin: 0 0 0 0.2rem;
  text-align: center;
  align-items: flex-end;
  border: 4px double ${p => p.theme.cardGenreBorder};
  padding: 0.3rem;
  border-radius: ${p => p.theme.cardGenreBorderRadius};
`;
export const Price = styled.h4`
  background: ${p => p.theme.cardPricedBackground};
  width: 25%;
  height: 100%;
  margin-bottom: 0;
  text-align: center;
  border-top-right-radius: ${p => p.theme.cardPriceBorderTopRight};
  border-bottom-right-radius: ${p => p.theme.cardPriceBorderBottomRight};
  margin-left: -1rem;
  border: 4px double ${p => p.theme.cardPriceBorder};
  display: flex;
  align-items: center;
  justify-content: center;
`;
