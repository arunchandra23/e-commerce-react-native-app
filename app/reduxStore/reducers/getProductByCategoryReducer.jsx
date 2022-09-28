const getProductByCategoryReducer = (state=[],action) => {
   switch (action.type) {
    case 'GET_PRODUCT_BY_CATEGORY':
        return action.payload;
    default:
        return state;
   }
}

export default getProductByCategoryReducer