import React, { FC } from "react";
import { CartButton, Title } from "./NavBar.style";
import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import "nes.css/css/nes.min.css";


const NavBar: FC = () => {
  return (
    <div>
      <NavLink to="/home">
        <Title>Home</Title>
      </NavLink>
      <button type="button" className="nes-btn is-warning">Warning</button>
      <NavLink to="/cart">
        <CartButton>
          <FiShoppingCart />
        </CartButton>
      </NavLink>
    </div>
  );
};

export default NavBar;
