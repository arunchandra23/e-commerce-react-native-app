import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'

const HeaderComponent =({title}) => {
  
  const { width, height } = useWindowDimensions();
  return (
    <View
        style={[
          styles.header,
          {
            width: width,
            height: height > width ? (height / 100) * 6 : (height / 100) * 10,
          },
        ]}
      >
        <Text
          style={{
            fontFamily:'primaryBold',fontSize: height > width ? (width / 100) * 5 : (height / 100) * 5
          }}
        >
          {title}
        </Text>
      </View>
  )
}

const styles = StyleSheet.create({
    header: {
      // width: '100%',
      // height: '5%',
      justifyContent: "center",
      alignItems: "center",
      borderBottomColor: "#cccc",
      borderBottomWidth: 2,
      zIndex: 10,
    },
})
export default HeaderComponent