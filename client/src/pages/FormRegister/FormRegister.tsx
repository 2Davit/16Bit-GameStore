// Dependencias
import React, { FC } from "react";
import axios from "axios";
import { Field, Form, Formik } from "formik";
/* import * as Yup from "yup"; */
import { useDispatch } from "react-redux";
import { UserRegister } from "../../interfaces/index";
import { login } from "../../redux/actions/auth_actions";
import { Link } from "react-router-dom";

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
      .post("http://localhost:3001/auth/signup", values)
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
            <Form>
              <label htmlFor="username">Username</label>
              <Field
                id="username"
                name="username"
                placeholder="Username"
                /* required */
              />

              <label htmlFor="password">Password</label>
              <Field
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                /* required */
              />

              <label htmlFor="confirmPassword">Confirm password</label>
              <Field
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
                /* required */
              />

              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                placeholder="example@example.com"
                /* required */
              />

              <label htmlFor="name">Name</label>
              <Field id="name" name="name" placeholder="Name" /* required */ />

              <label htmlFor="lastname">Lastname</label>
              <Field
                id="lastname"
                name="lastname"
                placeholder="Lastname"
                /* required */
              />

              <label htmlFor="address">Address</label>
              <Field
                id="address"
                name="address"
                placeholder="Address"
                /* required */
              />

              <Link to="/login">Already have account?</Link>

              <button type="submit" /* disabled={!dirty || !!isValid} */>
                Register
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormRegister;
