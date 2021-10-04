import React from "react";
import CloseButton from "../../assets/img/svg/close-filled-purple.svg";
import { QuantityButton, StyledSVG } from "../../GlobalStyles/GlobalStyles";
import { MiniCard } from "./StyledProductCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemCart, removeItemCart } from "../../redux/actions/cart_actions";

const Mini = ({ detail }: any) => {
  const dispatch = useDispatch();
  let price = detail.price_product * detail.quantity;

  const handleQuantityChange = (amount: number) => {
    const newValue = detail.quantity + amount;
    if (newValue >= 1 && newValue <= 99) {
      let gameToDispatch = { ...detail };
      gameToDispatch.quantity = amount;
      dispatch(addItemCart(gameToDispatch));
    }
  };

  const handleRemove = () => {
    dispatch(removeItemCart(detail.id_product));
  };

  return (
    <MiniCard>
      <div className="article__img">
        <img src={detail.thumbnail_product} alt={detail.name_product} />
      </div>
      <div className="article__info">
        <Link to={`/products/${detail.id_product}`}>
          <p className="article__name">{detail.name_product}</p>
        </Link>
        <p>${price}</p>
        <div className="article__quantitybuttons">
          <QuantityButton
            className="quantitybutton-small"
            onClick={() => handleQuantityChange(-1)}
          >
            -
          </QuantityButton>
          <span className="quantitytext">{detail.quantity}</span>
          <span>Unit(s)</span>
          <QuantityButton
            className="quantitybutton-small"
            onClick={() => handleQuantityChange(1)}
          >
            +
          </QuantityButton>
        </div>
      </div>
      <button className="delete__product" onClick={handleRemove}>
        <StyledSVG src={CloseButton} />
      </button>
    </MiniCard>
  );
};

export default Mini;
