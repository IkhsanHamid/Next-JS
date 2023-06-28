import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import apiMethod from "../api/apiMethod";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/action/actionReducer";
// import { useNavigate } from "react-router-dom";

const AddUser = (props: any) => {
  // const navigate = useNavigate();
  // function handleClick(event) {

  //   navigate('users');
  // }
  const dispatch = useDispatch();

  type FormValues = {
    user_name: string;
    password: string;
    firstname: string;
    lastname: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [pesan, setPesan] = useState("");
  const handleRegistration = (data: any) => {
    dispatch(addUser(data));
    setPesan("sukses");
  };
  const registerOptions = {
    user_name: { required: "Name is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters",
      },
    },
    firstname: { required: "First name is required" },
    lastname: { required: "Last name is required" },
  };
  return (
    <div>
      <Transition appear show={props.show} as={Fragment}>
        <Dialog as="div" className="relative z-10" static onClose={() => null}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Add Users
                  </Dialog.Title>
                  <div className="mt-2">
                    <form onSubmit={handleSubmit(handleRegistration)}>
                      <div className="max-w-xl bg-white py-6 px-3 m-auto w-full mt-6">
                        <div className="grid grid-cols-1 gap-4 max-w-xl -auto">
                          <div className="col-span-1">
                            <input
                              type="text"
                              {...register(
                                "user_name",
                                registerOptions.user_name
                              )}
                              className="border-solid rounded-lg border-gray-400 border-2 p-3 md:text-md w-full"
                              placeholder="User_name"
                            ></input>
                            {errors?.user_name && errors?.user_name.message}
                          </div>
                          <div className="col-span-1">
                            <input
                              type="password"
                              {...register(
                                "password",
                                registerOptions.password
                              )}
                              className="border-solid rounded-lg border-gray-400 border-2 p-3 md:text-md w-full"
                              placeholder="Password"
                            ></input>
                            {errors?.password && errors?.password.message}
                          </div>
                          <div className="col-span-1">
                            <input
                              type="text"
                              {...register(
                                "firstname",
                                registerOptions.firstname
                              )}
                              className="border-solid rounded-lg border-gray-400 border-2 p-3 md:text-md w-full"
                              placeholder="Firstname"
                            ></input>
                            {errors?.firstname && errors?.firstname.message}
                          </div>
                          <div className="col-span-1">
                            <input
                              type="text"
                              {...register(
                                "lastname",
                                registerOptions.firstname
                              )}
                              className="border-solid rounded-lg border-gray-400 border-2 p-3 md:text-md w-full"
                              placeholder="Lastname"
                            ></input>
                            {errors?.lastname && errors?.lastname.message}
                          </div>
                          {pesan && <div>{pesan}</div>}
                          <div className="flex-row space-x-4 mt-4 text-right">
                            <button
                              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200
                            focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            >
                              Submit
                            </button>
                            <button
                              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200
                            focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                              onClick={() => props.closeModal()}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default AddUser;
