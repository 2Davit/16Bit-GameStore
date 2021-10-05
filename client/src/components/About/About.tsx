import React from "react";
import { StyledAbout } from "./StyledAbout";
import { Fade } from "react-awesome-reveal";

const AboutUs = () => {
  return (
    <Fade>
      <StyledAbout>
        <h2>About Us</h2>
        <p>
          We are the team of developers that made the ECommerce "16Bit
          GameStore", a project for the bootcamp "Henry". Get to know us more
          thoroughly on our social networks.
        </p>
        <div className="about_coders_container">
          <div className="about_coder">
            <h3>Alex Goumaz</h3>
            <div>
              <img alt="profile" src="https://assets.soyhenry.com/logoOG.png" />
            </div>
            <div className="about_social">
              <a href="https://www.linkedin.com/" target="_blank">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/" target="_blank">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="about_coder">
            <h3>Armando Perez</h3>
            <div>
              <img alt="profile" src="https://assets.soyhenry.com/logoOG.png" />
            </div>
            <div className="about_social">
              <a href="https://www.linkedin.com/" target="_blank">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/" target="_blank">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="about_coder">
            <h3>David Aicardi</h3>
            <div>
              <img alt="profile" src="https://assets.soyhenry.com/logoOG.png" />
            </div>
            <div className="about_social">
              <a href="https://www.linkedin.com/" target="_blank">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/" target="_blank">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="about_coder">
            <h3>Denis Ferreyra</h3>
            <div>
              <img alt="profile" src="https://assets.soyhenry.com/logoOG.png" />
            </div>
            <div className="about_social">
              <a href="https://www.linkedin.com/" target="_blank">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/" target="_blank">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="about_coder">
            <h3>Franco Diosquez</h3>
            <div>
              <img alt="profile" src="https://assets.soyhenry.com/logoOG.png" />
            </div>
            <div className="about_social">
              <a href="https://www.linkedin.com/" target="_blank">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/" target="_blank">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="about_coder">
            <h3>Gabriel Sanchez</h3>
            <div>
              <img alt="profile" src="https://assets.soyhenry.com/logoOG.png" />
            </div>
            <div className="about_social">
              <a href="https://www.linkedin.com/" target="_blank">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/" target="_blank">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="about_coder">
            <h3>Carlos Ramirez</h3>
            <div>
              <img alt="profile" src="https://assets.soyhenry.com/logoOG.png" />
            </div>
            <div className="about_social">
              <a href="https://www.linkedin.com/" target="_blank">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/" target="_blank">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="about_coder">
            <h3>Guido Gambini</h3>
            <div>
              <img alt="profile" src="https://assets.soyhenry.com/logoOG.png" />
            </div>
            <div className="about_social">
              <a href="https://www.linkedin.com/" target="_blank">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/" target="_blank">
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
