import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom'
require('./styles/test.css');

const wrapper = document.getElementById('root')

const App = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
)

ReactDOM.render(<App />, wrapper)