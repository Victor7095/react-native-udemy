import { StyleSheet, Dimensions } from "react-native";
export default StyleSheet.create({
  Button: {
    borderRadius: Dimensions.get("window").width / 8,
    height: Dimensions.get("window").width / 4,
    width: Dimensions.get("window").width / 4,
    backgroundColor: "#ff9900",
    alignItems: "center",
    justifyContent: "center",
  },
  ButtonText: {
    color: "#fff",
    padding: 20,
    fontSize: 40,
  },
});
