import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  useColorScheme,
  useWindowDimensions,
} from "react-native";

const Exercice = () => {
  const colorScheme = useColorScheme();
  const { width, height, fontScale } = useWindowDimensions();
  return (
    <ScrollView
      style={[
        styles.container,
        colorScheme === "light"
          ? { backgroundColor: "white" }
          : { backgroundColor: "black" },
      ]}
    >
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

      <Text style={styles.regular}>height: {height}</Text>
      <Text style={styles.regular}>width: {width}</Text>
      <Text style={styles.regular}>fontScale: {fontScale}</Text>

      <ScrollView style={styles.container1}>
        <Image
          style={styles.image2}
          source={require("../img/Picture1.png")}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={"Little Lemon Logo"}
        />
        <Image
          style={styles.image2}
          source={require("../img/Picture2.png")}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={"Little Lemon Logo"}
        />
        <Image
          style={styles.image2}
          source={require("../img/Picture3.png")}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={"Little Lemon Logo"}
        />
        <Image
          style={styles.image2}
          source={require("../img/Picture4.png")}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={"Little Lemon Logo"}
        />
      </ScrollView>
      <Text style={styles.regular}>Color Scheme: {colorScheme}</Text>
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
  image2: {
    width: 250,
    height: 300,
    margin: 30,
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
