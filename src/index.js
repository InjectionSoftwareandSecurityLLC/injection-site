import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
require('./styles/injection.css');


const wrapper = document.getElementById('root')

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes />
  </BrowserRouter>
)

ReactDOM.render(<App />, wrapper)
