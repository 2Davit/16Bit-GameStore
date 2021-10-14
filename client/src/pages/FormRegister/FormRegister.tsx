
import React, { FC, useState } from "react";
import axios from "axios";
import { FormStyled } from "./StyledFormRegister";
import { Btn } from "../../GlobalStyles/GlobalStyles";
import { useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth_actions";

// Shape of form values
interface FormValues {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  name: string;
  lastname: string;
  address: string;
}

const FormRegister = () => {
  const [input, setInput] = useState<FormValues>({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    name: "",
    lastname: "",
    address: "",
  });
  const [errors, setErrors] = useState<FormValues>({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    name: "",
    lastname: "",
    address: "",
  });
  const history = useHistory();
  const dispatch = useDispatch();

  const validate = (input: FormValues) => {
    let errors: FormValues = {
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      name: "",
      lastname: "",
      address: "",
    };
    /* -------- USERNAME ---------- */
    if (!input.username) {
      errors.username = "Username is required";
    } else if (input.username.length < 3 || input.username.length > 15) {
      errors.username = "Must be between 3 and 15 characters in length";
    }
    /* -------- PASSWORD ---------- */

    if (!input.password) errors.password = "Password is required";
    if (!/[0-9]/.test(input.password))
      errors.password = "Must contain a number" + " (0-9)";
    if (input.password.length < 6 || input.password.length > 15)
      errors.password = "Must be between 6 and 15 characters in length";

    /* -------- EMAIL ---------- */
    if (!input.email) {
      errors.email = "Email is required";
    } else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(input.email)) {
      errors.email = "Must be a valid email address";
    }

    /* -------- NAME ---------- */

    if (!input.name) {
      errors.name = "Name is required";
    } else if (input.name.length < 3 || input.name.length > 15) {
      errors.name = "Must be between 3 and 15 characters in length";
    } else if (!/^[a-zA-Z]+$/.test(input.name)) {
      errors.name = "Name only can contains letters";
    }

    /* -------- LASTNAME ---------- */

    if (!input.lastname) {
      errors.lastname = "Lastname is required";
    } else if (input.lastname.length < 2 || input.lastname.length > 15) {
      errors.lastname = "Must be between 2 and 15 characters in length";
    } else if (!/^[a-zA-Z]+$/.test(input.lastname)) {
      errors.lastname = "Lastname only can contains letters";
    }

    /* -------- ADDRESS ---------- */

    if (!input.address) {
      errors.address = "Address is required";
    } else if (input.address.length < 3 || input.address.length > 50) {
      errors.address = "Must be between 3 and 50 characters in length";
    }

    return errors;
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

    setErrors(
      validate({
        ...input,
        [e.currentTarget.name]: e.currentTarget.value,
      })
    );
  };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert("Created account 😃");
    history.push("/home");
    axios
      .post("/auth/signup", input)
      .then((res) => {
        const { username, password } = input;
        dispatch(login({ username, password }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <FormStyled>
      <form onSubmit={handleSubmit}>
        <h1 className="form__title">Sign up</h1>
        <label htmlFor="username">
          <span>Username</span>
          <input name="username" onChange={handleChange}/>
        </label>
        {errors.username && <span>{errors.username}</span>}

        <label htmlFor="password">
          <span>Password</span>
          <input name="password" type="password" onChange={handleChange}/>
        </label>
        {errors.password && <span>{errors.password}</span>}

        <label htmlFor="confirmPassword">
          <span>Confirm password</span>
          <input name="confirmPassword" type="password" onChange={handleChange}/>
        </label>
        {errors.password && <span>{errors.password}</span>}

        <label htmlFor="email">
          <span>Email</span>
          <input name="email" type='text' onChange={handleChange}/>
        </label>
        {errors.email && <span>{errors.email}</span>}

        <label htmlFor="name">
          <span>Name</span>
          <input name="name" onChange={handleChange}/>
        </label>
        {errors.name && <span>{errors.name}</span>}

        <label htmlFor="lastname">
          <span>Lastname</span>
          <input name="lastname" onChange={handleChange}/>
        </label>
        {errors.lastname && <span>{errors.lastname}</span>}

        <label htmlFor="address">
          <span>Address</span>
          <input id="address" name="address" onChange={handleChange}/>
        </label>
        {errors.address && <span>{errors.address}</span>}


        <Btn type="submit" className="btn-card">
          Register
        </Btn>
        <p>
          Already have an account?
          <Link to="/login"> LOG IN</Link>
        </p>
      </form>
    </FormStyled>
  );
};

export default FormRegister;