import React, { FC, useState } from "react";
import {
  CardContainer,
  CardImage,
  CardPrice,
  CardSubContainer,
  CardTitle,
  CardButton,
  AddToCart,
} from "./Card.style";
import { RiEyeCloseFill, RiEyeFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "nes.css/css/nes.min.css";

interface Props {
  image: string;
  name: string;
  price: number;
  id: number | undefined;
}

const Card: FC<Props> = ({ image, name, price, id }) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <CardContainer>
      <CardButton onClick={() => setVisible(!visible)}>
        {visible ? <RiEyeFill /> : <RiEyeCloseFill />}
      </CardButton>
      <Link to={`/game/${id}`}>
        <CardImage src={image} alt={name} />
      </Link>
      <AddToCart className="nes-btn is-primary">Add to Cart</AddToCart>
      <CardSubContainer visible={visible}>
        <CardTitle>{name}</CardTitle>
        <CardPrice>{price}</CardPrice>
      </CardSubContainer>
    </CardContainer>
  );
};

export default Card;
