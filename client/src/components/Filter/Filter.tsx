import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doubleFilter } from "../../redux/actions/products_action";
import { Store } from "../../redux/reducer/productsReducer";

interface Props {}


interface Props {
     handleFilter(e: any): void;
    handleOnSaleFilter(e: any): void;
}

const Filter: FC<Props> = () => {
  const totalProducts = useSelector(
    (state: Store) => state.productsReducer.totalProducts
  );
  const renderingProducts = useSelector(
    (state: Store) => state.productsReducer.renderingProducts
  );

  const dispatch = useDispatch();


const Filter: FC<Props> = ({ handleFilter, handleOnSaleFilter }) => {

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
  }

  return (
    <div>
      <section>
        <h5>By platform</h5>
        <select id="filterPlatform" onChange={handleFilter}>
          <option value="">All</option>
          <option value="gba">GBA</option>
          <option value="nes">NES</option>
          <option value="arcade">Arcade</option>
          <option value="sega">Sega</option>
          <option value="snes">SNES</option>
          <option value="a2600">A2600</option>
        </select>
      </section>
      <section>
         <h5>On sale</h5>
          <button onClick={handleOnSaleFilter} value="on_sale">On sale</button>
       </section> 

      
    </div>
  );
};

export default Filter;
