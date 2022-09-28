import authApi from "../../apis/authApi";
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

export const login = (username,password) =>async(dispatch)=>{

  //make api call and get token and set as payload
const reqBody={
  "username": username,
  "password": password
}
console.log(reqBody);
const headers = {
  "Content-Type": "application/json"
}

  try{
    const token=await authApi.post('/login',reqBody,{
      method: 'POST',
      credentials: 'include',
      headers: headers,
    })
    console.log(token.data)
    dispatch({type:'LOGIN',payload:token.data.access_token})
  }
  catch(err){
    console.log(err);
    dispatch({type:'LOGIN',payload:null})
  }
}

export const Logout=()=>{
  return {type:'LOGOUT',payload:null}
}

