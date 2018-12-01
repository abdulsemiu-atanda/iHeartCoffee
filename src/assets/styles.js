import {StyleSheet, Dimensions} from "react-native"
import colors from "./colors"

const {height, width} = Dimensions.get("window")

export const welcomeStyles = StyleSheet.create({
  button: {
    alignSelf: "center",
    backgroundColor: colors.coffee,
    borderRadius: (width * 0.7) / 2,
    height: height * 0.04,
    justifyContent: "center",
    marginTop: height * 0.01,
    padding: 5,
    width: width * 0.7
  },
  buttonText: {
    color: colors.actuallyWhite,
    textAlign: "center"
  },
  container: {
    flex: 1,
    backgroundColor: colors.lightCoffee,
    justifyContent: "center"
  },
  greeting: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 10
  },
  input: {
    alignSelf: "center",
    borderWidth: 1,
    borderColor: colors.grey,
    marginBottom: 10,
    height: height * 0.05,
    width: width * 0.6,
    padding: 5
  },
  instruction: {
    textAlign: "center",
    fontSize: 14,
    marginBottom: 10
  }
})

export const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightCoffee,
    height: height * 0.1,
    flexDirection: "row",
    width,
    justifyContent: "center"
  },
  title: {
    color: colors.coffee,
    fontWeight: "600",
    marginTop: 40
  }
})

export const coffeeSpotStyles = StyleSheet.create({
  contact: {
    alignSelf: "center",
    borderRadius: 20,
    backgroundColor: colors.kindaGreen,
    height: 40,
    marginTop: 10,
    width: 40
  },
  contactIcon: {marginLeft: 9, marginTop: 4},
  container: {
    height: height * 0.3,
    marginLeft: 10,
    marginRight: 10,
    width: width * 0.95
  },
  image: {
    height: height * 0.18,
    marginBottom: 10,
    width: width * 0.95
  },
  infoImage: {
    height: height * 0.6,
    width
  },
  greeting: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 10,
    marginBottom: 10
  },
  highlight: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  ranking: {
    alignItems: "center"
  },
  rankingIcon: {
    marginTop: 5
  },
  rankingText: {
    fontSize: 10,
    fontWeight: "400"
  },
  rating: {
    width: width * 0.2
  },
  spotDetails: {
    borderBottomColor: colors.lightCoffee,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 7
  },
  spotName: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 15
  }
})

export const reviewsStyles = StyleSheet.create({
  container: {padding: 7},
  heading: {
    fontSize: 18,
    fontWeight: "600"
  },
  review: {marginTop: 10},
  timestamp: {alignSelf: "flex-end", marginTop: 5},
  user: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "flex-start"
  },
  userImage: {
    borderRadius: 30,
    height: 60,
    width: 60
  },
  username: {
    fontWeight: "600",
    marginLeft: 10,
    marginTop: 25
  }
})
