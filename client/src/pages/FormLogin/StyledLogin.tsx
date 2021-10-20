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
    border: "2px solid #9b5df7",
    borderRadius: "10px",
    boxShadow: "0 0 15px #9b5df7",
    color: "#F5F4F8",
    background: "#111",
    zIndex: "9999",
  },
};
