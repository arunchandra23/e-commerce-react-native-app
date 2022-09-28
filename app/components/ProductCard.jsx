import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import getShortText from "../utils/getShortText";
import { useState } from "react";
import LoadingView from "./LoadingView";
import { StarIcon } from "./Icons";
import Colors from "../utils/Colors";

const ProductCard = ({ productObj }) => {

  const [loading,setLoading]=useState(false);
  const { width, height } = useWindowDimensions();
  const navigate = useNavigation();
  return (
    <TouchableOpacity
    style={styles.container}
      onPress={() => {
        navigate.navigate("ProductDetails", { productId: productObj.id });
      }}
    >
        <View
          style={[
            styles.imageContainer,
            {
              width: width < height ? (width / 100) * 40 : (width / 100) * 25,
              height: width < height ? (width / 100) * 40 : (width / 100) * 25,
            },
          ]}
        >
          <Image style={styles.image} source={{ uri: productObj.image }} onLoadStart={() => setLoading(true)} onLoadEnd={() => {setLoading(false)}} />
          {loading && <LoadingView/>}
        </View>
        <View style={styles.text}>
          <Text
           
            numberOfLines={1}
            ellipsizeMode="head"
            style={{ fontFamily:'primaryBold',flex: 1, fontSize: (width / 100) * 4 }}
          >
              {getShortText(productObj.title,20)}
          
          </Text>
          <View style={styles.rating}>
            <StarIcon color={productObj.rating['rate']<2.5?'green':'gold'} size={(width / 100) * 4} />
            <Text style={{fontFamily:'primary400',fontSize:(width / 100) * 3.5}}>
              {" "}
              {productObj.rating["rate"]} • {productObj.rating["count"]} Sold{" "}
            </Text>
          </View>
          <Text
            style={{
              fontFamily:'primary400',
              fontSize: (width / 100) * 4,
              color: "gray",
            }}
          >
            ₹{Math.floor(productObj.price)}
          </Text>
        </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 3,
    marginVertical:5,
    borderRadius:10,
    borderColor:'#ccc',
    elevation:1,
    paddingHorizontal:8,
    paddingVertical:8,
    backgroundColor:Colors.secondaryColor,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  imageContainer: {
    backgroundColor: "#cccccc",
    marginTop: 10,
    marginRight: 10,
    borderRadius: 100,
    overflow: "hidden",
  },
  text: {
    borderTopColor:'#ccc',
    borderTopWidth: 1,
    marginTop:5,
    paddingTop:5,
    alignItems: "center",
    // justifyContent: "flex-start",
  },
  rating: {
    flexDirection: "row",
    opacity: 0.5,
    paddingVertical: "2%",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",

  },
});
export default ProductCard;
