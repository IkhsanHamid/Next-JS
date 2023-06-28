import { takeEvery, all } from "redux-saga/effects";
import ActionTypes from "../action/actionType";
import { handleAddProduct, handleAddUser, handleDeleteProduct, handleDeleteUser, handleGetAllProduct, handleGetAllUser, handleUpdateProduct, handleUpdateUser } from "./userSaga";
import { handleGetAllProductCat, handleAddProductCat } from "./productCatSaga";
import { handleLogin } from "./loginSaga";

function* watchAll() {
  yield all([
    takeEvery(ActionTypes.GET_USERS,handleGetAllUser ),
    takeEvery(ActionTypes.ADD_USER, handleAddUser),
    takeEvery(ActionTypes.UPDATE_USER, handleUpdateUser),
    takeEvery(ActionTypes.DEL_USER, handleDeleteUser),
    takeEvery(ActionTypes.GET_PRODUCTS,handleGetAllProduct),
    takeEvery(ActionTypes.ADD_PRODUCT, handleAddProduct),
    takeEvery(ActionTypes.UPDATE_PRODUCT, handleUpdateProduct),
    takeEvery(ActionTypes.DEL_PRODUCT, handleDeleteProduct),
    takeEvery(ActionTypes.GET_PRODUCTS_CATEGORY, handleGetAllProductCat),
    takeEvery(ActionTypes.ADD_PRODUCT_CATEGORY, handleAddProductCat),
    takeEvery(ActionTypes.GET_LOGIN, handleLogin)
  ]);
}

export default watchAll;