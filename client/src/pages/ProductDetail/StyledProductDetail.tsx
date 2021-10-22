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

  .stars {
    font-size: 2rem;
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
      font-size: 1em;
      text-align: justify;
    }

    .game__quantity {
      margin-top: 2em;

      span:first-child {
        margin-right: 1em;
      }

      @media screen and (max-width: 414px){
      margin: 2em auto 2em auto;
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

    .reviews {
      width: 100%;
      height: 20px;
      overflow-y: scroll;
      display: flex;
      justify-content: center;
    }

    .game__buttons {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-right: 1em;
      position: relative;
      top: -1em;
      button {
        margin-top: 1em;
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
      margin-top: 1em;
      margin-left: 25em;
      width: 50%;

      @media (max-width: 414px) {
        margin-left: 4em;
        width:80%;
      }
    }


  }
`;

export const StyledSVG = styled(SVG)`
`;

export const ReviewContainer = styled.div`
background: ${p => p.theme.carouselBackg};
border-radius: ${p => p.theme.cardGenreBorderRadius};
border : 4px double  ${p => p.theme.cardContentCartBorder} ;
width: 70%;
height:  10%;
overflow-y: scroll;
display: flex;
align-items: center;
flex-direction: column;
margin: 0 auto;
margin-bottom: 1rem;
text-align: left;

@media (max-width: 414px) {
  display:flex;
  flex-direction: column;
  height: 50%;
  width: 90%;
}
`

export const UserInfoContainer = styled.div`
display: flex;
width: 900px;
margin-bottom: 1rem;

@media (max-width: 414px) {
  display:flex;
  flex-direction: column;
  width: 90%;
}
`

export const UserReviewFields = styled.li`
padding: 1rem;
 width: 33%;

 @media (max-width: 414px) {
  width: 100%;
}
`

export const UserReviewText = styled.li`
padding: 1rem;
 width: 100%;

 @media (max-width: 414px) {
  width: 100%;
}
`
