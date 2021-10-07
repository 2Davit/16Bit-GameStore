import React, { FC } from "react";
import { StyledTitle } from "./Title.style";

const Title: FC = () => {
  return (
    <StyledTitle>
      16Bit
      <span className="gamestore">GameStore</span>
    </StyledTitle>
  );
};

export default Title;
