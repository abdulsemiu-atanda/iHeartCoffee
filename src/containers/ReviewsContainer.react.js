import React, {Component} from "react"
import {ActivityIndicator, View, ListView, Text} from "react-native"
import PropTypes from "prop-types"

import Reviews from "../components/Reviews.react"
import colors from "../assets/colors"
import {reviewsStyles} from "../assets/styles"

class ReviewsContainer extends Component {
  constructor(props) {
    super(props)

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    this.state = {dataSource: ds.cloneWithRows(props.reviews), reviews: props.reviews}
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    if (nextProps.reviews.length !== prevState.reviews.length)
      return {dataSource: ds.cloneWithRows(nextProps.reviews), reviews: nextProps.reviews}
    return null
  }

  render() {
    if (!this.props.reviews.length) {
      return (
        <ActivityIndicator
          animating={!this.props.reviews.length}
          size='large'
          color={colors.lightCoffee}
        />
      )
    } else {
      return (
        <View style={reviewsStyles.container}>
          <Text style={reviewsStyles.heading}>Reviews</Text>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={review => <Reviews {...review} />}
            enableEmptySections
          />
        </View>
      )
    }
  }
}

ReviewsContainer.propTypes = {
  review: PropTypes.arrayOf(PropTypes.object)
}

export default ReviewsContainer
