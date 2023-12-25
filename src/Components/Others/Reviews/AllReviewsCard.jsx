import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const AllReviewsCard = ({ review }) => {

  const data = review && review?.review;

  return (
    <div className="w-full h-fit border rounded-md mt-6 mx-auto px-5 pt-10 pb-5 relative">
      <div className="w-10 h-10  absolute -top-5 left-8 rounded-full bg-violet-200  flex items-center justify-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="none"
          viewBox="0 0 20 30"
        >
          <path
            fill="#4D2DB7"
            d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="none"
          viewBox="0 0 20 30"
        >
          <path
            fill="#4D2DB7"
            d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
          ></path>
        </svg>
      </div>
      <div className="w-full h-full">
        <img src={data?.image} alt="" className="w-12 h-12 rounded-full mx-auto" />
        <div className="pt-5 space-y-3">
          <p className='h-28'>
            {data?.review?.slice(0,150)}
          </p>
          <div className="flex items-center justify-center gap-2">
            <Rating
              emptySymbol={<FaRegStar className="text-yellow-400" />}
              fullSymbol={<FaStar className="text-yellow-400" />}
              fractions={2}
              initialRating={data?.rating}
              readonly
            />
            <p className="text-sm text-gray-500">
              ({data?.rating})
            </p>
          </div>
        </div>
        <div className="mt-5">
          <p className="font-medium">{data?.name}</p>
          {/* <p className="text-sm text-gray-500">{data?.email}</p> */}
        </div>
      </div>
    </div>
  );
};

export default AllReviewsCard;