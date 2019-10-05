import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { HOME } from "../constants";
import { SECURITY } from "../constants";
import { SOFTWARE } from "../constants";
import { ABOUT } from "../constants";
import { PROFILE } from "../constants"
import { PROJECTS } from "../constants";
import { BLOG } from "../constants";


export default class Footer extends Component {
    render() {
        if (this.props.navPage === SECURITY){
          return (
            <DarkFooter update={ page => this.props.update(page) } />
          );
        }
        else if (this.props.navPage === PROFILE){
            return(
            <ProfileFooter update={ page => this.props.update(page) } />
            );
        }else{
          return (
            <NormalFooter update={ page => this.props.update(page) } />
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
  
  
  class DarkFooter extends Component {
    render() {
      return (
        <footer class="footer-dark">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                <Navbar className="nav-footer-dark">
                    <Navbar.Collapse>
                        <Nav pullLeft>
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

    class ProfileFooter extends Component {
        render() {
          return (
            <footer class="footer-dark">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                    <Navbar className="nav-footer-dark">
                        <Navbar.Collapse>
                            <Nav pullLeft>
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