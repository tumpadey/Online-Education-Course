import React from 'react';
import logo from '../../images/logo.PNG';

import './Header.css';
import { Navbar, Nav } from 'react-bootstrap';
const Header = () => {
    return (
         <div className="Header">
             <img src={logo} alt=""/>
             <Navbar bg="dark" variant="dark">
             <Navbar.Brand href="#home">Login</Navbar.Brand>
             <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Categories</Nav.Link>
            <Nav.Link href="#pricing">Course Review</Nav.Link>
    </Nav>
    
   </Navbar>
         </div>
    );
};

export default Header;