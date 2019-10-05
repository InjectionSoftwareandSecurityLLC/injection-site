import React, { Component } from "react";
import {Image} from 'react-bootstrap'
import Spinner from '../spinner'

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
            <ul class="list-decimal">
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
            </ul>
            
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
                         <h3>Software Development Project</h3>
                         <hr class="intro-divider"/>
                         <ul class="list-inline intro-social-buttons">
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
                         <div align="center">
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
                <div class="col-lg-5 col-sm-6">
                    <hr class="section-heading-spacer"/>
                    <div class="clearfix"></div>
                    <h2 class="section-heading">Get the latest news!</h2>
                    <p class="lead">Follow <a href="https://twitter.com/InjectionDev">@InjectionDev</a> on Twtter to get the latest updates on our software and progress. Our website is always updated first, but this is the second best way to keep up with us!</p>
                </div>
                <div class="col-lg-5 col-lg-offset-2 col-sm-6">
                  <a class="twitter-timeline" href="https://twitter.com/InjectionDev" data-widget-id="530498121038434304">Tweets by @InjectionDev</a>
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
                <div class="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                    <hr class="section-heading-spacer"/>
                    <div class="clearfix"></div>
                    <h2 class="section-heading">YouTube</h2>
                    <p class="lead">Interested in new promo videos? How about watching some hands on hacking videos and tutorials? Whatever your interest is in Injection you can find lively video updates on our YouTube channel so go check it out!</p>
                    </div>
                    <div class="col-lg-5 col-sm-pull-6  col-sm-6">
                        <a href="https://www.youtube.com/channel/UC31jVeFdiPWsxMRqhXapRGQ"><font className="big-youtube-icon"><i class="fab fa-youtube fa-5x"></i></font></a>
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
                <div class="col-lg-5 col-sm-6">
                    <hr class="section-heading-spacer"/>
                    <div class="clearfix"></div>
                    <h2 class="section-heading">Injection GitHub!</h2>
                    <p class="lead">Are you interested in developing software and need some resources and references? <br/><br/> Or maybe you prefer to build your software from source and see the code you're installing directly? <br/><br/> If so check out the Injection Software Development github! Any open source software or projects we develop can be found here. Feel free to contribute, use, and reference any of our software, code, or documentation.</p>
                </div>
                <div class="col-lg-5 col-lg-offset-2 col-sm-6">
                    <a href="https://github.com/InjectionSoftwareDevelopment"><font className="big-github-icon"><i class="fab fa-github fa-5x"></i></font></a>
                </div>
            </div>
        </div>
      </div>
    </div>
    );
  }
}
