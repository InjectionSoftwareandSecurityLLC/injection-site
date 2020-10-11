import React, { Component } from "react";
import { Card } from "react-bootstrap";
import ServiceRequestFormRenderer from "../ServiceRequestFormRenderer";
import ServicePricesRenderer from "../ServicePricesRenderer"

export default class SecurityComponent extends Component {

    render(){
        return(
            <div>
            <SecurityHeader />
            <SecurityBody />
            </div>
        );
    }

}


class SecurityHeader extends Component{
    render(){
        return(
        <div>
            <div class="intro-header-dark">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="intro-message-dark">
                                <h1>Security</h1>
                                <h3>Offensive Security Services</h3>
                                <hr class="intro-divider-dark"/>
                                <ul class="list-inline intro-social-buttons">
                                    <li>
                                        <a href="#security" class="btn btn-default-dark btn-lg"><i class="fas fa-bug fa-fw"></i> <span class="network-name">Security</span></a>
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


class SecurityBody extends Component{


    render(){
        return(
          <div>
            <div id="security" class="content-section-a-dark">
                    <div class="offsec-services-container container">
                        <div class="row">
                            <div class="col-lg-12">
                            <div class="text-center">
                                <Card className="dark-card" text="white">
                                            <Card.Header><Card.Title>Offensive Security Services</Card.Title></Card.Header>
                                            <Card.Body>
                                            <Card.Text>
                                            At Injection, security is our passion. We are hackers at heart, always trying to find a way to do the things no one is supposed to be able do.
                                            <br/>
                                            <br/>
                                            With well over 6 years in industry backgrounds within the IT spaces of payments, medical, and security research, our consultants have the experience to provide services that can be tailored to your organization's needs.
                                            <br/>
                                            <br/>
                                            Compliance standards are not security standards, but they do try. Our services close that gap and not only help you satisfy compliance goals within standards such as PCI DSS, HIPAA, and GDPR, but also provide a value of real security guidance and remediation with our results.
                                            <br/>
                                            <br/>
                                            Compliance or not, organizations and businesses have security risks. We help you identify those, and remediate them, before the criminals do.
                                            </Card.Text>
                                            </Card.Body>
                                        </Card>
                                </div>
                                <br/>
                                <br/>
                                <ServicePricesRenderer />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="security" class="content-section-b-dark">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                            <Card className="dark-card-green" text="white">
                                        <Card.Body>
                                        <Card.Text>
                                        *All prices listed are a baseline figure to provide transparency into the value of our services. These prices are NOT a guarantee and may change based on negotiations for a given statement of work. Injection Software and Security LLC reserves the right to update these baseline figures as desired.
                                        <br/>
                                        <br/>
                                        **Some engagements require travel and lodging due to a necessity for consultants to physically work at the client's site. All travel and lodging expenses will be billed to the client for these engagements. The terms and rate for these expenses are defined within the statement of work for a given engagement at time of negotiation.
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <br/>
                                    <br/>
                                    <Card className="dark-card" text="white">
                                            <Card.Header><Card.Title>Request a Service</Card.Title></Card.Header>
                                            <Card.Body>
                                            <Card.Text>
                                                <ServiceRequestFormRenderer />
                                            </Card.Text>
                                            </Card.Body>
                                        </Card>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}
