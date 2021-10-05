import { useState, FC } from "react";
import { CreatePlatform } from "../../interfaces";
import { createNewPlatform } from "../../redux/actions/products_action";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

interface PlatformValidate {
    platform: string;
}
const FormPlatform: FC = () => {
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
            error.platform = "Platform name is required";
        } else if (input.platform.length < 3) {
            error.platform = "Platform name is too short";
        } else if (input.platform.length > 15) {
            error.platform = "Platform name is too long";
        } 

        return error;
    }

    let disabledBtn = !(input.platform?.length > 0 && error.platform.length === 0);

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

                {error.platform && (<div style={{color: 'red'}}>{error.platform}</div>)}

                <button type="submit" disabled={disabledBtn}>Create</button>
            </form>

        </div>
    )
}

export default FormPlatform