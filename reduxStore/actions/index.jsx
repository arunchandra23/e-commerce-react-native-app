import productsApi from "../../apis/productsApi";

export const getProductsAction = (limit) => async(dispatch)=>{
      const response=await productsApi.get(`/products?limit=${limit}`);
      dispatch({
        type:'GET_PRODUCTS',
        payload:response.data
    })
}

export const getProductByIdAction = (id) => async(dispatch)=>{
      const response=await productsApi.get(`/products/${id}`);
      dispatch({
        type:'GET_PRODUCT_BY_ID',
        payload:response.data
    })
}

export const getProductByCategoryAction = (category) => async(dispatch)=>{
      const response=await productsApi.get(`/products/category/${category}`);
      dispatch({
        type:'GET_PRODUCT_BY_CATEGORY',
        payload:response.data
    })
}
export const getProductByNameAction = (name) => async(dispatch)=>{
      const response=await productsApi.get(`/products/search?item=${name}`);
      dispatch({
        type:'GET_PRODUCTS_BY_NAME',
        payload:response.data
    })
}

export const addToCartAction = (item) =>{
  return {type:'ADD_TO_CART',payload:item}
}

export const removeFromCartAction = (itemId) =>{
  return {type:'REMOVE_FROM_CART',payload:itemId}
}


