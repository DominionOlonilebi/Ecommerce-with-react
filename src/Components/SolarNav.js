import { cilCart } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Login from './Login';

const SolarNav = () => {
  return (
    <>
      <Navbar expand="lg" className='fixed-top'>
        <Container fluid className="header">
          <Navbar.Brand className="brand">
            <img src='Images/sol logo.png' alt='' width={100} height={100}/><span className='logo'>Solarcorp</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto offset-6 navs" variant="underline">
              <Link to="/" className="nav-link">
              </Link>
              <Link to="/products" className="nav-link mx-2 ">
                Products
              </Link>
              <Link to="/blog" className="nav-link mx-2 ">
                Blog
              </Link>
              <Link to="/cart" className="nav-link mx-2 ">
               <CIcon icon={cilCart} width={20} height={20} className='carts'/> Cart
              </Link>
              <Button id='nav_button' className="nav-link mx-2 pt-0"> <a href='/signup' >Get Started </a></Button>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}

export default SolarNav
