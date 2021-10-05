import styled from "styled-components";

export const StyledAbout = styled.div`
  min-height: 60vh;
  line-height: 1.5;
  text-align: center;
  height: 100vh;

  h2 {
    text-align: center;
    margin-bottom: 1em;
    text-transform: uppercase;
    font-size: 2em;
  }

  h3 {
    margin-bottom: 1em;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
  }

  .about_coders_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin-top: 3em;
    margin: 5em auto;
    max-width: 100%;
    max-height: 100%;

    .about_coder {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      flex: 1 0 20%;
      height: 100%;
      margin: 2rem 2rem;
      h4 {
        margin-bottom: 1em;
      }

      img {
        margin-bottom: 1em;
        width: 9em;
        height: 9em;
        border-radius: 99em;
        object-fit: cover;
        border: 3px solid #51a5fe;
        transition: filter 0.2s ease-in-out;

        &:hover {
          filter: grayscale(100%);
        }
      }

      .about_social {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 55%;

        i {
          border: 4px solid #51a5fe;
          padding: 0.15em;
          border-radius: 10px;
          text-decoration: none;
          font-size: 2em;
          color: #fff;
          transition: color 0.2s ease-in-out;

          &:hover {
            color: #51a5fe;
          }
        }
      }
    }
  }

  @media (max-width: 900px) {
    .about_coders_container {
      flex-direction: column;
      margin: 1em 0;

      .about_coder {
        margin: 2em 0;

        h4 {
          font-size: 1.5em;
        }

        img {
          width: 14em;
          height: 14em;
        }

        .about_social {
          i {
            font-size: 3em;
          }
        }
      }
    }
  }
`;
