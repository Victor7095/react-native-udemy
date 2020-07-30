import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Display from "./components/Display";
import Button from "./components/Button";

export default function App() {
  const [firstValue, setFirstValue] = useState("0");
  const [secondValue, setSecondValue] = useState(undefined);
  const [operation, setOperation] = useState(undefined);
  const [displayValue, setDisplayValue] = useState("0");
  const [prevAction, setPrevAction] = useState(undefined);

  const addDigit = (digit) => {
    let newValue = (!operation ? firstValue : secondValue) ?? "0";
    if (digit === "." && newValue.includes(".")) return;
    if (newValue == "0" && digit != 0 && digit != ".") {
      newValue = `${digit}`;
    } else if (newValue != 0 || digit != 0) newValue = `${newValue}${digit}`;
    updateDisplay(newValue);
  };

  const clearDisplay = () => {
    setFirstValue("0");
    setSecondValue(undefined);
    setDisplayValue("0");
    setOperation(undefined);
    setPrevAction(undefined);
  };

  const updateDisplay = (newValue) => {
    if (!operation) setFirstValue(newValue);
    else setSecondValue(newValue);
    setDisplayValue(newValue);
  };

  const setSelectedOperation = (op) => {
    if (!isNaN(firstValue) && !isNaN(secondValue) && prevAction != "=") {
      const result = binaryOperation();
      setFirstValue(result);
      setDisplayValue(result);
    }
    setSecondValue(undefined);
    setOperation(op);
    setPrevAction(undefined);
  };

  const binaryOperation = () => {
    if (!operation) return;
    const operations = {
      "+": () => +firstValue + +secondValue,
      "-": () => +firstValue - +secondValue,
      "*": () => +firstValue * +secondValue,
      "/": () => +firstValue / +secondValue,
    };
    const result = operations[operation]();
    return result;
  };

  const unaryOperation = (op) => {
    let newValue = (!operation ? firstValue : secondValue) ?? 0;
    if (op === "%") newValue /= 100;
    if (op === "+/-") newValue *= -1;
    updateDisplay();
  };

  const equals = () => {
    const result = binaryOperation();
    setFirstValue(result);
    setDisplayValue(result);
    setPrevAction("=");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.buttons}>
        <Button color="lightGray" onPressed={clearDisplay}>
          AC
        </Button>
        <Button color="lightGray" onPressed={() => unaryOperation("+/-")}>
          +/-
        </Button>
        <Button color="lightGray" onPressed={() => unaryOperation("%")}>
          %
        </Button>
        <Button
          color="orange"
          onPressed={() => setSelectedOperation("/")}
          selected={operation === "/"}
        >
          /
        </Button>
        <Button onPressed={() => addDigit(7)}>7</Button>
        <Button onPressed={() => addDigit(8)}>8</Button>
        <Button onPressed={() => addDigit(9)}>9</Button>
        <Button
          color="orange"
          onPressed={() => setSelectedOperation("*")}
          selected={operation === "*"}
        >
          X
        </Button>
        <Button onPressed={() => addDigit(4)}>4</Button>
        <Button onPressed={() => addDigit(5)}>5</Button>
        <Button onPressed={() => addDigit(6)}>6</Button>
        <Button
          color="orange"
          onPressed={() => setSelectedOperation("-")}
          selected={operation === "-"}
        >
          -
        </Button>
        <Button onPressed={() => addDigit(1)}>1</Button>
        <Button onPressed={() => addDigit(2)}>2</Button>
        <Button onPressed={() => addDigit(3)}>3</Button>
        <Button
          color="orange"
          onPressed={() => setSelectedOperation("+")}
          selected={operation === "+"}
        >
          +
        </Button>
        <Button onPressed={() => addDigit(0)} big>
          0
        </Button>
        <Button onPressed={() => addDigit(".")}>,</Button>
        <Button color="orange" onPressed={equals}>
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
