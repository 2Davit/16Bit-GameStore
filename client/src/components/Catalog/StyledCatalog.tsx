import styled from "styled-components";

export const StyledCatalog = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2em;
  min-height: 700px;
  width: 70%;
  margin: 0 auto;
`;

export const StyledPagination = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5em 0;
  line-height: 1;
  width: 100%;

  ul {
    font-size: 1.2em;
    display: flex;
    align-items: center;
    margin-top: 2em;
  }

  li {
    margin: 0 0.5em;
    list-style: none;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2.5em;
      height: 2.5em;
      border-radius: 99em;
      border: 2px solid transparent;
      text-decoration: none;
      color: white;

      &:hover {
        border-color: #51a5fe;
      }
    }
  }

  li:focus,
  a:focus {
    outline: none;
  }

  .controls {
    padding: 0.2em;
    border: none;
    border-radius: 99em;

    svg {
      fill: #0b53d7;
      width: 3em;
      height: 3em;
    }

    &:hover {
      svg {
        fill: #51a5fe;
      }
      a {
        border: none;
      }
    }
  }

  .active {
    background: #51a5fe;
    z-index: 80;
    transition: opacity 0.2s ease;
    border-radius: 2em;
  }
  .disabled {
    cursor: default;
    svg {
      fill: #1b1a1f;
      width: 3em;
      height: 3em;
    }
    &:hover {
      svg {
        fill: #1b1a1f;
      }
    }
  }
  .break-me {
    width: 100%;
  }
`;
