import React from "react";
import { StyledNavBar } from "./StyledNavBar";
import { Link } from "react-router-dom";
import { SearchBar } from "../index";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/actions/products_action";
import { Title } from "../index";

import "nes.css/css/nes.min.css";

const NavBar = ({ setPage }: any) => {
  const dispatch = useDispatch();

  const homeOnClick = () => {
    dispatch(getAllProducts());
  };

  return (
    <StyledNavBar>
      <Link to="/home" onClick={homeOnClick}>
        <Title/>
      </Link>
      <SearchBar setPage={setPage} />
      <Link to="/cart">
        <button className="nes-btn is-primary">Cart</button>
      </Link>
    </StyledNavBar>
  );
};

export default NavBar;
