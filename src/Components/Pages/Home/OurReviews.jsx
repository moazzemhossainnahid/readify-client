import React from "react";
import { useNavigate } from "react-router-dom";
import AllReviews from "../../Others/Reviews/AllReviews";

const OurReviews = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div className="py-10">
        <h3 className="text-xl md:text-2xl lg:text-4xl font-bold text-center font-display py-7">
          Our Customers Review
        </h3>
        <div className="w-[70px] mx-auto h-[3px] bg-[#1584f3] mb-10 relative ">
          <div className="radiant bg-[#FFFFFF]"></div>
        </div>
        <div className="w-full p5 md:px-10">

            <AllReviews/>
        </div>
      </div>
      {/* <button onClick={() => navigate('/reviews')} className="btn btn-outline btn-danger">See More Reviews</button> */}
    </div>
  );
};

export default OurReviews;
