import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/action/actionReducer";

const EditUser = (props: any) => {
  let data = props.data;
  let dispatch = useDispatch();
  type FormValues = {
    user_id: number;
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

  // const { user } = useSelector(state => state.userReducer);
  const [pesan, setPesan] = useState("");

  const handleRegistration = async (data: any) => {
    // console.log(data);
    const update = await dispatch(updateUser(data));
    setPesan("sukses");
  };

  const registerOptions = {
    user_id:{},
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
  //   useEffect(() => {
  //     // Set the default values using setValue
  //     setValue("user_name", user?.user_name);
  //     setValue("firstname", user?.firstname);
  //     setValue("lastname", user?.lastname);
  //   }, [user, setValue]);

  return (
    <div>
      <Transition appear show={props.showEdit} as={Fragment}>
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
                    Edit Users
                  </Dialog.Title>
                  <div className="mt-2">
                    <form onSubmit={handleSubmit(handleRegistration)}>
                      <input
                        type="hidden"
                        {...register("user_id", registerOptions.user_id)}
                        defaultValue={data.id}
                      />
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
                              defaultValue={data.user_name}
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
                              defaultValue={data.firstname}
                            ></input>
                            {errors?.firstname && errors?.firstname.message}
                          </div>
                          <div className="col-span-1">
                            <input
                              type="text"
                              {...register(
                                "lastname",
                                registerOptions.lastname
                              )}
                              className="border-solid rounded-lg border-gray-400 border-2 p-3 md:text-md w-full"
                              placeholder="Lastname"
                              defaultValue={data.lastname}
                            ></input>
                            {errors?.lastname && errors?.lastname.message}
                          </div>
                          {pesan}
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
                              onClick={() => props.closeModalEdit()}
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

export default EditUser;
