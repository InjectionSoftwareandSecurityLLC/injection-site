import React, { Component } from "react";

export default class BlogComponent extends Component {
    render(){
        return(
            <div>
                <BlogHeader />
                <BlogFrame />
            </div>
        );
    }

}


class BlogHeader extends Component{
    render(){
        return(
            <div>
                <div class="intro-header">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="intro-message">
                                    <h1>Blog</h1>
                                    <h3>Tech blurbs...</h3>
                                    <hr class="intro-divider"/>
                                    <ul class="list-inline intro-social-buttons">
                                        <li>
                                            <a href="#blog" class="btn btn-default btn-lg"><i class="fas fa-keyboard fa-fw"></i> <span class="network-name">Blog</span></a>
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


class BlogFrame extends Component{
    render(){
        return(
        <div>
            <div id="blog" class="content-section-a">
                    <div class="container">
                        <div class="row">
                            <div class="embed-responsive embed-responsive-16by9 scroll-wrapper">
                                <iframe title="injection-wp-blog" class="embed-responsive-item" src="https://injectionsoftwaredevelopment.github.io/injection-blog"/>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        );
    }
}
