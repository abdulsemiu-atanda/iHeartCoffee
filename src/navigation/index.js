import {createStackNavigator} from "react-navigation"
import {createReactNavigationReduxMiddleware} from "react-navigation-redux-helpers"

import Welcome from "../components/Welcome.react"

const AppNavigator = createStackNavigator({
  Home: {
    screen: Welcome
  }
})

export const appNavigatorMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
)

export default AppNavigator
