import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  TouchableWithoutFeedback,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { AppContainer } from "../App";
import axios from "axios";
import WallPaperManager from "react-native-wallpaper-manager";

import Pictures from "../components/Pictures";
import TitleText from "../components/Text/TitleText";
import Menu from "../components/Menu";

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [visibleImg, setVisibleImg] = useState("");
  const [userImages, setUserImages] = useState({});
  const [showMenu, setShowMenu] = useState(false);
  const [picToday, setPicToday] = useState(0);
  const { user, token } = React.useContext(AppContainer);
  const [loading, setLoading] = useState(true);

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
          let maxDate = data.data.user_pic.last_pics[0].date;
          let indic = -1;
          for (let i = 1; i < data.data.user_pic.last_pics.length; i++) {
            if (maxDate < data.data.user_pic.last_pics[i].date) {
              maxDate = data.data.user_pic.last_pics[i].date;
              indic = i;
            }
          }
          if (
            maxDate.toString().split("T")[0] ==
            new Date().toISOString().toString().split("T")[0]
          ) {
            setPicToday(indic);
          } else {
            changeBackground();
          }
          setLoading(false);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  const changeBackground = () => {
    axios
      .get("https://daily-background.herokuapp.com/api/users/load_new_image", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.data.last_pics) {
          let nowDate = new Date().toISOString().toString().split("T")[0];
          let picture = res.data.data.last_pics.findIndex(
            (x) => x.date.toString().split("T")[0] == nowDate
          );
          setPicToday(picture);
          setUserImages(res.data.data);
          // WallPaperManager.setWallpaper(
          //   { uri: res.data.data.last_pics[picture].regular },
          //   (res) => console.log(res)
          // );
        }
      })
      .catch((err) => console.log(err));
  };

  const setWallpaper = () => {
    const imgUrl =
      "https://images.unsplash.com/photo-1602452605960-c46e781e1ecf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max";
    // WallPaperManager.setWallpaper({ uri: imgUrl }, (res) => console.log(res))
    WallPaperManager.setWallpaper({ uri: imgUrl }, (res) => console.log(res));
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
            height: "100%",
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
    <>
      {!loading ? (
        <ScrollView style={styles.screen}>
          <View style={styles.head}>
            <TouchableWithoutFeedback onPress={() => setShowMenu(!showMenu)}>
              <Entypo
                name="menu"
                size={24}
                color="black"
                style={{ marginTop: 10 }}
              />
            </TouchableWithoutFeedback>
            <TouchableOpacity
              style={styles.button}
              pressDuration={0.1}
              onPress={() => setWallpaper()}
            >
              <TitleText style={{ color: "#ffffff", fontWeight: "bold" }}>
                Change background
              </TitleText>
            </TouchableOpacity>
          </View>
          {showMenu && <Menu />}
          <TitleText style={styles.greet}>Hey {user.user_name}</TitleText>
          <TouchableWithoutFeedback
            onPress={() => {
              setModalVisible(true);
              setVisibleImg(userImages.last_pics[0].regular);
            }}
          >
            <View style={{ marginTop: 50 }}>
              <TitleText style={{ fontSize: 18 }}>Today's wallpaper</TitleText>
              <Image
                source={{
                  uri: userImages.last_pics
                    ? userImages.last_pics[picToday].regular
                    : "https://mir-s3-cdn-cf.behance.net/project_modules/disp/552dd336197347.57136163e85ec.gif",
                }}
                style={styles.image}
              />
            </View>
          </TouchableWithoutFeedback>

          <View style={{ marginTop: 30, marginBottom: 80 }}>
            <TitleText style={{ fontSize: 18 }}>Recent this week</TitleText>
            <Pictures
              userImages={userImages.last_pics ? userImages.last_pics : []}
              setModalVisible={setModalVisible}
              setVisibleImg={setVisibleImg}
              picToday={picToday}
            />
          </View>
          {showModal}
        </ScrollView>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 50,
    paddingBottom: 10,
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
    width: 360,
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
