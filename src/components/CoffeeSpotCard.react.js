import React from "react"
import {View, Text, Image, TouchableOpacity, Platform} from "react-native"
import PropTypes from "prop-types"
import StarRating from "react-native-star-rating"

import {affordability} from "../util/helpers"
import {coffeeSpotStyles} from "../assets/styles"
import colors from "../assets/colors"

const CoffeeSpotCard = ({image_url, name, price, rating, viewSpot, ...otherProps}) => (
  <TouchableOpacity
    onPress={() => viewSpot({image_url, name, price, rating, ...otherProps})}
    style={coffeeSpotStyles.container}>
    <Image style={coffeeSpotStyles.image} source={{uri: image_url}} />
    <Text>{name}</Text>
    <View style={coffeeSpotStyles.highlight}>
      <StarRating
        containerStyle={coffeeSpotStyles.rating}
        disabled
        emptyStar={Platform.OS === "ios" ? "ios-star-outline" : "md-star-outline"}
        fullStar={Platform.OS === "ios" ? "ios-star" : "md-star"}
        fullStarColor={colors.lightCoffee}
        halfStar={Platform.OS === "ios" ? "ios-star-half" : "md-star-half"}
        halfStarColor={colors.lightCoffee}
        iconSet={"Ionicons"}
        maxStars={5}
        rating={rating}
        starSize={16}
      />
      <Text>{affordability(price)}</Text>
    </View>
  </TouchableOpacity>
)

CoffeeSpotCard.propTypes = {
  image_url: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  rating: PropTypes.number,
  viewSpot: PropTypes.func
}

export default CoffeeSpotCard
