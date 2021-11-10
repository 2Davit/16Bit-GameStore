import React, { FC, useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
//Redux
import {
  getProductDetail,
  resetDetail,
} from "../../redux/actions/products_action";
import { addItemCart } from "../../redux/actions/cart_actions";
import { addFavorites } from "../../redux/actions/favorite_actions";
import { Store } from "../../redux/reducer/";
//Estilos
import { GameDetail, StyledSVG, ReviewContainer, UserInfoContainer, UserReviewFields, UserReviewText } from "./StyledProductDetail";
import { Btn, QuantityButton } from "../../GlobalStyles/GlobalStyles";
import { toast } from "react-toastify";
//images
import cart from "../../assets/img/svg/cart.svg";
import joystick from "../../assets/img/svg/joystick.svg";
import mercadopagoimg from "../../assets/img/mercadopagoimg.webp";
import heart from "../../assets/img/svg/heart1.svg";
//Interfaces
import { ProductInCart } from "../../interfaces";
import Swal from 'sweetalert2';

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

  const [message, setMessage] = useState<string>("");
  const [reviewsMean, setReviewsMean] = useState<number>(0);
  const [reviews, setReviews] = useState<Array<any>>([]);
  let game: any = getAll();

  const handleEffect = useCallback(() => {
    let stockInLocal = JSON.parse(localStorage.getItem("cart")!);
    let gameStorage = stockInLocal?.find(
      (g: ProductInCart) => g.id_product === detailProduct.id_product
    );

    let unavailable = gameStorage?.quantity >= detailProduct.in_stock ? true : false;
    return unavailable;
  }, [detailProduct.id_product, detailProduct.in_stock]);

  let disabled = handleEffect();

  useEffect(() => {
    handleEffect();
  }, [message, handleEffect]);

  useEffect(() => {
    dispatch(getProductDetail(parseInt(id)));
    getAll();
    async function getUserReviews(idgame: string) {
      let productReviews = await axios.get(`/videogames/review/${id}/0`);
      if (productReviews.data) {
        setReviews(productReviews.data);
        var total = productReviews.data.reduce((acc: number, review: any) => {
          acc = acc + review.score;
          return acc;
        }, 0);
        setReviewsMean(Math.ceil(total / productReviews.data.length));
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
    setMessage(message + "a");
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
      Swal.fire({
        title: "Success",
        text: "Added to favs!",
        icon: "success",
        confirmButtonText: "💜",
      })
    } else alert("Login please");
  };

  let unavailable = quantity + game?.quantity === detailProduct.in_stock + 1 ? true : false;

  const user = JSON.parse(localStorage.getItem("userData")!);
  return (
    <>
          <Btn style={{marginTop: "1rem", marginLeft:"1rem"}} className=" btn-card" onClick={() => history.push("/home")}>
          <i className="fas fa-caret-left"></i> Go back
        </Btn>
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
              <span className="stars">
                {reviewsMean === 5
                  ? "⭐⭐⭐⭐⭐"
                  : reviewsMean === 4
                  ? "⭐⭐⭐⭐"
                  : reviewsMean === 3
                  ? "⭐⭐⭐"
                  : reviewsMean === 2
                  ? "⭐⭐"
                  : reviewsMean === 1
                  ? "⭐"
                  : null}
              </span>
            </span>
          </div>
          <p className="game__description">
            {detailProduct.description_product}
          </p>

          <div className="game__quantity">
            <span>Amount:</span>
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
          <div className="game__purchase-container">
          {quantity === detailProduct.in_stock ? <p>Limit stock</p> : null}
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

              {!disabled ? (
                <Btn
                  disabled={unavailable}
                  className="btn-card btn-img"
                  onClick={handleClick}
                >
                  Add to cart
                  <StyledSVG src={cart} />
                </Btn>
              ) : (
                <Btn className="btn-sinstock">Sin Stock</Btn>
              )}
              {reviews?.length ? (
                <Btn
                  className="btn-card btn-img"
                  onClick={() => window.scrollTo(0, 435)}
                >
                  Reviews
                </Btn>
              ) : null}
            </div>
            {/* <img
              className="game__payment-methods-icons"
              src={mercadopagoimg}
              alt="mercadopago img"
            /> */}
          </div>
        </div>
      </GameDetail>
      {reviews?.length ? (
        <ReviewContainer >
          
            
            {reviews.map((r) => {
              return (
                <div
                  style={{
                   listStyle: "none",
                    // display: "flex",
                    // alignItems: "center",
                    // padding: "1rem",
                   
                  }}
                > <UserInfoContainer>
                  <UserReviewFields>User: {r.userIdUser}</UserReviewFields>
                  <UserReviewFields>
                    Rating: 
                    {r.score === 5
                      ? "⭐⭐⭐⭐⭐"
                      : r.score === 4
                      ? "⭐⭐⭐⭐"
                      : r.score === 3
                      ? "⭐⭐⭐"
                      : r.score === 2
                      ? "⭐⭐"
                      : "⭐"}
                  </UserReviewFields>
                  <UserReviewFields>
                    Date: {r.createdAt.split("T")[0]}
                  </UserReviewFields>
                  </UserInfoContainer>
                  <p style={{padding:"0 1rem"}}>Review:</p>
                  <UserReviewText>{r.description}</UserReviewText>
                </div>
              );
            })}
          
        </ReviewContainer>
      ) : null}
    </>
  );
};

export default Detail;
