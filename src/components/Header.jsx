import React, { Component } from "react";
import { Navbar, Nav, Image } from "react-bootstrap";


export default class Header extends Component {
  render() {
    return (
      <div>
      <Navbar expand="lg" className="cust-nav-container">
          <Navbar.Brand>
            <a class="navbar-brand topnav" href="/">
              <Image
                src="/media/img/top-logo-injection.png"
                className="img-responsive"
              />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">
                Home
            </Nav.Link>
            <Nav.Link href="/security">
                Security
            </Nav.Link>
             <Nav.Link href="/software">
                Software
            </Nav.Link>
            <Nav.Link href="/about">
                About
            </Nav.Link>
            <Nav.Link href="/portfolio">
                3ndG4me
            </Nav.Link>
            <Nav.Link href="/projects">
                Projects
            </Nav.Link>
            <Nav.Link href="/blog">
                Blog
            </Nav.Link >
            <Nav.Link href="https://www.redbubble.com/people/injectiondev/shop?ref=artist_shop_category_refinement">
                Store
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    );
  }
}
