import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Modal } from "react-native";

export default ({ onCancel, isVisible, onLevelSelected }) => {
  return (
    <Modal
      onRequestClose={onCancel}
      visible={isVisible}
      animationType="slide"
      transparent={true}
    >
      <View style={styles.frame}>
        <View style={styles.container}>
          <Text style={styles.title}>Choose Level</Text>
          <TouchableOpacity
            style={[styles.button, styles.bgEasy]}
            onPress={() => onLevelSelected(0.1)}
          >
            <Text style={styles.buttonLabel}>Easy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.bgMedium]}
            onPress={() => onLevelSelected(0.2)}
          >
            <Text style={styles.buttonLabel}>Medium</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.bgHard]}
            onPress={() => onLevelSelected(0.4)}
          >
            <Text style={styles.buttonLabel}>hard</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonCancel]}
            onPress={onCancel}
          >
            <Text style={styles.buttonCancelLabel}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  container: {
    backgroundColor: "#EEE",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  button: { marginTop: 10, padding: 5 },
  buttonLabel: { fontSize: 20, color: "#EEE", fontWeight: "bold" },
  bgEasy: { backgroundColor: "#49b65d" },
  bgMedium: { backgroundColor: "#2765F7" },
  bgHard: { backgroundColor: "#F26337" },
  buttonCancel: { backgroundColor: "#333", marginTop: 50 },
  buttonCancelLabel: { fontSize: 12, color: "#EEE", fontWeight: "bold" },
});
