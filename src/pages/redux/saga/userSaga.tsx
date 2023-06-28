import { call, put } from "redux-saga/effects";
import {
  addProductResponse,
  addUserResponse,
  deleteProductResponse,
  deleteUserResponse,
  getAllProductResponse,
  getAllResponse,
  updateProductResponse,
  updateUserResponse,
} from "../action/actionReducer";
import apiMethod from "@/pages/api/apiMethod";

function* handleGetAllUser(): any {
  try {
    const result = yield call(apiMethod.JoinAll);
    yield put(getAllResponse(result.data));
  } catch (error) {
    yield put(getAllResponse({ message: error, status: 400 }));
  }
}
function* handleAddUser(action: any): any {
  try {
    const result = yield call(apiMethod.Create, action.payload);
    yield put(addUserResponse(result.data));
  } catch (error) {
    yield put(addUserResponse({ message: error, status: 400 }));
  }
}
function* handleUpdateUser(action: any): any {
  try {
    const result = yield call(apiMethod.UpdatedUserandCust, action.payload);
    yield put(updateUserResponse(result.data));
  } catch (error) {
    yield put(updateUserResponse({ message: error, status: 400 }));
  }
}
function* handleDeleteUser(action: any): any {
  try {
    const result = yield call(apiMethod.DeleteUserAndCust, action.payload);
    yield put(deleteUserResponse(result.data));
  } catch (error) {
    yield put(deleteUserResponse({ message: error, status: 400 }));
  }
}
function* handleGetAllProduct(): any {
  try {
    const result = yield call(apiMethod.GetAllProduct);
    yield put(getAllProductResponse(result.data));
  } catch (error) {
    yield put(getAllProductResponse({ message: error, status: 400 }));
  }
}
function* handleAddProduct(action: any): any {
  try {
    const result = yield call(apiMethod.CreateProduct, action.payload);
    yield put(addProductResponse(result.data));
  } catch (error) {
    yield put(addProductResponse({ message: error, status: 400 }));
  }
}
function* handleUpdateProduct(action: any): any {
  try {
    const result = yield call(
      apiMethod.UpdateProduct,
      action.payload,
      action.id
    );
    yield put(updateProductResponse(result.data));
  } catch (error) {
    yield put(updateUserResponse({ message: error, status: 400 }));
  }
}
function* handleDeleteProduct(action: any): any {
  try {
    const result = yield call(apiMethod.DeleteProduct, action.payload);
    yield put(deleteProductResponse(result.data));
  } catch (error) {
    yield put(deleteUserResponse({ message: error, status: 400 }));
  }
}

export {
  handleGetAllUser,
  handleAddUser,
  handleUpdateUser,
  handleDeleteUser,
  handleGetAllProduct,
  handleAddProduct,
  handleUpdateProduct,
  handleDeleteProduct,
};
