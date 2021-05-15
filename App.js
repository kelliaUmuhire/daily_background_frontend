import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { MaterialIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import Landing from "./Screens/Landing";
import Profile from "./Screens/Profile";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./Screens/Home";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export const AppContainer = React.createContext(null);

const removeToken = async () => {
  try {
    await AsyncStorage.removeItem("@token");
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

const EmptyScreen = () => {
  const { authenticate, setUser } = React.useContext(AppContainer);
  useEffect(() => {
    removeToken("@token");
    authenticate(false);
    // try {
    //   const value = await AsyncStorage.getItem("@token");
    //   if (value !== null) {
    //     setUser(jwt_decode(value));
    //     setToken(value);
    //   }
    // } catch (e) {
    //   // error reading value
    // }
  }, []);
  return null;
};

export default function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);

  // const [loaded] = useFonts({
  //   opensans: require("./assets/fonts/OpenSans-Regular.ttf"),
  //   // "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  //   "material-community": require("@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf"),
  // });

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem("@token");
      if (value) {
        await setUser(jwt_decode(value));
        await setToken(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  const loadFonts = async () => {
    await Font.loadAsync({
      // Load a font `Montserrat` from a static resource
      // Montserrat: require('./assets/fonts/Montserrat.ttf'),

      // // Any string can be used as the fontFamily name. Here we use an object to provide more control
      // 'Montserrat-SemiBold': {
      //   uri: require('./assets/fonts/Montserrat-SemiBold.ttf'),
      //   display: Font.FontDisplay.FALLBACK,
      // },
      "material-community": {
        uri: require("@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf"),
        display: Font.FontDisplay.FALLBACK,
      },
    });
    setDataLoaded(true);
  };

  useEffect(() => {
    // fetchFonts();
    loadFonts();
    if (dataLoaded) {
      getToken();
      // console.log("User", user);
      if (user) {
        // console.log("user:" + user);
        setAuthenticated(true);
      }
    }
  }, []);

  const fetchFonts = async () => {
    return await Font.loadAsync({
      "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
      "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
      "material-community": require("@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf"),
    });
  };

  // if (!dataLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={() => fetchFonts}
  //       onFinish={() => setDataLoaded(true)}
  //       onError={(err) => console.log(err)}
  //     />
  //   );
  // }

  if (!dataLoaded) {
    return null;
  }

  // console.log("Token33:", token);
  // console.log("Authenticated:", isAuthenticated);

  return (
    <AppContainer.Provider
      value={{
        isAuthenticated: isAuthenticated,
        authenticate: setAuthenticated,
        user,
        setUser,
        token,
        setToken,
      }}
    >
      <NavigationContainer screenProps={{ authenticated: setAuthenticated }}>
        {isAuthenticated && token !== null ? (
          <Tab.Navigator
            initialRouteName="Home"
            labeled={false}
            activeColor="#FBFBFB"
            inactiveColor="#FFBEBD"
            barStyle={{
              backgroundColor: "#FE6B68",
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
              padding: 10,
              marginTop: -40,
            }}
          >
            <Tab.Screen
              name="Profile"
              component={Profile}
              options={{
                tabBarIcon: ({ color }) => (
                  <Ionicons name="person" size={25} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarIcon: ({ color }) => (
                  <Foundation name="home" size={25} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Logout"
              component={EmptyScreen}
              options={{
                tabBarIcon: ({ color }) => (
                  <MaterialIcons name="logout" size={25} color={color} />
                ),
              }}
            />
          </Tab.Navigator>
        ) : (
          <Stack.Navigator
            initialRouteName="Landing"
            screenProps={{ authenticated: setAuthenticated }}
          >
            <Stack.Screen
              name="Landing"
              component={Landing}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
              screenProps={(isAuthenticated, setAuthenticated)}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </AppContainer.Provider>
  );
}
