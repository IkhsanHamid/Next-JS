import React, { Fragment, useEffect, useState } from "react";
import Content from "./content";
import { Menu, Transition } from "@headlessui/react";
import { BsThreeDotsVertical, BsFillPencilFill, BsTrash } from "react-icons/bs";
import AddUser from "./addUser";
import EditUser from "./editUser";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAll } from "../redux/action/actionReducer";

const Users = () => {
  let { user, message, refresh } = useSelector(
    (state: any) => state.userReducers
  );
  console.log(user);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [data, setData] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(getAll());
  }, [refresh, isOpen, isEdit, isDelete]);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 7;
  const startIndex = (currentPage - 1) * recordsPerPage + 1;
  const endIndex = Math.min(currentPage * recordsPerPage, user?.length || 0);

  const filteredUsers = user?.filter((dt:any) => {
    const fullName = `${dt.firstname} ${dt.lastname}`;
    return fullName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const records = filteredUsers?.slice(startIndex - 1, endIndex) || [];
  const totalResults = filteredUsers?.length || 0;
  const totalPages = Math.ceil(totalResults / recordsPerPage);
  const numbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const prePage = () => {
    if (currentPage !== startIndex) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== endIndex && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const columns = [
    { name: "#No" },
    { name: "user_name" },
    { name: "firstname" },
    { name: "lastname" },
  ];

  const handleDelete = async (id: any) => {
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
        await dispatch(deleteUser(id));
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
      <Content title="users" fungsi={() => setIsOpen(true)}>
        <input
          placeholder="Search engine"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <table className="min-w-full table-fixed">
          <thead>
            <tr className="border-t border-gray-300">
              {columns.map((col, index) => (
                <th
                  key={index}
                  className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {col.name}
                </th>
              ))}
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {records.map((item: any, index: any) => (
              <tr key={index}>
                <td className="py-4 px-6 text-left whitespace-nowrap">
                  {startIndex + index}
                </td>
                <td className="py-4 px-6 text-left whitespace-nowrap">
                  {item.username}
                </td>
                <td className="py-4 px-6 text-left whitespace-nowrap">
                  {item.firstname}
                </td>
                <td className="py-4 px-6 text-left whitespace-nowrap">
                  {item.lastname}
                </td>
                <td className="py-4 px-6 text-left whitespace-nowrap">
                  <Menu>
                    <Menu.Button>
                      <BsThreeDotsVertical size={20} />
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={() => {
                                  setData(item);
                                  setIsEdit(true);
                                }}
                                className={`${
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700"
                                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                              >
                                <BsFillPencilFill className="mr-2" />
                                Edit
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={() => handleDelete(item.id)}
                                className={`${
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700"
                                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                              >
                                <BsTrash className="mr-2" />
                                Delete
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end items-center mt-4">
          <div className="flex mr-2">
            <button
              onClick={prePage}
              className="py-1 px-3 rounded bg-gray-200 text-gray-600 hover:bg-gray-300"
            >
              Prev
            </button>
            <button
              onClick={nextPage}
              className="py-1 px-3 rounded bg-gray-200 text-gray-600 hover:bg-gray-300"
            >
              Next
            </button>
          </div>
          <div className="flex text-sm">
            {numbers.map((number, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(number)}
                className={`${
                  currentPage === number
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-700"
                } py-1 px-3 rounded`}
              >
                {number}
              </button>
            ))}
          </div>
        </div>
      </Content>
      <AddUser isOpen={isOpen} setIsOpen={setIsOpen} />
      {isEdit && <EditUser data={data} setIsEdit={setIsEdit} />}
    </div>
  );
};

export default Users;
