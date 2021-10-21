import StyledFooter from "./StyledFooter";
import { LinkStyled } from "./StyledFooter";
import { animateScroll } from "react-scroll";

const Footer = () => {
  const handleClick = (ev: any) => {
    animateScroll.scrollToTop({ duration: 300 });
  };

  return (
    <StyledFooter>
      <nav className="navbar__bottom">
        <ul>
          <li>
            <LinkStyled onClick={handleClick} to="/terms">
              Terms of service
            </LinkStyled>
          </li>
          <li>
            <LinkStyled onClick={handleClick} to="/privacy">
              Privacy
            </LinkStyled>
          </li>
          <li>
            <LinkStyled onClick={handleClick} to="/legal">
              Legal
            </LinkStyled>
          </li>
          <li>
            <LinkStyled onClick={handleClick} to="/about">
              About Us
            </LinkStyled>
          </li>
          <li>
              <LinkStyled to="/contact">Contact Us</LinkStyled>
            </li>
        </ul>
      </nav>

      <p>
        © 16bitStore ~ This is a fictional project for the bootcamp{" "}
        <a
          href="https://soyhenry.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{color:"#ffff01"}}
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
