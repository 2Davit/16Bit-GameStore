import { Field, Form, Formik } from "formik";
import { UserLogin } from "../../interfaces/index";
import { getRole, login } from "../../redux/actions/auth_actions";
import { getCart } from "../../redux/actions/cart_actions";
import React, { FC, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const FormLogin: FC = () => {

  const [isUser, setIsUser] = useState<boolean>(false);

  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("userData")!);

  useEffect(() => {
      if (user) setIsUser(true);
  }, [])
  
  const handleSubmit = (values: UserLogin) => {
    dispatch(login(values));
    dispatch(getRole());
    setIsUser(true);
    alert("succeeded");
  };

  return (
    <>
    { !isUser ?

    (  
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

        <Link to="/signup">Create account</Link>

        <button type="submit">Login</button>
      </Form>
    </Formik>
    )

    : <>
      <h1>Welcome, {user?.data.username} !</h1> 
      <Link to='/home'>HOME</Link>
      </>
    }
    </>
  );
};

export default FormLogin;
