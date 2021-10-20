import styled from "styled-components";
import { DiModernizr } from 'react-icons/di'

interface BtnProps {
  none: string;
}

export const ButtonTheme2 = styled.button<BtnProps>`
  position: fixed;
  bottom: 1em;
  right: 1em;
  display: ${({ none }) => (none === "none" ? "none" : "block")};
  padding: 5px;
  background: #fff;
  border: none;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  z-index: 1000;

  &:focus{
    outline: none;
  }
`;
export const IconTheme = styled(DiModernizr)`
 font-size: 25px;
`;
