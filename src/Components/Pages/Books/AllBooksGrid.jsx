import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import TimeAgo from "../../Others/TimeAgo/TimeAgo";


const AllBooksGrid = ({ book }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/books/${book?._id}`)} className="w-full cursor-pointer hover:shadow-2xl">
      <div className="group mb-8 md:mb-0">
        <div className="h-60 relative overflow-hidden">
          <img src={book?.image} className="w-full h-64 border" />
          <div className="absolute top-0 right-0 border-solid border-l-[15px] border-b-[15px] group-hover:border-l-[50px] group-hover:border-b-[50px] border-t-0 border-r-0 rotate-90 duration-700" style={{borderColor:"#ddd #fff"}}></div>

        </div>
        <div className="bg-white shadow-lg">
          <div className="flex items-center justify-between px-4 pt-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-bookmark"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
              </svg>
            </div>
            <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
              <p className="text-xs text-gray-500">{book?.category}</p>
            </div>
          </div>
          <div className="p-4">
            <div className="w-full flex justify-start items-center">
              {book?.name.length > 15 ? (
                <h2 className="text-lg font-semibold">{`${book?.name.slice(
                  0,
                  15
                )}...`}</h2>
              ) : (
                <h2 className="text-lg font-semibold">{`${book?.name}`}</h2>
              )}
            </div>
            <div className="flex justify-between items-center pt-5">
              <p className="text-xs text-gray-600">Stock:{book?.stock}</p>
              <p className="text-xs text-gray-600 pl-5"><TimeAgo createdAt={book?.createdAt} /></p>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              {book?.description.slice(0, 130)}
            </p>
            <div className="flex justify-between items-center mt-4">
              <div>
                <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                  12 months warranty
                </p>
              </div>
              <div className="">
                <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                  Complete box
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between py-4">
              <h2 className="text-indigo-700 text-xs font-semibold">
                {book?.sku.slice(0, 17)}
              </h2>
              <h3 className="text-indigo-700 text-xl font-semibold">
              <span className="pr-1">&#2547;</span>
                {book?.price}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooksGrid;
