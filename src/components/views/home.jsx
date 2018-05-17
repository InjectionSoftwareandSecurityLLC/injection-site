import React, { Component } from "react";

export default class Home extends Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
          content: 'None',
        };
      }

    componentDidMount() {
        fetch("https://api.github.com/users/3ndG4me")
          .then(response => response.json())
          .then(data => this.setState({ content: data.bio }));
      }


  render() {
    return (
      <div id="home">
        This is the home page.
        <br/>
        <p>{this.state.content}</p>
      </div>
    );
  }
}