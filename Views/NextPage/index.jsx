import React from 'react'
import { Route, Link } from 'react-router-dom'

export default class NextPage extends React.Component {
  render () {
    return (
      <Route>
        <p>Seja bem-vindo a nova página</p>
        <Link to="/">Voltar</Link>
      </ Route>
    )
  }
}