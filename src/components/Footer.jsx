import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";




export default class Footer extends Component {
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
                        <p class="copyright text-muted small">Copyright &copy; Injection {new Date().getFullYear()}. All Rights Reserved</p>
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