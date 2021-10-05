import React, { useState, FC } from "react";
import { useDispatch } from "react-redux";
import { getNameProduct } from "../../redux/actions/products_action";
import { BtnSearch } from './SearchBar.style'

interface Props {
  setPage(num: number): void;
}

const SearchBar: FC<Props> = ({ setPage }) => {
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
  


  const handleKeyDown  = (e: React.KeyboardEvent<HTMLDivElement>) : void => {
    if (e.key === 'Enter' && name.length > 0) {
      e.preventDefault();
      dispatch(getNameProduct(name));
      setName("");
      setPage(1);
    }
  } 

  return (
    <div>
        <input
          type="text"
          placeholder="find videogame..."
          value={name}
          onChange={(e) => handleInputChange(e)}
          onClick={() => setDisplay(!display)}
          onKeyDown={handleKeyDown }
        />
        {
          name.length === 0 ?
          <BtnSearch disabled onClick={() => handleSubmit()} >Search</BtnSearch> :
          <BtnSearch  onClick={() => handleSubmit()} >Search</BtnSearch> 
        }
    </div>
  );
};

export default SearchBar;
