import React, { Component } from "react";
import { Navbar, Nav, NavItem, Image } from "react-bootstrap";
import { HOME } from "../constants";
import { SECURITY } from "../constants";
import { SOFTWARE } from "../constants";
import { ABOUT } from "../constants";
import { PROFILE } from "../constants"
import { PROJECTS } from "../constants";
import { BLOG } from "../constants";

export default class CustomNav extends Component {

  render() {
    if (this.props.navPage === SECURITY){
      return (
        <DarkNav update={ page => this.props.update(page) } />
      );
    }else if(this.props.navPage === PROFILE){
      return(
        <ProfileNav update={ page => this.props.update(page) } />
      );
    }else{
      return (
        <NormalNav update={ page => this.props.update(page) } />
      );
    }

  }
}



class NormalNav extends Component {
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
            <NavItem eventKey={4} onClick={() => this.props.update(SECURITY)}>
              Security
            </NavItem>
             <NavItem eventKey={4} onClick={() => this.props.update(SOFTWARE)}>
              Software
            </NavItem>
            <NavItem eventKey={2} onClick={() => this.props.update(ABOUT)}>
              About
            </NavItem>
            <NavItem eventKey={2} onClick={() => this.props.update(PROFILE)}>
              3ndG4me
            </NavItem>
            <NavItem eventKey={3} onClick={() => this.props.update(PROJECTS)}>
              Projects
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


class DarkNav extends Component {
  render() {
    return (
      <Navbar className="navbar-default-dark">
        <Navbar.Header>
          <Navbar.Brand>
            <a class="navbar-brand topnav" href="/">
              <Image
                src="/media/img/top-logo-injection-offsec.png"
                className="img-responsive"
              />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} onClick={() => this.props.update(HOME)}>
            <span class="nav-items-dark">Home</span>
            </NavItem>
            <NavItem eventKey={4} onClick={() => this.props.update(SECURITY)}>
            <span class="nav-items-dark">Security</span>
            </NavItem>
             <NavItem eventKey={4} onClick={() => this.props.update(SOFTWARE)}>
             <span class="nav-items-dark">Software</span>
            </NavItem>
            <NavItem eventKey={2} onClick={() => this.props.update(ABOUT)}>
            <span class="nav-items-dark">About</span>
            </NavItem>
            <NavItem eventKey={2} onClick={() => this.props.update(PROFILE)}>
            <span class="nav-items-dark">3ndG4me</span>
            </NavItem>
            <NavItem eventKey={3} onClick={() => this.props.update(PROJECTS)}>
            <span class="nav-items-dark">Projects</span>
            </NavItem>
            <NavItem eventKey={5} onClick={() => this.props.update(BLOG)}>
            <span class="nav-items-dark">Blog</span>
            </NavItem>
            <NavItem eventKey={6} href="https://www.redbubble.com/people/injectiondev/shop?ref=artist_shop_category_refinement">
            <span class="nav-items-dark">Store</span>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

}

class ProfileNav extends Component {
  render() {
    return (
      <Navbar className="navbar-default-dark">
        <Navbar.Header>
          <Navbar.Brand className="navbar-brand-dark-profile" >
            <a class="navbar-brand topnav" href="/">
              <Image
                src="/media/img/top-logo-3ndG4me.png"
                className="img-responsive"
              />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} onClick={() => this.props.update(HOME)}>
            <span class="nav-items-dark-profile">Home</span>
            </NavItem>
            <NavItem eventKey={4} onClick={() => this.props.update(SECURITY)}>
            <span class="nav-items-dark-profile">Security</span>
            </NavItem>
             <NavItem eventKey={4} onClick={() => this.props.update(SOFTWARE)}>
             <span class="nav-items-dark-profile">Software</span>
            </NavItem>
            <NavItem eventKey={2} onClick={() => this.props.update(ABOUT)}>
            <span class="nav-items-dark-profile">About</span>
            </NavItem>
            <NavItem eventKey={2} onClick={() => this.props.update(PROFILE)}>
            <span class="nav-items-dark-profile">3ndG4me</span>
            </NavItem>
            <NavItem eventKey={3} onClick={() => this.props.update(PROJECTS)}>
            <span class="nav-items-dark-profile">Projects</span>
            </NavItem>
            <NavItem eventKey={5} onClick={() => this.props.update(BLOG)}>
            <span class="nav-items-dark-profile">Blog</span>
            </NavItem>
            <NavItem eventKey={6} href="https://www.redbubble.com/people/injectiondev/shop?ref=artist_shop_category_refinement">
            <span class="nav-items-dark-profile">Store</span>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

}

