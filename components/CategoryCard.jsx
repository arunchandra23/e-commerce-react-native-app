import { View, Text, StyleSheet, Image, useWindowDimensions, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CategoryCard = ({ categoryName, categoryImageUrl }) => {
  const {width, height} =useWindowDimensions();
  // console.log(width, height);
  const navigate= useNavigation();
    return (
      <TouchableOpacity onPress={()=>{navigate.navigate('Category',{categoryName:categoryName})}}>
    <View style={[styles.container]}>
      <View style={[styles.imageContainer,{width:width<height? (width/100)*40:width/100*25 , height: width<height? (width/100)*40:width/100*25}]}>
        <Image style={styles.image} source={{ uri: categoryImageUrl }} />
      </View>
      <View style={styles.text}>
        <Text style={{  fontFamily:'primary400',fontSize:(width/100)*3.5 }}>{categoryName}</Text>
      </View>
    </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container:{
    marginRight:10
  },
  imageContainer: {
    backgroundColor: "#cccccc",
    marginTop: 10,
    marginRight: 10,
    borderRadius: 100,
    overflow: "hidden",
  },
  text: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode:"cover"
  },
});
export default CategoryCard;
