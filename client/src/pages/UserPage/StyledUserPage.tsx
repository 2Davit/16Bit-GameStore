import styled from "styled-components";

export const UserCard = styled.div`
  display: flex;
  border: 5px solid var(--clr-primary);
  border-radius: 2em;
  overflow: hidden;
  box-shadow: 7px 5px 0px var(--clr-primary);
  width: 80%;
  margin: 5rem auto;

  ul {
    flex-basis: 300px;
    background-color: #223;
    color: var(--clr-white);
    text-transform: uppercase;
    margin: 0;

    a {
      display: block;
      text-decoration: none;
      color: currentColor;
      padding: 2em;
      border-right: 5px solid transparent;
      &:hover {
        background-color: var(--clr-dark);
        border-color: var(--clr-primary);
      }
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;

    ul {
      font-size: 0.75em;
      display: flex;
      flex-basis: auto;

      li {
        flex: 0 0 33.33%;
        text-align: center;
        display: flex;
      }

      a {
        flex: 1;
        border-right: none;
        border-bottom: 4px solid transparent;

        &:hover {
          background-color: var(--clr-dark);
          border-color: var(--clr-primary);
        }
      }
    }
  }
`;

export const ProfileStyled = styled.div`
  text-align: center;
  flex: 1;
  padding: 2em;
  .img-container {
    margin: 0 auto 1em;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 10px solid var(--clr-primary-2);
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  h2 {
    font-size: 2em;
  }

  @media (max-width: 450px) {
    .img-container {
      width: 150px;
      height: 150px;
    }
  }
`;
export const StyledEditProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  .deleteAccount {
    position: relative;
    text-align: center;
    p {
      margin: 1em auto 1em;
    }
  }
`;

export const FormEditProfile = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .form__title {
    margin: 1em auto 1em;
    position: relative;
  }

  label {
    display: block;
    position: relative;
    width: 400px;
    margin: 1.2em auto;
    @media (max-width: 600px) {
      width: 100%;
    }

    span {
      position: absolute;
      left: 1em;
      top: -1em;
      background: #000;
      padding: 0 0.5em;
      font-size: 0.8em;
    }

    input {
      background: #000;
      color: var(--clr-white);
      font-size: 0.8em;
      padding: 1em;
      border: 3px solid var(--clr-primary);
      border-radius: 0.4em;
      width: 100%;
      outline: none;
    }

    &::after {
      content: "";
      position: absolute;
      top: 2px;
      bottom: -5px;
      left: 5px;
      width: 100%;
      border-radius: 0.4em;
      background: var(--clr-primary);
      opacity: 0.2;
      transition: opacity 0.2s ease;
      z-index: -1;
    }

    &:focus-within::after {
      opacity: 1;
    }
  }

  a {
    text-decoration: none;
  }
  button {
    margin-left: 3em;
  }

  .passwordSection {
    position: relative;
  }
  .small-text {
    position: relative;
    margin: 0 auto 2em;
    width: 60%;
    font-size: 0.7em;
    padding: 1em 1em 1em 3em;
    border-top: 1px solid var(--clr-error-2);
    background: #000;
  }

  .small-text::before {
    font-size: 1.5em;
    content: "\f06a";
    font-family: "Font Awesome 5 Pro";
    color: var(--clr-error);
    position: absolute;
    left: 0;
    top: 1;
  }

  .deleteAccount {
    background: green;
  }
`;

export const StyledOrders = styled.div`
  table {
    border: 1px solid #ccc;
    border-collapse: collapse;
    margin: 0;
    padding: 0;
    width: 100%;
    table-layout: fixed;
  }

  table caption {
    font-size: 1.5em;
    margin: 0.5em 0 0.75em;
  }

  table tr {
    background-color: #000;
    border: 1px solid #ddd;
    padding: 0.35em;
  }

  table th,
  table td {
    padding: 0.625em;
    text-align: center;
  }

  table th {
    font-size: 0.85em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  @media screen and (max-width: 600px) {
    table {
      border: 0;
    }

    table caption {
      font-size: 1.3em;
    }

    table thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    table tr {
      border-bottom: 3px solid #ddd;
      display: block;
      margin-bottom: 0.625em;
    }

    table td {
      border-bottom: 1px solid #ddd;
      display: block;
      font-size: 0.8em;
      text-align: right;
    }

    table td::before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }

    table td:last-child {
      border-bottom: 0;
    }
  }
`;
