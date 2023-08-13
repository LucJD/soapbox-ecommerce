import React from 'react';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { logout } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

function Header() {

  const userLogin = useSelector(state => state.userLogin)
  const{userInfo} = userLogin
  const dispatch = useDispatch()


  const logoutHandler = () => {
    dispatch(logout())
  }


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
        <Nav className='px-3'>

            <Nav.Link as={Link} to="/orders">My Orders</Nav.Link>
             
            {userInfo ? (
              <NavDropdown title = {userInfo.name} id='username'>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>Profile Blue</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}> Logout</NavDropdown.Item>
              </NavDropdown>
            ) :
            <Nav.Link as={Link} to="/login" className='px-3'>
            <i className='fa-regular fa-user'></i>
            Login</Nav.Link>
            }


         
         <Nav.Link as={Link}to={'/cart'} className='px-3'>
            <i className='fa-solid fa-cart-shopping'></i>
            Cart
          </Nav.Link>
          
        </Nav>
      </Navbar.Collapse>

  </Navbar>
        </header>

  )
}

export default Header
