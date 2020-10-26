import { StyleSheet, Dimensions } from "react-native";
export default StyleSheet.create({
  Button: {
    height: Dimensions.get("window").width / 4 - 30,
    width: Dimensions.get("window").width / 4 - 30,
    backgroundColor: "#555555",
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
  },
  ButtonBig: {
    width: Dimensions.get("window").width / 2 - 30,
  },
  ButtonLightGray: {
    backgroundColor: "#bbbbbb",
  },
  ButtonLightRed: {
    backgroundColor: "#ff5555",
  },
  ButtonOrange: {
    backgroundColor: "#ff9900",
  },
  ButtonSelected: {
    backgroundColor: "#fff",
  },
  ButtonText: {
    color: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 10,
    fontSize: 50,
  },
  ButtonSelectedText: {
    color: "#ff9900",
  }
});
