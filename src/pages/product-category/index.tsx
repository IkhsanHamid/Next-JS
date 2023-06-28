import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductCat } from "../redux/action/actionReducer";
import Content from "../user/content";
import { BsThreeDotsVertical, BsFillPencilFill, BsTrash } from "react-icons/bs";
import { Menu, Transition } from "@headlessui/react";

const Category = () => {
  let { productCat, message, refresh } = useSelector(
    (state: any) => state.productCatReducers
  );
  console.log(productCat);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const columns = [
    { name: "#No" },
    { name: "name" },
    { name: "description" },
  ];
  useEffect(() => {
    dispatch(getAllProductCat());
    // toast
  }, [refresh, isOpen]);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const startIndex = (currentPage - 1) * recordsPerPage + 1;
  const endIndex = Math.min(currentPage * recordsPerPage, (productCat.result)?.length || 0);
  const records = (productCat.result)?.slice(startIndex - 1, endIndex) || [];
  const totalPages = Math.ceil(((productCat.result)?.length || 0) / recordsPerPage);
  const numbers = [];
  for (let i = 1; i <= totalPages; i++) {
    numbers.push(i);
  }

  const prePage = ()=>{
    if(currentPage !==  startIndex) {
      setCurrentPage(currentPage-1);
    }
  }
  const nextPage = ()=>{
    if(currentPage !==  endIndex && currentPage < totalPages) {
      setCurrentPage(currentPage+1);
    }
  }
  return (
    <div>
      <Content title="product category" fungsi={() => setIsOpen(true)}>
        <table className="min-w-full table-fixed">
          <thead>
            <tr className="border-t border-gray-200">
              {(columns || []).map((col) => (
                <th className="pr-6 py-2 text-left border-b border-gray-200 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <span className="lg:pl-2"> {col.name} </span>
                </th>
              ))}
              <th className="pr-6 py-2 text-left border-b border-gray-200 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
            </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {(records || []).map((dt: any, index: any) => (
              <tr key={dt.id}>
                {/* {console.log(dt)} */}
                <td className="px-6 py-3 text-sm text-gray-900">{startIndex + index}</td>
                <td className="px-6 py-3 text-sm text-gray-900">{dt.name}</td>
                <td className="px-6 py-3 text-sm text-gray-900">
                  {dt.description}
                </td>
                <td className="px-6 py-3 text-sm text-gray-900">
                  <div className="w-full text-right">
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
                                  //   onClick={() =>{setIsEdit(true); setData(dt)}}
                                  className={`${
                                    active
                                      ? "bg-violet-500 text-white"
                                      : "text-gray-900"
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  {active ? (
                                    <BsFillPencilFill
                                      className="mr-2 h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <BsFillPencilFill
                                      className="mr-2 h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                  Edit
                                </button>
                              )}
                            </Menu.Item>
                          </div>
                          <div className="px-1 py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  //   onClick={() => handleDelete(dt.id)}
                                  className={`${
                                    active
                                      ? "bg-violet-500 text-white"
                                      : "text-gray-900"
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  {active ? (
                                    <BsTrash
                                      className="mr-2 h-5 w-5 text-violet-400"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <BsTrash
                                      className="mr-2 h-5 w-5 text-violet-400"
                                      aria-hidden="true"
                                    />
                                  )}
                                  Delete
                                </button>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content>
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <a
            href="#"
            onClick={prePage}
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            href="#"
            onClick={nextPage}
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </a>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing
              <span className="font-medium"> {startIndex} </span>
              to
              <span className="font-medium"> {endIndex} </span>
              of
              <span className="font-medium"> {(productCat.result)?.length} </span>
              results
            </p>
          </div>
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <a
                href="#"
                onClick={prePage}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              {/* <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" --> */}
              {numbers.map((number) => (
                <a
                  key={number}
                  href="#"
                  className={`relative ${
                    number === currentPage
                      ? "z-10 inline-flex items-center bg-indigo-600"
                      : "inline-flex items-center"
                  } px-4 py-2 text-sm font-semibold ${
                    number === currentPage ? "text-white" : "text-gray-900"
                  } focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    number === currentPage
                      ? "outline-indigo-600"
                      : "ring-gray-300"
                  }`}
                  onClick={() => setCurrentPage(number)}
                >
                  {number}
                </a>
              ))}
              <a
                href="#"
                onClick={nextPage}
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
