import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameProduct } from "../../redux/actions/products_action";

const SearchBar = ({ setPage }: any) => {
  const [display, setDisplay] = useState(false);
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };
  const handleSubmit = () => {
    dispatch(getNameProduct(name));
    setName("");
    setPage(1);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="find videogame..."
        value={name}
        onChange={(e) => handleInputChange(e)}
        onClick={() => setDisplay(!display)}
      />

      <button onClick={() => handleSubmit()}>Search</button>
    </div>
  );
};

export default SearchBar;
