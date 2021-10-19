import React, { useState, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledFilter, SelectStyled } from "./StyledFilter";
import { Btn } from "../../GlobalStyles/GlobalStyles";
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
  const totalGenres = useSelector(
    (state: Store) => state.productsReducer.genres
  );
  const totalPlatforms = useSelector(
    (state: Store) => state.productsReducer.platforms
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

  const handleReset = () => {
    dispatch(getAllProducts());
    (document.getElementById("filterPlatform") as HTMLInputElement).value = "";
    (document.getElementById("filterGenre") as HTMLInputElement).value = "";
    setPage(1);
  };

  const filterPlatform: any = document.getElementById("filterPlatform");
  const filterGenre: any = document.getElementById("filterGenre");
  const btnSale: any = document.getElementById("btnSale");

  return (
    <StyledFilter>
      
      {/* <h2>Filter:</h2> */}
      <section>
        <h5>By Platform</h5>
        <SelectStyled id="filterPlatform" onChange={handleFilter}>
          <option value="">All</option>
          {totalPlatforms.map((index: any) => (
            <option value={index} key={index}>
              {index}
            </option>
          ))}
        </SelectStyled>
      </section>
      <section>
        <h5>By Genre</h5>
        <SelectStyled id="filterGenre" onChange={handleFilter}>
          <option value="">All</option>
          {totalGenres.map((index: any) => (
            <option value={index} key={index}>
              {index}
            </option>
          ))}
        </SelectStyled>
      </section>
      <section>
        {show ? (
          <Btn id="btnSale" className="btn-card" onClick={handleOnSaleFilter}>
            On Sale
          </Btn>
        ) : (
          <Btn className="btn-card" onClick={handleAll}>
            All
          </Btn>
        )}
      </section>
      <section>
        {!(filterPlatform?.value === "") ||
        !(filterGenre?.value === "") ||
        !btnSale ? (
          <Btn className="btn-sec" onClick={handleReset}>
            Remove
          </Btn>
        ) : null}
      </section>
    </StyledFilter>
  );
};

export default Filter;
