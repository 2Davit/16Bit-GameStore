import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameProduct } from "../../redux/actions/products_action";
import { FormSearchBar } from "./StyledSearchBar";
import loupe from "../../assets/img/svg/loupe.svg";

const SearchBar = ({ setPage }: any) => {
  const [inputText, setinputText] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setinputText(e.currentTarget.value);
  };
  const handleSubmit = (e: any) => {
    setPage(1);
    e.preventDefault();
    setinputText("");
    dispatch(getNameProduct(inputText));
  };

  return (
    <>
      <FormSearchBar onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="Search a Game..."
          value={inputText}
        />
        <button type="submit">
          <img src={loupe} alt="" />
        </button>
      </FormSearchBar>
    </>
  );
};

export default SearchBar;
