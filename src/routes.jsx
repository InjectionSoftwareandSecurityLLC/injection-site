import React from 'react'
import { Route } from 'react-router-dom'

// Import our components
import Navbar from './components/nav'

// Import pages
import Home from './components/views/home'
import About from './components/views/about'




export default class Routes extends React.Component {
  render () {
    return (
      <div className="wrapper">
        <Navbar />
        <Route exact={true} path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </div>
    )
  }
}