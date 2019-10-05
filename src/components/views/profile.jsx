import React, { Component } from "react";

export default class ProfileComponent extends Component {

    render(){
        return(
            <div>
            <ProfileHeader />
            <ProfileBody />
            </div>
        );
    }

}


class ProfileHeader extends Component{
    render(){
        return(
        <div>
            <div class="intro-header-dark">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="intro-message-dark-profile">
                                <h1>3ndG4me</h1>
                                <h3>Portfolio (Coming Soon!)</h3>
                                <hr class="intro-divider-dark"/>
                                <ul class="list-inline intro-social-buttons">
                                    <li>
                                        <a href="#profile" class="btn btn-default-dark-profile btn-lg"><i class="fas fa-chess-rook fa-fw"></i> <span class="network-name">3ndG4me</span></a>
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


class ProfileBody extends Component{


    render(){
        return(
          <div>
            <div id="profile" class="content-section-a-dark">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <img alt="Injection Offsec Logo" class="center-block" width="30%" src="/media/img/3ndG4me_main.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}
