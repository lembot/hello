import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/stuff">stuff</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/stuff">
            <div>stuff goes here</div>
          </Route>
          <Route path="/">
          <div>hello</div>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}



ReactDOM.render(<App/>, document.getElementById('root'))