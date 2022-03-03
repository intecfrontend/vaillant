import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button, Input, Image } from "react-native-elements";
import { auth } from "../FireBase";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({ headerBackTitle: "Login" });
  }, [navigation]);

  const register = () => {
    auth.createUserWithEmailAndPassword(email, password)
.then(authUser => {authUser.User.update({
displayName: name, photoURL: imageUrl || "https://nl.wikipedia.org/wiki/Avatar_(computer)#/media/Bestand:MyAvatar_(41).png",
      });})
      .catch(error => alert(error.message));
  };
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <View>
        <Text h3 style={{ marginBotton: 50 }}>
          Create a Signal account.
        </Text>
        <View style={styles.inputContainer}>
          <Input
            placeholder="Full Name"
            autofocus
            type="text"
            value={name}
            onChangeText={text => setName(text)}
          />
          <Input
            placeholder="Email"
            autofocus
            type="text"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <Input
            placeholder="Password"
            autofocus
            type="password"
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <Input
            placeholder="Profile Picture url (optional)"
            autofocus
            type="text"
            value={imageUrl}
            onChangeText={text => setImageUrl(text)}
          />
          <Button
            containerStyle={styles.button}
            onPress={register}
            title="Register"
          />
        </View>
      </View>
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white"
  },

  inputContainer: { width: 300 },
  button: { width: 200, margin: 10 }
});
export default RegisterScreen;
