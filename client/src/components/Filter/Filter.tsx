import React, { useState, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledFilter, SelectStyled } from "./StyledFilter";
import { Btn1 } from "./StyledFilter";
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
        <SelectStyled id="filterPlatform" onChange={handleFilter}>
          <option value="">Platforms</option>
          {totalPlatforms.map((index: any) => (
            <option value={index} key={index}>
              {index}
            </option>
          ))}
        </SelectStyled>
      </section>
      <section>
        <SelectStyled id="filterGenre" onChange={handleFilter}>
          <option value="">Genres</option>
          {totalGenres.map((index: any) => (
            <option value={index} key={index}>
              {index}
            </option>
          ))}
        </SelectStyled>
      </section>
      <section>
        {show ? (
          <Btn1 id="btnSale" className="btn-card" onClick={handleOnSaleFilter}>
            On Sale
          </Btn1>
        ) : (
          <Btn1 className="btn-card" onClick={handleAll}>
            All
          </Btn1>
        )}
      </section>
      <section>
        {!(filterPlatform?.value === "") ||
        !(filterGenre?.value === "") ||
        !btnSale ? (
          <Btn1 className="btn-sec" onClick={handleReset}>
            Remove
          </Btn1>
        ) : <Btn1 className="btn-sec, btn-disabled" onClick={handleReset}>
        Remove
      </Btn1>}
      </section>
    </StyledFilter>
  );
};

export default Filter;
