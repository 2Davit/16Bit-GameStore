import styled from "styled-components";
import SVG from "react-inlinesvg";

export const StyledCartSideBar = styled.div`
  .cart__overlay {
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .modal {
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    width: 500px;
    padding: 4em 2em;
    overflow: auto;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.7);
    background: ${p => p.theme.cartBack};

    .modal__title {
      color: ${p => p.theme.cartColor};
      margin: 1em 0;
      text-align: center;
    }

    .modal__subtotal {
      display: flex;
      justify-content: space-between;
      font-size: 1.2em;
      text-transform: uppercase;
      margin-bottom: 2em;
    }
    .modal__close {
      position: absolute;
      top: 2em;
      left: 2em;
      height: 40px;
      width: 40px;
      border: none;
      background: none;

      &:hover {
        svg {
          fill: #B3141C;
        }
      }
      &:focus {
        outline: none;
        color: var(--clr-dark);
      }

      &:active {
        transform: scale(0.9);
      }
    }

    .modal__buttons {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .btn {
        margin-left: 1em;
      }
    }

    @media (max-width: 414px) {
      width: 100vw;
      .modal__buttons {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 1em 0 0 3.3rem !important;
      }
      .btn {
        margin: 1em auto 0 auto;
      }
    }
  }
`;

export const StyledCloseBtn = styled(SVG)`
  width: 40px;
  height: 40px;
  fill: #999;
`;
