import React, { Component } from "react";
import { Card, CardDeck, Button, Accordion, ListGroup } from "react-bootstrap";


export default class ServicePrices extends Component {

    render(){
        return(
            <div>
                <Accordion>
                <CardDeck>
                    <Card className="dark-card" text="white" style={{ width: '18rem' }}>
                        <Card.Header><Card.Title>Network Penetration Testing</Card.Title></Card.Header>
                        <Card.Body>
                        <Card.Text>
                            <div class="text-center"><i class="fas fa-server fa-5x pentest-icon"></i></div>
                            <br/>
                            Whether it's internal or external, we will go where your network doesn't want us to go. These engagements cover your networks, applications, services, and systems of any kind.
                            <br/>
                            <br/>
                            On-prem or in the cloud, we'll find a way around. 
                        </Card.Text>
                        <Accordion.Toggle as={Button} variant="outline-dark" className="dark-btn-outline" eventKey="0">
                            Details
                        </Accordion.Toggle>
                        </Card.Body>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Card.Text>
                            Our network penetration testing services can be tailored to focus on the breadth and depth of your systems in whatever way makes the most sense to your organization. 
                            <br/>
                            <br/>
                            Just need two mission critical servers tested inside and out?
                            <br/>
                            How about thousands of hosts on your internal network?
                            <br/>
                            <br/>
                            We will diligently hunt for as many possible security vulnerabilities that are haunting your environment, exploit them, and provide you a detailed report to show the impact, severity, and remediation for each and every item.
                            <br/>
                            <br/>
                            <ListGroup>
                                <ListGroup.Item variant="dark" className="dark-list-group-pricing-red">Price:<br/><span class="pricing">$6,000*</span><span class="engagement-details"> - Internal or External<br/>(<span class="pricing">$8,500*</span> - Internal + External)</span></ListGroup.Item>
                                <ListGroup.Item variant="dark" className="dark-list-group-pricing-red">Duration:<br/><span class="engagement-details">2 weeks/10 business days<br/>(3 weeks/15 business days Internal + External engagement)</span></ListGroup.Item>
                            </ListGroup>
                            </Card.Text>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="dark-card-green" text="white" style={{ width: '18rem' }}>
                        <Card.Header><Card.Title>Application Penetration Testing</Card.Title></Card.Header>
                        <Card.Body>
                        <Card.Text>
                            <div class="text-center"><i class="fas fa-mobile fa-5x app-pentest-icon"></i></div>
                            <br/>
                            Our testing practices are built by consultants who have been software developers for many years. We know what issues applications are prone to, and we know how to remediate them too.
                            <br/>
                            <br/>
                            Better let us hack your app, before some one else does...
                        </Card.Text>
                        <Accordion.Toggle as={Button} variant="outline-dark" className="dark-btn-outline-green" eventKey="1">
                            Details
                        </Accordion.Toggle>
                        </Card.Body>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <Card.Text>
                            Our application penetration testing services provide the same value as all of our other penetration services, but are bit more straight to the point with a narrower focus. Whether its web, mobile, or desktop, we've got experience both developing and exploiting applications of every kind.
                            <br/>
                            <br/>
                            Unlike our network penetration testing services, these engagements focus solely on the application. Applications tend to be more agile when it comes to change. Improvements are constantly being made, but there's always a risk that vulnerabilities are being introduced along the way.
                            <br/>
                            <br/>
                            Even if your systems are secure and haven't undergone much change, application vulnerabilities can still be the medium for critical attacks to hijack systems, cause data breaches, and ruin your product's reputation.
                            <br/>
                            <br/>
                            We will test every possible endpoint and function of your application that we can touch and try to exploit it. This service can be tailored to provide either a completely blind application penetration test, or with a code audit to accompany the engagement for a more thorough assessment
                            <br/>
                            <br/>
                            <ListGroup>
                                <ListGroup.Item variant="dark" className="dark-list-group-pricing-green">Price:<br/><span class="pricing">$3,500*</span><span class="engagement-details"> - 1 Application<br/>(<span class="pricing">$500*</span> per additional application)</span></ListGroup.Item>
                                <ListGroup.Item variant="dark" className="dark-list-group-pricing-green">Duration:<br/><span class="engagement-details">1 week/5 business days <br/>(Additional applications add more time)</span></ListGroup.Item>
                            </ListGroup>
                            </Card.Text>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="dark-card-blue" text="white" style={{ width: '18rem' }}>
                    <Card.Header><Card.Title>Wireless Security Audit</Card.Title></Card.Header>
                        <Card.Body>
                        <Card.Text>
                            <div class="text-center"><i class="fas fa-wifi fa-5x wireless-pentest-icon"></i></div>
                            <br/>
                        How often does your network take WiFi security into account? In our day and age, portable computing devices are abundant. Chances are there are a ton on your network, and they don't belong to you.
                        <br/>
                        <br/>
                        Let us show you what it really means to "hack the WiFi".
                        </Card.Text>
                        <Accordion.Toggle as={Button} variant="outline-dark" className="dark-btn-outline-blue" eventKey="2">
                            Details
                        </Accordion.Toggle>
                        </Card.Body>
                        <Accordion.Collapse eventKey="2">
                        <Card.Body>
                        <Card.Text>
                            Our wireless security audits are an on-premise engagement. We will come to your business and perform a variety of activities related to wireless security.
                            <br/>
                            <br/>
                            We don't <i>just</i> "hack the WiFi", we also can perform wireless asset reconnaissance to help you identify rogue devices. We can also employ various techniques from our physical offensive security testing such as planting our own rogue devices for you to test your controls. 
                            <br/>
                            <br/>
                            Whether it's testing your wireless network segmentation, cracking the password of the access point, or testing out evil twin attacks, we have a whole suite of techniques to show you all the ways wireless network security can impact your organization.
                            <br/>
                            <br/>

                            <ListGroup>
                                <ListGroup.Item variant="dark" className="dark-list-group-pricing-blue">Price:<br/><span class="pricing">$4,000**</span></ListGroup.Item>
                                <ListGroup.Item variant="dark" className="dark-list-group-pricing-blue">Duration:<br/><span class="engagement-details">1 week/5 business days</span></ListGroup.Item>
                            </ListGroup>
                            </Card.Text>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </CardDeck>
                <br />
                <br />
                <CardDeck>
                    <Card className="dark-card-yellow" text="white" style={{ width: '18rem' }}>
                        <Card.Header><Card.Title>Security Awareness</Card.Title></Card.Header>
                        <Card.Body>
                        <Card.Text>
                            <div class="text-center"><i class="fas fa-envelope fa-5x sec-awareness-icon"></i></div>
                            <br/>
                            Sometimes you just need to show impact to convince your organization it could use a boost in its security posture. Other times, you may just want to see how your organization would stand up to a potential threat.
                            <br/>
                            <br/>
                            Allow us to be those threats, and see how you turn out.
                        </Card.Text>
                        <Accordion.Toggle as={Button} variant="outline-dark" className="dark-btn-outline-yellow" eventKey="3">
                            Details
                        </Accordion.Toggle>
                        </Card.Body>
                        <Accordion.Collapse eventKey="3">
                        <Card.Body>
                            <Card.Text>
                            Our security awareness services come in three packages:
                            <br/>
                            <ol class="numbers">
                                <li>Phishing Campaigns:<br/><br/>Our phishing campaigns aren't some automated robot sending spam emails. We have real hackers crafting really convincing emails to send to your organization. We can tailor experiences to meet your goals and design emails to measure a wide range of impacts and experiences, even down to simulated malware events.</li>
                                <br/>
                                <li>Physical Security Awareness Engagements:<br/><br/>These are onsite engagements that test the physical security controls of your organization. This is very similar to a physical penetration test. We use the exact same tools, techniques, and procedures, but we don't actually exploit anything. We will break in, prove that we broke in, and provide evidence of all the scary things we <i>could</i> have done while we were inside, without actually doing it.</li>
                                <br/>
                                <li>Table Top Exercises:<br/><br/>These are compromising event walkthroughs to test your incident response capabilities that can be done onsite or remotely. We will design an incident related to your organization's needs, and walk you through it step by step throwing every curve ball we can along the way. This will be sure to test your incident response playbooks...or lack thereof. </li>
                            </ol>
                            <br/>
                            <br/>
                            <ListGroup>
                                <ListGroup.Item variant="dark" className="dark-list-group-pricing-yellow"><span class="engagement-details">Phishing Campaign</span></ListGroup.Item>
                                <ListGroup.Item variant="dark" className="dark-list-group-pricing-yellow">Price:<br/><span class="pricing">$2,500*</span></ListGroup.Item>
                                <ListGroup.Item variant="dark" className="dark-list-group-pricing-yellow">Duration:<br/><span class="engagement-details">2 week/10 business days <br/>(This is the base timeline/price, and like all our services, can be extended on negotiation.)</span></ListGroup.Item>
                            </ListGroup>
                            <br/>
                            <ListGroup>
                                <ListGroup.Item variant="dark" className="dark-list-group-pricing-yellow"><span class="engagement-details">Physical Security Awareness Engagement</span></ListGroup.Item>
                                <ListGroup.Item variant="dark" className="dark-list-group-pricing-yellow">Price:<br/><span class="pricing">$8,500**</span></ListGroup.Item>
                                <ListGroup.Item variant="dark" className="dark-list-group-pricing-yellow">Duration:<br/><span class="engagement-details">1 week/5 business days</span></ListGroup.Item>
                            </ListGroup>
                            <br/>
                            <ListGroup>
                                <ListGroup.Item variant="dark" className="dark-list-group-pricing-yellow"><span class="engagement-details">Table Top Exercises</span></ListGroup.Item>
                                <ListGroup.Item variant="dark" className="dark-list-group-pricing-yellow">Price:<br/><span class="pricing">$3,500*</span></ListGroup.Item>
                                <ListGroup.Item variant="dark" className="dark-list-group-pricing-yellow">Duration:<br/><span class="engagement-details">3 business days</span></ListGroup.Item>
                            </ListGroup>
                            </Card.Text>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="dark-card" text="white" style={{ width: '18rem' }}>
                        <Card.Header><Card.Title>Physical Penetration Testing</Card.Title></Card.Header>
                        <Card.Body>
                        <Card.Text>
                            <div class="text-center"><i class="fas fa-unlock fa-5x pentest-icon"></i></div>
                            <br/>
                            Does your organization have a physical location? Perhaps there is sensitive information in the desks within. Maybe it houses mission critical operations.
                            Whatever the case, physical security isn't a risk you should always accept.
                            <br/>
                            <br/>
                            Hire us to break in, and we will show you why.
                        </Card.Text>
                        <Accordion.Toggle as={Button} variant="outline-dark" className="dark-btn-outline" eventKey="4">
                            Details
                        </Accordion.Toggle>
                        </Card.Body>
                        <Accordion.Collapse eventKey="4">
                        <Card.Body>
                            <Card.Text>
                            Our physical penetration testing services will make use of every breaking and entering technique in the book...and plenty more techniques from a hacker's book.
                            <br/>
                            <br/>
                            Badge cloning attacks, lock picking, social engineering, and even some network penetration testing while we are in there. Let us come to you, and let ourselves in.
                            <br/>
                            <br/>
                            We will look for every exploitable attack vector in your building's security, exploit it, and provide guidance on how to improve it when we are done. It's like letting a thief in that wants to lock themselves out for good, instead of breaking your stuff.
                            <br/>
                            <br/>
                            <ListGroup>
                                <ListGroup.Item variant="dark" className="dark-list-group-pricing-red">Price:<br/><span class="pricing">$12,000**</span><span class="engagement-details"> - Physical Only<br/>(<span class="pricing">$17,000**</span> - Physical + Internal Network)</span></ListGroup.Item>
                                <ListGroup.Item variant="dark" className="dark-list-group-pricing-red">Duration:<br/><span class="engagement-details">2 weeks/10 business days</span></ListGroup.Item>
                            </ListGroup>
                            </Card.Text>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="dark-card-white" text="white" style={{ width: '18rem' }}>
                        <Card.Header><Card.Title>Adversarial Emulation</Card.Title></Card.Header>
                        <Card.Body>
                        <Card.Text>
                            <div class="text-center"><i class="fas fa-bug fa-5x adversarial-icon"></i></div>
                            <br/>
                            Our Adversarial Emulation requires time, dedication, and employs techniques your teams won't forget. Need us to be an APT? How about an advanced insider threat?
                            In any case, we will hit your organization with all that we've got. 
                            <br/>
                            <br/>
                            Full scope, no guard rails. This is the "Red Team".
                        </Card.Text>
                        <Accordion.Toggle as={Button} variant="outline-dark" className="dark-btn-outline-white" eventKey="5">
                            Details
                        </Accordion.Toggle>
                        </Card.Body>
                        <Accordion.Collapse eventKey="5">
                        <Card.Body>
                            <Card.Text>
                            These engagements are not for the organization with the fresh new security team. We highly recommend you only consider this if you have the time and experience to really draw value to your organization from these activities.
                            <br/>
                            <br/>
                            We will emulate any adversary, scenario, and threat that we possibly can to the benefit of testing your organization's controls.
                            <br/>
                            <br/>
                            These engagements are goal based, meaning we are not looking for every vulnerability possible like a penetration test will. We will employ the some of the same techniques, and even possibly present some of the same findings in that we would on a penetration test. That said, that will only be true if such an activity was conducted that was necessary to reach the goal.
                            <br/>
                            <br/>
                            We can emulate things from any perspective, it's not all about how dangerous we can be as an external adversary. Sometimes it might be a staged test to emulate an insider threat and leave with sensitive information from the office.
                            <br/>
                            <br/>
                            This service is full scoped, with very limited, to no restrictions for what our team will do. It is all about targeting goals that are a risk or concern to your organization, and measuring how well you would hold up if our team succeeds.
                            <br/>
                            <br/>
                            <ListGroup>
                                <ListGroup.Item variant="dark" className="dark-list-group-pricing-white">Price:<br/><span class="pricing">$25,000**</span></ListGroup.Item>
                                <ListGroup.Item variant="dark" className="dark-list-group-pricing-white">Duration:<br/><span class="engagement-details">1 month/20 business days</span></ListGroup.Item>
                            </ListGroup>
                            </Card.Text>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </CardDeck>
                </Accordion>
            </div>
        );
    }

}

