import { useState, FC, useEffect } from "react";
import { CreatePlatform } from "../../interfaces";
import { createNewPlatform } from "../../redux/actions/products_action";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Title,
  FormContainer,
  FormLabel,
  FormInput,
  BtnSubmit,
  BtnBack,
  FormErrors,
  Fields,
  ContainerFormP,
} from "./FormPlatform.style";
import { deleteNavbar } from "../../redux/actions/admin_actions";

interface PlatformValidate {
  platform: string;
}
const FormPlatform: FC = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState<CreatePlatform>({
    platform: "",
  });
  const [error, setError] = useState<any>({
    Platform: "",
  });

  //quitar navbar
  useEffect(() => {
    dispatch(deleteNavbar());
  }, [dispatch]);

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });
    setError(
      validate({
        ...input,
        [e.currentTarget.name]: e.currentTarget.value,
      })
    );
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    if (input.platform === "") {
      e.preventDefault();
      alert("Please complete the required field");
    } else {
      dispatch(createNewPlatform(input));
      alert("Platform succesfully created");
      setInput({
        platform: "",
      });
      
    }
  }

  const validate = (input: PlatformValidate) => {
    let error = {
      platform: "",
    };

    if (!input.platform) {
      error.platform = "Platform name is required";
    } else if (input.platform.length < 3) {
      error.platform = "Platform name is too short";
    } else if (input.platform.length > 15) {
      error.platform = "Platform name is too long";
    }

    return error;
  };

  let disabledBtn = !(
    input.platform?.length > 0 && error.platform.length === 0
  );

  return (
    <ContainerFormP>
      <Link to="/admin">
        <BtnBack>Back</BtnBack>
      </Link>

      <Title>Create a new platform</Title>
      <FormContainer onSubmit={(e) => handleSubmit(e)}>
        {error.platform && <FormErrors>{error.platform}</FormErrors>}
        <Fields>
          <FormLabel htmlFor="name_product">Platform's name</FormLabel>
          <FormInput
            onChange={(e) => handleChange(e)}
            name="platform"
            placeholder="Introduce a name for your new Platform..."
          />
        </Fields>

        <BtnSubmit type="submit" disabled={disabledBtn}>
          Create
        </BtnSubmit>
      </FormContainer>
    </ContainerFormP>
  );
};

export default FormPlatform;
