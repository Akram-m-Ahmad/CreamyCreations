import React from 'react';
import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiPhoneCall } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';


export default function header() {


  return (

    <Navbar collapseOnSelect expand="lg" bg=" " variant=" ">
      <Navbar.Brand  > <img alt="Qries" src='Image/creamy.jpeg' className='logo' /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link ><NavLink exact to="/"> <a className="link5">Home</a></NavLink></Nav.Link>
          <Nav.Link ><NavLink to="/Nproducts"><a className="link5">Products</a></NavLink></Nav.Link>
          <Nav.Link><NavLink to="/News"><a className="link5">News</a></NavLink></Nav.Link>
          <Nav.Link ><NavLink to="/Events"><a className="link5">Events</a></NavLink></Nav.Link>
        </Nav>
        <p className='num' > +961 71-111-111  <FiPhoneCall  className="call"/></p>  
      </Navbar.Collapse>
    </Navbar>


  );
}


