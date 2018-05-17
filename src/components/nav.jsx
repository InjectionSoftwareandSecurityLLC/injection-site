import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        </ul>
      </div>
    );
  }
}