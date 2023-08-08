import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function LittleLemonFooter() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 18,
          color: "black",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        All rights reserved by Little Lemon, 2022
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    backgroundColor: "#F4CE14",
  },
});
