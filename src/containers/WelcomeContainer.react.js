import React, {Component} from "react"
import {connect} from "react-redux"
import PropTypes from "prop-types"

import {ADD_USER, COFFEE_SPOT} from "../actionTypes/userConstants"
import {asyncRequest} from "../util/asyncUtils"
import coffeeSpots from "../../private/data/venues-search.json"
import Welcome from "../components/Welcome.react"

class WelcomeContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {fullname: props.user.fullname}

    this.onChangeText = this.onChangeText.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  /**
   * Handles user input in welcome screen
   * @param {String} text
   * @returns {void}
   */
  onChangeText(text) {
    this.setState({fullname: text})
  }

  /**
   * Adds user input to store
   * @param {String} text
   * @returns {void}
   */
  async onSubmit() {
    const response = await this.props.asyncRequest(ADD_USER, this.state.fullname)

    if (response) {
      this.props.asyncRequest(COFFEE_SPOT, coffeeSpots, 4000)
      this.props.navigation.navigate("Spots")
    }
  }

  render() {
    return (
      <Welcome
        value={this.state.fullname}
        onChangeText={this.onChangeText}
        onSubmit={this.onSubmit}
        user={this.props.user}
      />
    )
  }
}

WelcomeContainer.propTypes = {
  asyncRequest: PropTypes.func,
  navigation: PropTypes.shape({navigate: PropTypes.func}),
  user: PropTypes.shape({fullname: PropTypes.string})
}

const mapStateToProps = ({user}) => ({user})

export default connect(
  mapStateToProps,
  {asyncRequest}
)(WelcomeContainer)
