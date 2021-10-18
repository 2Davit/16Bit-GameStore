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


export const StyledCheckReview = styled.div`
  height: 70vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #9b5df7c1;
  border-top-left-radius: 3rem;
  border-top-right-radius: 3rem;
  margin-left: 4rem;
  margin-right: 4rem;
  padding: 3rem;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
  h3 {
    letter-spacing: 0.5rem;
    
  }
`;


export const StyledParagraph = styled.p`
  
`;
