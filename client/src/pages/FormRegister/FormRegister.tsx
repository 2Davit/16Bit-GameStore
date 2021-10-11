// Dependencias
import React, { FC } from "react";
import axios from "axios";
import { Field, Form, Formik } from "formik";
/* import * as Yup from "yup"; */
import { useDispatch } from "react-redux";
import { UserRegister } from "../../interfaces/index";
import { login } from "../../redux/actions/auth_actions";
import { Link } from "react-router-dom";
import { FormStyled } from "./StyledFormRegister";
import { Btn } from "../../GlobalStyles/GlobalStyles";

const initialValues: UserRegister = {
  username: "",
  password: "",
  confirmPassword: "",
  email: "",
  name: "",
  lastname: "",
  address: "",
};

// Podríamos agregar validaciones con Regex más adelante:

// Username:
// const alphanumericString = /^[a-z0-9_-]{3,16}$/
// (puede contener números, letras y - _)

// Password:
// const moderatedPassword = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/
// (tiene que contener 1 mayúscula, 1 minúscula, 1 número, y mínimo 8 caracteres)

/* const SignupSchema = Yup.object().shape({
  username: Yup.string().min(5, "At least 5 characters!").required("Required!"),
  password: Yup.string()
    .min(5, "At least 5 characters long!")
    .required("Required!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password must be the same!")
    .required("Required!"),
  email: Yup.string().email("Must be a valid email!").required("Required!"),
  name: Yup.string()
    .min(5, "At least 5 characters long!")
    .required("Required!"),
  lastname: Yup.string()
    .min(5, "At least 5 characters long!")
    .required("Required!"),
  address: Yup.string().required("Required!"),
}); */

const FormRegister: FC = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values: UserRegister) => {
    axios
      .post("/auth/signup", values)
      .then((res) => {
        const { username, password } = values;
        dispatch(login({ username, password }));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        /* validationSchema={SignupSchema} */
      >
        {({ dirty, isValid }) => {
          return (
            <FormStyled>
              <Form>
                <h1 className="form__title">Sign up</h1>
                <label htmlFor="username">
                  <span>Username</span>
                  <Field id="username" name="username" />
                </label>

                <label htmlFor="password">
                  <span>Password</span>
                  <Field id="password" name="password" type="password" />
                </label>

                <label htmlFor="confirmPassword">
                  <span>Confirm password</span>
                  <Field
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                  />
                </label>

                <label htmlFor="email">
                  <span>Email</span>
                  <Field id="email" name="email" />
                </label>

                <label htmlFor="name">
                  <span>Name</span>
                  <Field id="name" name="name" />
                </label>

                <label htmlFor="lastname">
                  <span>Lastname</span>
                  <Field id="lastname" name="lastname" />
                </label>

                <label htmlFor="address">
                  <span>Address</span>
                  <Field id="address" name="address" />
                </label>

                <Btn type="submit" className="btn-card">
                  Register
                </Btn>
                <p>
                  Already have an account?
                  <Link to="/login"> LOG IN</Link>
                </p>
              </Form>
            </FormStyled>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormRegister;
