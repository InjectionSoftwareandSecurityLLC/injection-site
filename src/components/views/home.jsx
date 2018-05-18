import React, { Component } from "react";
import {Image} from 'react-bootstrap'

export default class Home extends Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
          content: 'None',
        };
      }

    componentDidMount() {
        fetch("https://api.github.com/users/3ndG4me")
          .then(response => response.json())
          .then(data => this.setState({ content: data.bio }));
      }


  render() {
    return (

      // Top Section
    <div class="intro-header">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="intro-message">
                        <h1>Injection</h1>
                        <h3>Software Development Project</h3>
                        <hr class="intro-divider"/>
                        <ul class="list-inline intro-social-buttons">
                            <li>
                                <a href="#twitter" class="btn btn-default btn-lg"><i class="fa fa-twitter fa-fw"></i> <span class="network-name">Twitter</span></a>
                            </li>
                            <li>
                                <a href="#downloads" class="btn btn-default btn-lg"><i class="fa  fa-arrow-circle-down fa-fw"></i> <span class="network-name">Downloads</span></a>
                            </li>
                            <li>
                                <a href="#gitlab" class="btn btn-default btn-lg"><i class="fa fa-gitlab fa-fw"></i> <span class="network-name">GitLab</span></a>
                            </li>
                      
                        </ul>
                        <div align="center">
                            <a href="https://github.com/InjectionSoftwareDevelopment/Propane" class="btn btn-default btn-lg">
                            <Image src="https://raw.githubusercontent.com/InjectionSoftwareDevelopment/Propane/master/propane-logo.png" className="img-responsive" width="350" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
  }
}