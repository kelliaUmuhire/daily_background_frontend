import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Ionicons } from "@expo/vector-icons";

import Landing from "./Screens/Landing";
import Profile from "./Screens/Profile";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./Screens/Home";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const EmptyScreen = () => null;

export default function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <Tab.Navigator
          initialRouteName="Home"
          labeled={false}
          activeColor="#FBFBFB"
          inactiveColor="#FFBEBD"
          barStyle={{ backgroundColor: "#FE6B68" }}
        >
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name="person" size={24} color={color} />
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
                  size={24}
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
                <MaterialCommunityIcons name="logout" size={24} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen
            name="Landing"
            component={Landing}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
