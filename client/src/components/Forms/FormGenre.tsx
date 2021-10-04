import React from "react";
import { useState } from "react";
import { CreateGenre } from "../../interfaces";
import { createNewGenre } from "../../redux/actions/products_action";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

interface GenreValidate {
    genre: string;
}
export const FormGenre = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState<CreateGenre>({
        genre: ''
    })
    const [error, setError] = useState<any>({
        genre: ''
    })

    function handleChange(e: React.FormEvent<HTMLInputElement>) {
        setInput({
            ...input,
            [e.currentTarget.name]: e.currentTarget.value,
        });
        setError(validate({
            ...input,
            [e.currentTarget.name]: e.currentTarget.value,
        }))
    }
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // console.log(input)
        if (input.genre === '') {
            e.preventDefault()
            alert("Please complete the required field")
        } else {
            dispatch(createNewGenre(input));
            alert("Genre succesfully created");
            setInput({
                genre: ''
            });
            // history.push('/home');
        }
    }

    const validate = (input: GenreValidate) => {
        let error = {
            genres: "",

        }

        if (!input.genre) {
            error.genres = "Genre name is required";
        } else if (input.genre.length < 3) {
            error.genres = "Genre name is too short";
        } else if (input.genre.length > 15) {
            error.genres = "Genre name is too long";
        } else if (!/(?=.*)/.test(input.genre)) {
            error.genres = "Genre name must be alphanumeric";
        }

        return error;
    }

    let disabledBtn = !(input.genre?.length > 0 && error.genres.length === 0);

    return (
        <div>
            <Link to="/admin">
                <button>Back</button>
            </Link>
            <h1>Create a new genre</h1>
            <form style={{ display: 'flex', flexDirection: 'column', width: '50%', margin: '0 auto' }} onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="name_product">Genre's name</label>
                <input
                    onChange={(e) => handleChange(e)}
                    name="genre"
                    placeholder="Introduce a name for your new genre..."
                />

                {error.genres && (<div style={{color: 'red'}}>{error.genres}</div>)}

                <button type="submit" disabled={disabledBtn}>Create</button>
            </form>

        </div>
    )
}