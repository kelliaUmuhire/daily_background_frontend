import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BodyText from "./Text/BodyText";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function Menu() {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Ionicons
          name="settings-outline"
          size={24}
          color="#EA4E4E"
          style={styles.icon}
        />
        <BodyText style={styles.text}>Settings</BodyText>
      </View>
      <View style={styles.container}>
        <Ionicons
          name="ios-help-circle-outline"
          size={24}
          color="#EA4E4E"
          style={styles.icon}
        />
        <BodyText style={styles.text}>Help</BodyText>
      </View>
      <View style={styles.container}>
        <MaterialIcons
          name="feedback"
          size={24}
          color="#EA4E4E"
          style={styles.icon}
        />
        <BodyText style={styles.text}>Feedback</BodyText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    position: "absolute",
    top: 40,
    marginLeft: 5,
    // borderWidth: 1,
    paddingVertical: 20,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 12,
  },
  text: {
    color: "#494949",
    fontSize: 18,
    padding: 5,
  },
  container: {
    flexDirection: "row",
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  borders: {
    borderWidth: 1,
    borderRightColor: "#FFFFFF",
    borderLeftColor: "#FFFFFF",
    borderTopColor: "#DBDBDB",
    borderBottomColor: "#FFFFFF",
  },
  icon: {
    marginTop: 5,
    marginRight: 10,
  },
});
