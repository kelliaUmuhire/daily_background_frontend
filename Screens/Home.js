import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { AppContainer } from "../App";
import axios from "axios";
import moment from "moment";

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [visibleImg, setVisibleImg] = useState("");
  const [styleInd, setStyleInd] = useState(0);
  const [userImages, setUserImages] = useState({});
  const { user, token } = React.useContext(AppContainer);

  useEffect(() => {
    axios
      .get("https://daily-background.herokuapp.com/api/users/latest", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        if (data.data.user_pic) {
          setUserImages(data.data.user_pic);
        }
      })
      .catch((err) => console.log(err));
  }, [userImages]);
  const renderItem = ({ item }) => {
    // let date = new Date(item.date).toString().split(" ");
    let date = moment(item.date)
      .format("dddd, MMMM Do YYYY")
      .toString()
      .split(" ");
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(true);
          setVisibleImg(item.regular);
        }}
      >
        <View style={{ flexDirection: styleInd === 1 ? "column" : "row" }}>
          <Image
            source={{
              uri: item.regular,
            }}
            style={styles.image2}
          />
          <Text
            style={styles.date}
          >{`${date[0]}\n${date[1]}  ${date[2]} `}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  const showModal = (
    <Modal
      animationType={"slide"}
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => {
        console.log("Modal has been closed.");
      }}
    >
      <View style={styles.modal}>
        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            right: 15,
            top: 30,
          }}
        >
          <TouchableOpacity>
            <AntDesign
              name="hearto"
              size={20}
              color="black"
              style={{ marginHorizontal: 50 }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <AntDesign name="closecircleo" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <Image
          style={{
            width: "100%",
            height: "90%",
            resizeMode: "cover",
            marginTop: 60,
            borderRadius: 10,
          }}
          source={{
            uri: visibleImg,
          }}
        />
      </View>
    </Modal>
  );
  return (
    <View style={styles.screen}>
      <View style={styles.head}>
        <Entypo name="menu" size={24} color="black" style={{ marginTop: 10 }} />
        <TouchableOpacity style={styles.button} pressDuration={0.1}>
          <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
            Change background
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.greet}>Hey Edwards!</Text>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(true);
          setVisibleImg(userImages.last_pics[0].regular);
        }}
      >
        <View style={{ marginTop: 50 }}>
          <Text style={{ fontSize: 18 }}>Today's wallpaper</Text>
          <Image
            source={{
              uri: userImages.last_pics
                ? userImages.last_pics[0].regular
                : "https://jakobzhao.github.io/geeviz/img/loading.gif",
            }}
            style={styles.image}
          />
        </View>
      </TouchableWithoutFeedback>

      <View style={{ marginTop: 30, marginBottom: 80 }}>
        <Text style={{ fontSize: 18 }}>Recent this week</Text>
        <FlatList
          data={userImages.last_pics}
          contentContainerStyle={{ flexGrow: 0 }}
          keyExtractor={(item) => item._id}
          renderItem={renderItem}
          style={styles.flat}
        />
      </View>
      {showModal}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 50,
    paddingBottom: 80,
    paddingHorizontal: 15,
    // marginBottom: 40,
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#FF6C65",
    borderRadius: 10,
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
  greet: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50,
  },
  image: {
    width: 418,
    height: 200,
    marginTop: 12,
    borderRadius: 10,
  },
  // imageCont1: {
  //   flexDirection: styleInd === 1 ? "column" : "row",
  // },
  image2: {
    flex: 1,
    height: 200,
    marginTop: 12,
    borderRadius: 10,
  },
  date: {
    width: 80,
    marginTop: 100,
    marginLeft: 5,
  },
  flat: {
    marginTop: 12,
    // height: "60%",
    marginBottom: 320,
    flexGrow: 0,
  },
  modal: {
    flex: 1,
    backgroundColor: "#262626",
    padding: 10,
  },
  touchableButton: {
    width: "70%",
    padding: 10,
    backgroundColor: "#f06292",
    marginBottom: 10,
    marginTop: 30,
  },
});
