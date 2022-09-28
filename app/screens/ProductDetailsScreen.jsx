import {
  Image,
  Text,
  StyleSheet,
  View,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ReadMore from "@fawazahmed/react-native-read-more";

import { getProductByIdAction, addToCartAction } from "../reduxStore/actions";
import AndroidSafeAreaView from "../utils/AndroidSafeAreaView";
import PressableButton from "../components/PressableButton";
import Colors from "../utils/Colors";
import {
  CheckmarkCircleOutlineIcon,
  ChevronBackIcon,
  StarIcon,
} from "../components/Icons";

const ProductDetailsScreen = ({
  route,
  navigation,
  rating,
  cartItems,
  selectedProduct,
  getProductByIdAction,
  addToCartAction,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  useEffect(() => {
    getProductByIdAction(route.params.productId);
  }, [route.params.productId]);

  const handleAdd = () => {
    addToCartAction(selectedProduct);
    setIsModalVisible(true);
    setTimeout(() => {
      setIsModalVisible(false);
    }, 800);
  };

  const { width, height } = useWindowDimensions();
  return (
    <AndroidSafeAreaView>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Modal animationType="fade" visible={isModalVisible} transparent={true}>
          <View
            style={[
              styles.modal,
              { top: height / 2 - 60, left: width / 2 - 60 },
            ]}
          >
            <CheckmarkCircleOutlineIcon color={Colors.mainColor} size={50} />
            <Text>Added</Text>
          </View>
        </Modal>
        <ScrollView style={styles.container}>
          <Image
            style={{ width: "100%", height: (height / 100) * 40 }}
            source={{ uri: selectedProduct.image }}
          />
          {/* <BackArrowIcon onPress={navigation.goBack} style={styles.backBtn} color={Colors.mainColor} size={(width / 100) * 10} /> */}
          <TouchableOpacity style={styles.backBtn}>
            <ChevronBackIcon
              onPress={navigation.goBack}
              color={Colors.mainColor}
              size={(width / 100) * 10}
            />
          </TouchableOpacity>
          <View style={styles.details}>
            <Text
              style={{ fontFamily: "primaryBold", fontSize: (width / 100) * 8 }}
            >
              {selectedProduct.title}
            </Text>
            <View style={styles.rating}>
              <StarIcon
                color={rating["rate"] < 2.5 ? "green" : "gold"}
                size={(width / 100) * 5}
              />
              <Text style={{ fontFamily: "primary400" }}>
                {" "}
                {rating["rate"]} • {rating["count"]} Sold{" "}
              </Text>
            </View>
            <View style={styles.priceContainer}>
              <Text
                style={{
                  fontFamily: "primary400",
                  fontSize: (width / 100) * 5,
                }}
              >
                ₹{selectedProduct.price}
              </Text>
              <PressableButton
                onPress={() => {
                  cartItems.includes(selectedProduct)
                    ? navigation.navigate("Cart")
                    : handleAdd() //showModal
                }}
                title={
                  cartItems.includes(selectedProduct) ? "Go to Cart" : "Add"
                }
                style={styles.addToCartButton}
              />
            </View>
            <Text
              style={{
                fontFamily: "primary400",
                fontSize: (width / 100) * 4,
                color: "gray",
                paddingVertical: "2%",
              }}
            >
              {selectedProduct.description}
            </Text>
            {/* <ReadMore
            seeMoreText="Read more"
            seeLessText="Read less"
            seeMoreStyle={{
              fontFamily: "primaryBold",
              fontSize: (width / 100) * 4,
              color: Colors.mainColor,
            }}
            seeLessStyle={{
              fontFamily: "primaryBold",
              fontSize: (width / 100) * 4,
              color: Colors.mainColor,
            }}
            numberOfLines={3}
            style={{
              fontFamily: "primary400",
              fontSize: (width / 100) * 4,
              color: "gray",
              paddingVertical: "2%",
            }}
            animate={false}
          >
            {selectedProduct.description}
          </ReadMore> */}
          </View>
        </ScrollView>
      </View>
    </AndroidSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    width: "100%",
    // backgroundColor:'rgb(222, 222, 222)'
  },
  modal: {
    position: "relative",
    // flex: 1,
    backgroundColor: Colors.secondaryColor,
    borderRadius:10,
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 120,
    zIndex: 1,
  },
  backBtn: {
    position: "absolute",
    top: "2%",
    left: "3%",
    backgroundColor: Colors.secondaryColor,
    paddingHorizontal: "1%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  details: {
    paddingVertical: "2%",
    padding: "5%",
  },
  rating: {
    flexDirection: "row",
    opacity: 0.5,
    paddingVertical: "2%",
    alignItems: "center",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: "5%",
    marginBottom: "4%",
    borderBottomWidth: 1,
    borderBottomColor: Colors.shadowColor,
  },
  addToCartButton: {
    backgroundColor: Colors.mainColor,
    marginHorizontal: "2%",
    paddingVertical: "2%",
    paddingHorizontal: "10%",
    borderRadius: 20,
  },
});

const mapStatesToProps = (state) => {
  return {
    selectedProduct: state.selectedProduct,
    rating: state.selectedProduct.rating,
    cartItems: state.cartItems,
  };
};
export default connect(mapStatesToProps, {
  getProductByIdAction,
  addToCartAction,
})(ProductDetailsScreen);
