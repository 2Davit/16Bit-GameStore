import React, { FC } from "react";
import { Mario } from "./MarioLoading.style";

import Mariogif from "../../assets/icons/mariogif.png";

const MarioLoading: FC = () => {
  return (
    <div
      style={{
        background: "var(--clr-primary)",
        borderRadius: "2rem",
        padding: "2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Mario src={Mariogif} />
      <h2>Loading..</h2>
    </div>
  );
};

export default MarioLoading;
