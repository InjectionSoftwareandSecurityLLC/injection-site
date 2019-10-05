import React, { Component } from "react";
import Spinner from '../spinner'

export default class ProjectsComponent extends Component {

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
                                        <a href="#projects" class="btn btn-default btn-lg"><i class="fas fa-code-branch fa-fw"></i> <span class="network-name">Projects</span></a>
                                    </li>
                                </ul>
                                <ul class="list-inline intro-social-buttons">
                                    <li>
                                        <p class="project-items-heading">Published</p> <font class="projects-done"><i class="fas fa-circle" aria-hidden="true"></i></font>
                                    </li>
                                    <li>
                                        <p class="project-items-heading">In Progress</p> <font class="projects-in-progress"><i class="fas fa-circle" aria-hidden="true"></i></font>
                                    </li>
                                    <li>
                                        <p class="project-items-heading">Cancelled</p> <font class="projects-cancelled"><i class="fas fa-circle" aria-hidden="true"></i></font>
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
       
   // Projects API Fetch
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


      displayProjects(){

        return(
            <ul class="list-decimal">
            {this.state.statuses.map((status, index)=>{
                //console.log("Status loop", status);

                if(!status.released || status.version !== status.release_version){
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
                        status_platform = <span><i class="fab fa-linux" aria-hidden="true"></i> <i class="fab fa-apple" aria-hidden="true"></i> <i class="fab fa-android" aria-hidden="true"></i> <i class="fab fa-windows" aria-hidden="true"></i></span>;
                    }else if(status.platform === "all-mobile"){
                        status_platform = <span><i class="fab fa-apple" aria-hidden="true"></i> <i class="fab fa-android" aria-hidden="true"></i></span>;
                    }else if(status.platform === "all-desktop"){
                        status_platform = <span><i class="fab fa-linux" aria-hidden="true"></i> <i class="fab fa-apple" aria-hidden="true"></i> <i class="fab fa-windows" aria-hidden="true"></i></span>;
                    }else if(status.platform === "apple"){
                        status_platform = <span><i class="fab fa-apple" aria-hidden="true"></i></span>;
                    }else if(status.platform === "linux"){
                        status_platform = <span><i class="fab fa-linux" aria-hidden="true"></i></span>;
                    }else if(status.platform === "windows"){
                        status_platform = <span><i class="fab fa-windows" aria-hidden="true"></i></span>;
                    }else if(status.platform === "android"){
                        status_platform = <span><i class="fab fa-android" aria-hidden="true"></i></span>;
                    }else if(status.platform === "nix"){
                        status_platform = <span><i class="fab fa-linux" aria-hidden="true"></i> <i class="fab fa-apple" aria-hidden="true"></i></span>;
                    }else if(status.platform === "plugin"){
                        status_platform = <span><i class="fas fa-plug" aria-hidden="true"></i></span>;
                    }else if(status.platform === "security"){
                        status_platform = <span><i class="fas fa-lock" aria-hidden="true"></i></span>;
                    }else if(status.platform === "web"){
                        status_platform = <span><i class="fas fa-globe" aria-hidden="true"></i></span>;
                    }
                    return(
                        <li key={index}>{status.name} {status.version}: {status.progress} <font class={state_color}> {status_platform}</font></li>
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
            <div id="projects" class="content-section-a">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-5 col-sm-6">
                                <hr class="section-heading-spacer" />
                                <div class="clearfix"></div>
                                <h2 class="section-heading">Projects:</h2>
                                <p class="lead">
                                {this.state.isLoading ? <Spinner /> : this.displayProjects()}
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