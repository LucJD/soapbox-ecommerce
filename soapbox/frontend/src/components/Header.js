import React from 'react';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
function Header() {
  return (
        <header>
        <Navbar collapseOnSelect expand="lg" className="bg-body-secondary">
    <LinkContainer to="/">
        <Navbar.Brand>J&S Soapbox</Navbar.Brand>
    </LinkContainer>
      
      <Navbar.Toggle className='bg-light text-white mx-4' aria-controls="responsive-navbar-nav" />
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
        <Nav>
            <LinkContainer to="/orders">
                <Nav.Item>My Orders</Nav.Item>
            </LinkContainer>
            <LinkContainer to="/login">
             <Nav.Item>
            <i className='fa-regular fa-user'></i>
            Login</Nav.Item>
            </LinkContainer>
          
         <LinkContainer to={"/cart"}>
         <Nav.Item>
            <i className='fa-solid fa-cart-shopping'></i>
            Cart
          </Nav.Item>
         </LinkContainer>
          
        </Nav>
      </Navbar.Collapse>

  </Navbar>
        </header>

  )
}

export default Header
