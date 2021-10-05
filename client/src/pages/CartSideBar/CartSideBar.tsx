import React, { FC, useState, useEffect } from "react";
import { StyledCartSideBar, StyledCloseBtn } from "./StyledCartSideBar";
import "nes.css/css/nes.min.css";
import BigCloseButton from "../../assets/img/svg/close-transparent.svg";
import { Btn, Hr } from "../../GlobalStyles/GlobalStyles";
import { Link } from "react-router-dom";
import { Mini } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { Store } from "../../redux/reducer/";
import { ProductInCart } from "../../interfaces";
import { clearCart } from "../../redux/actions/cart_actions";

interface CartSideBarProps {
  // no borrar, se va a usar!!
  cart: Array<number>;
  show: boolean;
  closeCallback: any;
} //pasarle las props a un functional component

const CartSideBar: FC<CartSideBarProps> = () => {
  const dispatch = useDispatch();
  const cartList: any = useSelector(
    (state: Store) => state.cartReducer.cart.list
  );

  const [subtotal, setSubtotal] = useState(0.0);
  useEffect(() => {
    if (cartList) {
      setSubtotal(
        cartList.reduce((acc: number, product: ProductInCart | any) => {
          acc = acc + product.price_product * product.quantity;
          return acc;
        }, 0.0)
      );
    }
  }, [cartList]);

  return (
    <StyledCartSideBar>
      <div className="modal">
        <Link to="/home" title="Close" className="modal__close">
          <StyledCloseBtn src={BigCloseButton} />
        </Link>
        <h2 className="modal__title">Your Cart:</h2>
        {cartList?.map((purchase: ProductInCart) => (
          <Mini detail={purchase} key={purchase.id_product} />
        ))}
        <Hr />
        <div className="modal__subtotal">
          <p>Subtotal:</p>
          <p>${subtotal}</p>
        </div>
        <div className="modal__buttons">
          <Link to="/order">
            <Btn className="btn btn-card">Checkout</Btn>
          </Link>
          <Btn className="btn btn-sec" onClick={() => dispatch(clearCart())}>
            Clear Cart
          </Btn>
        </div>
      </div>
    </StyledCartSideBar>
  );
};

export default CartSideBar;
