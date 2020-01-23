import React, { Component } from "react";

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
                                <h3>Portfolio (Coming Soon!)</h3>
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
                                <img alt="Injection Offsec Logo" class="center-block" width="20%" src="/media/img/3ndG4me_main.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}
