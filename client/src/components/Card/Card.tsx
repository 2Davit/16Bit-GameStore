import React, { FC, useState } from "react";
import {
  CardContainer,
  CardImage,
  CardPrice,
  CardSubContainer,
  CardTitle,
  CardButton,
  AddToCart,
} from "./StyledCard";
import { RiEyeCloseFill, RiEyeFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "nes.css/css/nes.min.css";
import { useDispatch } from "react-redux";
import { addItemCart } from "../../redux/actions/cart_actions";

interface Props {
  image: string;
  name: string;
  price: number;
  id: number | undefined;
}

const Card: FC<Props> = ({ image, name, price, id }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addItemCart({ name_product: "prueba", id: 1, quantity: 1 }));
  };

  return (
    <CardContainer>
      <CardButton onClick={() => setVisible(!visible)}>
        {visible ? <RiEyeFill /> : <RiEyeCloseFill />}
      </CardButton>
      <Link to={`/game/${id}`}>
        <CardImage src={image} alt={name} />
      </Link>
      <AddToCart className="nes-btn is-primary" onClick={handleClick}>
        Add to Cart
      </AddToCart>
      <CardSubContainer visible={visible}>
        <CardTitle>{name}</CardTitle>
        <CardPrice>{price}</CardPrice>
      </CardSubContainer>
    </CardContainer>
  );
};

export default Card;
