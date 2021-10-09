import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "nes.css/css/nes.min.css";
import { useDispatch } from "react-redux";
import { addItemCart } from "../../redux/actions/cart_actions";
import { StyledSVG, Btn } from "../../GlobalStyles/GlobalStyles";
import { StyledProductCard } from "./StyledProductCard";
import cart from "../../assets/img/svg/cart.svg";
import { toast } from "react-toastify";
import { animateScroll } from "react-scroll";
import { ProductInCart } from "../../interfaces";

interface Props {
  game: ProductInCart;
}

const ProductCard: FC<Props> = ({ game }) => {
  
  const [message, setMessage] = useState<string>('');
  
  const dispatch = useDispatch();


  function handleEffect() {
    let stockInLocal = JSON.parse(localStorage.getItem("cart")!)
    let gameStorage = stockInLocal?.find((g:ProductInCart) => g.id_product === game.id_product)
    let unavailable = gameStorage?.quantity >= game.in_stock? true : false
    return unavailable;
  }

  let disabled = handleEffect();

  useEffect(() => {
      handleEffect()
  }, [message]);

  
  const handleOpenClick = (ev: any) => {
    animateScroll.scrollTo(250, { duration: 300 });
  };

  const handleClick = () => {
      setMessage(message + 'a')
      //el message de arriba es esencial. Se agradece no tocar!!
      let gameToDispatch = { ...game };
      gameToDispatch.quantity = 1;
      dispatch(addItemCart(gameToDispatch));
      toast.success(`${game.name_product} was added to your cart! 👾`, {
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

  return (
    <StyledProductCard className="card">
      <div className="card__imgContainer">
        <img
          className="card__img"
          src={game.thumbnail_product}
          alt={game.name_product}
        />
      </div>
      <div className="card__content">
        <h3 className="card__title">
          {game.name_product?.length > 33
            ? game.name_product.substring(0, 30) + "..."
            : game.name_product}
        </h3>
        <p className="card__price">$ {game.price_product}</p>
        <Btn className="btn-card btn-img" onClick={handleClick} disabled={disabled} >
          Add to cart
          <StyledSVG src={cart} />
        </Btn>
      </div>
      <Link
        to={`/game/${game.id_product}`}
        className="card__link"
        onClick={handleOpenClick}
      >
        Click to see the product
      </Link>
    </StyledProductCard>
  );
};

export default ProductCard;