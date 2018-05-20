import React, { Component } from "react";
//import {Image} from 'react-bootstrap'

export default class Projects extends Component {

      render(){
          return(
              <div>
              <ProjectsHeader />
              <ProjectsStatus />
              </div>
          );
      }

}


class ProjectsHeader extends Component{

    render(){
        return(
        <div>
            <div class="intro-header">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="intro-message">
                                <h1>Projects</h1>
                                <h3>See what we are working on!</h3>
                                <hr class="intro-divider"/>
                                <ul class="list-inline intro-social-buttons">
                                    <li>
                                        <a href="#projects" class="btn btn-default btn-lg"><i class="fa fa-code-fork fa-fw"></i> <span class="network-name">Projects</span></a>
                                    </li>
                                </ul>
                                <ul class="list-inline intro-social-buttons">
                                    <li>
                                        <p class="project-items-heading">Published</p> <font class="projects-done"><i class="fa fa-circle" aria-hidden="true"></i></font>
                                    </li>
                                    <li>
                                        <p class="project-items-heading">In Progress</p> <font class="projects-in-progress"><i class="fa fa-circle" aria-hidden="true"></i></font>
                                    </li>
                                    <li>
                                        <p class="project-items-heading">Cancelled</p> <font class="projects-cancelled"><i class="fa fa-circle" aria-hidden="true"></i></font>
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



class ProjectsStatus extends Component{
       
   // Example for API Fetch
    constructor(props) {
        super(props);
    
        this.state = {
          repos: [],
          statuses: []
        };
      }

    handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    componentDidMount() {
        fetch("https://api.github.com/orgs/InjectionSoftwareDevelopment/repos")
          .then(this.handleErrors)
          .then(response => response.json())
          .then(data => {
              console.log("Data", data)
              let all_repos = data.map((repos) => {
                  return(
                    repos.full_name
                  )
                  
              })
              console.log("All Repos", all_repos)
              this.setState({ repos: all_repos })
              console.log("State", this.state.repos)
              this.getStatuses();

        })
        .catch(error => console.log(error));
          
      }


    getStatuses(){
        var status = [];
        var repo_names = this.state.repos;
        repo_names.map((name) => {
            let url = "https://raw.githubusercontent.com/" + name  + "/master/injection-status.json";
            console.log("Req URL", url)
            fetch(url)
              .then(this.handleErrors)
              .then(response => response.json())
              .then(data => {
                console.log("Raw Req Data", data)
                status.push(data)
                console.log("All Status", status)
                this.setState({statuses: status})
                console.log("State", this.state.statuses)
                })
              .catch(error => console.log("Project does not have injection-status.json...skipping..."));
              
              return({name});
        })


      }


      displayProjects(){

        return(
            <ul class="list-decimal">
            {this.state.statuses.map((status)=>{
                console.log("Status loop", status);
                var state_color;
                if(status.state === "done"){
                    state_color = "projects-done"
                }else if(status.state === "cancelled"){
                    state_color = "projects-cancelled"
                }else if(status.state === "in-progress"){
                    state_color = "projects-in-progress"
                }

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
                }
                return(
                    <li key={status}>{status.name} {status.version}: {status.progress} <font class={state_color}> {status_platform}</font></li>
                );
            })}
            </ul>
        );
      }


    render(){
        return(
        <div>
            <a name="projects"/>
                <div class="content-section-a">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-5 col-sm-6">
                                <hr class="section-heading-spacer" />
                                <div class="clearfix"></div>
                                <h2 class="section-heading">Projects:</h2>
                                <p class="lead">
                                {this.displayProjects()}
                                </p>
                            </div>
                            <div class="col-lg-5 col-lg-offset-2 col-sm-6">
                            <font class="big-terminal">
                            <span class="span-top-25-px fa-stack fa-lg fa-5x">
                                <i class="fa fa-square fa-stack-2x"></i>
                                <i class="fa fa-terminal fa-stack-1x fa-inverse"></i>
                            </span>
                            </font>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}