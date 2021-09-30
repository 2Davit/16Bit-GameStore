import React, { FC } from "react";
import { StyledCartSideBar } from "./StyledCartSideBar";
import "nes.css/css/nes.min.css";

interface CartSideBarProps {
  cart: Array<number>;
  show: boolean;
  closeCallback: any;
} //pasarle las props a un functional component

const CartSideBar: FC<CartSideBarProps> = () => {
  return (
    <StyledCartSideBar>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        dicta a commodi, veniam, repellat ipsa excepturi laboriosam ratione eius
        quae quo animi tempora quibusdam sit id dolorum accusantium expedita
        dignissimos.
      </div>
    </StyledCartSideBar>
  );
};

export default CartSideBar;
