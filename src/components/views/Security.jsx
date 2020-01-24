import React, { Component } from "react";
import { Card, CardDeck } from "react-bootstrap";

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
                                <h3>Security Services (Coming soon!)</h3>
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
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                            <CardDeck>
                                <Card className="dark-card" border="danger" text="white" style={{ width: '18rem' }}>
                                    <Card.Header>Header</Card.Header>
                                    <Card.Body>
                                    <Card.Title>Dark Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk
                                        of the card's content.
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="dark-card" border="danger" text="white" style={{ width: '18rem' }}>
                                    <Card.Header>Header</Card.Header>
                                    <Card.Body>
                                    <Card.Title>Dark Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk
                                        of the card's content.
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="dark-card" border="danger" text="white" style={{ width: '18rem' }}>
                                    <Card.Header>Header</Card.Header>
                                    <Card.Body>
                                    <Card.Title>Dark Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk
                                        of the card's content.
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </CardDeck>
                            <br />
                            <br />
                            <CardDeck>
                                <Card className="dark-card" border="danger" text="white" style={{ width: '18rem' }}>
                                    <Card.Header>Header</Card.Header>
                                    <Card.Body>
                                    <Card.Title>Dark Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk
                                        of the card's content.
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="dark-card" border="danger" text="white" style={{ width: '18rem' }}>
                                    <Card.Header>Header</Card.Header>
                                    <Card.Body>
                                    <Card.Title>Dark Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk
                                        of the card's content.
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="dark-card" border="danger" text="white" style={{ width: '18rem' }}>
                                    <Card.Header>Header</Card.Header>
                                    <Card.Body>
                                    <Card.Title>Dark Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk
                                        of the card's content.
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </CardDeck>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}
