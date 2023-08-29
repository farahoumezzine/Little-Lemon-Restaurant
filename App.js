import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  useColorScheme,
} from "react-native";

//import local components here
import LittleLemonHeader from "./components/LittleLemonHeader";
import * as React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import LittleLemonFooter from "./components/LittleLemonFooter";
import WelcomeScreen from "./components/WelcomeScreen";

import MenuItemsScrollView from "./components/MenuItemsScrollView";
import MenuItems2 from "./components/MenuItems2.";
import MenuItems from "./components/MenuItems";
import Textinput from "./components/Textinput";
import LoginScreen from "./components/LoginScreen";
import Imagefront from "./components/Imagefront";
import Exercice from "./components/Exercice";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();
  const MyTheme = {
    ...DefaultTheme,

    colors: {
      ...DefaultTheme.colors,

      background: "#495E57",
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <View style={styles.container}>
        <LittleLemonHeader />

        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerStyle: { backgroundColor: "#FBDABB" },
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ title: "Home", headerTitleAlign: "center" }}
          />
          <Stack.Screen name="Menu" component={MenuItems} />
        </Stack.Navigator>
      </View>

      <View>
        <LittleLemonFooter />
      </View>
    </NavigationContainer>
  );

  {
    /*    <>
      <View style={styles.container}>
        <LittleLemonHeader></LittleLemonHeader>
        <WelcomeScreen></WelcomeScreen>
      </View>

      <View style={styles.container2}>
        <LittleLemonFooter></LittleLemonFooter>
      </View>
    </> */
  }
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
