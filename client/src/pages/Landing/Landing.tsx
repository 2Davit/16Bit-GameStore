import React, { FC } from "react";
import { Link } from "react-router-dom";
import { StyledLanding } from "./StyledLanding";

const Landing: FC = () => {
  return (
    <StyledLanding>
      <Link to="/home">
        <button type="button" className="nes-btn is-primary">
          HOME
        </button>
      </Link>
    </StyledLanding>
  );
};

export default Landing;
