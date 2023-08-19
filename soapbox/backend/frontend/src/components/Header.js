import React from "react";
import { Nav, NavDropdown, NavItem, NavLink, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { logout } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import "./nav.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";

function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

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
                src="../nav-images/flower.png"
                width={80}
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />

              <img
                className="logoName"
                src="../nav-images/soapbox_darkpurple.png"
                height={50}
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
                <NavDropdown
                  title="Shop"
                  id={`offcanvasNavbarDropdown-expand-${"md"}`}
                >
                  <NavDropdown.Item href="/?category=soap">
                    Bar Soaps
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#bathbomb">
                    Bath Bombs
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#beardbalm">
                    Beard Balms
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/?category=beardoils">
                    Beard Oils
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#bodybutter">
                    Body Butters
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/?category=sugarscrubs">
                    Sugar Scrubs
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#=waxmelts">
                    Wax Melts
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/custom-orders">
                    Custom Orders/ Bulk Orders
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/">Shop All</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="/about">About</Nav.Link>

                <Nav.Link href="#contact">Contact</Nav.Link>
                {userInfo && userInfo.isAdmin && (
                  <NavDropdown title="Admin" id="collasible-nav-dropdown">
                    <LinkContainer to={"/admin/userlist"}>
                      <NavDropdown.Item>Users</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to={"admin/orderlist"}>
                      <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="admin/productlist">
                      <NavDropdown.Item>Products</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <div className="navIcons">
            <Link to="/login" className="users">
              <img
                src="../nav-images/login_purple.png"
                alt="Users"
                width={44}
              />
            </Link>
            <Link to="/cart" className="cart">
              <img src="../nav-images/cart_purple.png" alt="Cart" width={45} />
            </Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

// import React from "react";
// import { Nav, NavDropdown, NavItem, NavLink, Navbar } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";
// import { Link } from "react-router-dom";
// import { logout } from "../actions/userActions";
// import { useDispatch, useSelector } from "react-redux";
// import "./nav.css";
// import Offcanvas from "react-bootstrap/Offcanvas";
// import Container from "react-bootstrap/Container";

// function Header() {
//   const userLogin = useSelector((state) => state.userLogin);
//   const { userInfo } = userLogin;
//   const dispatch = useDispatch();

//   const logoutHandler = () => {
//     dispatch(logout());
//   };

//   return (
//     <header>
//       <Navbar
//         key="md"
//         expand="md"
//         className="bg-body-tertiary mb-3"
//         sticky="top"
//       >
//         <Container fluid>
//           <Link to="/">
//             <Navbar.Brand>
//               <img
//                 src="../nav-images/flower.png"
//                 width={80}
//                 className="d-inline-block align-top"
//                 alt="flower logo"
//               />
//               <img
//                 className="logoName"
//                 src="../nav-images/soapbox_cream.png"
//                 height={60}
//                 alt="logo"
//               />
//             </Navbar.Brand>
//           </Link>

//           <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"md"}`} />
//           <Navbar.Offcanvas
//             id={`offcanvasNavbar-expand-${"md"}`}
//             aria-labelledby={`offcanvasNavbarLabel-expand-${"md"}`}
//             placement="end"
//           >
//             <Offcanvas.Header closeButton>
//               <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"md"}`}>
//                 Offcanvas
//               </Offcanvas.Title>
//             </Offcanvas.Header>
//             <Offcanvas.Body></Offcanvas.Body>
//           </Navbar.Offcanvas>

//           <Navbar.Collapse>
//             <Nav>
//               <NavDropdown title="Shop">
//                 <LinkContainer
//                   to={{
//                     pathname: "/",
//                     search: "?category=soap",
//                   }}
//                 >
//                   <NavDropdown.Item>Soaps</NavDropdown.Item>
//                 </LinkContainer>
//                 <LinkContainer
//                   to={{
//                     pathname: "/",
//                     search: "?category=sugarscrubs",
//                   }}
//                 >
//                   <NavDropdown.Item>Sugar Scrubs</NavDropdown.Item>
//                 </LinkContainer>
//                 <LinkContainer
//                   to={{
//                     pathname: "/",
//                     search: "?category=beardoils",
//                   }}
//                 >
//                   <NavDropdown.Item>Beard Oils</NavDropdown.Item>
//                 </LinkContainer>
//                 <NavDropdown.Divider />

//                 <LinkContainer to={"/custom-orders"}>
//                   <NavDropdown.Item>
//                     Custom Orders/ Bulk Orders
//                   </NavDropdown.Item>
//                 </LinkContainer>
//               </NavDropdown>

//               <Nav.Link as={Link} to="/about">
//                 About Us
//               </Nav.Link>
//               {userInfo && userInfo.isAdmin && (
//                 <NavDropdown title="Admin" id="collasible-nav-dropdown">
//                   <LinkContainer to={"/admin/userlist"}>
//                     <NavDropdown.Item>Users</NavDropdown.Item>
//                   </LinkContainer>
//                   <LinkContainer to={"admin/orderlist"}>
//                     <NavDropdown.Item>Orders</NavDropdown.Item>
//                   </LinkContainer>
//                   <LinkContainer to="admin/productlist">
//                     <NavDropdown.Item>Products</NavDropdown.Item>
//                   </LinkContainer>
//                 </NavDropdown>
//               )}
//             </Nav>
//           </Navbar.Collapse>
//           {/* user and login and cart */}
//           <Nav>
//             {userInfo ? (
//               <NavDropdown title={userInfo.name}>
//                 <LinkContainer to="/profile">
//                   <NavDropdown.Item>Profile</NavDropdown.Item>
//                 </LinkContainer>
//                 <NavDropdown.Item onClick={logoutHandler}>
//                   {" "}
//                   Logout
//                 </NavDropdown.Item>
//               </NavDropdown>
//             ) : (
//               <Nav.Link as={Link} to="/login">
//                 <i></i>
//                 Login
//               </Nav.Link>
//             )}

//             <Nav.Link as={Link} to={"/cart"}>
//               <i></i>
//               Cart
//             </Nav.Link>
//           </Nav>
//           {/* end of user and cart */}
//         </Container>
//       </Navbar>
//     </header>
//   );
// }

// export default Header;
