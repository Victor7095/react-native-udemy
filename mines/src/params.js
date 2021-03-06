import { Dimensions } from "react-native";

const params = {
  blockSize: 30,
  borderSize: 5,
  fontSize: 15,
  headerRatio: 0.2,
  difficultyLevel: 0.1,
  getColumnsAmount() {
    const { width } = Dimensions.get("window");
    return Math.floor(width / this.blockSize);
  },
  getRowsAmount() {
    const { height } = Dimensions.get("window");
    const boardHeight = height - height * this.headerRatio;
    return Math.floor(boardHeight / this.blockSize);
  },
};

export default params;
