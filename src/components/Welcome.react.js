import React from "react"
import {View, Text, TextInput, TouchableHighlight} from "react-native"
import PropTypes from "prop-types"
import {welcomeStyles} from "../assets/styles"

const Welcome = props => (
  <View style={welcomeStyles.container}>
    <Text>
      Welcome to iHeartCoffe, Please enter your name below to have a personalized experience.
    </Text>
    <TextInput placeholder='James Bond' value={props.value} onChangeText={props.onChangeText} />
    <TouchableHighlight>
      <Text>Check out Coffee spots near me!</Text>
    </TouchableHighlight>
  </View>
)

Welcome.propTypes = {value: PropTypes.string, onChangeText: PropTypes.func}

export default Welcome
