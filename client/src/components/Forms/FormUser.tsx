// import React, { useState } from 'react';
import { withFormik, FormikProps, FormikErrors, Form, Field } from "formik";
import { UserCreate } from "../../interfaces/index";
import axios from "axios";

// Aside: You may see InjectedFormikProps<OtherProps, FormValues> instead of what comes below in older code.. InjectedFormikProps was artifact of when Formik only exported a HoC. It is also less flexible as it MUST wrap all props (it passes them through).
const InnerForm = (props: FormikProps<UserCreate>) => {
  const { touched, errors, isSubmitting } = props;

  return (
    <Form>
      <Field name="username" placeholder="Intoduce a username" />
      {touched.username && errors.username && <div>{errors.username}</div>}

      <Field name="password" placeholder="Intoduce a password" />
      {touched.password && errors.password && <div>{errors.password}</div>}

      <Field name="email" placeholder="Intoduce an email" />
      {touched.email && errors.email && <div>{errors.email}</div>}

      <Field name="name" placeholder="Intoduce a Name" />
      {touched.name && errors.name && <div>{errors.name}</div>}

      <Field name="lastname" placeholder="Intoduce a last name" />
      {touched.lastname && errors.lastname && <div>{errors.lastname}</div>}

      <Field name="adress" placeholder="Intoduce an address" />
      {touched.adress && errors.adress && <div>{errors.adress}</div>}

      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  );
};

/* .--------------------------------------------------------------------------------------- */

// The type of props MyForm receives

interface MyFormProps {
  initialUsername?: string;
  initialPassword?: string;
  initialEmail?: string;
  initialName?: string;
  initialLastname?: string;
  initialAdress?: string;
}

// Wrap our form with the withFormik HoC

const MyForm = withFormik<MyFormProps, UserCreate>({
  // Transform outer props into form values
  mapPropsToValues: (props) => {
    return {
      username: props.initialUsername || "",
      password: props.initialPassword || "",
      email: props.initialEmail || "",
      name: props.initialName || "",
      lastname: props.initialLastname || "",
      adress: props.initialAdress || "",
    };
  },

  // Add a custom validation function (this can be async too!)
  validate: (values: UserCreate) => {
    let errors: FormikErrors<UserCreate> = {};

    /*  ------------  validate email   ----------------*/

    function isValidEmail(email: string) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!isValidEmail(values.email)) {
      errors.email = "Invalid email address";
    }

    /*  ------------  validate username   ----------------*/

    if (!values.username) {
      errors.username = "User name is required";
    } else if (values.username.length < 4) {
      errors.username = "User name is too short";
    } else if (values.username.length > 15) {
      errors.username = "User name is too long";
    } else if (!/(?=.*)/.test(values.username)) {
      errors.username = "User name must be alphanumeric";
    }

    /*  ------------  validate password   ----------------*/

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password is too short";
    } else if (!/(?=.*)/.test(values.password)) {
      errors.password = "Password must be alphanumeric";
    }

    /*  ------------  validate name   ----------------*/

    if (!values.name) {
      errors.name = "Name is required";
    } else if (values.name.length < 1) {
      errors.name = "Name is too short";
    } else if (values.name.length > 30) {
      errors.name = "Name is too long";
    } else if (!/(?=.*)/.test(values.name)) {
      // testear
      errors.name = "Name must be only letters";
    }

    /*  ------------  validate lastname   ----------------*/

    if (!values.lastname) {
      errors.lastname = "Lastname is required";
    } else if (values.lastname.length < 1) {
      errors.lastname = "Lastname is too short";
    } else if (values.lastname.length > 30) {
      errors.lastname = "Lastname is too long";
    } else if (!/(?=.*)/.test(values.lastname)) {
      // testear
      errors.lastname = "Lastname must be only letters";
    }

    /*  ------------  validate adress   ----------------*/

    if (!values.adress) {
      errors.adress = "adress is required";
    } else if (values.adress.length < 1) {
      errors.adress = "adress is too short";
    } else if (values.adress.length > 255) {
      errors.adress = "adress is too long";
    }

    return errors;
  },

  handleSubmit: (props) => {
    axios
      .post("http://localhost:3001/auth/signup", props)
      .then((res) => console.log(res.data));
    console.log(props);
  },
})(InnerForm);

// Use <MyForm /> wherevs
const Basic = () => (
  <div>
    <h1>My App</h1>
    <p>This can be anywhere in your application</p>
    <MyForm />
  </div>
);

export default Basic;
