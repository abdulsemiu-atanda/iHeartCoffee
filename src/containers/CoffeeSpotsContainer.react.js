import React, {Component} from "react"
import {ListView, View, Text, ActivityIndicator} from "react-native"
import {connect} from "react-redux"
import PropTypes from "prop-types"

import CoffeeSpotsCard from "../components/CoffeeSpotCard.react"
import {coffeeSpotStyles} from "../assets/styles"
import colors from "../assets/colors"

class CoffeeSpotsContainer extends Component {
  constructor(props) {
    super(props)

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    this.state = {coffee: props.coffee, dataSource: ds.cloneWithRows(props.coffee.spots)}
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    if (nextProps.coffee.spots.length !== prevState.coffee.spots.length)
      return {coffee: prevState.coffee, dataSource: ds.cloneWithRows(nextProps.coffee.spots)}

    return null
  }

  render() {
    const {loading} = this.props.coffee

    if (loading) {
      return <ActivityIndicator size='large' animating={loading} color={colors.lightCoffee} />
    } else {
      return (
        <View>
          <Text style={coffeeSpotStyles.greeting}>
            Hi {this.props.user.fullname.trim() || "Robot"}.
          </Text>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={spot => <CoffeeSpotsCard {...spot} />}
            enableEmptySections
          />
        </View>
      )
    }
  }
}

CoffeeSpotsContainer.propTypes = {
  coffee: PropTypes.shape({spots: PropTypes.arrayOf(PropTypes.object), loading: PropTypes.bool}),
  user: PropTypes.shape({fullname: PropTypes.string})
}

const mapStateToProps = ({user, coffee}) => ({user, coffee})

export default connect(mapStateToProps)(CoffeeSpotsContainer)
