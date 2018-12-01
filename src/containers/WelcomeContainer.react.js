import React, {Component} from "react"
import {connect} from "react-redux"
import PropTypes from "prop-types"

import Welcome from "../components/Welcome.react"
import {ADD_USER} from "../actionTypes/userConstants"
import {asyncRequest as addUser} from "../util/asyncUtils"

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
  onSubmit() {
    this.props.addUser(ADD_USER, this.state.fullname)
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
  addUser: PropTypes.func,
  user: PropTypes.shape({fullname: PropTypes.string})
}

const mapStateToProps = ({user}) => ({user})

export default connect(
  mapStateToProps,
  {addUser}
)(WelcomeContainer)
