import React from "react";
import { Nav, NavDropdown, NavItem, NavLink, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { logout } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className="bg-primary">
        <LinkContainer to="/">
          <Navbar.Brand>J&S Soapbox</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="true"
          aria-label="Toggle navigation"
        />
        <Navbar.Collapse id="navbarColor01">
          <Nav className="me-auto">
            <NavDropdown
              className={"bg-primary"}
              title="Shop"
              id="collasible-nav-dropdown"
            >
              <LinkContainer
                to={{
                  pathname: "/",
                  search: "?category=soap",
                }}
              >
                <NavDropdown.Item className="bg-primary">
                  Soaps
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer
                to={{
                  pathname: "/",
                  search: "?category=sugarscrubs",
                }}
              >
                <NavDropdown.Item className="bg-primary">
                  Sugar Scrubs
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer
                to={{
                  pathname: "/",
                  search: "?category=beardoils",
                }}
              >
                <NavDropdown.Item className="bg-primary">
                  Beard Oils
                </NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />

              <LinkContainer to={"/custom-orders"}>
                <NavDropdown.Item className="bg-primary">
                  Custom Orders/ Bulk Orders
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            <Nav.Link as={Link} to="/about" className="px-3">
              About Us
            </Nav.Link>
            {userInfo && userInfo.isAdmin && (
              <NavDropdown
                className="bg-primary"
                title="Admin"
                id="collasible-nav-dropdown"
              >
                <LinkContainer to={"/admin/userlist"}>
                  <NavDropdown.Item className="bg-primary">
                    Users
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to={"admin/orderlist"}>
                  <NavDropdown.Item className="bg-primary">
                    Orders
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="admin/productlist">
                  <NavDropdown.Item className="bg-primary">
                    Products
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            )}
          </Nav>
          <Nav className="px-3">
            {userInfo ? (
              <NavDropdown title={userInfo.name} id="username">
                <LinkContainer to="/profile">
                  <NavDropdown.Item className="bg-primary">
                    Profile
                  </NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item
                  className="bg-primary"
                  onClick={logoutHandler}
                >
                  {" "}
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link as={Link} to="/login" className="px-3">
                <i className="fa-regular fa-user"></i>
                Login
              </Nav.Link>
            )}

            <Nav.Link as={Link} to={"/cart"} className="px-3">
              <i className="fa-solid fa-cart-shopping"></i>
              Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
