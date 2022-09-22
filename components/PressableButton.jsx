import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const PressableButton = ({style,title,onPress,disabled}) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} style={[styles.button,style]}>
        <Text style={{fontFamily:'primary400',color:'white'}}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        
    }
})
export default PressableButton