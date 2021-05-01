import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ImageView({ uri, navigation }) {
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: uri,
        }}
      />
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Home")}>
        <Ionicons name="chevron-back-outline" size={24} color="black" />
      </TouchableWithoutFeedback>
      {/* <View>
        
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    marginTop: 60,
    borderRadius: 10,
  },
});
