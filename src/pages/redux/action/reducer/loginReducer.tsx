import ActionTypes from "../actionType";

const initialState = {
    token: '',
    refresh: ''
}

function loginReducers(state = initialState, action:any){
    const {type, payload} =  action;
    // console.log(payload);
    switch(type){
        case ActionTypes.GET_LOGIN_RESPONSE:
            return {state, token: payload.token, refresh: true};
        default:
            return state;
    }
}


export default loginReducers;