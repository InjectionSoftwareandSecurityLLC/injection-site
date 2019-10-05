import React from "react";
import ReactDOM from "react-dom";

import { HOME } from "./constants";
import { SECURITY } from "./constants";
import { SOFTWARE } from "./constants";
import { ABOUT } from "./constants";
import { PROJECTS } from "./constants";
import { BLOG } from "./constants";

import CustomNav from "./components/nav";
import FooterComponent from "./components/footer";
import HomeComponent from "./components/views/home";
import SecurityComponent from "./components/views/security";
import SoftwareComponent from "./components/views/software";
import AboutComponent from "./components/views/about";
import ProjectsComponent from "./components/views/projects";
import BlogComponent from "./components/views/blog";
import "./styles/injection.css";
import "font-awesome/css/font-awesome.min.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currPage: HOME };

  }

  changePage(page) {
    this.setState({ currPage: page });
  }

  currentPageComponent() {
    switch (this.state.currPage) {
      case HOME:
        return HomeComponent;
      case SECURITY:
        return SecurityComponent;
      case SOFTWARE:
        return SoftwareComponent;
      case ABOUT:
        return AboutComponent;
      case PROJECTS:
        return ProjectsComponent;
      case BLOG:
        return BlogComponent;
      default:
        throw Error(`No such page: ${this.state.currPage}`);
    }
  }
  render() {
    const Comp = this.currentPageComponent();
    return (
      <div>
        <CustomNav update={page => this.changePage(page)} />
        <Comp />
        <FooterComponent />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
