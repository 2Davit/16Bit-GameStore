import styled from "styled-components";

export const StyledLeaveReview = styled.div`
  margin-top: 5em;
  height: 50vh;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  /* flex-direction: row; */
  @media (max-width: 1000px) {
    flex-direction: column;
  }
  label {
    margin-top: 3em;
  }

  button {
    margin-top: 2em;
    left: 20%;
  }

  textarea {
    height: 150px;
  }
`;
