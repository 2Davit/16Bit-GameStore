import React from "react";
import { NavLink, Link } from "react-router-dom";

export function Cart() {
  return (
    <Link to="/cart" className="hover">
      <button>Cart</button>
    </Link>
  );
}
