import styled from "styled-components";

interface BtnProps {
  none: string;
}

export const ButtonTheme2 = styled.button<BtnProps>`
  position: fixed;
  top: 1em;
  left: 1em;
  display: ${({ none }) => (none === "none" ? "none" : "block")};
  padding: 5px;
  background: linear-gradient(135deg, var(--clr-primary), #444);
  border: 2px solid var(--clr-dark);
  border-radius: 100%;
  &:focus {
    outline: none;
  }
  &:hover {
    background: linear-gradient(135deg, #ff2247, #1e3f9f);
    border-color: white;
    color: white;
    & .fa {
      color: white;
      transform: scale(1.1);
    }
  }
  z-index: 1000;
`;
