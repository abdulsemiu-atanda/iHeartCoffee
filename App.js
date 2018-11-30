import React, {Component} from "react"
import {createLogger} from 'redux-logger'
import {createStore, applyMiddleware} from "redux"
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import {appNavigatorMiddleware} from './src/navigation'
import AppNavigationWithState from "./src/navigation/ReduxNavigation.react"
import rootReducer from './src/reducers'

const reduxMiddlewares = () => {
  const applicationMiddlewares = [appNavigatorMiddleware, thunk]

  if (__DEV__)
    applicationMiddlewares.push(createLogger())

  return applicationMiddlewares
}

const store = createStore(rootReducer, applyMiddleware(...reduxMiddlewares()))

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigationWithState />
      </Provider>
    )
  }
}

export default Root

