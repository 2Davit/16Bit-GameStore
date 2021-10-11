import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../redux/reducer/";
import {
  getNameProduct,
} from "../../redux/actions/products_action";

import { FormSearchBar } from "./StyledSearchBar";
import loupe from "../../assets/img/svg/loupe.svg";
import SearchCard from "../ProductCard/SearchCard";

const SearchBar = ({ setPage }: any) => {
  const [inputText, setinputText] = useState("");
  const [autoComplete, setAutocomplete] = useState([]);
  const dispatch = useDispatch();

  const searchProducts: any = useSelector(
    (state: Store) => state.productsReducer.totalProducts
  );

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setinputText(e.currentTarget.value);
  };
  const handleSubmit = (e: any) => {
    setPage(1);
    e.preventDefault();
    setinputText("");
    dispatch(getNameProduct(inputText));
  };
  const handleChange = () => {
    let handle = searchProducts.filter((index: any) => index.name_product.toLowerCase().includes(inputText.toLowerCase()));
    setAutocomplete(handle)
  };

  return (
    <>
      <FormSearchBar onChange={handleChange} onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="Search a Game..."
          value={inputText}
          onBlur={() => {
            setTimeout(() => {
              setAutocomplete([])
            }, 100)
          }}
        />
        {autoComplete?.map((product: any) => {
          return (
            <div>
              <SearchCard
                game={product}
                key={product.id_product}
                id={product.id_product}
              />
            </div>
          );
        })}
        <button type="submit">
          <img src={loupe} alt="" />
        </button>
      </FormSearchBar>
    </>
  );
};

export default SearchBar;
