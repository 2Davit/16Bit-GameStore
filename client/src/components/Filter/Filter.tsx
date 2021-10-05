import React, { useState, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledFilter, SelectStyled } from "./StyledFilter";

import {
  doubleFilter,
  onSaleFilter,
  getAllProducts,
} from "../../redux/actions/products_action";
import { Store } from "../../redux/reducer/";

interface Props {
  setPage(num: number): void;
}


const Filter: FC<Props> = ({ setPage }) => {
  const totalProducts = useSelector(
    (state: Store) => state.productsReducer.totalProducts
  );
  const renderingProducts = useSelector(
    (state: Store) => state.productsReducer.renderingProducts
  );

  const [show, setShow] = useState(true);
  const dispatch = useDispatch();

  function handleFilter() {
    let filterPlatform = {
      valuePlatform: (
        document.getElementById("filterPlatform") as HTMLInputElement
      ).value,
      valueGenre: (document.getElementById("filterGenre") as HTMLInputElement)
        .value,
      totalProducts,
      renderingProducts,
    };
    dispatch(doubleFilter(filterPlatform));
    setPage(1);
  }

  const handleOnSaleFilter = () => {
    dispatch(onSaleFilter("filter"));
    setShow(!show);
  };

  const handleAll = () => {
    dispatch(getAllProducts());
    setShow(!show);
  };

  return (
    <StyledFilter>
      <section>
        <h5>By platform</h5>
        <SelectStyled id="filterPlatform" onChange={handleFilter}>
          <option value="">All</option>
          <option value="gba">GBA</option>
          <option value="nes">NES</option>
          <option value="arcade">Arcade</option>
          <option value="sega">Sega</option>
          <option value="snes">SNES</option>
          <option value="a2600">A2600</option>
        </SelectStyled>
      </section>
      <section>
        <h5>By genre</h5>
        <SelectStyled id="filterGenre" onChange={handleFilter}>
          <option value="">All</option>
          <option value="action">Action</option>
          <option value="shooter">Shooter</option>
          <option value="racing">Racing</option>
          <option value="fighting">Fighting</option>
          <option value="sports">Sports</option>
          <option value="arcade">Arcade</option>
          <option value="adventure">Adventure</option>
          <option value="platform">Platform</option>
          <option value="puzzle">Puzzle</option>
          <option value="strategy">Strategy</option>
          <option value="rpg">RPG</option>
        </SelectStyled>
      </section>
      <section>
        <h5>On sale</h5>

        {show ? (
          <button className="nes-btn is-primary" onClick={handleOnSaleFilter}>
            Get On Sale
          </button>
        ) : (
          <button className="nes-btn is-primary" onClick={handleAll}>
            Get All
          </button>
        )}
      </section>
    </StyledFilter>
  );
};

export default Filter;
