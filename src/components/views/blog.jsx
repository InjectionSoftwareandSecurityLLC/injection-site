import React, { Component } from "react";

export default class Blog extends Component {
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
                                            <a href="#projects" class="btn btn-default btn-lg"><i class="fa fa-keyboard-o fa-fw"></i> <span class="network-name">Blog</span></a>
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
            <a name="projects"></a>
                <div class="content-section-a blog-iframe">
                    <div class="container">
                        <div class="row">
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe title="injection-wp-blog" class="embed-responsive-item" src="https://injectionweb.wordpress.com/"/>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        );
    }
}