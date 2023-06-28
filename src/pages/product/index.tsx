import React, { useEffect, useState, Fragment } from "react";
import apiMethod from "../api/apiMethod";
import { useDispatch, useSelector } from "react-redux";
import AddProduct from "./addProduct";
import Swal from "sweetalert2";
import { BsThreeDotsVertical, BsFillPencilFill, BsTrash } from "react-icons/bs";
import { Menu, Transition } from "@headlessui/react";
import { deleteProduct, getAllProduct } from "../redux/action/actionReducer";
import EditProduct from "./editProduct";
import Content from "../user/content";

const Product = () => {
  const { product, message, refresh } = useSelector(
    (state:any) => state.productReducers
  );
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    dispatch(getAllProduct());
  }, [refresh, isOpen, isDelete]);

  const handleDelete = async (id:any) => {
    // console.log("oke");
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        await dispatch(deleteProduct(id));
        // const updatedUsers = users.filter((user) => user.id !== id);
        // setUsers(updatedUsers);
        setIsDelete(true);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      } else {
        Swal.fire("Cancelled", "Your file is safe.", "info");
      }
    } catch (error) {
      console.error("Error deleting data:", error);
      Swal.fire("Error!", "Failed to delete data. Please try again.", "error");
    }
  };

  return (
    <div>
      <Content title="Products" fungsi={() => setIsOpen(true)}>
        <div>
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">List Product</h2> */}

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {(product || []).map((dt:any) => (
                <div key={dt.id} className=" bg-white p-2 ">
                  <div className="w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={`http://localhost:7300/image/${dt.image}`}
                      alt={dt.name}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href="#">
                          <span aria-hidden="true" className="absolute "></span>
                          {dt.name}
                        </a>
                      </h3>
                      <p className="text-sm font-medium text-gray-900">
                        Rp {dt.price}
                      </p>
                    </div>
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="inline-flex justify-center w-full rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                          <BsThreeDotsVertical
                            className="ml-2 mr-1  text-gray-700 hover:text-gray-400 sm:flex"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="px-1 py-1 ">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={() => {setIsEdit(true); setData(dt)}}
                                  className={`${
                                    active
                                      ? "bg-violet-500 text-white"
                                      : "text-gray-900"
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm justify-between`}
                                >
                                  <span className="mr-2">
                                    {active ? (
                                      <BsFillPencilFill
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <BsFillPencilFill
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    )}
                                  </span>
                                  <span>Edit</span>
                                </button>
                              )}
                            </Menu.Item>
                          </div>
                          <div className="px-1 py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={() => handleDelete(dt.id)}
                                  className={`${
                                    active
                                      ? "bg-violet-500 text-white"
                                      : "text-gray-900"
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm justify-between`}
                                >
                                  <span className="mr-2">
                                    {active ? (
                                      <BsTrash
                                        className="h-5 w-5 text-violet-400"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <BsTrash
                                        className="h-5 w-5 text-violet-400"
                                        aria-hidden="true"
                                      />
                                    )}
                                  </span>
                                  <span>Delete</span>
                                </button>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Content>
      {isOpen && (
        <AddProduct show={isOpen} closeModal={() => setIsOpen(false)} />
      )}
      {isEdit ? (
        <EditProduct
          showEdit={isEdit}
          closeModalEdit={() => setIsEdit(false)}
          data={data}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Product;
