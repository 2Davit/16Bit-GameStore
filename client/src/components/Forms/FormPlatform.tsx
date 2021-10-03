import React from "react";
import { useState } from "react";
import { CreatePlatform } from "../../interfaces";
import { createNewPlatform } from "../../redux/actions/products_action";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

interface PlatformValidate {
    platform: string;
}
export const FormPlatform = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState<CreatePlatform>({
        platform: ''
    })
    const [error, setError] = useState<any>({
        Platform: ''
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
        if (input.platform === '') {
            e.preventDefault()
            alert("Please complete the required field")
        } else {
            dispatch(createNewPlatform(input));
            alert("Platform succesfully created");
            setInput({
                platform: ''
            });
            // history.push('/home');
        }
    }

    const validate = (input: PlatformValidate) => {
        let error = {
            platform: "",

        }

        if (!input.platform) {
            error.platform = "Genre name is required";
        } else if (input.platform.length < 3) {
            error.platform = "Genre name is too short";
        } else if (input.platform.length > 15) {
            error.platform = "Genre name is too long";
        } else if (!/(?=.*)/.test(input.platform)) {
            error.platform = "Genre name must be alphanumeric";
        }

        return error;
    }

    return (
        <div>
            <Link to="/admin">
                <button>Back</button>
            </Link>

            <h1>Create a new platform</h1>
            <form style={{ display: 'flex', flexDirection: 'column', width: '50%', margin: '0 auto' }} onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="name_product">Platform's name</label>
                <input
                    onChange={(e) => handleChange(e)}
                    name="platform"
                    placeholder="Introduce a name for your new Platform..."
                />

                {error.genre && (<div>{error.genre}</div>)}

                <button type="submit">Create</button>
            </form>

        </div>
    )
}