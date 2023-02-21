import React, { Component } from "react";

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
                  <h3>Injection Software and Security LLC</h3>
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
              <div class="col-lg-7 col-lg-offset-6">
                <hr class="section-heading-spacer" />
                <div class="clearfix" />
                <h2 class="section-heading">Injection Software and Security LLC</h2>
                <p class="lead">
                  For this company, what we do is in the name. We build software, and we are experts in the field of computer and information security. 
                  <br />
                  <br />
                  Our primary business is to provide offensive security consulting services for clients in need of various security testing goals. Simply put, we are the kind of hackers that you pay to break into your systems before the criminals do!
                  <br />
                  <br />
                  Offensive security is a proactive approach to improving the over all security posture of your organization.        
                  Our mission is to use this approach to help organizations of all kinds operate more securely and develop better secured products.
                  <br />
                  <br />
                  Many companies can't afford to have dedicated "Red Teams" and are left with two options:
                  <ol type="1">
                    <li>Pay extreme amounts of money to large corporate security consulting firms for "penetration testing" with questionable quality of the service they provide.</li>
                    <li>Do nothing, and risk being breached by those criminals we mentioned above.</li>  
                  </ol>
                  Security is a passion here at Injection. We are a small company with only 1-6 consultants operating at any given time. This means we are able to charge less, and deliver more in every way. 
                  <br />
                  <br />
                  So whether you:
                  <ul>
                    <li>Need help justifying more budget for security.</li>
                    <li>Want to train your security teams.</li>
                    <li>Need to secure your software applications.</li>
                    <li>Or simply want test how well your organization would hold up to a real threat.</li>
                  </ul>
                  We are the team for you! <i class="fas fa-smile"></i>
                  <br />
                  <br />
                  If you are interested in learning more about the security services we offer please visit the <a class="a-dark" href="/security">security section</a> of our site!
                  <br />
                  <br />
                  Additionally we focus on security education content in the form of both comepletely free and paid professional content to train professionals in offensive security. Find our content at the links below:
                  <br />
                  <br />
                  Offensive Security Engineering Udemy Course:
                  <br />
                  <a href="https://www.udemy.com/course/offensive-security-engineering/">https://www.udemy.com/course/offensive-security-engineering/</a>
                  <br />
                  <br />
                  Injection YouTube Channel: 
                  <br />
                  <a href="https://www.youtube.com/@InjectionSec">https://www.youtube.com/@InjectionSec</a>
                  <br />
                  <br />
                  Last but not least, we are also a software company. While we don't offer software development contracting, we do build our own software. 
                  <br />
                  <br />
                  Much of this software is related to offensive security specifically, and almost all of it is open source for you to use to improve your organization's own security practices/tooling.
                  Any other software applications we develop will be available via their own distribution mediums and websites. They may be promoted on this site from time to time, but can usually always be found on the <a href="/software">software section</a> of this site.
                </p>
              </div>
              <div class="col-lg-5">
                <img alt="Injection Logo" width="100%" src="/media/img/injection-logo.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
