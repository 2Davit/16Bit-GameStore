import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNameProduct } from "../../redux/actions/products_action";
import { Store } from "../../redux/reducer/productsReducer";


const SearchBar = ({setPage}: any) => {
  const [display, setDisplay] = useState(false)
  const [name, setName] = useState("");
  
  const totalProducts: any = useSelector(
    (state: Store) => state.productsReducer.totalProducts
    );
    
  const dispatch = useDispatch();
  
  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    let matches = [];
    setName(e.currentTarget.value)
} 
  const handleSubmit = () => {
    dispatch(getNameProduct(name));
    setName("");
    setPage(1)
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
