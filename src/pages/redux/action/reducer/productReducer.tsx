import ActionTypes from "../actionType";

const initialState = {
    product: [],
    message: '',
    refresh: ''
}

function productReducers(state = initialState, action:any){
    const {type, payload} =  action;
    // console.log(payload);
    switch(type){
        case ActionTypes.GET_PRODUCTS_RESPONSE:
            return {state, product: payload, refresh: true};
        case ActionTypes.ADD_PRODUCT_RESPONSE:
            return{message: payload.message, refresh:false}
        case ActionTypes.UPDATE_PRODUCT_RESPONSE:
            return {message: payload.message, refresh: false};
        case ActionTypes.DEL_PRODUCT_RESPONSE:
            return {message: payload.message, refresh: false};
        default:
            return state;
    }
}


export default productReducers;