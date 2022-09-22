import { View, Text, StyleSheet, ScrollView, useWindowDimensions } from 'react-native'
import React from 'react'

const Section = ({title,children,icon}) => {
  const {width, height} =useWindowDimensions();
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{ fontFamily:'primary400',fontSize:(width/100)*4 }}>{title}</Text>
        {icon}
      </View>
      <ScrollView  contentContainerStyle={{}} showsHorizontalScrollIndicator={false}  keyboardDismissMode='on-drag' horizontal>
        {children}
      </ScrollView>
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
      // flex:1,
      paddingVertical:'3%',
      paddingHorizontal:'3%'
    },
    title:{
      flexDirection:'row',
      justifyContent:'space-between'
    },
    horizontalScrollContainer:{

    }
})

export default Section