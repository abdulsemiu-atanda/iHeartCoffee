import React from "react"
import {View, Text, Image} from "react-native"
import moment from "moment"
import PropTypes from "prop-types"

import {reviewsStyles} from "../assets/styles"

const Review = ({text, time_created, user}) => (
  <View>
    <View style={reviewsStyles.user}>
      <Image style={reviewsStyles.userImage} source={{uri: user.image_url}} />
      <Text style={reviewsStyles.username}>{user.name}</Text>
    </View>
    <Text style={reviewsStyles.review}>{text}</Text>
    <Text style={reviewsStyles.timestamp}>{moment(time_created).fromNow()}</Text>
  </View>
)

Review.propTypes = {
  text: PropTypes.string,
  time_created: PropTypes.string,
  user: PropTypes.shape({image_url: PropTypes.string, name: PropTypes.string})
}

export default Review
