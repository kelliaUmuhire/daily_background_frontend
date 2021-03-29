import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Login() {
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/Images/logo.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Email" style={{ flex: 1 }} />
        <Image source={require("../../assets/Images/mail.png")} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Password" style={{ flex: 1 }} />
        <Image source={require("../../assets/Images/key.png")} />
      </View>
      <Text style={styles.forgot}>Forgot password?</Text>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.text}>Sign in</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.optionContainer}>
        <Text>Or Login with</Text>
        <View style={styles.optionImages}>
          <Image
            source={require("../../assets/Images/google.png")}
            style={styles.optionImage}
          />
          <Image
            source={require("../../assets/Images/apple.png")}
            style={styles.optionImage}
          />
        </View>
      </View>
      <View style={styles.signup}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity>
          <Text style={{ textDecorationLine: "underline", fontWeight: "bold" }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 30,
  },
  imageContainer: {
    width: 100,
    height: 80,
    overflow: "hidden",
    marginHorizontal: 140,
    marginVertical: 70,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontWeight: "bold",
    // fontFamily: "nunito-bold",
    fontSize: 30,
    marginHorizontal: 150,
    marginBottom: 50,
  },
  inputContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#AEAEAE",
    paddingBottom: 5,
    width: "95%",
    marginHorizontal: 5,
    marginTop: 30,
  },
  forgot: {
    fontSize: 12,
    fontWeight: "normal",
    marginTop: 15,
    marginLeft: 280,
  },
  button: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FF6C65",
    backgroundColor: "#FF6C65",
    padding: 8,
    width: "95%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    // marginLeft: 15,
  },
  text: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 18,
  },
  optionImages: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    marginLeft: 18,
  },
  optionContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  optionImage: {
    width: 25,
    height: 25,
    marginRight: 20,
  },
  signup: {
    flexDirection: "row",
    marginTop: 50,
    marginHorizontal: 100,
  },
});
