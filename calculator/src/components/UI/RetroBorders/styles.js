import { StyleSheet, Dimensions } from "react-native";
export default StyleSheet.create({
  LineVertical: {
    position: "absolute",
    height: (Dimensions.get("window").width / 4 - 20) * 0.1,
    backgroundColor: "#222",
    width: "100%",
  },
  LineHorizontal: {
    position: "absolute",
    height: "100%",
    backgroundColor: "#222",
    width: (Dimensions.get("window").width / 4 - 20) * 0.1,
  },
});
