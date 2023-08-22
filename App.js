import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";

//import local components here
import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import WelcomeScreen from "./components/WelcomeScreen";

import MenuItemsScrollView from "./components/MenuItemsScrollView";
import MenuItems2 from "./components/MenuItems2.";
import MenuItems from "./components/MenuItems";
import Textinput from "./components/Textinput";
import LoginScreen from "./components/LoginScreen";
import Imagefront from "./components/Imagefront";
import Exercice from "./components/Exercice";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Exercice></Exercice>
      </View>

      <View style={styles.container2}>
        <LittleLemonFooter></LittleLemonFooter>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
  },
  container2: {
    backgroundColor: "#495E57",
  },
});
