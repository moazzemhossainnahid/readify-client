import React from "react";
import useParts from "../../../Hooks/useParts";
import AllPartsGrid from "./AllPartsGrid";
import EmptyList from "../../Others/EmptyList/EmptyList";

const AllParts = () => {
  const [parts] = useParts();

  // console.log(parts);
  return (
    <div className="w-full h-full py-20">
      <h1 className="text-3xl md:text-5xl pb-10 font-semibold leading-10 text-gray-800 text-center">
        Our Genuine Auto Parts
      </h1>

      {parts ? (
        <div className="w-full md:w-5/6 mx-auto p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center">
          {parts?.map((part) => (
            <AllPartsGrid part={part} key={part?._id} />
          ))}
        </div>
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export default AllParts;
