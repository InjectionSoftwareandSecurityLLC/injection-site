import React, { Component } from "react";
import Spinner from '../spinner'

export default class SecurityComponent extends Component {

    render(){
        return(
            <div>
            <SecurityHeader />
            <SecurityList />
            </div>
        );
    }

}


class SecurityHeader extends Component{
    render(){
        return(
        <div>
            <div class="intro-header">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="intro-message-dark">
                                <h1>Security</h1>
                                <h3>WIP: Coming soon!</h3>
                                <hr class="intro-divider"/>
                                <ul class="list-inline intro-social-buttons">
                                    <li>
                                        <a href="#downloads" class="btn btn-default btn-lg"><i class="fa  fa-bug fa-fw"></i> <span class="network-name">Security</span></a>
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


class SecurityList extends Component{
       // Security API Fetch
       constructor(props) {
        super(props);
    
        this.state = {
          repos: [],
          statuses: [],
          isLoading: false
        };
      }

    handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    componentDidMount() {
        this.setState({isLoading: true});
        fetch("https://api.github.com/orgs/InjectionSoftwareDevelopment/repos")
          .then(this.handleErrors)
          .then(response => response.json())
          .then(data => {
              //console.log("Data", data)
              let all_repos = data.map((repos) => {
                  return(
                    repos.full_name
                  )
                  
              })
              //console.log("All Repos", all_repos)
              this.setState({ repos: all_repos })
              //console.log("State", this.state.repos)
              this.getStatuses();

        })
        .catch(error => console.log("Github API cannot be reached..."));
          
      }


    getStatuses(){
        var status = [];
        var repo_names = this.state.repos;
        repo_names.map((name) => {
            let url = "https://raw.githubusercontent.com/" + name  + "/master/injection-status.json";
            //console.log("Req URL", url)
            fetch(url)
              .then(this.handleErrors)
              .then(response => response.json())
              .then(data => {
                //console.log("Raw Req Data", data)
                status.push(data)
                //console.log("All Status", status)
                this.setState({statuses: status})
                //console.log("State", this.state.statuses)
                })
              .catch(error => console.log("Project does not have injection-status.json...skipping..."));
              this.setState({isLoading: false})
              return({name});
        })


      }


      displaySecurity(){

        return(
            <ul class="list-decimal">
            {this.state.statuses.map((status, index)=>{
                //console.log("Status loop", status);

                if(status.released){
                    var status_platform;
                    if(status.platform === "all"){
                        status_platform = <span><i class="fa fa-linux" aria-hidden="true"></i> <i class="fa fa-apple" aria-hidden="true"></i> <i class="fa fa-android" aria-hidden="true"></i> <i class="fa fa-windows" aria-hidden="true"></i></span>;
                    }else if(status.platform === "all-mobile"){
                        status_platform = <span><i class="fa fa-apple" aria-hidden="true"></i> <i class="fa fa-android" aria-hidden="true"></i></span>;
                    }else if(status.platform === "all-desktop"){
                        status_platform = <span><i class="fa fa-linux" aria-hidden="true"></i> <i class="fa fa-apple" aria-hidden="true"></i> <i class="fa fa-windows" aria-hidden="true"></i></span>;
                    }else if(status.platform === "apple"){
                        status_platform = <span><i class="fa fa-apple" aria-hidden="true"></i></span>;
                    }else if(status.platform === "linux"){
                        status_platform = <span><i class="fa fa-linux" aria-hidden="true"></i></span>;
                    }else if(status.platform === "windows"){
                        status_platform = <span><i class="fa fa-windows" aria-hidden="true"></i></span>;
                    }else if(status.platform === "android"){
                        status_platform = <span><i class="fa fa-android" aria-hidden="true"></i></span>;
                    }else if(status.platform === "nix"){
                        status_platform = <span><i class="fa fa-linux" aria-hidden="true"></i> <i class="fa fa-apple" aria-hidden="true"></i></span>;
                    }else if(status.platform === "plugin"){
                        status_platform = <span><i class="fa fa-plug" aria-hidden="true"></i></span>;
                    }else if(status.platform === "security"){
                        status_platform = <span><i class="fa fa-lock" aria-hidden="true"></i></span>;
                    }else if(status.platform === "web"){
                        status_platform = <span><i class="fa fa-globe" aria-hidden="true"></i></span>;
                    }
                    return(
                        <li key={index}><a href={status.download_url}>{status.name} {status.release_version} {status_platform}</a></li>
                    );
                }
                return(true);
            })}
            </ul>
            
        );
      }


    render(){
        return(
          <div>
            <div id="downloads" class="content-section-a">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <img class="center-block" width="60%" src="/media/img/injection-offsec-logo.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}
