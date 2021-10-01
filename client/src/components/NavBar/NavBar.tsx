import React from "react";
import { StyledNavBar } from "./StyledNavBar";
import { NavLink } from "react-router-dom";
import { SearchBar } from "../index";

import "nes.css/css/nes.min.css";

const NavBar = () => {
  return (
    <StyledNavBar>
      <NavLink to="/home">
        <button className="nes-btn is-primary">Home</button>
      </NavLink>
      <SearchBar />
      <NavLink to="/cart">
        <button className="nes-btn is-primary">Cart</button>
      </NavLink>
    </StyledNavBar>
  );
};

export default NavBar;
