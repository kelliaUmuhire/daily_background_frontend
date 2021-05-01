import React, { useState } from "react";
import {
  View,
  Image,
  TouchableWithoutFeedback,
  Text,
  StyleSheet,
} from "react-native";
import moment from "moment";

export default function Pictures({
  userImages,
  setModalVisible,
  setVisibleImg,
}) {
  const getDate = (date) => {
    return moment(date).format("dddd, MMMM Do YYYY").toString().split(" ");
  };

  const [num, setNum] = useState(0);
  console.log(userImages.length);
  return (
    <View style={{ marginBottom: 30 }}>
      {userImages.length !== 0 ? (
        <View>
          {0 < userImages.length ? (
            <TouchableWithoutFeedback
              onPress={() => {
                setModalVisible(true);
                setVisibleImg(userImages[0].regular);
              }}
              key={userImages[0]._id}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={{
                    uri: userImages[0].regular,
                  }}
                  style={styles.image2}
                />
                <Text style={styles.date}>{`${
                  getDate(userImages[0].date)[0]
                }\n${getDate()[1]}  ${getDate()[2].split("")[0]} `}</Text>
              </View>
            </TouchableWithoutFeedback>
          ) : null}
          {1 < userImages.length ? (
            <TouchableWithoutFeedback
              onPress={() => {
                setModalVisible(true);
                setVisibleImg(userImages[1].regular);
              }}
              key={userImages[1]._id}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={{
                    uri: userImages[1].regular,
                  }}
                  style={styles.image2}
                />
                <Text style={styles.date}>{`${
                  getDate(userImages[1].date)[0]
                }\n${getDate()[1]}  ${getDate()[2].split("")[0]} `}</Text>
              </View>
            </TouchableWithoutFeedback>
          ) : null}
          {2 < userImages.length ? (
            <TouchableWithoutFeedback
              onPress={() => {
                setModalVisible(true);
                setVisibleImg(userImages[2].regular);
              }}
              key={userImages[2]._id}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={{
                    uri: userImages[2].regular,
                  }}
                  style={styles.image2}
                />
                <Text style={styles.date}>{`${
                  getDate(userImages[2].date)[0]
                }\n${getDate()[1]}  ${getDate()[2].split("")[0]} `}</Text>
              </View>
            </TouchableWithoutFeedback>
          ) : null}
          {3 < userImages.length ? (
            <TouchableWithoutFeedback
              onPress={() => {
                setModalVisible(true);
                setVisibleImg(userImages[3].regular);
              }}
              key={userImages[3]._id}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={{
                    uri: userImages[3].regular,
                  }}
                  style={styles.image2}
                />
                <Text style={styles.date}>{`${
                  getDate(userImages[3].date)[0]
                }\n${getDate()[1]}  ${getDate()[2].split("")[0]} `}</Text>
              </View>
            </TouchableWithoutFeedback>
          ) : null}
          {4 < userImages.length ? (
            <TouchableWithoutFeedback
              onPress={() => {
                setModalVisible(true);
                setVisibleImg(userImages[4].regular);
              }}
              key={userImages[4]._id}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={{
                    uri: userImages[4].regular,
                  }}
                  style={styles.image2}
                />
                <Text style={styles.date}>{`${
                  getDate(userImages[4].date)[0]
                }\n${getDate()[1]}  ${getDate()[2].split("")[0]} `}</Text>
              </View>
            </TouchableWithoutFeedback>
          ) : null}
          {5 < userImages.length ? (
            <TouchableWithoutFeedback
              onPress={() => {
                setModalVisible(true);
                setVisibleImg(userImages[5].regular);
              }}
              key={userImages[5]._id}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={{
                    uri: userImages[5].regular,
                  }}
                  style={styles.image2}
                />
                <Text style={styles.date}>{`${
                  getDate(userImages[5].date)[0]
                }\n${getDate()[1]}  ${getDate()[2].split("")[0]} `}</Text>
              </View>
            </TouchableWithoutFeedback>
          ) : null}
          {6 < userImages.length ? (
            <TouchableWithoutFeedback
              onPress={() => {
                setModalVisible(true);
                setVisibleImg(userImages[6].regular);
              }}
              key={userImages[6]._id}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={{
                    uri: userImages[6].regular,
                  }}
                  style={styles.image2}
                />
                <Text style={styles.date}>{`${
                  getDate(userImages[1].date)[0]
                }\n${getDate()[1]}  ${getDate()[2].split("")[0]} `}</Text>
              </View>
            </TouchableWithoutFeedback>
          ) : null}
        </View>
      ) : (
        <Text>No record</Text>
      )}

      {/* <View>
                <Image source={require('../assets/Images/temp.jpg')}/>
            </View>  */}
      {/* <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(true);
          setVisibleImg(userImages[0].regular);
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            source={{
              uri: userImages[0].regular,
            }}
            style={styles.image2}
          />
          <Text style={styles.date}>{`${date[0]}\n${date[1]}  ${
            date[2].split("")[0]
          } `}</Text>
        </View>
      </TouchableWithoutFeedback> */}
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
    marginLeft: 10,
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
