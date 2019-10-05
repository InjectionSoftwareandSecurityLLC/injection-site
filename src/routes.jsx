import React from "react";
import { Route } from "react-router-dom";

// Import our components
import CustomNav from "./components/nav";
import Footer from "./components/footer";

// Import pages
import Home from "./components/views/home";
import Security from "./components/views/security";
import Software from "./components/views/software";
import About from "./components/views/about";
import Projects from "./components/views/projects";
import Blog from "./components/views/blog";

export default class Routes extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <CustomNav />
        <Route 
          component={Home} 
        />
        <Route 
          path={`${process.env.PUBLIC_URL}/about`} 
          component={About} 
        />
        <Route
          path={`${process.env.PUBLIC_URL}/projects`}
          component={Projects}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/downloads`}
          component={Downloads}
        />
        <Route 
          path={`${process.env.PUBLIC_URL}/blog`} 
          component={Blog}
        />
        <Footer />
      </div>
    );
  }
}
