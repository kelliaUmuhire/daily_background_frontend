import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function Profile() {
  return (
    <View style={styles.screen}>
      <View style={styles.img_container}>
        <Image
          style={styles.bg_img}
          source={{
            uri: "https://images.pexels.com/photos/3721941/pexels-photo-3721941.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          }}
        />
        <Image
          style={styles.image}
          source={{
            uri: "https://wallpaperaccess.com/full/2213424.jpg",
          }}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.info__names}>Joe Don</Text>
        <View style={{ marginTop: 10, display: "flex", flexDirection: "row" }}>
          <Entypo name="location-pin" size={24} color="#FE6B68" />
          <Text style={{ marginTop: 3 }}>West CA</Text>
        </View>
      </View>
      <View style={{ marginTop: 50, paddingHorizontal: 20 }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>Favourites</Text>
        <View
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            marginTop: 20,
          }}
        >
          <View style={styles.tag}>
            <Text style={{ color: "#303030" }}>Food</Text>
          </View>
          <View style={styles.tag}>
            <Text style={{ color: "#303030" }}>Nature</Text>
          </View>
          <Entypo
            name="plus"
            size={20}
            color="#303030"
            style={{ marginTop: 7 }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  img_container: {
    width: "100%",
    height: 280,
    display: "flex",
    position: "relative",
  },
  image: {
    position: "absolute",
    width: 150,
    height: 150,
    marginVertical: 200,
    marginHorizontal: 120,
    // alignItems: "center",
    // width: "100%",
    // height: "100%",
    borderRadius: 200,
  },
  bg_img: {
    flex: 1,
  },
  info: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 90,
  },
  info__names: {
    fontWeight: "bold",
    fontSize: 20,
  },
  tag: {
    // borderRadius: 10,
    // paddingHorizontal: 20,
    // paddingVertical: 11,
    // shadowColor: "#ffbebd7e",
    // shadowOffset: { width: 0, height: 0 },
    // // shadowOpacity: 0.1,
    // shadowRadius: 2,
    // elevation: 3,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: "#ffbebd7e",
    marginRight: 15,
    marginTop: 2,
  },
});
