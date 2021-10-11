import { Field, Form, Formik } from "formik";
import { UserLogin } from "../../interfaces/index";
import { getRole, login } from "../../redux/actions/auth_actions";
import React, { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { FormStyled } from "../FormRegister/StyledFormRegister";
import { StyledLogin } from "./StyledLogin";
import Modal from "react-modal";
import { Store } from "../../redux/reducer";
import { openLogin } from "../../redux/actions/global_actions";
import { StyledSVG, Btn } from "../../GlobalStyles/GlobalStyles";
import CloseButton from "../../assets/img/svg/close-filled-purple.svg";

const FormLogin: FC = () => {
  const [isUser, setIsUser] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const loginIsOpen = useSelector(
    (state: Store) => state.globalReducer.loginIsOpen
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("userData")!);

  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(10, 10, 10, 0.95)",
      zIndex: "9999",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "2px solid #9b5df7",
      borderRadius: "10px",
      boxShadow: "0 0 15px #9b5df7",
      color: "#F5F4F8",
      background: "#111",
      zIndex: "9999",
      width: "50%",
      height: "70%",
    },
  };

  const closeModal = () => {
    dispatch(openLogin(false));
    history.push("/home");
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    if (user) {
      setIsUser(true);
      setUserName(user.data.username);
    }
  }, [user]);

  const handleSubmit = (values: UserLogin) => {
    dispatch(login(values));
    dispatch(getRole());
    setIsUser(true);
    alert("succeeded");
    history.push("/home");
  };

  return (
    <Modal
      isOpen={loginIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel={"Login"}
      portalClassName={"ReactModalPortal"}
      ariaHideApp={false}
    >
      <StyledLogin>
        <button className="button" onClick={closeModal}>
          <StyledSVG src={CloseButton} />
        </button>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={handleSubmit}
        >
          <FormStyled>
            <Form>
              <label htmlFor="username">
                <span>Username</span>
                <Field id="username" name="username" />
              </label>
              <label htmlFor="password">
                <span>Password</span>
                <Field id="password" name="password" type="password" />
              </label>
              <div className="link_container">
                <Link to="/reset" onClick={closeModal}>
                  I forgot my password
                </Link>
                <Link to="/signup" onClick={closeModal}>
                  Create an Account
                </Link>
              </div>
              <Btn type="submit" className="btn-card login">
                Log In
              </Btn>
            </Form>
          </FormStyled>
        </Formik>
      </StyledLogin>
    </Modal>
  );
};

export default FormLogin;
