import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteNavbar } from "../../redux/actions/admin_actions";
import { StyledLanding } from "./StyledLanding";

const Landing: FC = () => {

  const dispatch = useDispatch();
  //quitar la navbar
  useEffect(() => {
    dispatch(deleteNavbar())
  },[dispatch])

  return (
    <StyledLanding>
      <Link to="/home">
        <button type="button" className="nes-btn is-warning">
          HOME
        </button>
      </Link>
    </StyledLanding>
  );
};

export default Landing;
