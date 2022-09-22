const initialState=[]

const addToCartReducer = (state=initialState,action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state,action.payload] 
        case 'REMOVE_FROM_CART':
            const index =state.findIndex((item)=> item.id === action.payload.id)
            const data=[...state]
            data.splice(index,1)
            return data ;
        default:
            return state;
    }
}
export default addToCartReducer;