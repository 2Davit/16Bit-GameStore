import React, { useCallback, useEffect, useState } from "react";
import { PrevButton, NextButton } from "./Buttons";
import { useDispatch } from "react-redux";
//Imgs
import cart from "../../assets/img/svg/cart.svg";
//Estilos
import { StyledCarousel } from "./Carousel.style";
import { Btn, StyledSVG } from "../../GlobalStyles/GlobalStyles";
import { Fade } from "react-awesome-reveal";
import { ProductInCart } from "../../interfaces";

//Embla
import useEmblaCarousel from "embla-carousel-react";
import { useRecursiveTimeout } from "./useRecursiveTimeout";
import { addItemCart } from "../../redux/actions/cart_actions";
import { toast } from "react-toastify";
import { Link, useHistory } from "react-router-dom";

const AUTOPLAY_INTERVAL = 4500;

const Carousel: any = ({ products }: any) => {
  const [viewportRef, embla] = useEmblaCarousel({ loop: true, speed: 5 });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const [message, setMessage] = useState<string>("");
  const dispatch = useDispatch();


  // const handleEffect = useCallback(() => {
  //   let stockInLocal = JSON.parse(localStorage.getItem("cart")!);
  //   let gameStorage = stockInLocal?.find(
  //     (g: ProductInCart) => g.id_product === product!.id_product
  //   );

  //   let unavailable = gameStorage?.quantity >= product!.in_stock ? true : false;
  //   return unavailable;
  // }, [product!.id_product, product!.in_stock]);

  // let disabled = handleEffect();

  // useEffect(() => {
  //   handleEffect();
  // }, [message, handleEffect]);


  const history = useHistory();

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  const autoplay = useCallback(() => {
    if (!embla) return;
    if (embla.canScrollNext()) {
      embla.scrollNext();
    } else {
      embla.scrollTo(0);
    }
  }, [embla]);

  const { play, stop } = useRecursiveTimeout(autoplay, AUTOPLAY_INTERVAL);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
    embla.on("pointerDown", stop);
  }, [embla, onSelect, stop]);

  useEffect(() => {
    play();
  }, [play]);


  // const handleClick = () => {
  //   setMessage(message + "a");
  //   //el message de arriba es esencial. Se agradece no tocar!!
  //   let gameToDispatch = { ...product };
  //   gameToDispatch.quantity = 1;
  //   dispatch(addItemCart(gameToDispatch));
  //   toast.success(`${product!.name_product} was added to your cart! 👾`, {
  //     position: "bottom-left",
  //     autoClose: 3000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "dark",
  //   });
  // };

  const handleClick = (prod: ProductInCart) => {
    setMessage(message + "a");
    //el message de arriba es esencial. Se agradece no tocar!!
    let gameToDispatch = { ...prod };
    gameToDispatch.quantity = 1;
    dispatch(addItemCart(gameToDispatch));
    toast.success(`${prod!.name_product} was added to your cart! 👾`, {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };


  const handleSlideClick = (ev: any, id_product: number) => {
    let slide = ev.target;
    if (slide.timerOn) {
      history.push(`/game/${id_product}`);
    }
  };
  const handleSlideDown = (ev: any) => {
    let slide = ev.target;
    if (!slide.timerOn) {
      slide.timerOn = true;
      setTimeout(() => {
        slide.timerOn = false;
      }, 90);
    }
  };

  return (
    <StyledCarousel>
      <Fade>
        <div className="embla">
          <div className="embla__viewport" ref={viewportRef}>
            <div className="embla__container">
              {products &&
                products.map((prod: any) => (
                  <div className="embla__slide" key={prod.id_product}>
                    <div className="embla__slide__inner">
                      <img
                        className="embla__slide__img"
                        src={prod.thumbnail_product}
                        alt={prod.name_product}
                        onMouseDown={(ev) => handleSlideDown(ev)}
                        onClick={(ev) => handleSlideClick(ev, prod.id_product!)}
                      />
                      <div className="embla__slide__detail">
                        <div className="slide__details__top">
                          <Link to={`/game/${prod.id_product}`}>
                            <h3 className="slide__title">
                              {prod.name_product}
                            </h3>
                          </Link>
                        </div>
                        <div className="slide__details__bot">
                          <div className="container__priceDiscount">
                            <span className="slide__discount">-20%</span>
                            <span className="slide__price">
                              ${prod.price_product}
                            </span>
                          </div>

                          <Btn
                            className=" btn-card btn-img"

                            // onClick={handleClick}

                            onClick={() => handleClick(prod)}

                          >
                            Add to cart
                            <StyledSVG src={cart} />
                          </Btn>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
          <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </div>
      </Fade>
    </StyledCarousel>
  );
};

export default Carousel;
