import { Field, Form, Formik } from "formik";
import { UserLogin } from "../../interfaces/index";
import { getRole, login } from "../../redux/actions/auth_actions";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const FormLogin: FC = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values: UserLogin) => {
    dispatch(login(values));
    dispatch(getRole());
    alert("Dejá de romperte");
  };

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="username">Username</label>
        <Field id="username" name="username" placeholder="Username" />

        <label htmlFor="password">Password</label>
        <Field
          id="password"
          name="password"
          type="password"
          placeholder="Password"
        />

        <Link to="/register">Create account</Link>

        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default FormLogin;
