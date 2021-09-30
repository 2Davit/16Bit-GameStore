import React, { FC } from "react";
import { Link } from "react-router-dom";
import "nes.css/css/nes.min.css";
import { useDispatch } from "react-redux";
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

const ProductCard: FC<Props> = ({ name, price, image, id }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addItemCart({ name_product: "prueba", id: 1, quantity: 1 }));
  };

  return (
    <StyledProductCard className="card">
      <div className="card__imgContainer">
        <img className="card__img" src={image} alt={name} />
      </div>
      <div className="card__content">
        <h3 className="card__title">
          {name.length > 33 ? name.substring(0, 30) + "..." : name}
        </h3>
        <p className="card__price">$ {price}</p>
        <Btn className="btn-card btn-img" onClick={handleClick}>
          Add to cart
          <StyledSVG src={cart} />
        </Btn>
      </div>
      <Link to={`/game/${id}`} className="card__link">
        Click to see the product
      </Link>
    </StyledProductCard>
  );
};

export default ProductCard;
