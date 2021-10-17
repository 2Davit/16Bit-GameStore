import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import {
  getProductDetail,
  resetDetail,
} from "../../redux/actions/products_action";
import { Store } from "../../redux/reducer/";
import { GameDetail, StyledSVG } from "./StyledProductDetail";
import { Btn, QuantityButton } from "../../GlobalStyles/GlobalStyles";
import cart from "../../assets/img/svg/cart.svg";
import joystick from "../../assets/img/svg/joystick.svg";
import mercadopagoimg from "../../assets/img/mercadopagoimg.webp";
import fivestars from "../../assets/img/fivestars.png";
import { addItemCart } from "../../redux/actions/cart_actions";
import { toast } from "react-toastify";
import { ProductInCart } from "../../interfaces";
import { addFavorites } from "../../redux/actions/favorite_actions";
import heart from "../../assets/img/svg/heart1.svg";
import axios from 'axios';


interface Props {
  id: string;
}

const Detail: FC = () => {
  const { id } = useParams<Props>();

  const dispatch = useDispatch();

  const history = useHistory();

  const detailProduct = useSelector(
    (state: Store) => state.productsReducer.detailProduct
  );
  const getAll = () => {
    let stockInLocal = JSON.parse(localStorage.getItem("cart")!);
    let game = stockInLocal?.find(
      (g: ProductInCart) => g.id_product === detailProduct.id_product
    );
    return game;
  };

  const [reviewsMean, setReviewsMean] = useState<number>(0);

  let game: any = getAll();

  useEffect(() => {
    dispatch(getProductDetail(parseInt(id)));
    getAll();
    async function getUserReviews(idgame: string) {
      let productReviews = await axios.get(`/videogames/review/${id}/0`);
      if (productReviews.data) {
        var total = productReviews.data.reduce((acc: number, review: any) => {
          acc = acc + review.score;
          return acc;
        }, 0)
        setReviewsMean(Math.ceil(total/productReviews.data.length));
      } else {
        return;
      }
      return;
    }
    getUserReviews(id);
    return function cleanup() {
      dispatch(resetDetail());
    };
  }, [dispatch, id]);

  interface Genre {
    name_genre: string;
  }
  
  const [quantity, setQuantity] = useState<number>(1);
  function handleQuantityChange(amount: number) {
    const newValue = quantity + amount;
    if (newValue <= detailProduct.in_stock && newValue >= 1) {
      setQuantity((quantity) => quantity + amount);
    }
  }
  
  const handleClick = () => {
    let productToDispatch = { ...detailProduct };
    productToDispatch.quantity = quantity;
    dispatch(addItemCart(productToDispatch));
    toast.success(
      `${detailProduct.name_product} x${quantity} was added to your cart! 👾`,
      {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }
    );
    setQuantity(1);
  };

  const handleBuyNow = () => {
    let Dispatch = { ...detailProduct };
    Dispatch.quantity = quantity;
    dispatch(addItemCart(Dispatch));
    history.push("/order");
  };

  const handleAddFavorites = () => {
    let idProduct = detailProduct.id_product;
    let idUser = JSON.parse(localStorage.getItem("userData")!);
    if (idUser) {
      let ids = {
        idProduct: idProduct,
        idUser: idUser.id,
      };
      dispatch(addFavorites(ids));
      toast.info(
        `${detailProduct.name_product} was added to your favorites! 💜`,
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
    } else alert("Login please");
  };

  let unavailable =
    quantity + game?.quantity === detailProduct.in_stock + 1 ? true : false;
  
  const user = JSON.parse(localStorage.getItem("userData")!);
  return (
    <>
      <GameDetail>
        <div className="game__img">
          {detailProduct.image_product?.map((e: string, i: number) => (
            <img
              key={i}
              src={detailProduct.image_product[0]}
              alt={detailProduct.name_product}
            />
          ))}
        </div>
        <div className="game__info">
          <div className="game__title">
            <h1>
              {detailProduct.name_product} ({detailProduct.release_year})
            </h1>
            {user ? (
              <button
                onClick={handleAddFavorites}
                disabled={unavailable}
                className="btn-fav"
              >
                <StyledSVG src={heart} />
              </button>
            ) : null}
          </div>
          <ul className="game__categories">
            {detailProduct.genres?.map((e: Genre, i: number) => (
              <li key={i} className="game__category">
                {e.name_genre.toUpperCase()}
              </li>
            ))}
          </ul>
          <div className="game__container-price-score">
            <p className="game__price">${detailProduct.price_product}</p>
            <span className="game__star-container">
            
                <span className='stars'>{reviewsMean === 5 ? '⭐⭐⭐⭐⭐' : reviewsMean === 4 ? '⭐⭐⭐⭐' :
                reviewsMean === 3 ? '⭐⭐⭐' : reviewsMean === 2 ? '⭐⭐' : reviewsMean === 1 ? '⭐' : null}</span>
                
            </span>
          </div>
          <p className="game__description">
            {detailProduct.description_product}
          </p>

          <div className="game__quantity">
            <span>Amount to buy:</span>
            <QuantityButton
              className="quantitybutton-small"
              onClick={() => handleQuantityChange(-1)}
            >
              -
            </QuantityButton>
            <span className="game__quantityvalue quantitytext">{quantity}</span>
            <QuantityButton
              disabled={unavailable}
              className="quantitybutton-small"
              onClick={() => handleQuantityChange(1)}
            >
              +
            </QuantityButton>
          </div>
          {quantity === detailProduct.in_stock ? <p>Limit stock</p> : null}
          <div className="game__purchase-container">
            <div className="game__buttons">
              <Btn
                onClick={() => handleBuyNow()}
                disabled={unavailable}
                className={
                  !unavailable
                    ? "btn-card btn-img"
                    : "btn-card-disabled btn-img"
                }
              >
                Buy now
                <StyledSVG src={joystick} />
              </Btn>

              {!unavailable ? (
                <Btn
                  disabled={unavailable}
                  className="btn-card btn-img"
                  onClick={handleClick}
                >
                  Add to cart
                  <StyledSVG src={cart} />
                </Btn>
              ) : (
                <h4>No more stock</h4>
              )}
            </div>
            <img
              className="game__payment-methods-icons"
              src={mercadopagoimg}
              alt="mercadopago img"
            />
          </div>
        </div>
      </GameDetail>
    </>
  );
};

export default Detail;
