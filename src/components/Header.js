import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css'; // Import custom styles

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="p-3">
      <div className="container">
        {/* Add the image to the left side of the header */}
        <img
          src="https://cdn.britannica.com/mendel/eb-logo/MendelNewThistleLogo.png" // Replace with your image URL
          alt="Logo"
          className="header-image"
        />
        <Navbar.Brand as={Link} to="/">
         
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="mx-3">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="mx-3">About</Nav.Link>
            <Nav.Link as={Link} to="/tour" className="mx-3">Tour</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
