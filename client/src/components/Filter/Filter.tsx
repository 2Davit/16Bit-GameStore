import { useState, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledFilter, SelectStyled, BtnDisabled, BtnRemoveFilter, BtnOnSale } from "./StyledFilter";
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
    setPage(1);
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
    setShow(true)
  };

  const filterPlatform: any = document.getElementById("filterPlatform");
  const filterGenre: any = document.getElementById("filterGenre");
  const btnSale: any = document.getElementById("btnSale");
  
  return (
    <StyledFilter>
      
      {/* <h2>Filter:</h2> */}
      <section>
        <SelectStyled id="filterPlatform" onChange={handleFilter}>
          <option style={{marginRight: ".5em"}} value="">Platforms</option>
          {totalPlatforms.map((index: any) => (
            <option value={index} key={index}>
              {index}
            </option>
          ))}
        </SelectStyled>
      </section>
      <section>
        <SelectStyled id="filterGenre" onChange={handleFilter}>
          <option  value="">Genres</option>
          {totalGenres.map((index: any) => (
            <option value={index} key={index}>
              {index}
            </option>
          ))}
        </SelectStyled>
      </section>
      <section>
        {show ? (
          <BtnOnSale  onClick={handleOnSaleFilter}>
            On Sale
          </BtnOnSale>
        ) : (
          <BtnOnSale  onClick={handleAll}>
            All
          </BtnOnSale>
        )}
      </section>
      <section>
        {!(filterPlatform?.value === "") ||
        !(filterGenre?.value === "") ||
        !btnSale ? (
          <BtnRemoveFilter   onClick={handleReset}>
            Remove
          </BtnRemoveFilter>
        ) : <BtnDisabled  onClick={handleReset}>
        Remove
      </BtnDisabled>}
      </section>
    </StyledFilter>
  );
};

export default Filter;
