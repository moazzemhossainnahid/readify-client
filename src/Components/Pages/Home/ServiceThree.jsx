import React from "react";
import useParts from "../../../Hooks/useParts";
import AllPartsGrid from "../Parts/AllPartsGrid";
import { useNavigate } from "react-router-dom";
import useServices from "../../../Hooks/useServices";
import AllServicesGrid from "../Services/AllServicesGrid";

const ServiceThree = () => {
  const [services] = useServices();
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div className="py-10">
        <h3 className="text-xl md:text-2xl lg:text-4xl font-bold text-center font-display py-7">
          Our top 3 Service
        </h3>
        <div className="w-[70px] mx-auto h-[3px] bg-[#1584f3] mb-10 relative ">
          <div className="radiant bg-[#FFFFFF]"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5 p5 md:px-10">
          {services &&
            services?.slice(0,3)?.map((service) => (
              <AllServicesGrid service={service} key={service?._id} />
            ))}
        </div>
      </div>
      <button onClick={() => navigate('/services')} className="btn btn-outline btn-danger">See More Services</button>
    </div>
  );
};

export default ServiceThree;
