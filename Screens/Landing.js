import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Landing() {
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/Images/welcome1.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>Keep you phone wallpaper lit up everday.</Text>
      <Text style={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget
        ex pharetra, tincidunt nibh et, sollicitudin ligula.
      </Text>
      <View style={styles.button}>
        <MaterialCommunityIcons name="chevron-right" size={35} color="white" />
      </View>
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
    top: 50,
    marginHorizontal: 35,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 120,
  },
  content: {
    fontSize: 16,
    marginTop: 25,
    fontFamily: "nunito-regular",
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
    position: "absolute",
    right: 0,
    marginHorizontal: 40,
    bottom: 60,
  },
});
