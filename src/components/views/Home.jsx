import React, { Component } from "react";
import {Image} from 'react-bootstrap'
import Spinner from '../Spinner'

export default class HomeComponent extends Component {

  render() {
    return (
   <div id="home">
        <HomeHeader />
        <TwitterSection />
        <YouTubeSection />
        <GitHubSection />
   </div>
    );
  }
}


class HomeHeader extends Component{

    // Downloads API Fetch
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


      displayFeatured(){

        return(
            <div>
            {this.state.statuses.map((status, index)=>{
                //console.log("Status loop", status);
                if(status.featured){
                    return(
                        <a href={status.download_url} class="btn btn-default btn-lg">
                        <Image src={status.featured_image} className="img-responsive" width="350" /></a>
                    );
                }
                return(true);
            })}
            </div>
            
        );
      }

  render(){
    return(
     // Top Section
     <div>
     <div class="intro-header">
         <div class="container">
             <div class="row">
                 <div class="col-lg-12">
                     <div class="intro-message">
                         <h1>Injection</h1>
                         <h3>Software and Security LLC</h3>
                         <hr class="intro-divider"/>
                         <ul class="list-inline intro-social-buttons">
                              <li>
                                 <a href="/security" class="btn btn-default btn-lg"><i class="fas fa-bug fa-fw"></i> <span class="network-name">Security</span></a>
                             </li>
                             <li>
                                 <a href="#twitter" class="btn btn-default btn-lg"><i class="fab fa-twitter fa-fw"></i> <span class="network-name">Twitter</span></a>
                             </li>
                             <li>
                                 <a href="#youtube" class="btn btn-default btn-lg"><i class="fab fa-youtube fa-fw"></i> <span class="network-name">YouTube</span></a>
                             </li>
                             <li>
                                 <a href="#github" class="btn btn-default btn-lg"><i class="fab fa-github fa-fw"></i> <span class="network-name">GitHub</span></a>
                             </li>
                       
                         </ul>
                         <div align="center" class="featured-project">
                           <h5>Featured Project</h5>
                            {this.state.isLoading ? <Spinner /> : this.displayFeatured()}
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
    </div>
    );
  }
}

class TwitterSection extends Component {

  render() {
    return (
    <div>
    <div id="twitter" class="content-section-a">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-lg-offset-6">
                    <hr class="section-heading-spacer"/>
                    <div class="clearfix"></div>
                    <h2 class="section-heading">Get the latest news!</h2>
                    <p class="lead">Follow <a href="https://twitter.com/InjectionSec">@InjectionSec</a> on Twtter to get the latest updates on business activity, blog posts, and software releases. Our website is always updated first, but this is the second best way to keep up with us!</p>
                </div>
                <div class="col-lg-5">
                  <a class="twitter-timeline" href="https://twitter.com/InjectionSec" data-widget-id="530498121038434304">Tweets by @InjectionSec</a>
              </div>
            </div>
        </div>
    </div>
    </div>
    );
  }


}

class YouTubeSection extends Component {

  render() {
    return (
    <div>
      <div id="youtube" class="content-section-b">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-lg-offset-6">
                        <a href="https://www.youtube.com/channel/UC31jVeFdiPWsxMRqhXapRGQ"><font className="big-youtube-icon"><i class="fab fa-youtube fa-5x"></i></font></a>
                </div>
                <div class="col-lg-5">
                    <hr class="section-heading-spacer"/>
                    <div class="clearfix"></div>
                    <h2 class="section-heading">YouTube</h2>
                    <p class="lead"><h5><i>Spearheading free security education for the masses.</i></h5><br/> Whether you are a beginner looking to train up to the OSCP, a defender trying to learn new tricks, or a seasoned offensive security professional looking to step your game up, the Injection YouTube channel will have something for you!</p>
                    </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

class GitHubSection extends Component {

  render() {
    return (
    <div>
      <div id="github" class="content-section-a">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-lg-offset-6">
                    <hr class="section-heading-spacer"/>
                    <div class="clearfix"></div>
                    <h2 class="section-heading">Injection GitHub</h2>
                    <p class="lead">Offensive Security tooling <br/><br/> Desktop and Mobile Applications <br/><br/> Even Games!<br/><br/> We are building all kinds of software here at Injection, and almost all of it is open source! Check out our projects on our <a href="https://github.com/InjectionSoftwareDevelopment">Github.</a></p>
                </div>
                <div class="col-lg-5">
                    <a href="https://github.com/InjectionSoftwareDevelopment"><font className="big-github-icon"><i class="fab fa-github fa-5x"></i></font></a>
                </div>
            </div>
        </div>
      </div>
    </div>
    );
  }
}
