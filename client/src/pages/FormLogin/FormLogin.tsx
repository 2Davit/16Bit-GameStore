import Swal from 'sweetalert2';
import { getRole, login } from "../../redux/actions/auth_actions";
import React, { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { FormStyled } from "../FormRegister/StyledFormRegister";
import { StyledLogin, customStyles, BtnContainerLogin, BtnLogin, ForgotPasswordContainer } from "./StyledLogin";
import Modal from "react-modal";
import { Store } from "../../redux/reducer";
import { openLogin } from "../../redux/actions/global_actions";
import { StyledSVG, Btn } from "../../GlobalStyles/GlobalStyles";
import CloseButton from "../../assets/img/svg/close-filled-purple.svg";
import { animateScroll } from "react-scroll";
import { useAuth0 } from "@auth0/auth0-react";
import { FcGoogle } from 'react-icons/fc'
import axios from "axios";



interface User {
  username: string;
  password: string;
}
const FormLogin: FC = () => {
  const userData = JSON.parse(localStorage.getItem("userData")!);
  const { user, loginWithPopup, loginWithRedirect } = useAuth0();
  const [isUser, setIsUser] = useState<boolean>(false);
  const [input, setInput] = useState<User>({
    username: "",
    password: "",
  });
  const [email, setEmail] = useState<string>('');
  const [resetPass, setResetPass] = useState<boolean>(false);
  const loginIsOpen = useSelector(
    (state: Store) => state.globalReducer.loginIsOpen
  );
  const dispatch = useDispatch();
  const history = useHistory();

  
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

  let disabled = !(input.username && input.password);

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleMailChange = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login(input));
    dispatch(getRole());
    setIsUser(true);
    closeModal();
    animateScroll.scrollTo(0, { duration: 300 });
  };



  const handleReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    axios.post('/email/reset', { email: email })
    .then(() => {
      Swal.fire({
        title: 'Sent',
        text: 'Go and check your email account',
        icon: 'success',
        confirmButtonText: '🚀'
      })
    })
    .catch(() => {
      Swal.fire({
        title: "Error!",
        text: "That email account does not exist!",
        icon: "error",
        confirmButtonText: "😓",
      })
    })
    .finally(() => 
      closeModal
    )
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
      <StyledLogin>
          <button className="button" onClick={closeModal}>
            <StyledSVG src={CloseButton} />
          </button>
          <FormStyled>
            { !resetPass ?
            
            
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">
                <span>Username</span>
                <input name="username" onChange={handleInputChange} />
              </label>
              <label htmlFor="password">
                <span>Password</span>
                <input
                  name="password"
                  type="password"
                  onChange={handleInputChange}
                />
              </label>
              <ForgotPasswordContainer className="link_container">
                <a  onClick={() => setResetPass(true)}>
                  I forgot my password
                </a>
                <Link to="/signup" onClick={closeModal}>
                  Create an Account
                </Link>
              </ForgotPasswordContainer>
              <BtnContainerLogin>
              <BtnLogin
                type="submit"
                className={!disabled ? "" : ""}
                disabled={disabled}
              >Log In</BtnLogin>
            <BtnLogin onClick={loginWithRedirect}>
            <FcGoogle style={{fontSize: "30px"}}/>
            </BtnLogin>
            </BtnContainerLogin>
            </form>
            
            : 
            <form onSubmit={(e) => handleReset(e)}>
              <label htmlFor="username">
                <span>Please enter your email</span>
                <input onChange={handleMailChange} />
              </label>
              <Btn
                // onClick={closeModal}
                type="submit"
                className={email.length !== 0 ? "btn-card login" : "btn-disabled"}
                disabled={email.length === 0 ? true : false}
              >
                Send email
              </Btn>
            </form>

            }
          </FormStyled>
        </StyledLogin>
    </Modal>
  );
};

export default FormLogin;
