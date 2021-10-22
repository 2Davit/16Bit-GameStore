import React, { useState } from "react";
import Tile from "./Tile";
import { TILE_COUNT, GRID_SIZE, BOARD_SIZE } from "./constants";
import { canSwap, shuffle, swap, isSolved } from "./helpers";
import { StyledMemory } from "./StyledMemory";
import { Btn } from "../../../../GlobalStyles/GlobalStyles";

function Board() {
  const [tiles, setTiles] = useState([...Array(TILE_COUNT).keys()]);
  const [isStarted, setIsStarted] = useState(false);

  const shuffleTiles = () => {
    const shuffledTiles = shuffle(tiles);
    setTiles(shuffledTiles);
  };

  const swapTiles = (tileIndex) => {
    if (canSwap(tileIndex, tiles.indexOf(tiles.length - 1))) {
      const swappedTiles = swap(
        tiles,
        tileIndex,
        tiles.indexOf(tiles.length - 1)
      );
      setTiles(swappedTiles);
    }
  };

  const handleTileClick = (index) => {
    swapTiles(index);
  };

  const handleShuffleClick = () => {
    shuffleTiles();
  };

  const handleStartClick = () => {
    shuffleTiles();
    setIsStarted(true);
  };

  const pieceWidth = Math.round(BOARD_SIZE / GRID_SIZE);
  const pieceHeight = Math.round(BOARD_SIZE / GRID_SIZE);
  const style = {
    width: BOARD_SIZE,
    height: BOARD_SIZE,
  };
  const hasWon = isSolved(tiles);

  let coupons = ['BIT', 'LUCK', 'GOOD', 'TUKI', 'TUQUI']

  let randomItem = coupons[Math.floor(Math.random() * coupons.length)];

  return (
    <StyledMemory>
      <ul style={style} className="board">
        {tiles.map((tile, index) => (
          <Tile
            key={tile}
            index={index}
            tile={tile}
            width={pieceWidth}
            height={pieceHeight}
            handleTileClick={handleTileClick}
          />
        ))}
      </ul>
      {hasWon && isStarted ? (
        <div className="win-text">
          <h3>Congratulations! You won a discount coupon!</h3>
          <p>Copy the following discount code:</p>
          <p className="Code">{randomItem}</p>
        </div>
      ) : (
        <div className="win-text">
          <p className="info-text">
            Complete the Puzzle to win a discount code!
          </p>
          <p className="info-text">Use Click to move the pieces</p>
        </div>
      )}
      {!isStarted ? (
        <>
          <Btn className="btn-card" onClick={() => handleStartClick()}>
            Start Game
          </Btn>
        </>
      ) : (
        <Btn className="btn-card" onClick={() => handleShuffleClick()}>
          Reset Game
        </Btn>
      )}
    </StyledMemory>
  );
}

export default Board;
