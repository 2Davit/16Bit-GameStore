import styled from "styled-components";

export const StyledCarousel = styled.div`

font-size: ${p => p.theme.fontSize};

  .embla {
    position: relative;
    margin-top: 2em;
    height: 300px;
    margin-bottom: 5em;
    @media screen and (max-width: 414px){
    margin-bottom: 2em;
      
    }
  }

  .embla__viewport {
    overflow: hidden;
    width: 100%;
  }

  .embla__viewport.is-draggable {
    cursor: move;
    cursor: grab;
  }

  .embla__viewport.is-dragging {
    cursor: grabbing;
  }

  .embla__container {
    display: flex;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -webkit-tap-highlight-color: transparent;
    margin-left: -30px;
  }

  .embla__slide {
    position: relative;
    min-width: 80%;
    padding-left: 3em;

    
   
    height: 60vh;
    max-height: 400px;
    min-height: auto;
    @media (max-width: 1000px) {
      min-height: auto;
      height: 50vh;
    }
  }

  .embla__slide__inner {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    border-radius: ${p => p.theme.carouselBorderRadius} ;
    border: ${p => p.theme.carouselBorderOnsale};
    display: flex;
    justify-content: center;
    align-items: center;



    

    .embla__slide__detail {
      color: var(--clr-white);
      position: relative;
      
      width: 85%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      /* background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.5) 100%
      ); */
      
      .slide__details__top {
        /* position: relative; */
        font-size: 3vh;
        text-overflow: ellipsis;
        width: 100%;
        height: 20%;
        /* text-align: center; */
        display: flex;
        justify-content: center;
        align-items: center;
        /* margin-top: .5em; */
        /* margin: 0.5em auto; */

        a {
          text-decoration: none;
          color: var(--clr-white);
          transition: color 0.2s ease-in-out;
        }
      }

      .image{
        width: 100%;
        height: 50%;
      }

      .slide__details__bot {
        position: relative;
        width: 100%;
        height: 30%;
        display: flex;
		button{
		  /* margin-right: 2em; */
		  }
      }

      
        font-size: 0.7em;
        height: 100%;
        flex-direction: column;
        padding: 2em;

        .slide__details__top {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          /* max-width: 100%; */
          width: 100%;
          height: auto;
          background: ${p => p.theme.carouselBackg};
          border-top-left-radius: ${p => p.theme.top};
          border-bottom-right-radius: ${p => p.theme.top};
          border-bottom-left-radius: ${p => p.theme.bottom};
          border-top-right-radius: ${p => p.theme.bottom};
          border: ${p => p.theme.carouselBorder};
          margin: 0 auto;
          padding: .5rem;
        }

        .slide__details__bot {
          margin-top: 25%;	  
        }
		
      

      .slide__title {
        font-size: ${p => p.theme.fontSizeTitle};
        color: ${p => p.theme.carouselColor};
        @media screen and (max-width: 414px){
          font-size: ${p => p.theme.fontSize};
        }
      }

      .container__priceDiscount {
        text-align: center;
        padding-left: 4em;
        display: flex;
        align-items: center;
        width: 50%;
        height: 100%;
      }
      .container__priceDiscount2 {
        text-align: center;
        
        padding-right: 4em;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 50%;
        height: 100%;
      }

      .slide__price {
        font-size: 2.5em;
        text-shadow: 5px 5px 0px var(--clr-primary-2),
          0 0 20px rgba(0, 0, 0, 0.5);
        margin: 0.5em 0.5em 0.5em 0em;
      }

      .slide__discount {
        font-size: 1.5em;
        background-color: var(--clr-secondary);
        padding: 0.2em;
        border-radius: 0.3em;
        opacity: 0.9;
        position: relative;
        margin: 1em 0.5em;
        width: max-content;
      }
    }
  }

  .embla__slide__img {
    position: absolute; 
    display: block;
    top: 50%;
    left: 50%;
    width: auto;
    min-height: 100%;
    min-width: 100%;
    max-width: 100%;
    transform: translate(-50%, -50%);
  }

  .embla__button {
    outline: 0;
    touch-action: manipulation;
    position: absolute;
    z-index: 1;
    top: 50%;
    border: 0;
    border-radius: ${p => p.theme.carouselBtnArrow};
    background-color: ${p => p.theme.carouselBtnBack};
    opacity: 0.8;
    box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.5);
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    fill: var(--clr-white);
    padding: 0;
    transition: transform 0.4s ease;

    &:active {
      transform: scale(0.95) translateY(-50%);
    }

    &:hover {
      background-color: ${p => p.theme.carouselBtnBack};
      opacity: 1;
    }
  }

  .embla__button:disabled {
    opacity: 0.3;
  }

  .embla__button__svg {
    width: 100%;
    height: 100%;
  }

  .embla__button--prev {
    left: 15%;
  }

  .embla__button--next {
    right: 15%;
  }
`;
