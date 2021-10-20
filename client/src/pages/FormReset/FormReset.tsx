import React, { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { FormStyled } from "../FormRegister/StyledFormRegister";
import { StyledReset } from "./StyledReset";
import Modal from "react-modal";
import { Store } from "../../redux/reducer";
import { openLogin } from "../../redux/actions/global_actions";
import { StyledSVG, Btn } from "../../GlobalStyles/GlobalStyles";
import CloseButton from "../../assets/img/svg/close-filled-purple.svg";
import { animateScroll } from "react-scroll";
import Swal from 'sweetalert2';
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

  const [errors, setErrors] = useState<Password>({
    password: "",
    newPassword: ""
  });

  const validate = (input: Password) => {
    let errors: Password = {
      password: "",
      newPassword: "",
    };
    /* -------- PASSWORD ---------- */

    if (!input.newPassword) errors.newPassword = "new password is required";
    if (!/[0-9]/.test(input.newPassword))
      errors.newPassword = "Must contain a number (0-9)";
    if (input.newPassword.length < 6 || input.newPassword.length > 15)
      errors.newPassword = "Must be between 6 and 15 characters in length";

    /* -------- NEW - PASSWORD ---------- */
 
    if (!input.password) {
      errors.password = "Please confirm your password";
    } else if (input.password !== input.newPassword) {
      errors.password = "Wrong password";
    }

    return errors;
  
  };

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
  }, [dispatch, userData]);

  

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
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
    e.preventDefault();
    console.log(input.newPassword)
    axios.post(`/auth/reset/${token}`, { password: input.newPassword })
    closeModal()
    Swal.fire({
        title: 'Password updated',
        text: 'You can log in now!',
        icon: 'success',
        confirmButtonText: '🚀'
      })
    setIsUser(true)
    animateScroll.scrollTo(0, { duration: 300 })
  };

  let disabled = !(
    input.newPassword &&
    input.password &&
    !errors.newPassword &&
    !errors.password
  );
  

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
            <form onSubmit={(e) => handleSubmit(e)}>
              <label htmlFor="username">
                <span>New password</span>
                <input name="newPassword" type="password" onChange={handleInputChange} />
              </label>
              {errors.newPassword && <span>{errors.newPassword}</span>}
              <label htmlFor="password">
                <span>Confirm password</span>
                <input
                  name="password"
                  type="password"
                  onChange={handleInputChange}
                />
              </label>
              {errors.password && <span>{errors.password}</span>}
              <Btn
                type="submit"
                className={!disabled ? "btn-card login": "btn-disabled"}
                disabled={disabled}
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
