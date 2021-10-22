import { ContainerLegal } from "./Legal.style";
import { Fade } from "react-awesome-reveal";

const Legal = () => {
  return (
    <ContainerLegal>
      <Fade>
        <h2>Legal Information</h2>
        <>
          <section>
            <p>
              16Bit Gamestore is a project made by students from{" "}
              <a
                href="https://soyhenry.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Henry
              </a>{" "}
              as part of an assignment.
            </p>
            <p>It is not a real nor functional website, just a made-up one.</p>
            <p>
              None of the products displayed can be sold or purchased. The
              serial numbers used are not real and do not work.
            </p>
            <p>
              All the product images, descriptions and serial numbers used are
              for demostrative purposes only.
            </p>
          </section>
        </>
      </Fade>
    </ContainerLegal>
  );
};

export default Legal;
