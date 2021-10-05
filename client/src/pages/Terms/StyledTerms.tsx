import styled from "styled-components";

export const StyledTerms = styled.div`
  font-family: Raleway;
  margin: 3vh 5vw;
  font-size: 1em;
  h2 {
    text-align: center;
    margin-bottom: 1em;
    text-transform: uppercase;
    font-size: 2em;
    font-weight: 900;
  }

  h3 {
    margin-bottom: 1em;
    font-weight: 700;
    text-transform: uppercase;
  }

  h4 {
    font-weight: 700;
    font-size: 1.1em;
    margin-bottom: 0.5em;
  }

  a {
    color: #51a5fe;
    font-weight: 700;
    text-decoration: none;
  }

  p {
    line-height: 1.6;
  }

  ul {
    margin: 1em 0 2em 3em;
  }

  li {
    margin-top: 0.5em;
    line-height: 1.6;
  }

  section,
  footer {
    padding: 1.2rem;
  }

  section > p + p {
    margin-top: 1em;
  }

  footer {
    border-top: 3px solid rgba(0, 0, 0, 0.1);
    font-size: 0.8em;
    padding-bottom: 0;
  }
`;
