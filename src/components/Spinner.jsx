import React, { Component } from "react";

export default class Spinner extends Component {

    render(){
        return(
            <div>
                <i class="fa fa-circle-notch fa-spin fa-2x loading-icon" aria-hidden="true"></i>
            </div>
        );
    }

}