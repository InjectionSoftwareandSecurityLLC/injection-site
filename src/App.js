import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/views/Home'
import About from './components/views/About'

function App() {
  return (
    <div>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
    </BrowserRouter>
    </div>
  );
}

export default App;
