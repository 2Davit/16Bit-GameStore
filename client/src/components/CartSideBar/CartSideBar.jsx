import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { StyledCartSideBar, StyledCloseBtn } from "./StyledCartSideBar";
import "nes.css/css/nes.min.css";
import BigCloseButton from "../../assets/img/svg/close-transparent.svg";
import { Btn, Hr } from "../../GlobalStyles/GlobalStyles";
import { Link } from "react-router-dom";
import { Mini } from "../index";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../redux/actions/cart_actions";
import { Slide } from "react-reveal";
import Swal from 'sweetalert2';
import { BtnOnSale, BtnRemoveFilter } from "../Filter/StyledFilter";
// interface CartSideBarProps {
//   show: boolean;
//   closeCallback: any;
// }

const CartSideBar /*: FC<CartSideBarProps>*/ = ({ closeCallback, show }) => {
  const dispatch = useDispatch();
  const cartList /* :ProductInCart  */ = useSelector(
    (state /* : Store */) => state.cartReducer.cart.list
  );

  const cartStorage = JSON.parse(localStorage.getItem("cart"));

  const [subtotal, setSubtotal] = useState(0.0);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "15px";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [show]);

  useEffect(() => {
    if (cartList) {
      setSubtotal(
        cartList.reduce((acc /*: number*/, product /*: ProductInCart*/) => {
          acc = acc + product.price_product * product.quantity;
          return acc;
        }, 0.0)
      );
    }
  }, [cartList]);

  function handleClearCart() {
    Swal.fire({
      title: 'Are you sure?',
      text: "Your cart will be empty!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, clear it!',
      zIndex: "9999"
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(clearCart());
        Swal.fire(
          'Done!',
          'Items has been removed from your cart',
          'success'
        )
      }
    })
  }

  return ReactDOM.createPortal(
    <StyledCartSideBar>
      <div
        className="cart__overlay"
        style={{ display: show ? "block" : "none" }}
        onClick={closeCallback}
      />
      <Slide right duration={400} when={show}>
        <div className="modal" style={{ display: show ? "block" : "none" }}>
          <button
            title="Close"
            className="modal__close"
            onClick={closeCallback}
          >
            <StyledCloseBtn src={BigCloseButton} />
          </button>

          <h2 className="modal__title">My Cart:</h2>
          {cartStorage?.map((purchase /*: ProductInCart*/) => (
            <Mini detail={purchase} key={purchase.id_product} />
          ))}
          <Hr />
          <div className="modal__subtotal">
            <p>Subtotal:</p>
            <p>${subtotal}</p>
          </div>
          <div id="modal__buttons" className="modal__buttons">
            <Link to="/order">
              <BtnOnSale style={{width: '50%', marginBottom: '5px'}} onClick={closeCallback}>
                Checkout
              </BtnOnSale>
            </Link>
            <BtnRemoveFilter style={{width: '50%', marginBottom: '5px'}} onClick={handleClearCart}>
              Clear Cart
            </BtnRemoveFilter>
          </div>
        </div>
      </Slide>
    </StyledCartSideBar>,
    document.getElementById("cartModal")
  );
};

export default CartSideBar;
