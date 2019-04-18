import React from 'react'
import { Route, Link } from 'react-router-dom'

export default class Home extends React.Component {
  render () {
    return (
      <Route> 
        <br/> <br/>
        <p>Seja bem-vindo!</p>
        <Link to="/nextPage">Pŕoxima página</Link>
      </Route>
    )
  }
}