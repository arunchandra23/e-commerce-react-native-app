import React, { useEffect} from "react";
import { View, Text, StyleSheet, Pressable,ScrollView } from "react-native";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import Section from "../components/Section";
import { connect } from "react-redux";
import { getProductByIdAction, getProductsAction } from "../reduxStore/actions";
import AndroidSafeAreaView from "../utils/AndroidSafeAreaView";
import { ArrowForwardIcon, ChevronDownIcon, LocationIcon, SearchIcon } from "../components/Icons";
import Colors from "../utils/Colors";


const HomeScreen = ({ navigation , products,getProductsAction}) => {

  
  useEffect(() => {
      getProductsAction(15);
    }, [getProductsAction])
    
    const renderedList=()=>{
      // console.log(products)
      return  products.map((product)=>{return <ProductCard key={product.image} productObj={product}/>} )
    }
  const handleSearchPress = () => {
    navigation.navigate("Search");
  };
  return (
    <AndroidSafeAreaView>
      <ScrollView>
        <View style={styles.headerContainer}>
          <View style={styles.address}>
            <LocationIcon size={35} />
            <View>
              <View style={styles.addressTab}>
                <Text style={{ fontSize: 16,fontFamily:'primary400' }}>Address</Text>
                <ChevronDownIcon size={20} />
              </View>
              <Text style={{fontFamily:'primary400'}}>ADDRESS HERE</Text>
            </View>
          </View>
          <View>
            <Pressable onPress={handleSearchPress}>
              <SearchIcon size={35} />
            </Pressable>
          </View>
        </View>
        <Section title='Explore by Category' icon={<ArrowForwardIcon size={25}/>}>
            <CategoryCard categoryName='Fish' categoryImageUrl='https://assets.tendercuts.in/category/S/e/f9a8cb8c-ac77-44dd-9be2-e0e80c0db433.jpg' />
            <CategoryCard categoryName='Prawn' categoryImageUrl='https://assets.tendercuts.in/product/S/F/9ed9bdc2-79da-4666-a09c-54593b6c1bad.webp' />
        </Section>
        <Section title='Top Pics For You' icon={<ArrowForwardIcon size={25}/>}>
            {renderedList()}
        </Section>
      </ScrollView>
    </AndroidSafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: "3%",
    backgroundColor: Colors.secondaryColor,
    paddingBottom: "3%",
    paddingTop: "1%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 10,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
  addressTab: {
    flexDirection: "row",
    alignItems: "center",
  },
  address: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: 'center',
  },
});
 
const mapStatesToProps = (state) => {
  return { products: state.products };
}
export default connect(mapStatesToProps,{getProductsAction,getProductByIdAction})(HomeScreen);
