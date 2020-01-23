import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";



export default class Footer extends Component {

    render() {
      if (this.props.navPage === "/security"){
          return(
            <DarkFooter/>
          );
      }else if(this.props.navPage === "/portfolio"){
        return(
          <DarkFooterPortfolio/>
        );
      }else{
        return (
          <NormalFooter/>
        );
      }
  
    }
  }

class NormalFooter extends Component {
    render() {
      return (
        <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                <Navbar className="nav-footer">
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
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
                        <Nav className="ml-auto">
                        <p class="copyright text-muted small">Copyright &copy; Injection Software and Security LLC {new Date().getFullYear()}. All Rights Reserved</p>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        </div>
    </footer>
      );
    }
  }

class DarkFooter extends Component {
    render() {
      return (
        <footer class="footer-dark">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                <Navbar className="nav-footer-dark">
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
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
                        <Nav className="ml-auto">
                        <p class="copyright text-muted small">Copyright &copy; Injection Software and Security LLC {new Date().getFullYear()}. All Rights Reserved</p>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        </div>
    </footer>
      );
    }
  }


  class DarkFooterPortfolio extends Component {
    render() {
      return (
        <footer class="footer-dark">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                <Navbar className="nav-footer-dark">
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
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
                            <span class="nav-items-dark-portfolio">Store</span>
                        </Nav.Link>
                        </Nav>
                        <Nav className="ml-auto">
                        <p class="copyright text-muted small">Copyright &copy; Injection Software and Security LLC {new Date().getFullYear()}. All Rights Reserved</p>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        </div>
    </footer>
      );
    }
  }