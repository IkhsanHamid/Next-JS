import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getLogin } from "./redux/action/actionReducer";
import AddUser from "./user/addUser";

const Login = () => {
  let { message } =  useSelector((state: any) => state.loginReducers);
  type FormValues = {
    user_name: string;
    password: string;
  };
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const router = useRouter();
  const handleRegistration = (data: any) => {
    dispatch(getLogin(data));
  };
  useEffect((): any => {
    const tokennext = localStorage.getItem("TokenNext");
    if (tokennext) {
      router.push("/");
    }
  }, [handleRegistration]);
  const registerOptions = {
    user_name: { required: "Name is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters",
      },
    },
  };
  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
      <div className="w-full sm:max-w-md p-5 mx-auto">
        <h2 className="mb-12 text-center text-5xl font-extrabold">Welcome.</h2>
        <form onSubmit={handleSubmit(handleRegistration)}>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="user_name">
              User_name
            </label>
            <input
              type="text"
              className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
              {...register("user_name", registerOptions.user_name)}
            />
             {errors?.user_name && errors?.user_name.message}
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
              {...register(
                "password",
                registerOptions.password
              )}
              />
              {errors?.password && errors?.password.message}
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                type="checkbox"
                className="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                
              />
             
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm leading-5 text-gray-900"
              >
                {" "}
                Remember me{" "}
              </label>
            </div>
            <a href="#" className="text-sm">
              {" "}
              Forgot your password?{" "}
            </a>
          </div>
          <div className="mt-6">
            <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">
              Sign In
            </button>
          </div>
          <div className="mt-6 text-center">
            <a href="#" onClick={()=>setIsOpen(true)} className="underline">
              Sign up for an account
            </a>
          </div>
        </form>
      </div>
      {isOpen ? (
        <AddUser show={isOpen} closeModal={() => setIsOpen(false)} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Login;
