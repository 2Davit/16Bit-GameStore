import React, { FC } from "react";
import { Link } from "react-router-dom";
import "nes.css/css/nes.min.css";
import { useDispatch, useSelector } from "react-redux";
import { addItemCart } from "../../redux/actions/cart_actions";
import { StyledSVG, Btn } from "../../GlobalStyles/GlobalStyles";
import { StyledProductCard } from "./StyledProductCard";
import cart from "../../assets/img/svg/cart.svg";

interface Props {
  image: string;
  name: string;
  price: number;
  id: number | undefined;
}

// const handleClick = () => {
//   let gameToDispatch = { ...game };
//   gameToDispatch.quantity = 1;
//   dispatch(addItemCart(gameToDispatch));
//   let payload = {
//     id: game.id,
//     quantity: 1,
//   };
//   //¿¿aca iraa el toast??
// };

const ProductCard = ({ game }: any) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    let gameToDispatch = { ...game };
    gameToDispatch.quantity = 1;
    dispatch(addItemCart(gameToDispatch));
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
        <Btn className="btn-card btn-img" onClick={handleClick}>
          Add to cart
          <StyledSVG src={cart} />
        </Btn>
      </div>
      <Link to={`/game/${game.id_product}`} className="card__link">
        Click to see the product
      </Link>
    </StyledProductCard>
  );
};

export default ProductCard;
