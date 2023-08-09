import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

//import local components here
import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import WelcomeScreen from "./components/WelcomeScreen";
import MenuItems from "./components/MenuItems";
export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader></LittleLemonHeader>
        <MenuItems></MenuItems>
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
