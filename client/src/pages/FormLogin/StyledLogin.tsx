import styled from "styled-components";

export const StyledLogin = styled.div`
  .link_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2em;

    a {
      color: var(--clr-white);
      text-decoration: none;
      transition: color 0.2s ease-in-out;

      &:hover {
        color: var(--clr-primary);
      }
    }

    & > a + a {
      margin-top: 0.5em;
    }
  }

  .link_container2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 4em;

    a {
      color: var(--clr-white);
      text-decoration: none;
      transition: color 0.2s ease-in-out;

      &:hover {
        color: var(--clr-primary);
      }
    }

    & > a + a {
      margin-top: 0.5em;
    }
  }

  .shopping {
    margin-top: 4rem;
    background: var(--clr-primary);
    border-radius: 2rem;
    padding: 1rem;
    &:hover {
      background: var(--clr-white);
    }
  }

  label:first-of-type {
    margin-top: 4em;
  }

  label {
    left: 50%;
    transform: translateX(-60%);
  }

  .login {
    position: relative;
    top: 30px;
    left: 60px;
  }
  .button {
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;

    svg {
      fill: var(--clr-white);
      width: 30px;
      height: 30px;
      transition: fill 0.2s ease-in-out;
      &:hover {
        fill: var(--clr-primary);
      }
      &:active {
        transform: scale(0.9);
      }
    }
  }
`;
export const customStyles = {
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
    border: "2px solid #0a3364",
    borderRadius: "10px",
    boxShadow: "0 0 30px #0a3364",
    color: "#F5F4F8",
    background: "#111",
    zIndex: "9999",
  },
};

export const BtnContainerLogin = styled.div`
display: flex;
flex-direction: column;
align-items: center !important;
justify-content: center !important;
padding: 0 1rem 0 0 !important;
width: 50%;
margin: 0 auto;
`

export const BtnLogin = styled.button`
color: ${ p => p.theme.onsaleColorBtn};
  border-radius: ${ p => p.theme.filterButtonBorder };
  background-color: ${ p => p.theme.onSaleFilBtn};
  border: ${ p => p.theme.onSaleBorderBtn};
  padding: 0.6em .4em;
  width: 100%;
  margin: .5rem auto;

  &:hover{
    background-color: ${ p => p.theme.onSaleFilBtnHover};
    color: ${ p => p.theme.onsaleColorBtnHover };
  }
  &:focus{
    outline: none;
  }
  @media screen and (max-width: 414px){
     width: 100%;
     height: 45px;
     padding: 0;
     font-size: ${p => p.theme.fontSize};
  }

`

export const ForgotPasswordContainer = styled.div`
margin-left: 25px;
`