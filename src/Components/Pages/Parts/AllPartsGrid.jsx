import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";


const AllPartsGrid = ({ part }) => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const confirmToPay = (event) => {
    event.preventDefault();

    const info = {
      item_name: part?.name,
      item_desc: part?.description,
      item_category: part?.category,
      item_image: part?.image,
      total_amount: part?.price,
      cus_name: user?.displayName,
      cus_email: user?.email,
    };

    // console.log(info);

    axios.post(`https://autoparts-service-server.vercel.app/api/v1/ssl/init`, info).then((res) => {
      console.log(res.data);
      if (res?.data) {
        window.location = res?.data;
      }
    });

  };

  return (
    <div onClick={() => navigate(`/parts/${part?._id}`)} className="w-full border shadow-lg cursor-pointer hover:shadow-2xl">
      <div className="mx-2 lg:mb-0 mb-8">
        <div className="h-60">
          <img src={part?.image} className="w-full h-60" />
        </div>
        <div className="bg-white">
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
              <p className="text-xs text-gray-500">{part?.category}</p>
            </div>
          </div>
          <div className="p-4">
            <div className="w-full flex justify-start items-center">
              {part?.name.length > 15 ? (
                <h2 className="text-lg font-semibold">{`${part?.name.slice(
                  0,
                  15
                )}...`}</h2>
              ) : (
                <h2 className="text-lg font-semibold">{`${part?.name}`}</h2>
              )}
            </div>
            <div className="flex justify-between items-center pt-5">
              <p className="text-xs text-gray-600">Stock:{part?.stock}</p>
              <p className="text-xs text-gray-600 pl-5">4 days ago</p>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              {part?.description.slice(0, 150)}
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
                {part?.sku.slice(0, 17)}
              </h2>
              <h3 className="text-indigo-700 text-xl font-semibold">
              <span className="pr-1">&#2547;</span>
                {part?.price}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPartsGrid;
