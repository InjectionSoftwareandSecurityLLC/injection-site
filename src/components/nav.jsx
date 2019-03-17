import React, { Component } from "react";
import { Navbar, Nav, NavItem, Image } from "react-bootstrap";
import { BLOG } from "../constants";
import { HOME } from "../constants";
import { ABOUT } from "../constants";
import { PROJECTS } from "../constants";
import { DOWNLOADS } from "../constants";
export default class CustomNav extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a class="navbar-brand topnav" href="/">
              <Image
                src="/media/img/top-logo-injection.png"
                className="img-responsive"
              />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} onClick={() => this.props.update(HOME)}>
              Home
            </NavItem>
            <NavItem eventKey={2} onClick={() => this.props.update(ABOUT)}>
              About
            </NavItem>
            <NavItem eventKey={3} onClick={() => this.props.update(PROJECTS)}>
              Projects
            </NavItem>
            <NavItem eventKey={4} onClick={() => this.props.update(DOWNLOADS)}>
              Downloads
            </NavItem>
            <NavItem eventKey={5} onClick={() => this.props.update(BLOG)}>
              Blog
            </NavItem>
            <NavItem eventKey={6} href="https://www.redbubble.com/people/injectiondev/shop?ref=artist_shop_category_refinement">
              Store
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
