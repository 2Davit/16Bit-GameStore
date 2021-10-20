import React from "react";
import { Motion, spring } from "react-motion";
import { getMatrixPosition, getVisualPosition } from "./helpers";
import { TILE_COUNT, GRID_SIZE, BOARD_SIZE } from "./constants";
import { StyledMemory } from "./StyledMemory";
import background from "./image.jpg";

function Tile(props) {
  const { tile, index, width, height, handleTileClick } = props;
  const { row, col } = getMatrixPosition(index);
  const visualPos = getVisualPosition(row, col, width, height);

  const tileStyle = {
    width: `calc(100% / ${GRID_SIZE})`,
    height: `calc(100% / ${GRID_SIZE})`,
    translateX: visualPos.x,
    translateY: visualPos.y,
    backgroundImage: `url(${background})`,
    backgroundSize: `${BOARD_SIZE * 1.25}px`,
    backgroundPosition: `${(100 / GRID_SIZE) * (tile % GRID_SIZE)}% ${
      (100 / GRID_SIZE) * Math.floor(tile / GRID_SIZE)
    }%`, 
  };

  const motionStyle = {
    translateX: spring(visualPos.x),
    translateY: spring(visualPos.y),
  };

  return (
    <Motion style={motionStyle}>
      {({ translateX, translateY }) => (
        <StyledMemory>
          <li
            style={{
              ...tileStyle,
              transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
              // Is last tile?
              opacity: tile === TILE_COUNT - 1 ? 0 : 1,
            }}
            className="tile"
            onClick={() => handleTileClick(index)}
          ></li>
        </StyledMemory>
      )}
    </Motion>
  );
}

export default Tile;
