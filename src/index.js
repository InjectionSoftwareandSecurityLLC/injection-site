import React from "react";
import ReactDOM from "react-dom";

import { BLOG } from "./constants";
import { HOME } from "./constants";
import { ABOUT } from "./constants";
import { PROJECTS } from "./constants";
import { DOWNLOADS } from "./constants";
import { MERCH } from "./constants";

import CustomNav from "./components/nav";
import FooterComponent from "./components/footer";
import HomeComponent from "./components/views/home";
import AboutComponent from "./components/views/about";
import ProjectsComponent from "./components/views/projects";
import DownloadsComponent from "./components/views/downloads";
import BlogComponent from "./components/views/blog";
import MerchFeedbackComponent from "./components/views/merch-feedback";
import "font-awesome/css/font-awesome.min.css";
import "./styles/injection.css";

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
      case ABOUT:
        return AboutComponent;
      case PROJECTS:
        return ProjectsComponent;
      case DOWNLOADS:
        return DownloadsComponent;
      case BLOG:
        return BlogComponent;
      case MERCH:
        return MerchFeedbackComponent;
      case HOME:
        return HomeComponent;
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
