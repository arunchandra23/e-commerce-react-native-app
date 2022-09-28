import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { connect } from "react-redux";

import AndroidSafeAreaView from "../utils/AndroidSafeAreaView";
import CartItem from "../components/CartItem";
import { useMemo } from "react";
import { BackArrowIcon, CartArrowDownIcon, ChevronForwardIcon } from "../components/Icons";
import PressableButton from '../components/PressableButton'
import HeaderComponent from "../components/HeaderComponent";
import Colors from "../utils/Colors";

const CartScreen = ({ navigation, cartItems }) => {



  const [groupedItems, setGroupedItems] = useState([]);
  const { width, height } = useWindowDimensions();

  useMemo(() => {
    const items = cartItems.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupedItems(items);
  }, [cartItems]);
var total=0
  cartItems.map((item)=>{
    total=total+(item.price)

  })
  // setCartTotal(total)
var totalItems=0
  const renderItems = () => {
    const res = Object.entries(groupedItems).map(([key, items]) => {
      // console.log('>>>',items[0].image)
      totalItems++;
      return <CartItem key={key} itemObj={items[0]} quantity={items.length} />;
    });
    return res;
  };

  return (
    <AndroidSafeAreaView >
      <View style={{position: 'relative',flex:1}}>
      <HeaderComponent title='Your Cart'/>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {cartItems.length === 0 ? (
          <Text
            style={{
              fontFamily:'primary400',
              fontSize: height > width ? (width / 100) * 5 : (height / 100) * 5,
              opacity: 0.5,
              marginTop: "50%",
              alignSelf: "center",
            }}
          >
            Cart is empty
          </Text>
        ) : (
          <View style={styles.centeredContainer}>
            {renderItems()}
          </View>
        )}
      </ScrollView>
      {total!==0?<><View style={styles.cartOverlay}>
        <TouchableOpacity>

          <BackArrowIcon onPress={navigation.goBack} color={Colors.secondaryColor} size={(width / 100) * 10}/>
        </TouchableOpacity>
        <View style={styles.totalContainer}>
          <Text style={{ color:Colors.secondaryColor,fontFamily:'primary400', fontSize: (width / 100) * 5}}>{<CartArrowDownIcon color={Colors.secondaryColor} size={(width / 100) * 5} />}{totalItems} | ₹{Math.floor(total)}</Text>
        </View>
        <TouchableOpacity style={{flexDirection:"row",alignItems: "center",justifyContent: "center",}}>
          <Text style={{ color:Colors.secondaryColor,fontFamily:'primary400',fontSize: (width / 100) * 5 }}>Checkout</Text>
          <ChevronForwardIcon style={{marginTop:3}} color={Colors.secondaryColor} size={(width / 100) * 5} />
        </TouchableOpacity>

      </View></>:null}
      </View>
    </AndroidSafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredContainer:{
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    // flex: 1,
    padding: "2%",
    // backgroundColor:'red',
    flexGrow: 1,
  },
  cartOverlay:{
    position: 'absolute',
    bottom:'0.5%',
    alignSelf: 'center',
    width: "80%",
    backgroundColor:'black',
    margin:'4%',
    overflow: 'hidden',
    flexDirection:'row',
    borderRadius:50,
    justifyContent:"space-around",
    alignItems: 'center',
    // justifyContent: 'center',
  },
  totalContainer:{
    flexDirection:'row',
    alignItems: 'center',
    padding: '5%',
  }
});

const mapStatesToProps = (state) => {
  return { cartItems: state.cartItems };
};

export default connect(mapStatesToProps)(CartScreen);
