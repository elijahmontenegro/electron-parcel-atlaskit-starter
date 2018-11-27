import React, { Component } from 'react'
import { Route } from 'react-router'
import App from './App'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

const initialState = {}
const store = configureStore(initialState, history)

export default class MainRouter extends Component {

  render () {
    return (
      <App />
    )
  }
}
