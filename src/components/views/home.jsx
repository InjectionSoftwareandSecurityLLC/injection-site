import React, { Component } from "react";
import {Image} from 'react-bootstrap'
import Spinner from '../spinner'

export default class Home extends Component {

  render() {
    return (
   <div id="home">
        <HomeHeader />
        <TwitterSection />
        <DownloadsSection />
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
                                 <a href="#twitter" class="btn btn-default btn-lg"><i class="fa fa-twitter fa-fw"></i> <span class="network-name">Twitter</span></a>
                             </li>
                             <li>
                                 <a href="#downloads" class="btn btn-default btn-lg"><i class="fa  fa-arrow-circle-down fa-fw"></i> <span class="network-name">Downloads</span></a>
                             </li>
                             <li>
                                 <a href="#github" class="btn btn-default btn-lg"><i class="fa fa-github fa-fw"></i> <span class="network-name">GitHub</span></a>
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
    <a name="twitter"/>
    <div class="content-section-a">
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

class DownloadsSection extends Component {

  render() {
    return (
    <div>
    <a name="downloads"/>
      <div class="content-section-b">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                    <hr class="section-heading-spacer"/>
                    <div class="clearfix"></div>
                    <h2 class="section-heading">Downloads</h2>
                    <p class="lead">We have something for everyone! Check out all of our downloads in the <a href="/downloads">Downloads</a> section of the site, or just select your platform by clicking a button to the left.</p>
                </div>
                <div class="col-lg-5 col-sm-pull-6  col-sm-6">
                  <ul class="list-inline intro-social-buttons">
                      <h3>Computer</h3>
                      <hr/>
                      <li>
                          <a href="downloads/index.html#osxdownloads" class="btn btn-default btn-lg"><i class="fa fa-apple fa-fw"></i> <span class="network-name">OSX</span></a>
                      </li>
                      <li>
                          <a href="downloads/index.html#linuxdownloads" class="btn btn-default btn-lg"><i class="fa fa-linux fa-fw"></i> <span class="network-name">Linux</span></a>
                      </li>
                      <li>
                          <a href="downloads/index.html#windowsdownloads" class="btn btn-default btn-lg"><i class="fa fa-windows fa-fw"></i> <span class="network-name">Windows</span></a>
                      </li>
                      <hr/>
                      <h3>Mobile</h3>
                      <hr/>
                        <li>
                            <a href="downloads/index.html#iosdownloads" class="btn btn-default btn-lg"><i class="fa fa-apple fa-fw"></i> <span class="network-name">iOS</span></a>
                        </li>
                        <li>
                            <a href="downloads/index.html#androiddownloads" class="btn btn-default btn-lg"><i class="fa fa-android fa-fw"></i> <span class="network-name">Android</span></a>
                        </li>
                        <hr/>
                    </ul>
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
    <a name="github"/>
      <div class="content-section-a">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-sm-6">
                    <hr class="section-heading-spacer"/>
                    <div class="clearfix"></div>
                    <h2 class="section-heading">Injection GitHub!</h2>
                    <p class="lead">Are you interested in developing software and need some resources and references? <br/><br/> Or maybe you prefer to build your software from source and see the code you're installing directly? <br/><br/> If so check out the Injection Software Development github! Any open source software or projects we develop can be found here. Feel free to contribute, use, and reference any of our software, code, or documentation.</p>
                </div>
                <div class="col-lg-5 col-lg-offset-2 col-sm-6">
                    <a href="https://github.com/InjectionSoftwareDevelopment"><font className="big-github-icon"><i class="fa fa-github fa-5x"></i></font></a>
                </div>
            </div>
        </div>
      </div>
    </div>
    );
  }
}