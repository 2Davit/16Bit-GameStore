import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getProductDetail } from "../../redux/actions/products_action";
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
import { NONAME } from "dns";


interface Props {
  id: string;
}

const Detail: FC = () => {
  const { id } = useParams<Props>();



  const dispatch = useDispatch();

  const history = useHistory()

  useEffect(() => {
    dispatch(getProductDetail(parseInt(id)));
  }, [dispatch, id]);

  const detailProduct = useSelector(
    (state: Store) => state.productsReducer.detailProduct
  );

/* let stocknuevo = detailProduct.in_stock
  const [stock, setStock] = useState<number>(stocknuevo) */


/* console.log(detailProduct.in_stock) */

  interface Genre {
    name_genre: string;
  }
  
  const [quantity, setQuantity] = useState(1);
  function handleQuantityChange(amount: number) {
    const newValue = quantity + amount;
    if (newValue<=detailProduct.in_stock && newValue >= 1 ) {
      setQuantity((quantity) => quantity + amount);
    }
  }
  /* console.log(stock) */

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

let stockInLocal = JSON.parse(localStorage.getItem("cart")!)
let game = stockInLocal?.find((g:ProductInCart) => g.id_product === detailProduct.id_product)

let unavailable = quantity + game?.quantity === detailProduct.in_stock+ 1? true : false

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
          <h1 className="game__title">
            {detailProduct.name_product} ({detailProduct.release_year})
          </h1>
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
              <img
                className="ratingStars"
                src={fivestars}
                alt="fivestars rating"
              />
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
             
              disabled = {unavailable} 
              className="quantitybutton-small"
              onClick={() => handleQuantityChange(1)}
            >
              +
            </QuantityButton>
          </div>
         {/*  <p className="game__stock">stock: {detailProduct.in_stock}</p> */}
      
           {quantity === detailProduct.in_stock ? <p>Limit stock</p> : null} 
          <div className="game__purchase-container">
            <div className="game__buttons">
              <Btn  onClick={() => handleBuyNow()} className="btn-card btn-img">
                Buy now 
                <StyledSVG src={joystick} />
              </Btn>
              {!unavailable?
              <Btn disabled={unavailable} /* style={unavailable? {display:"none"} : undefined} */  className="btn-sec btn-img" onClick={handleClick}>
                Add to cart
                <StyledSVG src={cart} />
              </Btn>
              :
              <h4>
                No more stock
              </h4>
              }
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
