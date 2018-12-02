import React, {Component} from "react"
import {AlertIOS, NativeModules} from "react-native"
import {connect} from "react-redux"
import PropTypes from "prop-types"

import {asyncRequest} from "../util/asyncUtils"
import CoffeeSpot from "../components/CoffeeSpot.react"
import {COFFEE_SPOT_REVIEWS} from "../actionTypes/userConstants"
import {GRANTED, NOT_GRANTED} from "../constants/permissions"
import venueReviews from "../../private/data/venue-reviews.json"

const {CalendarManager} = NativeModules

class CoffeeSpotContainer extends Component {
  constructor(props) {
    super(props)

    const spot = props.navigation.getParam("spot", {})

    this.state = {spot, spotReviews: props.reviews.spotReviews[spot.id] || {}}

    this.setupReminder = this.setupReminder.bind(this)
  }

  componentDidMount() {
    if (!this.state.spotReviews.length) {
      this.props.asyncRequest(COFFEE_SPOT_REVIEWS, {
        id: this.state.spot.id,
        reviews: venueReviews
      })
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const spot = nextProps.navigation.getParam("spot", {})
    const spotReviews = nextProps.reviews.spotReviews[spot.id] || {}

    if (Object.keys(spotReviews).length !== Object.keys(prevState.spotReviews).length)
      return {spot, spotReviews}
    return null
  }

  addReminderNotification() {
    CalendarManager.addEvent(
      this.state.spot.name,
      `Don't forget to vist ${this.state.spot.name} soon.`
    )
  }

  async setupReminder() {
    const permissions = await CalendarManager.checkPermission()

    if (permissions === NOT_GRANTED) {
      const response = this.requestNotificationPermission()

      if (response === GRANTED) this.addReminderNotification()
      else AlertIOS.alert("You have not granted notification permission at this time.")
    } else {
      this.addReminderNotification()
    }
  }

  async requestNotificationPermission() {
    const permissions = await CalendarManager.requestPermission()

    return permissions
  }

  render() {
    return (
      <CoffeeSpot
        {...this.state.spot}
        setupReminder={this.setupReminder}
        reviews={this.state.spotReviews?.reviews}
      />
    )
  }
}

CoffeeSpotContainer.propTypes = {navigation: PropTypes.shape({getParam: PropTypes.func})}

const mapStateToProps = ({reviews}) => ({reviews})

export default connect(
  mapStateToProps,
  {asyncRequest}
)(CoffeeSpotContainer)
