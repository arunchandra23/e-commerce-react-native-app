import { View, Text, SafeAreaView,StyleSheet, StatusBar, Platform } from 'react-native'
import React from 'react'

const AndroidSafeAreaView = (props) => {
  return (
    <SafeAreaView style={styles.AndroidSafeAreaView} {...props}>
      {props.children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    AndroidSafeAreaView: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
  });

export default AndroidSafeAreaView;