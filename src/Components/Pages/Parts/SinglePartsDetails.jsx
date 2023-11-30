import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useParts from "../../../Hooks/useParts";
import EmptyList from "../../Others/EmptyList/EmptyList";
import Chip from "../../Others/Chip";
import RelatedParts from "./RelatedParts";

const SinglePartsDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [parts] = useParts();
  const [part, setPart] = useState(null);


  useEffect(() => {
    let part = parts?.find((p) => p._id === id);
    if (part) {
      setPart(part);
    }
  }, [parts, id]);

  return (
    <div className="w-full">
      <div className="container py-7 w-full md:w-3/4 mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="blog-goBack w-32 rounded mx-3 justify-start px-5 py-2 flex text-indigo-600 bg-gray-200"
        >
          <span> &#8592;</span> <span className="pl-2">Go Back</span>
        </button>
        {part ? (
          <div className="blog-wrap pt-10">
            <header>
              <p className="blog-date pb-5 font-semibold text-gray-500">
                Published {new Date(part.createdAt).toLocaleString()}
              </p>
              <h1 className="text-black pb-3 text-2xl md:text-4xl font-bold">
                {part?.name}
              </h1>
              <div className="blog-subCategory w-full flex justify-center">
                <Chip label={part?.category} />
              </div>
            </header>
            <img className="py-5 mx-auto" src={part?.image} alt="cover" />
            <div className="space-y-4">
              <h2 className="text-gray-500text-xs font-semibold">
                Stock: {part?.stock}
              </h2>
              <h2 className="text-indigo-700 text-xs font-semibold">
                {part?.sku.slice(0, 17)}
              </h2>
              <h3 className="text-indigo-700 text-xl font-semibold">
                <span className="pr-3"> Price:</span>
                <span className="pr-1">&#2547;</span>
                {part?.price}/=
              </h3>
            </div>
            <div className="">
              <p className="blog-desc p-5 md:px-10">{part?.description}</p>
            </div>
            <div className="pt-7">
              <button onClick={() => navigate(`/checkout/${part?._id}`)} className="btn btn-outline btn-secondary flex items-center justify-center mx-auto">Checkout this Item <span className="text-2xl -mt-1">&#8608;</span></button>
            </div>
          </div>
        ) : (
          <EmptyList />
        )}
      </div>
      <RelatedParts part={part} />
    </div>
  );
};

export default SinglePartsDetails;
