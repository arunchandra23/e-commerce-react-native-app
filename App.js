import React, { useEffect, useState } from "react";
import { Platform, StatusBar, StyleSheet, useWindowDimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator, TransitionSpecs,TransitionPresets } from "@react-navigation/stack";
import IonIcon from "react-native-vector-icons/Ionicons";
import { Provider } from "react-redux";
import { createStore,applyMiddleware } from "redux";
import reducer from './reduxStore/reducers/store';
import thunk from "redux-thunk";


import Colors from "./utils/Colors";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AndroidSafeAreaView from "./utils/AndroidSafeAreaView";
import SearchScreen from "./screens/SearchScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";

import * as Font from 'expo-font';
import {useFonts} from 'expo-font'

export default function App() {

// const [loading,setLoading] =useState(true)
  // let[loaded]=useFonts({
  //   primary400:require('./assets/fonts/Ubuntu-Regular.ttf')
  // })
  // if(!loaded){
  //   return null;
  // }

  const [fontsLoaded,setFontsLoaded] =useState(false)
   const loadFonts=async()=> {
    await Font.loadAsync({
      'primary400': require('./assets/fonts/Rubik-Regular.ttf'),
      'primaryBold': require('./assets/fonts/Rubik-Medium.ttf'),
    });
    setFontsLoaded(true) 
  }
useEffect(() => {
  loadFonts();

  
}, [])




  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();
  const {width,height}=useWindowDimensions();
  const GetTabScreens = () => {
    // if(loading){
    //   return <AppLoading/>
    // }
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle:{height:width<height? (width/100)*13:width/100*6,flexDirection:"column", justifyContent:"center"},
          headerShown: false,
          tabBarActiveTintColor:Colors.mainColor,
          tabBarHideOnKeyboard: true,
          tabBarLabelPosition:'below-icon',
          tabBarLabelStyle:{fontSize:width<height? (width/100)*3:width/100*1.5}
        }}
      >
        <Tab.Screen
          name="Home"
          options={{
            // tabBarActiveTintColor:'red',
            tabBarLabelStyle:{fontFamily:'primary400'},
            tabBarIcon: ({ color, size }) => (
              <IonIcon name="home" color={color} size={width<height? (width/100)*8:width/100*4} />
            ),
          }}
          component={HomeScreen}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarLabelStyle:{fontFamily:'primary400'},
            tabBarIcon: ({ color, size }) => (
              <IonIcon name="cart" color={color} size={width<height? (width/100)*8:width/100*4} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabelStyle:{fontFamily:'primary400'},
            tabBarIcon: ({ color, size }) => (
              <IonIcon name="person" color={color} size={width<height? (width/100)*8:width/100*4} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };


  const store= createStore(reducer,applyMiddleware(thunk))

  if(!fontsLoaded){
    return null;
  }
  return (
    <>
      {Platform.OS === "android" ? null : (
        <StatusBar barStyle="dark-content" backgroundColor="white" />
      )}
      <AndroidSafeAreaView style={styles.container}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
          screenOptions={{
            animationTypeForReplace:"slide-left"
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
                headerBackTitle:'Home',
                
              }}
              
              name="Category"
              component={CategoriesScreen}
            />
            <Stack.Screen
              options={{
                headerShown: false,
                presentation:'modal'
              }}
              name="ProductDetails"
              component={ProductDetailsScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
        </Provider>
      </AndroidSafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
