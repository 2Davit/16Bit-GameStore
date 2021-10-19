import styled from "styled-components";

export const StyledReset = styled.div`
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
