import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import IonIcon from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";

import {
  addToCartAction,
  removeFromCartAction,
} from "../reduxStore/actions/index";
import Colors from "../utils/Colors";

const CartItem = ({
  itemObj,
  addToCartAction,
  removeFromCartAction,
  quantity,
}) => {
  const { width, height } = useWindowDimensions();
  const handlePlus = () => {
    addToCartAction(itemObj);
  };
  const handleMinus = () => {
    removeFromCartAction(itemObj);
  };
  return (
    <View style={styles.detailsContainer}>
      <Image
        style={{ width: (width / 100) * 30, height: (width / 100) * 30 }}
        source={{ uri: itemObj.image }}
      />
      <View style={styles.details}>
        <Text style={[{ fontFamily:'primary400',fontSize: (width / 100) * 5 }, styles.title]}>
          {itemObj.title}
        </Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn} onPress={handleMinus}>
            <IonIcon
              name="remove"
              color={Colors.secondaryColor}
              size={(width / 100) * 8}
            />
          </TouchableOpacity>
          <View
            style={{
              width: (width / 100) * 10,
              height: (width / 100) * 6,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontFamily:'primary400',fontSize: (width / 100) * 5 }}>{quantity}</Text>
          </View>
          <TouchableOpacity style={styles.btn} onPress={handlePlus}>
            <IonIcon
              name="add"
              color={Colors.secondaryColor}
              size={(width / 100) * 8}
            />
          </TouchableOpacity>
        </View>
        <Text style={{ fontFamily:'primaryBold',
    paddingVertical:'2%',fontSize: (width / 100) * 5 }}>
          ₹{Math.floor(quantity * itemObj.price)}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cartItemContainer: {},
  detailsContainer: {
    width: '95%',
    padding: "5%",
    alignItems: "center",
    // borderColor: Colors.shadowColor,
    // overflow: "hidden",
    marginVertical: "2%",
    flexDirection: "row",
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    backgroundColor:'white',
  },
  details: {
    // height: '40%',
    paddingHorizontal: "5%",
    justifyContent: "space-between",
    flex: 1,
  },
  title: {
    paddingVertical:'2%'
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical:'2%'
    // justifyContent: 'center',
  },
  btn: {
    backgroundColor: Colors.mainColor,
    borderRadius: 100,
  },
});

const mapStatesToProps = (state) => {
  return { cartItems: state.cartItems };
};

export default connect(mapStatesToProps, {
  addToCartAction,
  removeFromCartAction,
})(CartItem);
