import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class BlogComponent extends Component {
    render(){
        return(
            <div>
                <Redirect to="/injection-blog" />
            </div>
        );
    }

}