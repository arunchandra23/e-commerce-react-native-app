import React, { useEffect, useState } from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
} from "react-native";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducer from "./app/reduxStore/reducers/store";

import AndroidSafeAreaView from "./app/utils/AndroidSafeAreaView";

import * as Font from "expo-font";
import NavigatorStack from "./app/screens/NavigatorStack";

export default function App() {

  // const [loading,setLoading] =useState(true)
  // let[loaded]=useFonts({
  //   primary400:require('./assets/fonts/Ubuntu-Regular.ttf')
  // })
  // if(!loaded){
  //   return null;
  // }

  const [fontsLoaded, setFontsLoaded] = useState(false);
  const loadFonts = async () => {
    await Font.loadAsync({
      primary400: require("./app/assets/fonts/Rubik-Regular.ttf"),
      primaryBold: require("./app/assets/fonts/Rubik-Medium.ttf"),
    });
    setFontsLoaded(true);
  };
  useEffect(() => {
    loadFonts();
  }, []);


  const store = createStore(reducer, applyMiddleware(thunk));

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      {Platform.OS === "android" ? null : (
        <StatusBar barStyle="dark-content" backgroundColor="white" />
      )}
      <AndroidSafeAreaView style={styles.container}>
        <Provider store={store}>
          <NavigatorStack/>
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
