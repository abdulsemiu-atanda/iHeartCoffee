import React, {Component} from "react"
import {connect} from "react-redux"
import {BackHandler} from "react-native"
import {NavigationActions} from "react-navigation"
import {reduxifyNavigator} from "react-navigation-redux-helpers"
import PropTypes from "prop-types"

import AppNavigator from "./index"

const AppNavigation = reduxifyNavigator(AppNavigator, "root")

class ReduxNavigation extends Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress)
  }

  onBackPress() {
    const {dispatch, nav} = this.props

    if (nav.index === 0) return false

    dispatch(NavigationActions.back())
    return true
  }

  render() {
    return <AppNavigation dispatch={this.props.dispatch} state={this.props.nav} />
  }
}

ReduxNavigation.propTypes = {
  dispatch: PropTypes.func,
  nav: PropTypes.shape({index: PropTypes.number})
}

const mapStateToProps = ({nav}) => ({nav})

export default connect(mapStateToProps)(ReduxNavigation)
