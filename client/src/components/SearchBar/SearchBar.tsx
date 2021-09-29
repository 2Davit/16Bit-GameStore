import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNameProduct } from '../../redux/actions/products_action'


function SearchBar() {
    const [name, setName] = useState('')
    const dispatch = useDispatch();

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }
    const handleSubmit = () => {
        dispatch(getNameProduct(name))
        setName('')
    }
    
    return (
        <div>
            <input 
                type="text"
                placeholder="find videogame..."
                value={name}
                onChange={(e) => handleInputChange(e)}
            />
            <button onClick={() => handleSubmit()} >Search</button>
        </div>
    )
}

export default SearchBar;
