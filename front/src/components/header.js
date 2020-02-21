import React from 'react';
import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import { NavLink } from 'react-router-dom';


export default function header() {



  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home"> <img alt="Qries" src='Image/creamy.jpeg' className="logo" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link ><NavLink exact to="/">Home</NavLink></Nav.Link>
          <Nav.Link ><NavLink to="/Nproducts">Products</NavLink></Nav.Link>
          <Nav.Link><NavLink to="/News">News</NavLink></Nav.Link>
          <Nav.Link ><NavLink to="/Events">Events</NavLink></Nav.Link>

        </Nav>

      </Navbar.Collapse>
    </Navbar>


  );
}


