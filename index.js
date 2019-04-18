import React, { Component } from 'react'
import { render } from 'react-dom'
import Routes from './Routes'
import './style.css'

class App extends Component {

  render() {
    return (
      <Routes />
    );
  }
}

render(<App />, document.getElementById('root'));
