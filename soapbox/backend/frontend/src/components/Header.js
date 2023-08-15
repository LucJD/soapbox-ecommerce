import React from "react";
import { Nav, NavDropdown, Navbar, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className="bg-body-secondary">
        <LinkContainer to="/">
          <Navbar.Brand> J&S Soapbox</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle
          className="bg-light text-white mx-4"
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Products</Nav.Link>
            <NavDropdown title="Categories" id="collasible-nav-dropdown">
              <LinkContainer to={"/products/soaps"}>
                <NavDropdown.Item>Soaps</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to={"products/sugar-scrubs"}>
                <NavDropdown.Item>Sugar Scrubs</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="products/beard-oils">
                <NavDropdown.Item>Beard Oils</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />

              <LinkContainer to={"/custom-orders"}>
                <NavDropdown.Item>Custom Orders/ Bulk Orders</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav className="px-3">
          <Nav.Link as={Link} to="/orders">
            My Orders
          </Nav.Link>

          <Nav.Link as={Link} to="/login" className="px-3">
            <i className="fa-regular fa-user"></i>
            Login
          </Nav.Link>

          <Nav.Link as={Link} to={"/cart"} className="px-3">
            <i className="fa-solid fa-cart-shopping"></i>
            Cart
          </Nav.Link>
        </Nav>
      </Navbar>
    </header>
  );
}

export default Header;
