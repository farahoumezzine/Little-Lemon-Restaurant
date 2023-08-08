import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function WelcomeScreen() {
  return (
    <ScrollView indicatorStyle={"white"} style={styles.container}>
      <Text style={styles.title1}>Welcome to Little Lemon</Text>
      <Text style={styles.title2}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title1: {
    padding: 40,
    color: "white",
    textAlign: "center",
    fontSize: 27,
  },
  title2: {
    padding: 20,

    color: "white",
    textAlign: "center",
    fontSize: 40,
  },
});
