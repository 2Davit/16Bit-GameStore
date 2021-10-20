import React from "react";
import Board from "./Board";
import { StyledMemory } from "./StyledMemory";
const MemoryGame = () => {
  return (
    <StyledMemory>
      <div className="principal">
        <h1>Win a discount</h1>
        <Board />
      </div>
    </StyledMemory>
  );
};
export default MemoryGame;
