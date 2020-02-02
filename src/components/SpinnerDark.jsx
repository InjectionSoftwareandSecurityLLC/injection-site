import React, { Component } from "react";

export default class SpinnerDark extends Component {

    render(){
        return(
            <div>
                <i class="fa fa-circle-notch fa-spin fa-2x loading-icon-dark" aria-hidden="true"></i>
            </div>
        );
    }

}