import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Pressable,
} from "react-native";

export default function WelcomeScreen({ navigation }) {
  return (
    <ScrollView indicatorStyle={"white"} style={styles.container}>
      <Text style={styles.title1}>Welcome to Little Lemon</Text>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={require("../img/logo.png")}
          resizeMode="cover"
        />

        <Text style={styles.title2}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us!
        </Text>
      </View>
      <Button title="Go to Menu" onPress={() => navigation.navigate("Menu")} />

      {/*<Pressable onPress={() => navigation.navigate('Menu')}> 
        <Text style={styles.buttonText}>View Menu</Text> 
      </Pressable> */}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 30,
    padding: 15,
  },
  image: {
    width: 90,
    height: 90,
    alignSelf: "center",
  },
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
    fontSize: 20,
  },
});
