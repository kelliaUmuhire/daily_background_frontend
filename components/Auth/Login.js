import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { AppContainer } from "../../App";
import TitleText from "../Text/TitleText";
import BodyText from "../Text/BodyText";
import jwt_decode from "jwt-decode";

export default function Login({ navigation }) {
  const { isAuthenticated, authenticate, setToken, setUser } =
    React.useContext(AppContainer);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    await axios
      .post("https://daily-background.herokuapp.com/api/users/login", {
        email_user_name: email,
        password,
      })
      .then(async (data) => {
        setLoading(false);
        if (data.data.status == 200) {
          try {
            await AsyncStorage.setItem("@token", data.data.data);
            authenticate(true);
            setToken(data.data.data);
            setUser(jwt_decode(data.data.data));

            // navigation.navigate("")
          } catch (e) {
            setError(e);
          }
        } else {
          setError(data.data.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
    // axios.post('')
  };
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/Images/logo.png")}
          style={styles.image}
        />
      </View>
      <TitleText style={styles.title}>Login</TitleText>
      <BodyText style={error ? styles.error : { display: "none" }}>
        {error}
      </BodyText>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          style={styles.textInput}
          onChangeText={setEmail}
        />
        <Image
          source={require("../../assets/Images/mail.png")}
          style={{ marginTop: 30 }}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Password"
          style={styles.textInput}
          onChangeText={setPassword}
        />
        <Image
          source={require("../../assets/Images/key.png")}
          style={{ marginTop: 30 }}
        />
      </View>
      <BodyText style={styles.forgot}>Forgot password?</BodyText>
      <TouchableOpacity onPress={handleSubmit}>
        <View style={styles.button}>
          <BodyText style={styles.text}>Sign in</BodyText>
        </View>
      </TouchableOpacity>
      <View style={styles.optionContainer}>
        <BodyText>Or Login with</BodyText>
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
        <BodyText>Don’t have an account? </BodyText>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <BodyText
            style={{ textDecorationLine: "underline", fontWeight: "bold" }}
          >
            Sign Up
          </BodyText>
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
    marginHorizontal: 110,
    marginVertical: 50,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    // fontWeight: "bold",
    // // fontFamily: "nunito-bold",
    fontSize: 30,
    marginHorizontal: 120,
    marginBottom: 50,
  },
  inputContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#AEAEAE",
    paddingBottom: 5,
    width: "95%",
    // marginHorizontal: 5,
    // marginTop: 30,
  },
  textInput: {
    flex: 1,
    marginHorizontal: 5,
    marginHorizontal: 5,
    marginTop: 30,
  },
  forgot: {
    fontSize: 12,
    fontWeight: "normal",
    marginTop: 15,
    marginLeft: 220,
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
    marginHorizontal: 60,
  },
  error: {
    color: "#ff4d4d",
    marginTop: 5,
    marginLeft: 5,
  },
});
