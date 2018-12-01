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
    height: height * 0.2,
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
