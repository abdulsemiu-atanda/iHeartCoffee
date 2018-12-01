import React from "react"
import {View, Text, Image, TouchableOpacity} from "react-native"
import PropTypes from "prop-types"

import {coffeeSpotStyles} from "../assets/styles"

const CoffeeSpotCard = ({image_url, name}) => (
  <TouchableOpacity style={coffeeSpotStyles.container}>
    <Image style={coffeeSpotStyles.image} source={{uri: image_url}} />
    <Text>{name}</Text>
  </TouchableOpacity>
)

CoffeeSpotCard.propTypes = {image_url: PropTypes.string, name: PropTypes.string}

export default CoffeeSpotCard
