import { View, Text,useWindowDimensions } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStackNavigator,
  TransitionSpecs,
  TransitionPresets,
} from "@react-navigation/stack";
import IonIcon from "react-native-vector-icons/Ionicons";
import Colors from "../utils/Colors";
import HomeScreen from "./HomeScreen";
import CartScreen from "./CartScreen";
import ProfileScreen from "./ProfileScreen";
import SearchScreen from "./SearchScreen";
import CategoriesScreen from "./CategoriesScreen";
import ProductDetailsScreen from "./ProductDetailsScreen";
import LoginScreen from "./LoginScreen";
import { useFonts } from "expo-font";
import { useSelector } from 'react-redux';

const NavigatorStack = () => {
  const token=useSelector((state)=>state.token)

    const Tab = createBottomTabNavigator();
    const Stack = createStackNavigator();
    const { width, height } = useWindowDimensions();
    const GetTabScreens = () => {
      // if(loading){
      //   return <AppLoading/>
      // }
      return (
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              height: width < height ? (width / 100) * 13 : (width / 100) * 6,
              flexDirection: "column",
              justifyContent: "center",
            },
            headerShown: false,
            tabBarActiveTintColor: Colors.mainColor,
            tabBarHideOnKeyboard: true,
            tabBarLabelPosition: "below-icon",
            tabBarLabelStyle: {
              fontSize: width < height ? (width / 100) * 3 : (width / 100) * 1.5,
            },
          }}
        >
          <Tab.Screen
            name="Home"
            options={{
              // tabBarActiveTintColor:'red',
              tabBarLabelStyle: { fontFamily: "primary400" },
              tabBarIcon: ({ color, size }) => (
                <IonIcon
                  name="home"
                  color={color}
                  size={width < height ? (width / 100) * 8 : (width / 100) * 4}
                />
              ),
            }}
            component={HomeScreen}
          />
          <Tab.Screen
            name="Cart"
            component={CartScreen}
            options={{
              tabBarLabelStyle: { fontFamily: "primary400" },
              tabBarIcon: ({ color, size }) => (
                <IonIcon
                  name="cart"
                  color={color}
                  size={width < height ? (width / 100) * 8 : (width / 100) * 4}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarLabelStyle: { fontFamily: "primary400" },
              tabBarIcon: ({ color, size }) => (
                <IonIcon
                  name="person"
                  color={color}
                  size={width < height ? (width / 100) * 8 : (width / 100) * 4}
                />
              ),
            }}
          />
        </Tab.Navigator>
      );
    };
  
    const UnauthorisedStack = () => {
      return (
        <>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </>
      );
    };
  
    const AuthorisedStack = () => {
      return (
        <>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                animationTypeForReplace: "slide-left",
              }}
            >
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="Main"
                component={GetTabScreens}
              />
  
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="Search"
                component={SearchScreen}
              />
  
              <Stack.Screen
                options={{
                  headerBackTitle: "Home",
                }}
                name="Category"
                component={CategoriesScreen}
              />
              <Stack.Screen
                options={{
                  headerShown: false,
                  presentation: "modal",
                }}
                name="ProductDetails"
                component={ProductDetailsScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </>
      );
    };

  return (
    <>
    {token?<AuthorisedStack/>:<UnauthorisedStack/>}
    </>
  )
}

export default NavigatorStack