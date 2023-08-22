import React from "react";
import { View, Image, StyleSheet, Text, ScrollView } from "react-native";

const Imagefront = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Image
        style={styles.image}
        source={require("../img/Picture1.png")}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={"Little Lemon Logo"}
      />
      <Image
        style={styles.image}
        source={require("../img/Picture2.png")}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={"Little Lemon Logo"}
      />
      <Image
        style={styles.image}
        source={require("../img/Picture3.png")}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={"Little Lemon Logo"}
      />
      <Image
        style={styles.image}
        source={require("../img/Picture4.png")}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={"Little Lemon Logo"}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 300,
    resizeMode: "contain",
  },
  container: {
    flex: 1,
    padding: 24,
    marginTop: 25,
    backgroundColor: "#fff",
  },
  image: {
    width: 350,
    height: 250,
    borderRadius: 10,
    marginBottom: 5,
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

export default Imagefront;
