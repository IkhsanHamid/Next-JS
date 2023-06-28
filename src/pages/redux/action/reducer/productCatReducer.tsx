import ActionTypes from "../actionType";

const initialState = {
    productCat: [],
    message: '',
    refresh: ''
}

function productCatReducers(state = initialState, action:any){
    const {type, payload} =  action;
    // console.log(payload);
    switch(type){
        case ActionTypes.GET_PRODUCTS_CATEGORY_RESPONSE:
            return {state, productCat: payload, refresh: true};
        case ActionTypes.ADD_PRODUCT_CATEGORY_RESPONSE:
            return{message: payload.message, refresh:false}
        case ActionTypes.UPDATE_PRODUCT_CATEGORY_RESPONSE:
            return {message: payload.message, refresh: false};
        case ActionTypes.DEL_PRODUCT_CATEGORY_RESPONSE:
            return {message: payload.message, refresh: false};
        default:
            return state;
    }
}


export default productCatReducers;