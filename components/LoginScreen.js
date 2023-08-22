import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  Pressable,
  View,
} from "react-native";
import React, { useState } from "react";

export default function LoginScreen() {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  const [showlogin, setshowlogin] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      {showlogin && <Text style={styles.regularText}>You are logged in!</Text>}

      {!showlogin && (
        <View>
          <Text style={styles.regularText}>Login to continue </Text>
          <TextInput
            style={styles.box}
            onChangeText={onChangeEmail}
            placeholder="Email"
            value={email}
            onFocus={() => Alert.alert("Email is focused")}
            onBlur={() => Alert.alert("Email is blurred")}
            clearButtonMode="always" //only on IOS
          ></TextInput>

          <TextInput
            style={styles.box}
            onChangeText={onChangePassword}
            placeholder="Password"
            secureTextEntry
            value={password}
          ></TextInput>
          <Pressable
            style={styles.containerpressable}
            onPress={() => {
              setshowlogin(!showlogin);
            }}
          >
            <Text style={styles.login}>Log in</Text>
          </Pressable>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  containerpressable: {
    margin: 120,
    backgroundColor: "#F4CE14",
    borderColor: "#F4CE14",
    borderWidth: 2,
    borderRadius: 20,
    marginVertical: 15,
  },
  login: {
    fontSize: 25,
    textAlign: "center",
    padding: 3,
  },
});
