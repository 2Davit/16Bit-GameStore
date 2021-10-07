import React, {FC} from "react";
import { useState } from "react";
import { CreateGenre } from "../../interfaces";
import { createNewGenre } from "../../redux/actions/products_action";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Title, FormContainer, FormLabel, FormInput, BtnSubmit, BtnBack, FormErrors, Fields } from './FormGenre.style'

interface GenreValidate {
    genre: string;
}
const FormGenre: FC = () => {
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
                <BtnBack>Back</BtnBack>
            </Link>
            <Title>Create a new genre</Title>
            <FormContainer onSubmit={(e) => handleSubmit(e)}>
                {error.genres && (<FormErrors>{error.genres}</FormErrors>)}
                <Fields>
                <FormLabel htmlFor="name_product">Genre's name</FormLabel>
                <FormInput
                    onChange={(e) => handleChange(e)}
                    name="genre"
                    placeholder="Introduce a name for your new genre..."
                />
                </Fields>


                <BtnSubmit type="submit" disabled={disabledBtn}>Create</BtnSubmit>
            </FormContainer>

        </div>
    )
}

export default FormGenre