import React from "react";
import { View, Image, StyleSheet, Text, ScrollView } from "react-native";

const Exercice = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={require("../img/logo.png")}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={"Little Lemon Logo"}
        />
        <Text style={styles.title1}>Little Lemon</Text>
      </View>

      <Text style={styles.title}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 10,
  },
  title1: {
    marginTop: 16,
    paddingVertical: 10,
    paddingRight: 15,
    marginLeft: 10,
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },

  container: {
    flex: 1,
    padding: 24,
    marginTop: 25,
    backgroundColor: "#fff",
  },
  image: {
    width: 80,
    height: 80,
  },
  title: {
    marginTop: 16,
    paddingVertical: 10,
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Exercice;
