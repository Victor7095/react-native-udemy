import { StyleSheet, Dimensions } from "react-native";
export default StyleSheet.create({
  Button: {
    borderRadius: Dimensions.get("window").width / 8,
    height: Dimensions.get("window").width / 4 - 10,
    width: Dimensions.get("window").width / 4 - 10,
    backgroundColor: "#555555",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  ButtonBig: {
    borderRadius: Dimensions.get("window").width / 8,
    width: Dimensions.get("window").width / 2 - 10,
  },
  ButtonLightGray: {
    backgroundColor: "#bbbbbb",
  },
  ButtonOrange: {
    backgroundColor: "#ff9900",
  },
  ButtonSelected: {
    backgroundColor: "#fff",
  },
  ButtonText: {
    color: "#fff",
    padding: 20,
    fontSize: 40,
  },
  ButtonSelectedText: {
    color: "#ff9900",
  },
});
