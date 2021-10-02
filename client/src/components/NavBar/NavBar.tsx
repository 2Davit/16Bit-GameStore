import React from "react";
import { StyledNavBar } from "./StyledNavBar";
import { NavLink } from "react-router-dom";
import { SearchBar } from "../index";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/actions/products_action";

import "nes.css/css/nes.min.css";

const NavBar = ({ setPage }: any) => {
  const dispatch = useDispatch();

  const homeOnClick = () => {
    dispatch(getAllProducts());
  };

  return (
    <StyledNavBar>
      <NavLink to="/home" onClick={homeOnClick}>
        <button className="nes-btn is-primary">Home</button>
      </NavLink>
      <SearchBar setPage={setPage} />
      <NavLink to="/cart">
        <button className="nes-btn is-primary">Cart</button>
      </NavLink>
    </StyledNavBar>
  );
};

export default NavBar;
