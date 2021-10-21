import React, {useState} from "react";
import { StyledAbout, TextAbout } from "./StyledAbout";
import { Fade } from "react-awesome-reveal";
import Alex from './Members/Alex.jpeg'
import Carlos from './Members/Carlos.png'
import David from './Members/David.jpeg'
import Denis from './Members/Denis.jpeg'
import Gabriel from './Members/Gabriel.png'
import Franco from './Members/Franco.jpeg'
import Armando from './Members/Armando.jpeg'
import Guido from './Members/Guido.jpeg'



import DenisPixel from './Members/pixelDenis.png'
import AlexPixel from './Members/pixelAlex.png'
import GabrielPixel from './Members/pixelGabriel.png'
import CarlosPixel from './Members/pixelCarlos.png'
import FrancoPixel from './Members/pixelFranco.png'
import DavidPixel from './Members/pixelDavid.png'
import ArmandoPixel from './Members/pixelArmando.png'
import GuidoPixel from './Members/pixelGuido.png'






const AboutUs = () => {
  const [pixel, setPixel] = useState(true);

  const handlePixel = () => {
    setPixel(!pixel)
  }
  return (
    <Fade>
      <StyledAbout>
        <h2>About Us</h2>
        <TextAbout>
        <p>
          We are the team of developers behind "16Bit
          GameStore", this was our final project for SoyHenry's bootcamp. We hope you've liked it. If you want to know a little more about any of us please contact through the links below.
        </p>
        </TextAbout>
        <div className="about_coders_container">
          <div className="about_coder">
            <h3>Alex Goumaz</h3>
            <div>
              <button style={{borderRadius: "50%", backgroundColor: "transparent", border: "none"}} onMouseOut={handlePixel} onMouseOver={handlePixel}>
             {pixel ? <img alt="profile" src={AlexPixel}  /> :
              <img alt="profile" src={Alex} />}

              </button>
            </div>
            <div className="about_social">
              <a
                href="https://www.linkedin.com/in/alexgoumaz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/Alex4196"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="about_coder">
            <h3>Armando Perez</h3>
            <div>
            <button style={{borderRadius: "50%", backgroundColor: "transparent", border: "none"}} onMouseOut={handlePixel} onMouseOver={handlePixel}>
             {pixel ? <img alt="profile" src={ArmandoPixel}  /> :
              <img alt="profile" src={Armando} />}

              </button>
            </div>
            <div className="about_social">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="about_coder">
            <h3>David Aicardi</h3>
            <div>
            <button style={{borderRadius: "50%", backgroundColor: "transparent", border: "none"}} onMouseOut={handlePixel} onMouseOver={handlePixel}>
             {pixel ? <img alt="profile" src={DavidPixel}  /> :
              <img alt="profile" src={David} />}

              </button>
            </div>
            <div className="about_social">
              <a
                href="https://www.linkedin.com/in/david-aicardi-developer/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/2Davit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="about_coder">
            <h3>Denis Ferreyra</h3>
            <div>
            <button style={{borderRadius: "50%", backgroundColor: "transparent", border: "none"}} onMouseOut={handlePixel} onMouseOver={handlePixel}>
             {pixel ? <img alt="profile" src={DenisPixel}  /> :
              <img alt="profile" src={Denis} />}

              </button>
            </div>
            <div className="about_social">
              <a
                href="https://www.linkedin.com/in/denis-ferreyra/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/DenisOrlando"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="about_coder">
            <h3>Franco Diosquez</h3>
            <div>
            <button style={{borderRadius: "50%", backgroundColor: "transparent", border: "none"}} onMouseOut={handlePixel} onMouseOver={handlePixel}>
             {pixel ? <img alt="profile" src={FrancoPixel}  /> :
              <img alt="profile" src={Franco} />}

              </button>
            </div>
            <div className="about_social">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="about_coder">
            <h3>Gabriel Sanchez</h3>
            <div>
            <button style={{borderRadius: "50%", backgroundColor: "transparent", border: "none"}} onMouseOut={handlePixel} onMouseOver={handlePixel}>
             {pixel ? <img alt="profile" src={GabrielPixel}  /> :
              <img alt="profile" src={Gabriel} />}

              </button>
            </div>
            <div className="about_social">
              <a
                href="www.linkedin.com/in/gabriel-sanchez-fullstack-development"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/GabSanWebDev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="about_coder">
            <h3>Carlos Ramirez</h3>
            <div>
            <button style={{borderRadius: "50%", backgroundColor: "transparent", border: "none"}} onMouseOut={handlePixel} onMouseOver={handlePixel}>
             {pixel ? <img alt="profile" src={CarlosPixel}  /> :
              <img alt="profile" src={Carlos} />}

              </button>
            </div>
            <div className="about_social">
              <a
                href="https://www.linkedin.com/in/carlosramirezdev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/chakkyy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="about_coder">
            <h3>Guido Gambini</h3>
            <div>
            <button style={{borderRadius: "50%", backgroundColor: "transparent", border: "none"}} onMouseOut={handlePixel} onMouseOver={handlePixel}>
             {pixel ? <img alt="profile" src={GuidoPixel}  /> :
              <img alt="profile" src={Guido} />}

              </button>
            </div>
            <div className="about_social">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </StyledAbout>
    </Fade>
  );
};

export default AboutUs;
