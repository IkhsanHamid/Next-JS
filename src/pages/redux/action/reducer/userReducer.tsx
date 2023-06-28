import ActionTypes from "../actionType";

const initialState = {
    user: [],
    message: '',
    refresh: ''
}

function userReducers(state = initialState, action:any){
    const {type, payload} =  action;
    // console.log(payload);
    switch(type){
        case ActionTypes.GET_USERS_RESPONSE:
            return {state, user: payload, refresh: true};
        case ActionTypes.ADD_USER_RESPONSE:
            return{message: payload.message, refresh:false}
        case ActionTypes.UPDATE_USER_RESPONSE:
            return {message: payload.message, refresh: false};
        case ActionTypes.DEL_USER_RESPONSE:
            return {message: payload.message, refresh: false};
        default:
            return state;
    }
}


export default userReducers;