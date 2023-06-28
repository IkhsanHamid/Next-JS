import { call, put } from "redux-saga/effects";
import apiMethod from "@/pages/api/apiMethod";
import { getLoginResponse } from "../action/actionReducer";

function* handleLogin (action:any):any{
    try {
        const result = yield call(apiMethod.Login, action.payload)
        if(result.data.token){
            localStorage.setItem("TokenNext", result.data.token);
            yield put(getLoginResponse({token:result.data.token, message:result.data.message}))
        }else{
            yield put(getLoginResponse({token:'', message: result.data.message}))
        }
    } catch (error) {
        yield put(getLoginResponse({ message: error, status: 400 }))
        
    }
}

export {handleLogin}