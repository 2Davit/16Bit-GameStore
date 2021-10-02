import React, { FC, useState } from "react";
import { StyledCartSideBar, StyledCloseBtn } from "./StyledCartSideBar";
import "nes.css/css/nes.min.css";
import BigCloseButton from "../../assets/img/svg/close-transparent.svg";
import { Btn, Hr } from "../../GlobalStyles/GlobalStyles";
import { Link } from "react-router-dom";
import { Mini, ProductCard } from "../../components/index";
import { useSelector } from "react-redux";
import { Store } from "../../redux/reducer/";
import { ProductInCart } from "../../interfaces";

interface CartSideBarProps {
  // no borrar, se va a usar!!
  cart: Array<number>;
  show: boolean;
  closeCallback: any;
} //pasarle las props a un functional component

const CartSideBar: FC<CartSideBarProps> = () => {
  const cartList: any = useSelector(
    (state: Store) => state.cartReducer.cart.list
  );

  const [price, setPrice] = useState(0);

  function sumarTotal(totalPrice: number) {
    setPrice(price + totalPrice);
  }

  return (
    <StyledCartSideBar>
      <div className="modal">
        <Link to="/home" title="Close" className="modal__close">
          <StyledCloseBtn src={BigCloseButton} />
        </Link>
        <h2 className="modal__title">Your Cart:</h2>
        {cartList?.map((purchase: ProductInCart) => (
          <Mini
            detail={purchase}
            sumarTotal={sumarTotal}
            key={purchase.id_product}
          />
        ))}
        <Hr />
        <div className="modal__subtotal">
          <p>Subtotal:</p>
          <p>${price}</p>
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
