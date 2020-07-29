import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Display from "./components/Display";
import Button from "./components/Button";

export default function App() {
  const [displayValue, setDisplayValue] = useState(0);

  const addDigit = (num) => {
    if (displayValue == 0 && num != 0) setDisplayValue(`${num}`);
    else if (displayValue != 0 || num != 0)
      setDisplayValue(`${displayValue}${num}`);
  };

  const clearDisplay = () => {
    setDisplayValue(0);
  };

  const setOperation = (operation) => {

  }

  return (
    <SafeAreaView style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.buttons}>
        <Button color="lightGray" onPressed={clearDisplay}>
          AC
        </Button>
        <Button color="lightGray" onPressed={() => {}}>
          +/-
        </Button>
        <Button color="lightGray" onPressed={() => {}}>
          %
        </Button>
        <Button color="orange" onPressed={() => setOperation("/")}>
          /
        </Button>
        <Button onPressed={() => addDigit(7)}>7</Button>
        <Button onPressed={() => addDigit(8)}>8</Button>
        <Button onPressed={() => addDigit(9)}>9</Button>
        <Button color="orange" onPressed={() => setOperation("*")}>
          X
        </Button>
        <Button onPressed={() => addDigit(4)}>4</Button>
        <Button onPressed={() => addDigit(5)}>5</Button>
        <Button onPressed={() => addDigit(6)}>6</Button>
        <Button color="orange" onPressed={() => setOperation("-")}>
          -
        </Button>
        <Button onPressed={() => addDigit(1)}>1</Button>
        <Button onPressed={() => addDigit(2)}>2</Button>
        <Button onPressed={() => addDigit(3)}>3</Button>
        <Button color="orange" onPressed={() => setOperation("+")}>
          +
        </Button>
        <Button onPressed={() => addDigit(0)} big>
          0
        </Button>
        <Button onPressed={() => {}}>,</Button>
        <Button color="orange" onPressed={() => {}}>
          =
        </Button>
        <StatusBar style="light" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
});
