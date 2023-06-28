import ActionTypes from "./actionType";
// user
export const getAll = () => {
  return {
    type: ActionTypes.GET_USERS,
  };
};
export const getAllResponse = (payload: any) => {
  return {
    type: ActionTypes.GET_USERS_RESPONSE,
    payload,
  };
};
export const addUser = (payload: any) => {
  return {
    type: ActionTypes.ADD_USER,
    payload,
  };
};
export const addUserResponse = (payload: any) => {
  return {
    type: ActionTypes.ADD_USER_RESPONSE,
    payload,
  };
};
export const updateUser = (payload: any) => {
  return {
    type: ActionTypes.UPDATE_USER,
    payload,
  };
};
export const updateUserResponse = (payload: any) => {
  return {
    type: ActionTypes.UPDATE_USER_RESPONSE,
    payload,
  };
};
export const deleteUser = (payload: any) => {
  return {
    type: ActionTypes.DEL_USER,
    payload,
  };
};
export const deleteUserResponse = (payload: any) => {
  return {
    type: ActionTypes.DEL_USER_RESPONSE,
    payload,
  };
};

// product
export const getAllProduct = () => {
  return {
    type: ActionTypes.GET_PRODUCTS,
  };
};
export const getAllProductResponse = (payload: any) => {
  return {
    type: ActionTypes.GET_PRODUCTS_RESPONSE,
    payload,
  };
};
export const addProduct = (payload: any) => {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload,
  };
};
export const addProductResponse = (payload: any) => {
  return {
    type: ActionTypes.ADD_PRODUCT_RESPONSE,
    payload,
  };
};
export const updateProduct = (payload: any, id: any) => {
  return {
    type: ActionTypes.UPDATE_PRODUCT,
    payload,
    id,
  };
};
export const updateProductResponse = (payload: any) => {
  return {
    type: ActionTypes.UPDATE_PRODUCT_RESPONSE,
    payload,
  };
};
export const deleteProduct = (payload: any) => {
  return {
    type: ActionTypes.DEL_PRODUCT,
    payload,
  };
};
export const deleteProductResponse = (payload: any) => {
  return {
    type: ActionTypes.DEL_PRODUCT_RESPONSE,
    payload,
  };
};

// product category
export const getAllProductCat = () => {
  return {
    type: ActionTypes.GET_PRODUCTS_CATEGORY,
  };
};
export const getAllProductCatResponse = (payload: any) => {
  return {
    type: ActionTypes.GET_PRODUCTS_CATEGORY_RESPONSE,
    payload,
  };
};
export const addProductCat = (payload: any) => {
  return {
    type: ActionTypes.ADD_PRODUCT_CATEGORY,
    payload,
  };
};
export const addProductCatResponse = (payload: any) => {
  return {
    type: ActionTypes.ADD_PRODUCT_CATEGORY_RESPONSE,
    payload,
  };
};
export const updateProductCat = (payload: any, id: any) => {
  return {
    type: ActionTypes.UPDATE_PRODUCT_CATEGORY,
    payload,
    id,
  };
};
export const updateProductCatResponse = (payload: any) => {
  return {
    type: ActionTypes.UPDATE_PRODUCT_CATEGORY_RESPONSE,
    payload,
  };
};
export const deleteProductCat = (payload: any) => {
  return {
    type: ActionTypes.DEL_PRODUCT_CATEGORY,
    payload,
  };
};
export const deleteProductCatResponse = (payload: any) => {
  return {
    type: ActionTypes.DEL_PRODUCT_CATEGORY_RESPONSE,
    payload,
  };
};
export const getLogin = (payload: any) => {
  return {
    type: ActionTypes.GET_LOGIN,
    payload,
  };
};
export const getLoginResponse = (payload: any) => {
  return {
    type: ActionTypes.GET_LOGIN_RESPONSE,
    payload:payload,
  };
};
