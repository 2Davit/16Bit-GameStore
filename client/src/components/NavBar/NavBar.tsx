import React, { FC } from "react";
import { StyledNavBar } from "./NavBar.style";
import { NavLink } from "react-router-dom";
import "nes.css/css/nes.min.css";

const NavBar: FC = () => {
  return (
    <StyledNavBar>
      <NavLink to="/home">
        <button className="nes-btn is-success">Home</button>
      </NavLink>
      <NavLink to="/cart">
        <button className="nes-btn is-success">Cart</button>
      </NavLink>
    </StyledNavBar>
  );
};

export default NavBar;
