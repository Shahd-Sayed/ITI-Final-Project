import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../layouts/Footer.css";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <footer>
        <Container>
          <div className="sectionOne">
            <div className="links">
              <Link to="/home">Home</Link>
              <Link to="/product">Products</Link>
              <Link to="/cart">Cart</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="brands">
              <a
                href="https://www.facebook.com/shahad.sayed.1232"
                target="_blank"
                data-brand="Facebook">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/shahdsayed31/"
                data-brand="Linkedin"
                target="_blank">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/shahd-sayed-2766a7278/"
                target="_blank"
                data-brand="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="mailto:shahdsayed387@gmail.com"
                data-brand="Email"
                target="_blank">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
          <hr className="my-4" />
          <div className="sectionTwo">
            <div className="link">
              <p className="m-0">© 2025 Shahd. All rights reserved.</p>
            </div>
            <div className="img-link">
              {theme === "light" ? (
                <img src="../../icon (2).svg" alt="logo" />
              ) : (
                <img src="../../image (1).webp" alt="logo" />
              )}
            </div>
            <div className="terms">
              <Link to="/terms">Terms of Service </Link>
              <Link to="/privacy"> Privacy Policy </Link>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
