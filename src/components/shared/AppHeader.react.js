import React from "react"
import {View, Text} from "react-native"

import {headerStyles} from "../../assets/styles"

const AppHeader = () => (
  <View style={headerStyles.container}>
    <Text style={headerStyles.title}>iHeartCoffee</Text>
  </View>
)

export default AppHeader
