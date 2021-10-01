import React, { FC } from "react";
import { StyledCartSideBar, StyledCloseBtn } from "./StyledCartSideBar";
import "nes.css/css/nes.min.css";
import BigCloseButton from "../../assets/img/svg/close-transparent.svg";
import { Btn, Hr } from "../../GlobalStyles/GlobalStyles";
import { Link } from "react-router-dom";

interface CartSideBarProps {
  // no borrar, se va a usar!!
  cart: Array<number>;
  show: boolean;
  closeCallback: any;
} //pasarle las props a un functional component

const CartSideBar: FC<CartSideBarProps> = () => {
  return (
    <StyledCartSideBar>
      <div className="modal">
        <Link to="/home" title="Close" className="modal__close">
          <StyledCloseBtn src={BigCloseButton} />
        </Link>
        <h2 className="modal__title">Your Cart:</h2>
        <h2>MiniProductCard coming soon!! 😁</h2>
        <Hr />
        <div className="modal__subtotal">
          <p>Subtotal:</p>
          <p>$999</p>
        </div>
        <div className="modal__buttons">
          <Link to="/order">
            <Btn className="btn btn-card">Checkout</Btn>
          </Link>
          <Btn className="btn btn-sec">Clear Cart</Btn>
        </div>
      </div>
    </StyledCartSideBar>
  );
};

export default CartSideBar;
