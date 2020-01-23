import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/views/Home'
import Software from './components/views/Software'
import About from './components/views/About'
import Projects from './components/views/Projects'
import Blog from './components/views/Blog'
import Header from './components/Header'
import Footer from './components/Footer'

import './styles/font-awesome/css/all.css'
import './styles/injection.css'

function App() {
  return (
    <div>
    <Header/>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route exact path="/" component={Home} />
        <Route path="/software" component={Software} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/blog" component={Blog} />
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
