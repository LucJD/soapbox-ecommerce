import { Link } from "react-router-dom";
import "./Navigation.css";

import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

function Navigation() {
  return (
    <>
      <Navbar
        key="md"
        expand="md"
        className="bg-body-tertiary mb-3"
        sticky="top"
      >
        <Container fluid>
          <Link to="/">
            <Navbar.Brand>
              <img
                src="/src/ui/navbar/nav-images/flower.png"
                width={80}
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />

              <img
                className="logoName"
                src="/src/ui/navbar/nav-images/soapbox_cream.png"
                height={60}
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"md"}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${"md"}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${"md"}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"md"}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3 spaces">
                <Nav.Link href="/shop">Shop</Nav.Link>

                <Nav.Link href="/about">About</Nav.Link>

                <Nav.Link href="/contact">Contact</Nav.Link>

                {/* maybe use Dropdown later if we have time */}
                {/* <NavDropdown
                  title="Dropdown"
                  id={`offcanvasNavbarDropdown-expand-${"md"}`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <div className="navIcons">
            <Link to="/users" className="users">
              <img
                src="/src/ui/navbar/nav-images/login_cream.png"
                alt="Users"
                width={44}
              />
            </Link>
            <Link to="/cart" className="cart">
              <img
                src="/src/ui/navbar/nav-images/cart_cream.png"
                alt="Cart"
                width={45}
              />
            </Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
