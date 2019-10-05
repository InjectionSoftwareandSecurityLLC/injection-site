import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { HOME } from "../constants";
import { SECURITY } from "../constants";
import { SOFTWARE } from "../constants";
import { ABOUT } from "../constants";
import { PROJECTS } from "../constants";
import { BLOG } from "../constants";
export default class Footer extends Component {
  render() {
    return (
        <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                <Navbar className="nav-footer">
                    <Navbar.Collapse>
                    <Nav pullLeft>
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
                    <Nav pullRight>
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