import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const CustomInput = ({ label, textInputStyles, placeholder,onChange }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput onChangeText={(text)=>{onChange(text)}} placeholder={placeholder} style={textInputStyles} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {},
});

export default CustomInput;
