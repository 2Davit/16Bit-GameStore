import React, { FC } from "react";
import { StyledNavBar } from "./StyledNavBar";
import { NavLink } from "react-router-dom";

import "nes.css/css/nes.min.css";

interface NavBarProps {
  toggleModal: any;
}

const NavBar: FC<NavBarProps> = ({ toggleModal }) => {
  return (
    <StyledNavBar>
      <NavLink to="/home">
        <button className="nes-btn is-success">Home</button>
      </NavLink>
      <button onClick={toggleModal} className="nes-btn is-success">
        Cart
      </button>
    </StyledNavBar>
  );
};

export default NavBar;
