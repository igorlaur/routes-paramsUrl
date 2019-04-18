import React from 'react'
import { Route, Link } from 'react-router-dom'
// import NextPage from '../NextPage'

export default class Home extends React.Component {
  render () {
    return (
      <Route>
        <p>Seja bem-vindo!</p>
        <Link to="/nextPage">Pŕoxima página</Link>
      </Route>
    )
  }
}