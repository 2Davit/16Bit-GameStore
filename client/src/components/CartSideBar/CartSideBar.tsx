import React, { FC } from "react";
import { StyledCartSideBar } from "./StyledCartSideBar";
import "nes.css/css/nes.min.css";

interface CartSideBarProps {
  cart: Array<number>;
  show: boolean;
  closeCallback: any;
} //pasarle las props a un functional component

const CartSideBar: FC<CartSideBarProps> = ({
  cart,
  show,
  closeCallback,
}: CartSideBarProps) => {
  return (
    <StyledCartSideBar>
      <div
        className={`.cart__overlay ${show ? "slide-in" : "slide-out"}`}
        // style={{ display: show ? "block" : "none" }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        dicta a commodi, veniam, repellat ipsa excepturi laboriosam ratione eius
        quae quo animi tempora quibusdam sit id dolorum accusantium expedita
        dignissimos.
        <button>
          <i onClick={closeCallback} className="nes-icon close is-small"></i>
        </button>
      </div>
      <div className="modalPrueba"></div>
    </StyledCartSideBar>
  );
};

export default CartSideBar;
