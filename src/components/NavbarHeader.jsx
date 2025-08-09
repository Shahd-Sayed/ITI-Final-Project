import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../layouts/NavbarHeader.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function NavbarHeader() {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          <img src="../../icon (2).svg" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <i className="fa-solid fa-bars"></i>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="w-100 d-flex justify-content-end flex-column flex-lg-row pt-0 pt-s-2">
            <Nav className="gap-3">
              <Nav.Link as={Link} to="/home">
                <i className="fa-solid fa-house"></i>
                <span>Home</span>
              </Nav.Link>

              <Nav.Link as={Link} to="/product">
                <i className="fa-solid fa-box-open"></i>
                <span>Products</span>
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                <i className="fa-solid fa-cart-shopping"></i> <span>Cart</span>
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                <i className="fa-solid fa-address-book"></i>
                <span>Contact</span>
              </Nav.Link>
              {user ? (
                <Nav.Link as={Link} to="/home" onClick={handleLogout}>
                  <i className="fa-solid fa-right-from-bracket"></i>
                  <span>Logout</span>
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/login">
                  <i className="fa-solid fa-right-to-bracket"></i>
                  <span>Login</span>
                </Nav.Link>
              )}
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;
