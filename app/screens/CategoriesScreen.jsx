import { FlatList, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getProductByCategoryAction } from '../reduxStore/actions/index';
import AndroidSafeAreaView from '../utils/AndroidSafeAreaView';
import ProductCard from '../components/ProductCard';
import HeaderComponent from '../components/HeaderComponent';

const CategoriesScreen = ({route,navigation,categoryProducts,getProductByCategoryAction}) => {
  useEffect(() => {
    navigation.setOptions({headerTitle:route.params.categoryName.toUpperCase()})
    getProductByCategoryAction(route.params.categoryName.toLowerCase())
    
  }, [])
  
  return (
    <View style={styles.container}>
      {/* <HeaderComponent title={`${route.params.categoryName.toUpperCase()}`}/> */}
        <FlatList showsVerticalScrollIndicator={false} contentContainerStyle={styles.listContainer} data={categoryProducts} numColumns={2} renderItem={({item})=>{return <ProductCard productObj={item}/>}} keyExtractor={(item)=>{return item.image} } />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    // justifyContent:'center'

    // backgroundColor:'blue',
    
  },
  listContainer:{
    // justifyContent:'center',
    // alignItems:'center',
    // paddingHorizontal:'4%',
    // backgroundColor:'red'
  },

})

const mapStatesToProps = (state) => {
  return {categoryProducts: state.categoryProducts}
}
export default connect(mapStatesToProps,{getProductByCategoryAction})(CategoriesScreen)