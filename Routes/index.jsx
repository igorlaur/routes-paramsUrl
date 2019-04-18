import React from 'react'
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import Home from '../Views/Home'
import NextPage from '../Views/NextPage'

export default class Routes extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
        <section> 
          <ul>
            <Link to="/">Cursos</Link>
            <ul>
              <li><Link to="/cursos/desenvolvimento">Desenvolvimento</Link></li>
              <li><Link to="/cursos/design">Design</Link></li>
              <li><Link to="/cursos/react">React</Link></li>
            </ul>
          </ul>

          <Route exact path="/" component={Home}/>
          <Route path="/nextPage" component={NextPage} />
          <Route path="/cursos/:categoria" render={ ({match}) => (match.params.categoria) }/>
          </section>
        </Switch>
      </BrowserRouter>
    )
  }
}