import React from "react"
import {View, Text, Image, ScrollView, TouchableOpacity, Platform, Linking} from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import PropTypes from "prop-types"

import {coffeeSpotStyles} from "../assets/styles"
import colors from "../assets/colors"
import ReviewsContainer from "../containers/ReviewsContainer.react"

const CoffeeSpot = ({image_url, name, phone, setupReminder, reviews}) => (
  <ScrollView>
    <Image style={coffeeSpotStyles.infoImage} source={{uri: image_url}} />
    <View style={coffeeSpotStyles.spotDetails}>
      <Text style={coffeeSpotStyles.spotName}>{name}</Text>
      <TouchableOpacity style={coffeeSpotStyles.ranking}>
        <Icon
          style={coffeeSpotStyles.rankingIcon}
          name={Platform.OS === "ios" ? "ios-add-circle-outline" : "md-add-circle-outline"}
          size={32}
        />
        <Text style={coffeeSpotStyles.rankingText}>Add Ranking</Text>
      </TouchableOpacity>
    </View>
    <View style={coffeeSpotStyles.action}>
      <TouchableOpacity
        onPress={() => Linking.openURL(`tel:${phone}`)}
        style={coffeeSpotStyles.contact}>
        <Icon
          style={coffeeSpotStyles.contactIcon}
          name={Platform.OS === "ios" ? "ios-call" : "md-call"}
          size={32}
          color={colors.actuallyWhite}
        />
      </TouchableOpacity>
      <TouchableOpacity
        disabled={Platform.OS !== "ios"}
        onPress={setupReminder}
        style={coffeeSpotStyles.reminder}>
        <Icon
          style={coffeeSpotStyles.reminderIcon}
          color={colors.lightCoffee}
          name={Platform.OS === "ios" ? "ios-calendar" : "md-calendar"}
          size={32}
        />
        <Text style={coffeeSpotStyles.reminderText}>Setup reminder</Text>
      </TouchableOpacity>
    </View>
    <ReviewsContainer reviews={reviews} />
  </ScrollView>
)

CoffeeSpot.defaultProps = {reviews: []}

CoffeeSpot.propTypes = {
  image_url: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
  setupReminder: PropTypes.func,
  reviews: PropTypes.array
}

export default CoffeeSpot
