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
                                                If you're involved with the community you'll know, and understand, that many of us maintain some sort of "handle" or screen name that we use to stand out in the community.
                                                The concept of a handle's presence, even in modern "hacker culture", is partially a historical thing, but for the most part, some of us just think it is fun, and we really like it.
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
                                                3ndG4me is a brand of sorts in that same vein. Not that it's a product or household name we expect you to know, but it's a person, attached to an identity, built around contributing to the hacking and security world. All of our YouTube content, blog posts, and even our services have a bit of personal flare to them captured by the handle of the contributor. Casey, being the founder of this company, is the primary contributor, as such, 3ndG4me is a name you may see often in relation to publications, talks, blogs, and videos that we produce here at Injection Software and Security LLC.
                                                <br/>
                                                <br/>
                                                </Card.Text>
                                                </Card.Body>
                                                </Accordion.Collapse>
                                                This page is a dedicated portfolio that represents the work ethic, expertise, and accomplishments that have been achieved by Casey. 
                                                <br/>
                                                <br/>
                                                It is a professional page of reference that goes beyond a resume to provide confidence in the quality of services to potential customers, partners, and even confidence in skills and abilities to current and future employers.
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
                            <h2 class="section-heading-dark-portfolio">Casey Erdmann (3ndG4me) Portfolio</h2>
                            <Accordion>
                            <Card className="dark-card-white" text="white">
                                        <Card.Header><Card.Title>Community</Card.Title></Card.Header>
                                        <Card.Body>
                                        <Card.Text>
                                                <i class="fas fa-users fa-5x"></i>
                                                <br/>
                                                <br/>
                                                DC706 - Co-Founder of DC706
                                                    <br/>
                                                    <br/>
                                                <Accordion.Toggle as={Button} variant="outline-dark" className="dark-btn-outline-white" eventKey="1">
                                                    Learn More
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="1">
                                                    <Card.Text>
                                                    <br/>
                                                    Alongside long time friend and hacker Christopher Lamberson (clamsec). Organizing monthly meetings, maintaining the organization's website, and designing challenges and systems for our community of hackers to break into at every meeting. More information about DC706 at:<br/> <a href="https://dc706.org">https://dc706.org</a>
                                                    </Card.Text>
                                                </Accordion.Collapse>
                                        </Card.Text>
                                       </Card.Body>
                                       <Card.Body>
                                        <Card.Text>
                                                Pros Versus Joes (PvJ) - Red Cell Team Member and PvJ Staff
                                                <br/>
                                                <br/>
                                                <Accordion.Toggle as={Button} variant="outline-dark" className="dark-btn-outline-white" eventKey="2">
                                                    Learn More
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="2">
                                                    <Card.Text>
                                                     <br/>
                                                     Works alongside other talented hackers/red teamers creating a challenging and competitive environment for defenders of all skill levels/backgrounds to challenge themselves, and learn more and more about security. 
                                                     <br/>
                                                     <br/>
                                                     The red cell has to keep fresh on their TTPs and each member brings new knowledge, techniques, and tools to the table to keep everyone on their toes. As a staff member, Casey volunteers his time to help grow the PvJ community and work with the rest of the team to make the experiences better for all involved. More information about PvJ at:<br/><a href="http://prosversusjoes.net/">http://prosversusjoes.net</a>
                                                    </Card.Text>
                                                </Accordion.Collapse>
                                        </Card.Text>
                                       </Card.Body>
                                    <Card.Body>
                                        <Card.Text>
                                                Black Box Society - Alumni (Former President and General Liaison)
                                                <br/>
                                                <br/>
                                                <Accordion.Toggle as={Button} variant="outline-dark" className="dark-btn-outline-white" eventKey="3">
                                                    Learn More
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="3">
                                                    <Card.Text>
                                                     <br/>
                                                      The Black Box Society is a registered student organization at Columbus State University. This organization is dedicated to providing students a means to continue learning and improving their skills in computer and information security.
                                                     <br/>
                                                     <br/>
                                                      As an alumni member in the field, a primary goal is to return to the organization whenever possible to continue sharing knowledge and building up students to achieve greatness in the field of computer and information security. 
                                                     <br/>
                                                     <br/>
                                                      As former General Liaison from 2016-2017 primary responsibilities were to provide out reach to the student community, be the face of the organization to the student body's government functions, and create challenging actives (such as CTF challenges) to draw in new talent. 
                                                     <br/>
                                                     <br/>
                                                      As former president of the organization from 2017-2018 responsibilities were to lead the organization in regular meetings, give presentations on technical topics, lead competitive CTF teams, and continue growing the organization. Volunteer time was also spent building and maintaining the organizations website and cloud VPS infrastructure as well as building and in house CTF with challenges to train other members of the organization.
                                                    </Card.Text>
                                                </Accordion.Collapse>
                                        </Card.Text>
                                       </Card.Body>
                                    </Card>
                                    <br/>
                                    <br/>
                                    <Card className="dark-card-white" text="white">
                                        <Card.Header><Card.Title>Professional Experience</Card.Title></Card.Header>
                                        <Card.Body>
                                        <Card.Text>
                                                <i class="fas fa-user-tie fa-5x"></i>
                                                <br/>
                                                <br/>
                                                Founder/Lead Consultant/Hacker (2019 - Current)
                                                    <br/>
                                                    <br/>
                                                <Accordion.Toggle as={Button} variant="outline-dark" className="dark-btn-outline-white" eventKey="4">
                                                    Learn More
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="4">
                                                    <Card.Text>
                                                    <br/>
                                                     Created and founded Injection Software and Security LLC  to develop software and provide a wide variety of offensive security consulting engagements to organizations in the U.S.
                                                    <br/>
                                                    <br/>
                                                    All work is client facing across many industries tailored to the needs and goals of the clients.
                                                    <br/>
                                                    <br/>
                                                    Aside from the business aspects of running the company, and working with clients, since this is a small operation, the primary responsibility is to be a core contributor to services being offered.
                                                    <br/>
                                                    <br/>
                                                    Many of the engagements conducted are solely by this role, bringing in additional contractors as needed. This creates opportunity for many growing experiences, no matter how much expertise is already demonstrated.
                                                    From security awareness, to adversarial emulation, and everything in between, this role is a primary contributor to the consulting practice.
                                                    <br/>
                                                    <br/>
                                                    Additional responsibilities include developing software for various projects and infrastructure, as well as maintaining the company website.
                                                    </Card.Text>
                                                </Accordion.Collapse>
                                        </Card.Text>
                                       </Card.Body>
                                       <Card.Body>
                                        <Card.Text>
                                                Security Consultant (2020 - Current)
                                                    <br/>
                                                    <br/>
                                                <Accordion.Toggle as={Button} variant="outline-dark" className="dark-btn-outline-white" eventKey="5">
                                                    Learn More
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="5">
                                                    <Card.Text>
                                                    <br/>
                                                    As a Security Consultant the core responsibilities are providing offensive security services to clients. 
                                                    <br/>
                                                    <br/>
                                                    This role facilitates ever changing engagements for assessing external and internal networks, web applications, mobile applications, wireless networks, and occassionally physical security for clients.
                                                    </Card.Text>
                                                </Accordion.Collapse>
                                        </Card.Text>
                                       </Card.Body>
                                        <Card.Body>
                                        <Card.Text>
                                                Security Engineer (2019 - 2020)
                                                    <br/>
                                                    <br/>
                                                <Accordion.Toggle as={Button} variant="outline-dark" className="dark-btn-outline-white" eventKey="6">
                                                    Learn More
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="6">
                                                    <Card.Text>
                                                    <br/>
                                                    As a Security Engineer the core responsibilities are to serve as a subject matter experts on all things computer and information security. Daily responsibilities include a healthy mix of offensive security testing and devsecops automation work to proactively insure applications/systems are secure. 
                                                    <br/>
                                                    <br/>
                                                    All work is client facing and usually related to the medical field, which often means strict government regulations and compliance standards to insure systems being developed are up to specifications. This provides a new challenge as each software application and infrastructure has its own unique challenges to tackle from a security perspective.
                                                    <br/>
                                                    <br/>
                                                    Penetration testing is a major part of the job, with requirements often providing opportunities to test both custom software/systems and publicly available software applications. Sometimes this testing turns into vulnerability research with opportunities to discover new vulnerabilities in open public applications that can contribute to the broader security community.
                                                    <br/>
                                                    <br/>
                                                    Devsecops is a practice of automating out the trivial aspects of security to insure the low hanging fruit gets caught before penetration testing ever occurs, or worse, before the issue hits the public. For this role its a proactive approach, think about the things you would do as an offensive security professional to hack into systems, automate as much as you can of that, and covert it into CI/CD pipelines for agile development. It is no easy feat, but each accomplishment in this area keeps the systems being developed more secure.
                                                    </Card.Text>
                                                </Accordion.Collapse>
                                        </Card.Text>
                                       </Card.Body>
                                       <Card.Body>
                                        <Card.Text>
                                                SRT Security Researcher (2019 - Current)
                                                    <br/>
                                                    <br/>
                                                <Accordion.Toggle as={Button} variant="outline-dark" className="dark-btn-outline-white" eventKey="7">
                                                    Learn More
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="7">
                                                    <Card.Text>
                                                    <br/>
                                                    As a Security Researcher on the Synack Red Team (SRT) the core responsibility is simply to hack target applications/systems to identity vulnerabilities with the goal of improving their security posture. 
                                                    <br/>
                                                    <br/>
                                                    The SRT is private bug bounty program that requires a comprehensive interview process to be accepted in. Once accepted researchers can complete bug bounties in a sort of "crowd source penetration testing" format, and missions related to compliance objectives to help targets establish a general based line of security.
                                                    </Card.Text>
                                                </Accordion.Collapse>
                                        </Card.Text>
                                       </Card.Body>
                                       <Card.Body>
                                        <Card.Text>
                                                Manager of Information Security (2019)
                                                <br/>
                                                <br/>
                                                <Accordion.Toggle as={Button} variant="outline-dark" className="dark-btn-outline-white" eventKey="8">
                                                    Learn More
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="8">
                                                    <Card.Text>
                                                     <br/>
                                                     As a Manager of Information Security for a financial firm there are many critical requirements to keep up with. One of the key experiences during time spent in this role was leading the organization to PCI DSS Level 1 compliance. This meant not only having to meet compliance goals, but also meeting brand new security standards this organization had never faced. 
                                                     <br/>
                                                     <br/>
                                                     During this role a small team was formed, SIEM infrastructure was built, and daily monitoring and incident response was conducted. In addition to this penetration testing services were developed and red teaming processes were standardized. It was a key responsibiltity not only to build and maintain these structures, but also to lead and execute the tasks within them. With a small team this managerial role required "getting your hands dirty" every single day.
                                                     <br/>
                                                     <br/>
                                                     Several incident response engagements were led preventing catastrophic events from permanently damaging the organization.
                                                     Dozens of offensive security engagements were also led to proactively catch vulnerabilities before they had a chance to become incidents.
                                                    </Card.Text>
                                                </Accordion.Collapse>
                                        </Card.Text>
                                       </Card.Body>
                                    <Card.Body>
                                        <Card.Text>
                                                Security Analyst (2018-2019)
                                                <br/>
                                                <br/>
                                                <Accordion.Toggle as={Button} variant="outline-dark" className="dark-btn-outline-white" eventKey="9">
                                                    Learn More
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="9">
                                                    <Card.Text>
                                                     <br/>
                                                     Security Analyst means something different at many organizations. Often times its a SOC Analyst that performs alert triage and incident response, other times it's a penetration tester at a smaller consulting firm. There are many other connotations this title can bring, rarely however, is it both of these things and more.
                                                     <br/>
                                                     <br/>
                                                     At a smaller financial company, this role was the first of its kind. Being the first dedicated security personnel means working closely with C-Level Executives to build a robust program, from nothing, to close many of the gaps needed to grow as an organization. 
                                                     <br/>
                                                     <br/>
                                                     Initial responsibilities to begin with were building a developer security training curriculum and improving the organizational security awareness training to help enforce compliance goals and improve overall security posture.
                                                     <br/>
                                                     <br/>
                                                     From there the next goal achieved was to establish a penetration testing practice in order to take a more proactive approach in identifying vulnerabilities while more robust monitoring capabilities were being researched.
                                                     <br/>
                                                     <br/>
                                                     Before transitioning into manager of the department, the final goal was to establish a defensive practice by building incident response playbooks and policies, improving logging and monitoring standards, and investing in a SIEM solution to aggregate the monitoring into a place where proper triage and DFIR can be conducted.
                                                    </Card.Text>
                                                </Accordion.Collapse>
                                        </Card.Text>
                                       </Card.Body>
                                       <Card.Body>
                                        <Card.Text>
                                                Software Developer (2015-2018)
                                                <br/>
                                                <br/>
                                                <Accordion.Toggle as={Button} variant="outline-dark" className="dark-btn-outline-white" eventKey="10">
                                                    Learn More
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="10">
                                                    <Card.Text>
                                                     <br/>
                                                     Working as Software Developer for 3 different companies over the years. Some were small freelance contracts, others client facing shops creating websites and mobile applications for customers. More significantly was a role working with a team to improve a set of products used by thousands across the nation.
                                                     <br/>
                                                     <br/>
                                                     As a software developer dozens of websites were created using various technologies such as jQuery, Angular, and PHP. Even more mobile applications were built using Objective-C, Swift, Java, and even hybrid frameworks like Ionic (Angular + Cordova).
                                                     The largest applications maintained were with a team of 4 written in jQuery, PHP, and MSSQL. These applications were complex and served thousands of customers. During this time several vulnerabilities were identified and remediated using experiences in application security.
                                                     <br/>
                                                     <br/>
                                                     Since many of these roles were at smaller organizations, being security conscious as developer went a long way. Occasionally penetration testing was a responsibility that was executed on, contributing to large security improvements in applications that had formerly never received any formal security testing at all.
                                                     <br/>
                                                     <br/>
                                                     This established a practice of more secure SDLC processes built around the OWASP top 10 leaving the organization in a permanently better security posture.
                                                     <br/>
                                                     <br/>
                                                     Eventually, through continuously demonstrating the value of security, this built into a full time security role within a parent organization.
                                                    </Card.Text>
                                                </Accordion.Collapse>
                                        </Card.Text>
                                       </Card.Body>
                                       <Card.Body>
                                        <Card.Text>
                                                System Administrator's Assistant (2013-2016)
                                                <br/>
                                                <br/>
                                                <Accordion.Toggle as={Button} variant="outline-dark" className="dark-btn-outline-white" eventKey="11">
                                                    Learn More
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="11">
                                                    <Card.Text>
                                                     <br/>
                                                      This role was more or less a "junior" System Administrator role for a private school system. It was a start into the IT field and provided the opportunity to build a strong foundation of networks and physical hardware administration/maintenance.
                                                     <br/>
                                                     <br/>
                                                      The core responsibilities for this role were to help maintain user accounts via Active Directory by executing password reset protocols and managing OUs as needed. Configuring, running cables for, and installing enterprise grade wireless access services, then monitoring those services to protect from abuse daily.
                                                     <br/>
                                                     <br/>
                                                      A major project that was accomplished during this was to lead and maintain brand new Apple infrastructure to enhance the learning experience of the entire school from Kindergarten through High Shool. This was accomplished with Apple TVs and iPads that were configured to allow streaming of more complex multi media content for developing new enhanced curriculums where VDI infrastructure was limited.
                                                    </Card.Text>
                                                </Accordion.Collapse>
                                        </Card.Text>
                                       </Card.Body>
                                    </Card>
                                    <br/>
                                    <br/>
                                    <Card className="dark-card-white" text="white">
                                        <Card.Header><Card.Title>Open Source Contributions</Card.Title></Card.Header>
                                        <Card.Body>
                                        <Card.Text>
                                                <i class="fas fa-code-branch fa-5x"></i>
                                                <br/>
                                                <br/>
                                                OpenVPNConnect - WiFi Pineapple Module
                                                    <br/>
                                                    <br/>
                                                <Accordion.Toggle as={Button} variant="outline-dark" className="dark-btn-outline-white" eventKey="12">
                                                    Learn More
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="12">
                                                    <Card.Text>
                                                     <br/>
                                                     Author and maintainer of the OpenVPNConnect WiFi Pineapple module: <a href="https://github.com/InjectionSoftwareandSecurityLLC/OpenVPNConnect">https://github.com/InjectionSoftwareandSecurityLLC/OpenVPNConnect</a>
                                                    </Card.Text>
                                                </Accordion.Collapse>
                                        </Card.Text>
                                       </Card.Body>
                                        <Card.Body>
                                        <Card.Text>
                                                Propane King of the Hill (NetKotH Fork)
                                                    <br/>
                                                    <br/>
                                                <Accordion.Toggle as={Button} variant="outline-dark" className="dark-btn-outline-white" eventKey="13">
                                                    Learn More
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="13">
                                                <Card.Text>
                                                <br/>
                                                Author and maintainer of the Propane King of the Hill platform:<br/><a href="https://github.com/InjectionSoftwareandSecurityLLC/Propane">https://github.com/InjectionSoftwareandSecurityLLC/Propane</a>
                                                <br/>
                                                <br/>
                                                Project forked and updated from the original NetKotH: <a href="https://netkoth.org/">https://netkoth.org/</a>
                                                </Card.Text>
                                                </Accordion.Collapse>
                                        </Card.Text>
                                       </Card.Body>
                                       <Card.Body>
                                        <Card.Text>
                                                All other open source projects and repos
                                                <br/>
                                                <br/>
                                                <Accordion.Toggle as={Button} variant="outline-dark" className="dark-btn-outline-white" eventKey="14">
                                                    Learn More
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="14">
                                                    <Card.Text>
                                                    <br/>
                                                    Injection Software and Security LLC:<br/> <a href="https://github.com/InjectionSoftwareandSecurityLLC">https://github.com/InjectionSoftwareandSecurityLLC</a>
                                                    <br/>
                                                    <br/>
                                                    3ndG4me: <a href="https://github.com/3ndG4me?tab=repositories">https://github.com/3ndG4me?tab=repositories</a>
                                                    </Card.Text>
                                                </Accordion.Collapse>
                                        </Card.Text>
                                       </Card.Body>
                                    </Card>
                                    <br/>
                                    <br/>
                                    <Card className="dark-card-white" text="white">
                                        <Card.Header><Card.Title>Security Research</Card.Title></Card.Header>
                                        <Card.Body>
                                        <Card.Text>
                                                 <i class="fas fa-search fa-5x"></i>
                                                <br/>
                                                <br/>
                                                CVE-2020-3452 - CISCO ASA/FTD Directory Traversal Exploit (discovered by Ahmed Aboul-Ela)
                                                    <br/>
                                                    <br/>
                                                <Accordion.Toggle as={Button} variant="outline-dark" className="dark-btn-outline-white" eventKey="15">
                                                    Learn More
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="15">
                                                    <Card.Text>
                                                    <br/>
                                                    CVE-2020-3452 is a directory traversal vulnerability discovered by Ahmed Aboul-Ela and published on July 22nd 2020.
                                                    <br/>
                                                    <br/>
                                                    The exploit is similar to CVE-2018-0296 but lacks a directory listing abuse and therefore requires a dictionary attack of known/guessed files in order to pull them down.
                                                    <br/>
                                                    <br/>
                                                    On September 28th, 2020 Casey published a simple bash proof of concept that leverages a list of known files that can be downloaded from the default web directory in order to further demonstrate the impact of the exploit beyond the initial proof of concept. 
                                                    <br/>
                                                    <br/>
                                                    <h6>NOTE:</h6> Casey/Injection have no formal association with the original reseacher Ahmed Aboul-Ela. All credit for the original research belongs to them. Casey is simply the author of the public exploit code below based on his own further research of the exploit published by Ahmed Aboul-Ela.
                                                    <br/>
                                                    <br/>
                                                    Initial public disclosure by Ahmed Aboul-Ela: 
                                                    <br/>
                                                    <a href="https://twitter.com/aboul3la/status/1286012324722155525">https://twitter.com/aboul3la/status/1286012324722155525/</a>
                                                    <br/>
                                                    <br/>
                                                    CVE-2020-3542 Exploit by Casey Erdmann:
                                                    <br/>
                                                    <a href="https://github.com/3ndG4me/CVE-2020-3452-Exploit">https://github.com/3ndG4me/CVE-2020-3452-Exploit</a>
                                                    <br/>
                                                    <br/>
                                                    Advisory from CISCO: 
                                                    <br/>
                                                    <a href="https://tools.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-asaftd-ro-path-KJuQhB86">https://tools.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-asaftd-ro-path-KJuQhB86</a>
                                                    <br/>
                                                    <br/>
                                                    Rapid7 Blog Writeup: 
                                                    <br/>
                                                    <a href="https://blog.rapid7.com/2020/07/23/cve-2020-3452-cisco-asa-firepower-read-only-path-traversal-vulnerability-what-you-need-to-know/">https://blog.rapid7.com/2020/07/23/cve-2020-3452-cisco-asa-firepower-read-only-path-traversal-vulnerability-what-you-need-to-know/</a>
                                                    </Card.Text>
                                                </Accordion.Collapse>
                                        </Card.Text>
                                       </Card.Body>
                                        <Card.Body>
                                        <Card.Text>
                                                CVE-2020-7934 - Authenticated Persistent XSS in Liferay Portal CE 7.1.0-7.2.1
                                                    <br/>
                                                    <br/>
                                                <Accordion.Toggle as={Button} variant="outline-dark" className="dark-btn-outline-white" eventKey="16">
                                                    Learn More
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="16">
                                                    <Card.Text>
                                                    <br/>
                                                    CVE-2020-7934 was discovered by Casey Erdmann during a local penetration test/software security audit of the Liferay Portal application.
                                                    <br/>
                                                    <br/>
                                                    It is an authenticated persistent cross site scripting (XSS) vulnerability that can allow a potential attacker to execute JavaScript code in the context of another user's session.
                                                    This can be used to escalate privileges, move laterally, and in cases of administrative privilege escalation, even gain access to GroovyScript functionality in Liferay which can provide a path to remote code execution.
                                                    <br/>
                                                    <br/>
                                                    Full blog post/write up of the public disclosure by Casey Erdmann: 
                                                    <br/>
                                                    <a href="https://semanticbits.com/liferay-portal-authenticated-xss-disclosure/">https://semanticbits.com/liferay-portal-authenticated-xss-disclosure/</a>
                                                    <br/>
                                                    <br/>
                                                    Full disclosure report with proof of concept by Casey Erdmann:
                                                    <br/>
                                                    <a href="https://github.com/3ndG4me/liferay-xss-7.2.1GA2-poc-report-CVE-2020-7934">https://github.com/3ndG4me/liferay-xss-7.2.1GA2-poc-report-CVE-2020-7934</a>
                                                    <br/>
                                                    <br/>
                                                    MITRE CVE entry: 
                                                    <br/>
                                                    <a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-7934">https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-7934</a>
                                                    <br/>
                                                    <br/>
                                                    NIST NVD entry: 
                                                    <br/>
                                                    <a href="https://nvd.nist.gov/vuln/detail/CVE-2020-7934">https://nvd.nist.gov/vuln/detail/CVE-2020-7934</a>
                                                    </Card.Text>
                                                </Accordion.Collapse>
                                        </Card.Text>
                                       </Card.Body>
                                       <Card.Body>
                                        <Card.Text>
                                                BadSalt - Adversarial DevOps - Red Team Village @ DEF CON 27
                                                <br/>
                                                <br/>
                                                <Accordion.Toggle as={Button} variant="outline-dark" className="dark-btn-outline-white" eventKey="17">
                                                    Learn More
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="17">
                                                    <Card.Text>
                                                    <br/>
                                                    BadSalt is a project that was created from research conducted around the concept of using modern "DevOps" tools from an adversarial, or "red team", perspective.
                                                    <br/>
                                                    <br/>
                                                    Specifically this research explores using SaltStack as a tool for command and control, advanced post exploitation, and even looks at ways that attacks can be performed against the SaltStack Software itself.
                                                    Furthermore, the talk presents remediation guidance for the attacks conducted, and provides clear indicators of compromise for defenders to be able to identify if someone is using tools, like SaltStack, maliciously in their environment.
                                                    <br/>
                                                    <br/>
                                                    This research was accepted as a talk, published, and recorded for the Red Team Village @ DEF CON 27 in 2019.
                                                    <br/>
                                                    <br/>
                                                    DEF CON 27 - Red Team Village Video - BadSalt (Adversarial DevOps): <a href="https://www.youtube.com/watch?v=ioBAK7hGZi4">https://www.youtube.com/watch?v=ioBAK7hGZi4</a>
                                                    <br/>
                                                    <br/>
                                                    Bad Salt blog post: <a href="https://injection.sh/injection-blog/Bad-Salt-(Adversarial-DevOps)/">https://injection.sh/injection-blog/Bad-Salt-(Adversarial-DevOps)/</a>
                                                    <br/>
                                                    <br/>
                                                    BadSalt Repo, Slides, and Research Artifacts: <a href="https://github.com/3ndG4me/BadSalt/tree/master/research">https://github.com/3ndG4me/BadSalt/tree/master/research</a>
                                                    </Card.Text>
                                                </Accordion.Collapse>
                                        </Card.Text>
                                       </Card.Body>
                                        <Card.Body>
                                        <Card.Text>
                                                Cyber Attacks/Effects on Cyber Physical Systems (CPS) - MITRE - Elevator Simulation
                                                    <br/>
                                                    <br/>
                                                <Accordion.Toggle as={Button} variant="outline-dark" className="dark-btn-outline-white" eventKey="18">
                                                    Learn More
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="18">
                                                <Card.Text>
                                                <br/>
                                                Alongside fellow researcher Cody Greene, under the guidance of research owner Suresh Damodaran of MITRE, a software based elevator simulation was developed. The goal of this simulator was to construct specific interfaces in order to provide mechanisms to simulate effects that would impact the system in the event of an attack or malfunction that might occur on a real elevator system.
                                                <br/>
                                                <br/>
                                                The broader contribution of this research was to demonstrate what kind of effects can occur whenever a cyber physical system, such as an elevator, is attacked. This simulation is intended to help others develop more attacks to test against the simulator, and determine what effects would occur if they were to be observed in a real elevator.
                                                <br/>
                                                <br/>
                                                Elevators are a great example of a cyber physical system that benefits from a simulation system being available, as it can be costly, and dangerous to test attacks against a real elevator.
                                                <br/>
                                                <br/>
                                                This research is continued by the folks at MITRE but the Elevator Simulator is open source to the public to improve upon, and develop more attacks for that contribute to the research.
                                                <br/>
                                                <br/>
                                                Elevator Simulator codebase: <a href="https://github.com/3ndG4me/ElevatorSim">https://github.com/3ndG4me/ElevatorSim</a>
                                                </Card.Text>
                                                </Accordion.Collapse>
                                        </Card.Text>
                                       </Card.Body>
                                    </Card>
                                    <br/>
                                    <br/>
                                    <Card className="dark-card-white" text="white">
                                        <Card.Header><Card.Title>Professional Certifications</Card.Title></Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                               OSCP, LRPA, GDPR Foundations, eJPT
                                        </Card.Text>
                                       </Card.Body>
                                    </Card>
                                    </Accordion>
                        </div>
                        <div class="col-lg-5 portfolio-image-container">
                            <img alt="3ndG4me Pic" class="rounded-circle border" width="80%" src="/media/img/3ndG4me_main.png" />
                            <img alt="Casey headshot Pic" class="rounded-circle border portfolio-image-pos" width="80%" src="/media/img/headshot.png" />
                        </div>
                     </div>
                </div> 
            </div>
        </div>
            

        );
    }

}
