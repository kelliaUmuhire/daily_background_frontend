import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";

import Landing from "./Screens/Landing";
import Profile from "./Screens/Profile";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./Screens/Home";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export const AppContainer = React.createContext(null);

const EmptyScreen = () => {
  const { authenticate, setUser } = React.useContext(AppContainer);
  useEffect(() => {
    authenticate(false);
    setUser(null);
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
  const [isAuthenticated, setAuthenticated] = useState(true);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem("@token");
      if (value !== null) {
        setUser(jwt_decode(value));
        setToken(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getToken();
    if (user) {
      setAuthenticated(true);
    }
  }, []);

  return (
    <AppContainer.Provider
      value={{
        isAuthenticated: isAuthenticated,
        authenticate: setAuthenticated,
        user,
        setUser,
        token,
      }}
    >
      <NavigationContainer screenProps={{ authenticated: setAuthenticated }}>
        {isAuthenticated ? (
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
                  <MaterialCommunityIcons
                    name="home-variant"
                    size={25}
                    color={color}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Logout"
              component={EmptyScreen}
              options={{
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="logout"
                    size={25}
                    color={color}
                  />
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
