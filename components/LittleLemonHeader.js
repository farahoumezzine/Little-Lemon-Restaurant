import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          padding: 35,
          fontSize: 20,
          color: "black",
          fontWeight: "500",
          textAlign: "center",
        }}
        numberOfLines={3}
      >
        Welcome To
        <Text style={styles.text}> Little Lemon</Text> Restaurant
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    backgroundColor: "#F4CE14",
  },
  text: {
    fontWeight: "bold",
  },
});
