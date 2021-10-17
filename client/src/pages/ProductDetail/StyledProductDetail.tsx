import styled from "styled-components";
import SVG from "react-inlinesvg";

export const GameDetail = styled.section`
  display: flex;
  width: 80%;
  margin: 3em auto 3em;

  .btn-fav {
    background: black;
    border: 1px solid transparent;
    position: relative;
    top: -0.5em;
    left: 2em;
    border: 3px solid white;
    border-radius: 999px;
    padding: 0.5em;
    animation: attention 2s ease infinite;

    svg {
      fill: white;
      height: 30px;
      transition: all 0.2s ease-in-out;
    }
    &:hover {
      svg {
        fill: red;
      }
    }
    &:focus {
      outline: none;
    }
  }
  @keyframes attention {
    9% {
      transform: none;
    }
    12% {
      transform: scale(1.05);
    }
    16% {
      transform: scale(0.95);
    }
    20% {
      transform: scale(1.03);
    }
    24% {
      transform: scale(1);
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  .game__title {
    display: flex;
  }
  .game__img {
    flex: 1;
    margin-right: 1.5em;
    border: 3px solid #51a5fe;
    border-radius: 1em;
    height: 95vh;
    overflow: hidden;

    @media (max-width: 1000px) {
      max-height: 300px;
      margin-bottom: 1em;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      overflow: hidden;

      @media (max-width: 1000px) {
        object-position: center;
      }
    }
  }

  .btn {
    display: flex;
    position: absolute;
    right: 0;
    margin-right: 2em;
    text-decoration: none;
  }

  .game__info {
    flex: 1;
    margin-left: 1.5em;

    @media (max-width: 1000px) {
      margin-left: 0;
    }

    h1 {
      font-size: 1.5em;
      line-height: 1.3;
    }

    .game__categories {
      display: flex;
      list-style: none;
      flex-flow: row wrap;
      margin-left: 0;
      padding: 0;

      li {
        font-size: 0.6em;
        margin-right: 1em;
        background: #1b1a1f;
        border-radius: 0.5em;
        padding: 0.5em 1em;
        color: #f5f4f8;
        margin-bottom: 1em;
      }
    }

    .game__container-price-score {
      display: flex;
      align-items: center;
      height: 4em;
    }

    .game__star-container {
      position: relative;
      height: 100%;
      width: 30%;
      top: -10px;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    .game__price {
      font-size: 1.6em;
      margin-right: 1em;
    }

    .game__description {
      line-height: 1.5;
      margin-top: 2em;
      font-size: 0.7em;
    }

    .game__quantity {
      margin-top: 2em;

      span:first-child {
        margin-right: 1em;
      }
    }

    .game__quantityvalue {
      font-weight: bold;
      font-size: 1em;
      margin: 0 0.4em;
    }

    .game__stock {
      margin: 1em 0 2em;
      font-weight: 900;
    }

    .game__buttons {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-right: 1em;

      button {
        margin-bottom: 0.5em;
      }

      @media (max-width: 500px) {
        align-items: center;

        button:first-of-type {
          margin-bottom: 1em;
        }
      }
    }

    .game__purchase-container {
      display: flex;
      align-items: center;
      margin-top: 8em;
      /* background: red; */

      @media (max-width: 700px) {
        flex-direction: column;
        align-items: center;
      }
    }

    .game__payment-methods-icons {
      max-width: 300px;

      @media (max-width: 700px) {
        margin-top: 2em;
      }
    }
  }
`;

export const StyledSVG = styled(SVG)``;
