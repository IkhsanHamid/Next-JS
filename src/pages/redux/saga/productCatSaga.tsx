import apiMethod from "@/pages/api/apiMethod";
import { call, put } from "redux-saga/effects";
import { addProductCatResponse, getAllProductCatResponse } from "../action/actionReducer";

function* handleGetAllProductCat():any{
    try {
        const result = yield call(apiMethod.GetProductCat)
        yield put(getAllProductCatResponse(result.data))
    } catch (error) {
        yield put(getAllProductCatResponse({message: error, status: 400}))
    }
}

function* handleAddProductCat(action: any): any {
    try {
      const result = yield call(apiMethod.CreateProductCat, action.payload);
      yield put(addProductCatResponse(result.data));
    } catch (error) {
      yield put(addProductCatResponse({ message: error, status: 400 }));
    }
  }

export  {handleGetAllProductCat, handleAddProductCat};
