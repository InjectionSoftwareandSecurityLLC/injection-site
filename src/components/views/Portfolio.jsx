import React, { Component } from "react";
import { Card, Accordion, Button } from 'react-bootstrap';

export default class PortfolioComponent extends Component {

    render(){
        return(
            <div>
            <PortfolioHeader />
            <PortfolioBody />
            </div>
        );
    }

}


class PortfolioHeader extends Component{
    render(){
        return(
        <div>
            <div class="intro-header-dark">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="intro-message-dark-portfolio">
                                <h1>3ndG4me</h1>
                                <h3>Portfolio</h3>
                                <hr class="intro-divider-dark"/>
                                <ul class="list-inline intro-social-buttons">
                                    <li>
                                        <a href="#portfolio" class="btn btn-default-dark-portfolio btn-lg"><i class="fas fa-chess-rook fa-fw"></i> <span class="network-name">3ndG4me</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}


class PortfolioBody extends Component{


    render(){
        return(
          <div>
            <div id="portfolio" class="content-section-a-dark">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="text-center">
                                <br/>
                                <Accordion>
                                    <Card className="dark-card-white" text="white">
                                                <Card.Body>
                                                <Card.Text>
                                                The security and hacking community is a strange one, but it's one we love and are proud to contribute to here at Injection Software and Security LLC.
                                                <br/>
                                                <br/>
                                                If you're involved with the community you'll know and understand that many of us maintain some sort of "handle" or screen name that we use to stand out in the community.
                                                The concept of a handle's presence, even in modern "hacker culture", is partially a historical thing, but for the most part, some of us just think it is fun and we like it.
                                                <br/>
                                                <br/>
                                                Most of the security professionals you will interact with at our company have handles, but one of the key individuals is Casey Erdmann - aka - 3ndG4me.
                                                <br/>
                                                <br/>
                                                <Accordion.Toggle as={Button} variant="outline-dark" className="dark-btn-outline-white" eventKey="0">
                                                    Learn More
                                                </Accordion.Toggle>
                                                <br/>
                                                <br/>
                                                <Accordion.Collapse eventKey="0">
                                                <Card.Body>
                                                <Card.Text>
                                                <br/>
                                                <br/>
                                                Casey holds many roles here at Injection Software and Security LLC. Founder/CEO/Lead Consultant, all of which are fine, but the title that is most important to him is that of "hacker".
                                                It's a title all consultants at Injection Software and Security LLC will share, and is one you can't find at most companies...because most companies aren't run by hackers!
                                                <br/>
                                                <br/>
                                                Not all hackers have handles of course, for those that do, it can become more than a nickname. A handle can become a sort of brand for those in this community at times. Many hackers who are known for their work are known by their handles. 
                                                <br/>
                                                <br/>
                                                A few that inspire us are mubix, ReL1K, g0tmi1k, _r00k_, ippsec, and Viss.
                                                <br/>
                                                <br/>
                                                3ndG4me is a brand of sorts in that same vein. Not that it's a product or household name we expect you to know, but it's a person attached to an identity built around contributing to the hacking and security world. All of our YouTube content, blog posts, and even our services have a bit of personal flare to them captured by the handle of the contributor. Casey, being the founder of this company, is the primary contributor, as such, 3ndG4me is a name you may see often in relation to publications, talks, blogs, and videos that we produce here at Injection Software and Security LLC.
                                                <br/>
                                                <br/>
                                                </Card.Text>
                                                </Card.Body>
                                                </Accordion.Collapse>
                                                This page is a dedicated portfolio that represents the work ethic, expertise, and accomplishments that have been achieved by Casey. 
                                                <br/>
                                                <br/>
                                                It is a professional page of reference they goes beyond a resume to provide confidence in the quality of services to potential customers, partners, and even confidence in skills and abilities to current and future employers.
                                                </Card.Text>
                                                </Card.Body>
                                            </Card>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="portfolio" class="content-section-b-dark">
                    <div class="container">
                        <div class="row">
                        <div class="col-lg-7 col-lg-offset-6">
                            <hr class="section-heading-spacer" />
                            <div class="clearfix" />
                            <h2 class="section-heading-dark-portfolio">Injection Software and Security LLC</h2>
                            <p class="lead">
                            For this company, what we do is in the name. We build software, and we are experts in the field computer and information security. 
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
                            Additionally we are a software company. While we don't offer software development contracting, we do build our own software. 
                            <br />
                            <br />
                            Much of this software is related to offensive security specifically, and almost all of it is open source for you to use to improve your organization's own security practices/tooling.
                            Any other software applications we develop will be available via their own distribution mediums and websites. They may be promoted on this site from time to time, but can usually always be found on the <a href="/software">software section</a> of this site.
                            </p>
                        </div>
                        <div class="col-lg-5">
                            <img alt="3ndG4me Pic" width="70%" src="/media/img/3ndG4me_main.png" />
                        </div>
                     </div>
                </div> 
            </div>
        </div>
            

        );
    }

}
