import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Register({ navigation }) {
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/Images/logo.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>Create account</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Username" style={{ flex: 1 }} />
        <Image source={require("../../assets/Images/person.png")} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Email" style={{ flex: 1 }} />
        <Image source={require("../../assets/Images/mail.png")} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Password" style={{ flex: 1 }} />
        <Image source={require("../../assets/Images/key.png")} />
      </View>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.text}>Sign in</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.optionContainer}>
        <Text>Or register with</Text>
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
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{ textDecorationLine: "underline", fontWeight: "bold" }}>
            Sign In
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
    marginVertical: 60,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontWeight: "bold",
    // fontFamily: "nunito-bold",
    fontSize: 30,
    marginHorizontal: 90,
    marginBottom: 40,
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
    marginTop: 65,
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
