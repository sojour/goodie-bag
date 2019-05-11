import React, { Component } from 'react'
import ListCandies from './ListCandies'
import { connect } from 'react-redux'
import { getCandies } from '../reducers'
import { HashRouter, Route, Switch, Link } from 'react-router-dom'


class Root extends Component {
  componentDidMount() {
    this.props.getCandies()
  }
  render() {
    return (
      <HashRouter>
        <div>
          <nav>
            <Link to='/'>Goodie Bag</Link>
            <Link to='/candies'>All Candies</Link>
          </nav>
          <main>
            <h1>Welcome to the Goodie Bag!</h1>
            <p>What a nice home page for your goodies!</p>
          </main>
          <Switch>
            <Route exact path='/' />
            <Route exact path='/candies' component={ListCandies} />
          </Switch>
        </div>

      </HashRouter>
    )
  }
}

const mapDispatch = dispatch => ({
  getCandies: () => dispatch(getCandies())
})


export default connect(null, mapDispatch)(Root)
