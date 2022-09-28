const getProductByNameReducer = (state=[],action) => {
    switch (action.type) {
        case 'GET_PRODUCTS_BY_NAME':
            return action.payload;
    
        default:
            return state;
    }
}

export default getProductByNameReducer