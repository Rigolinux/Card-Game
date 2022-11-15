import * as React from "react";

import { Pressable, Text, StyleSheet } from "react-native";

export default function Card({ onPress, isTurned, children }) {
  return (
    <Pressable onPress={onPress} style={isTurned ? styles.cardUp : styles.cardDown}>
      {isTurned ? (
        <Text style={styles.text}>{children}</Text>
      ) : (
        <Text style={styles.text}>?</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardUp: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1e293b",
  },
  cardDown: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 25,
    borderWidth: 10,
    borderColor: "#334155",
    backgroundColor: "#1e293b",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 46,
    color: "#334155",
  },
});
