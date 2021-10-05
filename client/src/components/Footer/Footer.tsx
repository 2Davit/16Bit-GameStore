import React from "react";
import { Link } from "react-router-dom";
import StyledFooter from "./StyledFooter";
import { StyledSVG } from "../../GlobalStyles/GlobalStyles";
import { animateScroll } from "react-scroll";
import { Title } from "../index";

const Footer = () => {
  const handleClick = (ev: any) => {
    animateScroll.scrollToTop({ duration: 300 });
  };

  return (
    <StyledFooter>
      <Title />
      <nav className="navbar__bottom">
        <ul>
          <li>
            <Link onClick={handleClick} to="/terms">
              Terms of service
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} to="/privacy">
              Privacy
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} to="/legal">
              Legal
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} to="/about">
              About Us
            </Link>
          </li>
        </ul>
      </nav>

      <p>
        © 16bitStore ~ This is a fictional project for the bootcamp{" "}
        <a
          href="https://soyhenry.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Henry
        </a>
        . All rights reserved. All trademarks, service marks and company names
        are the property of their respective owners.
      </p>
    </StyledFooter>
  );
};

export default Footer;
