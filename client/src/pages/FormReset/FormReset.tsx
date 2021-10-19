// import { input, Form, Formik } from "formik";
import { UserLogin } from "../../interfaces/index";
import { getRole, login } from "../../redux/actions/auth_actions";
import React, { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { FormStyled } from "../FormRegister/StyledFormRegister";
import { StyledReset } from "./StyledReset";
import Modal from "react-modal";
import { Store } from "../../redux/reducer";
import { openLogin } from "../../redux/actions/global_actions";
import { StyledSVG, Btn } from "../../GlobalStyles/GlobalStyles";
import CloseButton from "../../assets/img/svg/close-filled-purple.svg";
import { animateScroll } from "react-scroll";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useParams } from 'react-router-dom';


interface Password{
  password: string;
  newPassword: string;
}


interface Props {
  token: string;
}
const FormReset: FC = () => {
  const userData = JSON.parse(localStorage.getItem("userData")!);
  
  const [isUser, setIsUser] = useState<boolean>(false);
  const [input, setInput] = useState<Password>({
    password: "",
    newPassword: "",
  });

  const { token } = useParams<Props>();
  
  const loginIsOpen = useSelector(
    (state: Store) => state.globalReducer.loginIsOpen
  );
  const dispatch = useDispatch();
  const history = useHistory();

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
  const afterOpenModal = () => {
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    dispatch(openLogin(false));
    history.push("/home");
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    if (userData) {
      setIsUser(true);
    }
    dispatch(openLogin(true));
  }, [userData]);

  let disabled = !(input.password && input.newPassword);

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios.post(`/auth/reset/${token}`, {password: input.newPassword})

    setIsUser(true);
    closeModal();
    animateScroll.scrollTo(0, { duration: 300 });
  };

  

  return (
    <Modal
      isOpen={loginIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel={"Login"}
      portalClassName={"ReactModalPortal"}
      ariaHideApp={false}
      onAfterOpen={afterOpenModal}
    >
        <StyledReset>
          <button className="button" onClick={closeModal}>
            <StyledSVG src={CloseButton} />
          </button>
          <FormStyled>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">
                <span>New password</span>
                <input name="username" onChange={handleInputChange} />
              </label>
              <label htmlFor="password">
                <span>Confirm password</span>
                <input
                  name="password"
                  type="password"
                  onChange={handleInputChange}
                />
              </label>
              <Btn
                type="submit"
                className={input.password.length !== 0 && input.newPassword === input.password ? "btn-disabled" : "btn-card login"}
                disabled={input.password.length !== 0  && input.newPassword === input.password ? false : true}
              >
                Reset
              </Btn>
            </form>
          </FormStyled>
        </StyledReset>
    </Modal>
  );
};

export default FormReset;
