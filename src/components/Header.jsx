import React, { Component } from "react";
import { Navbar, Nav, Image } from "react-bootstrap";


export default class Header extends Component {

  render() {
    if (this.props.navPage === "/security"){
        return(
          <DarkHeader/>
        );
    }else if(this.props.navPage === "/portfolio"){
      return(
        <DarkPortfolio/>
      );
    }else{
      return (
        <NormalHeader/>
      );
    }

  }
}


class NormalHeader extends Component {
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

class DarkHeader extends Component {
  render() {
    return (
      <Navbar expand="lg" className="navbar-default-dark">
          <Navbar.Brand>
            <a class="navbar-brand topnav" href="/">
              <Image
                src="/media/img/top-logo-injection-offsec.png"
                className="img-responsive"
              />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">
                <span class="nav-items-dark">Home</span>
            </Nav.Link>
            <Nav.Link href="/security">
                <span class="nav-items-dark">Security</span>
            </Nav.Link>
             <Nav.Link href="/software">
                <span class="nav-items-dark">Software</span>
            </Nav.Link>
            <Nav.Link href="/about">
                <span class="nav-items-dark">About</span>
            </Nav.Link>
            <Nav.Link href="/portfolio">
                <span class="nav-items-dark">3ndG4me</span>
            </Nav.Link>
            <Nav.Link href="/projects">
                <span class="nav-items-dark">Projects</span>
            </Nav.Link>
            <Nav.Link href="/blog">
                <span class="nav-items-dark">Blog</span>
            </Nav.Link >
            <Nav.Link href="https://www.redbubble.com/people/injectiondev/shop?ref=artist_shop_category_refinement">
                <span class="nav-items-dark">Store</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

}

class DarkPortfolio extends Component {
  render() {
    return (
      <Navbar expand="lg" className="navbar-default-dark">
          <Navbar.Brand className="navbar-brand-dark-portfolio">
            <a class="navbar-brand topnav" href="/">
              <Image
                src="/media/img/top-logo-3ndG4me.png"
                className="img-responsive"
              />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">
                <span class="nav-items-dark-portfolio">Home</span>
            </Nav.Link>
            <Nav.Link href="/security">
                <span class="nav-items-dark-portfolio">Security</span>
            </Nav.Link>
             <Nav.Link href="/software">
                <span class="nav-items-dark-portfolio">Software</span>
            </Nav.Link>
            <Nav.Link href="/about">
                <span class="nav-items-dark-portfolio">About</span>
            </Nav.Link>
            <Nav.Link href="/portfolio">
                <span class="nav-items-dark-portfolio">3ndG4me</span>
            </Nav.Link>
            <Nav.Link href="/projects">
                <span class="nav-items-dark-portfolio">Projects</span>
            </Nav.Link>
            <Nav.Link href="/blog">
                <span class="nav-items-dark-portfolio">Blog</span>
            </Nav.Link >
            <Nav.Link href="https://www.redbubble.com/people/injectiondev/shop?ref=artist_shop_category_refinement">
                <span class="nav-items-dark">Store</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

}
