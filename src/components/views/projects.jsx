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
          content: [],
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
                    this.getStatuses(repos.full_name)
                  )
                  
              })
              console.log("All Repos", all_repos)
              this.setState({ content: all_repos })
              console.log("State", this.state.content)

        })
        .catch(error => console.log(error));
          
      }


    getStatuses(repo_name){
        let url = "https://raw.githubusercontent.com/" + repo_name  + "/master/injection-status.json";
        fetch(url)
          .then(this.handleErrors)
          .then(response => response.json())
          .then(data => {
            console.log("Raw Req Data", data)
                return(
                    <li>{data.progress}</li>
                )
            })
          .catch(error => console.log("Project does not have injection-status.json...skipping..."));

      }


      displayProjects(){

        return(
            <ul class="list-decimal">
            {this.state.content}
            <li>OpenVPNConnect Wifi Pineapple Module: 100% <font class="projects-done"><i class="fa fa-plug" aria-hidden="true"></i></font></li>
            <li>OSCP Journey: 25% <i class="fa fa-lock" aria-hidden="true"></i></li>
            <li>DIY Rubber Ducky 2.0: 0% <i class="fa fa-linux" aria-hidden="true"></i> <i class="fa fa-apple" aria-hidden="true"></i> <i class="fa fa-windows" aria-hidden="true"></i></li>
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