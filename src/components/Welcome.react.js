import React from "react"
import {View, Text, TextInput, TouchableHighlight, ActivityIndicator} from "react-native"
import PropTypes from "prop-types"
import {welcomeStyles} from "../assets/styles"
import colors from "../assets/colors"

const Welcome = ({value, user, onChangeText, onSubmit}) => (
  <View style={welcomeStyles.container}>
    <Text style={welcomeStyles.greeting}>Welcome to iHeartCoffee</Text>
    <Text style={welcomeStyles.instruction}>
      Please enter your name below to have a personalized experience.
    </Text>
    <TextInput
      style={welcomeStyles.input}
      placeholder='James Bond'
      value={value}
      onChangeText={onChangeText}
    />
    <TouchableHighlight disabled={user.loading} onPress={onSubmit} style={welcomeStyles.button}>
      {user.loading ? (
        <ActivityIndicator size='large' color={colors.lightCoffee} />
      ) : (
        <Text style={welcomeStyles.buttonText}>Check out Coffee spots near me!</Text>
      )}
    </TouchableHighlight>
  </View>
)

Welcome.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  onSubmit: PropTypes.func,
  user: PropTypes.shape({loading: PropTypes.bool})
}

export default Welcome
