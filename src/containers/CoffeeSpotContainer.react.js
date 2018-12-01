import React, {Component} from "react"
import {connect} from "react-redux"
import PropTypes from "prop-types"

import {asyncRequest} from "../util/asyncUtils"
import CoffeeSpot from "../components/CoffeeSpot.react"
import {COFFEE_SPOT_REVIEWS} from "../actionTypes/userConstants"
import venueReviews from "../../private/data/venue-reviews.json"

class CoffeeSpotContainer extends Component {
  constructor(props) {
    super(props)

    const spot = props.navigation.getParam("spot", {})

    this.state = {spot, spotReviews: props.reviews.spotReviews[spot.id] || {}}
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

  render() {
    return <CoffeeSpot {...this.state.spot} reviews={this.state.spotReviews?.reviews} />
  }
}

CoffeeSpotContainer.propTypes = {navigation: PropTypes.shape({getParam: PropTypes.func})}

const mapStateToProps = ({reviews}) => ({reviews})

export default connect(
  mapStateToProps,
  {asyncRequest}
)(CoffeeSpotContainer)
