import React, { Component } from "react";
//import { Image } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <div id="about">
        <div class="intro-header">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="intro-message">
                  <h1>About</h1>
                  <h3>What is the Injection?</h3>
                  <hr class="intro-divider" />
                  <ul class="list-inline intro-social-buttons">
                    <li>
                      <a href="#about" class="btn btn-default btn-lg">
                        <i class="fas fa-network-wired fa-fw" />{" "}
                        <span class="network-name">About</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="about" class="content-section-a">
          <div class="container">
            <div class="row">
              <div class="col-lg-5 col-sm-6">
                <hr class="section-heading-spacer" />
                <div class="clearfix" />
                <h2 class="section-heading">About Injection</h2>
                <p class="lead">
                  We do security and software :) 
                  <br />
                  More updated information coming soon!
                </p>
              </div>
              <div class="col-lg-5 col-lg-offset-2 col-sm-6">
                <img alt="Injection Logo" width="100%" src="/media/img/injection-logo.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
