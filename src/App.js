import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/views/Home'
import Security from './components/views/Security'
import Software from './components/views/Software'
import About from './components/views/About'
import Portfolio from './components/views/Portfolio';
import Projects from './components/views/Projects'
import Blog from './components/views/Blog'
import Header from './components/Header'
import Footer from './components/Footer'

import './styles/font-awesome/css/all.css'
import './styles/injection.css'


function App() {
  console.log(window.location.pathname);
  if(window.location.pathname === "/security" || window.location.pathname === "/portfolio"){
    document.body.classList.add("body-dark");
    document.body.classList.add("dark-transition");
  }else{
    document.body.classList.remove("body-dark");
    document.body.classList.remove("dark-transition");
  }
  return (
    <div>
    <Header navPage = { window.location.pathname }/>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route exact path="/" component={Home} />
        <Route exact path="/security" component={Security} />
        <Route path="/software" component={Software} />
        <Route path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/projects" component={Projects} />
        <Route path="/blog" component={Blog} />
    </BrowserRouter>
    <Footer navPage = { window.location.pathname }/>
    </div>
  );
}

export default App;
