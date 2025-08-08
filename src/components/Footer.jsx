import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../layouts/Footer.css";
function Footer() {
  return (
    <>
      <footer>
        <Container>
          <div className="sectionOne">
            <div className="links">
              <Link to="/home">Home</Link>
              <Link to="/category">Category</Link>
              <Link to="/products">Products</Link>
              <Link to="/cart">Cart</Link>
            </div>
            <div className="brands">
              <a
                href="https://www.facebook.com/shahad.sayed.1232"
                target="_blank">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/shahdsayed31/" target="_blank">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/shahd-sayed-2766a7278/"
                target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="mailto:shahdsayed387@gmail.com" target="_blank">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
          <hr className="my-4"/>
          <div className="sectionTwo">
            <div className="link">
              <p className="m-0">© 2025 Shahd. All rights reserved.</p>
            </div>
            <div className="img-link">
              <img src="../../icon (2).svg" alt="logo" />
            </div>
            <div className="terms">
              <Link to="">Terms of Service </Link>
              <Link to=""> Privacy Policy </Link>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
