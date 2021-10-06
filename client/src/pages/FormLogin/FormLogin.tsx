import { Field, Form, Formik } from "formik";
import { UserLogin } from "../../interfaces/index";
import { getRole, login } from "../../redux/actions/auth_actions";
import React, { FC } from "react";
import { useDispatch } from "react-redux";

const FormLogin: FC = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={async (values: UserLogin) => {
        try {
          dispatch(login(values));
          dispatch(getRole);
        } catch (err) {
          console.log(err);
        }
      }}
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
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default FormLogin;
