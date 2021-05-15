import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Profile() {
  return (
    <View style={styles.screen}>
      <View>
        {/* not done */}
        <Image source={require("../assets/bg-temp.jpg")} style={styles.image} />
        <Image source={require("../assets/user.jpg")} style={styles.profile} />
      </View>
      <Text>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 30,
  },
  imageContainer: {
    width: "100%",
    height: 50,
    overflow: "hidden",
    // position: "absolute",
    // top: 100,
    // marginHorizontal: 120,
  },
  image: {
    width: "100%",
    height: "45%",
  },
  profile: {
    borderRadius: "50%",
  },
  title: {
    fontWeight: "bold",
    // fontFamily: "nunito-bold",
    fontSize: 35,
    marginTop: 300,
    width: "80%",
  },
  content: {
    fontSize: 16,
    marginTop: 25,
  },
  button: {
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#FF6C65",
    backgroundColor: "#FF6C65",
    padding: 8,
    width: 50,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 280,
    marginTop: 80,
  },
});
