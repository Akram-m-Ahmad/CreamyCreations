import React from 'react';
import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav} from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';




export default function header() {
  

   
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">LOGO</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#1">Order</Nav.Link>
          <Nav.Link href="#2">Product</Nav.Link>
          <Nav.Link href="#3">News</Nav.Link>
          <Nav.Link href="#4">Events</Nav.Link>
         
        </Nav>
        <Nav>
          <Nav.Link href="#face"> </Nav.Link>
          <Nav.Link href="#insta"> <SocialIcon network="youtube" style={{ height: 35, width: 35}} /></Nav.Link>
          <Nav.Link href="#insta"> <SocialIcon network="phone" style={{ height: 35, width: 35}} /></Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
   
    );
  }


