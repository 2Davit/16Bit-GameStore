import styled from "styled-components";
import SVG from "react-inlinesvg";

export const GameDetail = styled.section`
  display: flex;
  margin: 1rem 8rem;

  @media (max-width: 1000px) {
    flex-direction: column;
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
      justify-content: space-between;
      align-items: center;
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
