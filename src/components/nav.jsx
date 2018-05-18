import React, { Component } from "react";
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';

export default class CustomNav extends Component {
  render() {
    return (
      <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a class="navbar-brand topnav" href="#home"><Image src="/media/img/top-logo-injection.png" className="img-responsive"/></a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <NavItem eventKey={1} href="/">
          Home
        </NavItem>
        <NavItem eventKey={2} href="/about">
          About
        </NavItem>
        <NavItem eventKey={3} href="/projects">
          Projects
        </NavItem>
        <NavItem eventKey={4} href="/downloads">
          Downloads
        </NavItem>
        <NavItem eventKey={5} href="/blog">
          Blog
        </NavItem>
        <NavItem eventKey={6} href="https://www.redbubble.com/people/injectiondev/shop?ref=artist_shop_category_refinement">
          Store
        </NavItem>
      </Nav>
    </Navbar>
    );
  }
}