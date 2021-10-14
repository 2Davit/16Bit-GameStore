import styled from "styled-components";
import { Container } from "../../GlobalStyles/GlobalStyles";

export const ContainerFormP = styled(Container)`
  font-family: ${(p) => p.theme.fontAdmin};
`;

export const Title = styled.h1`
  color: #eeeeee;
  margin: 2rem auto;
  text-align: center;
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 2rem;
  background: #222831;
  padding: 2rem;
`;
export const Fields = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
`;

export const FormLabel = styled.label`
  width: 32%;
  text-align: left;
`;
export const FormInput = styled.input`
  width: 68%;
  height: 90%;
`;
export const FormErrors = styled.div`
  color: red;
  width: 100%;
  text-align: center;
`;

export const BtnSubmit = styled.button`
  border: none;
  width: 50%;
  height: 30%;
  min-height: 40px;
  border-radius: 6px;
  background: #c3630f;
  color: #ffffff;
  font-weight: bold;
  margin: 0 auto;

  &:hover {
    background: #b55400;
  }
`;

export const BtnBack = styled.button`
  border: none;
  width: 10%;
  margin: 2rem 0 2rem 0;
  height: 30%;
  min-height: 40px;
  border-radius: 6px;
  background: #c3630f;
  color: #ffffff;
  font-weight: bold;
  margin: 0 auto;

  &:hover {
    background: #b55400;
  }
`;
