import React from "react";
import CloseButton from "../../assets/img/svg/close-filled-purple.svg";
import { QuantityButton, StyledSVG } from "../../GlobalStyles/GlobalStyles";
import { MiniCard } from "./StyledProductCard";
import { Link } from "react-router-dom";

const Mini = () => {
  return (
    <MiniCard>
      <div className="article__img">
        <img src="https://cdn.sega.com/1.png" alt="sonic" />
      </div>
      <div className="article__info">
        <Link to={`/products/1`}>
          <p className="article__name">Sonic</p>
        </Link>
        <p>$45</p>
        <div className="article__quantitybuttons">
          <QuantityButton className="quantitybutton-small">-</QuantityButton>
          <span className="quantitytext">1</span>
          <span>Unit(s)</span>
          <QuantityButton className="quantitybutton-small">+</QuantityButton>
        </div>
      </div>
      <button className="delete__product">
        <StyledSVG src={CloseButton} />
      </button>
    </MiniCard>
  );
};

export default Mini;
