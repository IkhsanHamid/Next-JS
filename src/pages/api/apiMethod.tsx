import axios from "../config/endpoint";

const findAll = () => {
  return axios.get("/user-dto/Alluser");
};

const JoinAll = () => {
  return axios.get("/user/JoinCustUs");
};

const Create = (data:any) => {
  return axios.post("/user-dto/InsertUser", data);
};

const GetbyId = (id:any) => {
  return axios.get(`/user-dto/findOneUser/${id}`);
};

const UpdatedUserandCust = (data:any) => {
  return axios.put(`/user-dto/updateUser/${data.user_id}`, data);
};

const DeleteUserAndCust = (id:any) => {
  // console.log(id);
  return axios.delete(`/user-dto/deleteUser/${id}`);
};

const GetAllProduct = () => {
  return axios.get("/product-dto/AllProducts");
};

const CreateProduct = (data:any) => {
  return axios.post("/product-dto/uploads", data, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
};

const DeleteProduct = (id:any) => {
  return axios.delete(`/product-dto/deleteProduct/${id}`);
};

const UpdateProduct = (data:any,id:any) =>{
    return axios.put(`/product-dto/updateProduct/${id}`,data, 
    {
      headers: {
        'Content-Type': 'multipart/form-data' 
      }
    })
}

const GetProductCat = ()=>{
  return axios.get("/cat-dto/getdata")
}
const UpdateProductCat = (data:any, id:any)=>{
  return axios.put(`/cat-dto/update/${id}`, data)
}
const CreateProductCat = (data:any)=>{
  return axios.post(`/cat-dto/insert`)
}
const DeleteProductCat = (id:any)=>{
  return axios.delete(`/cat-dto/delete/${id}`)
}
const Login = (data:any)=>{
  return axios.post('/login-dto/login', data)
}
export default{
  findAll,
  JoinAll,
  Create,
  GetbyId,
  UpdatedUserandCust,
  DeleteUserAndCust,
  GetAllProduct,
  CreateProduct,
  DeleteProduct,
  UpdateProduct,
  GetProductCat,
  UpdateProductCat,
  CreateProductCat,
  DeleteProductCat,
  Login
};
