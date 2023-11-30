import React from 'react';
import UseServices from '../../../Hooks/useServices';
import AllServicesGrid from './AllServicesGrid';

const AllServices = () => {
    const [services] = UseServices();

    console.log(services);
    return (
        <div className="w-full h-full py-20">
        <h1 className="text-3xl md:text-5xl pb-10 font-semibold leading-10 text-gray-800 text-center">
          Services we Provided
        </h1>
  
        <div className="w-full md:w-5/6 mx-auto p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center">
          {services?.map((service) => (
            <AllServicesGrid service={service} key={service?._id} />
          ))}
        </div>
      </div>
    );
};

export default AllServices;