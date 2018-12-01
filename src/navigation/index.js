import {createStackNavigator} from "react-navigation"
import {createReactNavigationReduxMiddleware} from "react-navigation-redux-helpers"

import AppHeader from "../components/shared/AppHeader.react"
import CoffeeSpotsContainer from "../containers/CoffeeSpotsContainer.react"
import Welcome from "../containers/WelcomeContainer.react"

const AppNavigator = createStackNavigator({
  Home: {
    screen: Welcome,
    navigationOptions: {header: null}
  },
  Spots: {
    screen: CoffeeSpotsContainer,
    navigationOptions: {header: AppHeader}
  }
})

export const appNavigatorMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
)

export default AppNavigator
