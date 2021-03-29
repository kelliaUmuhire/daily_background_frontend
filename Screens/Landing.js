import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Landing({ navigation }) {
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/Images/welcome1.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>
        Keep your phone wallpaper lit up everday.
      </Text>
      <Text style={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget
        ex pharetra, tincidunt nibh et, sollicitudin ligula.
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <View style={styles.button}>
          <MaterialCommunityIcons
            name="chevron-right"
            size={35}
            color="white"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    padding: 30,
  },
  imageContainer: {
    width: 220,
    height: 220,
    overflow: "hidden",
    position: "absolute",
    top: 100,
    marginHorizontal: 120,
  },
  image: {
    width: "100%",
    height: "100%",
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
    marginHorizontal: 320,
    marginTop: 80,
  },
});
