import styled from "styled-components";

export const StyledMemory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .principal {
    display: grid;
    place-items: center;
    height: 100%;

    h1 {
      margin-bottom: 2em;
    }
  }

  .board {
    align-self: center;
    position: relative;
    padding: 0;
    margin: 0 auto;
  }
  .tile {
    position: absolute;
    list-style: none;
    display: grid;
    place-items: center;
    font-size: 20px;
  }

  .info-text {
    margin-bottom: 1em;
  }
  .win-text {
    text-align: center;
    
    h3 {
        margin-bottom: 1em;
        color: var(--clr-primary);
    }

    .Code {
      margin: 1em 0;
      font-weight: 900;
      color: var(--clr-primary-2);
    }
  }
`;
