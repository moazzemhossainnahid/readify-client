import React from 'react';

const ManageServicesRow = ({ service, index, setDeleteService}) => {

    const { name, image, category, price } = service;

    return (
        <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
            <td className="w-full lg:w-auto text-sm text-gray-800 text-center border border-b block font-semibold lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Index</span>
                {index + 1}
            </td>
            <td className="w-full lg:w-auto text-sm text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Product</span>
                <img src={image} alt="" className="w-12 h-12 rounded-full p-1" />
            </td>
            <td className="w-full lg:w-auto text-sm text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">customerId</span>
                {name} <br />
            </td>
            <td className="w-full lg:w-auto text-sm text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Order Date</span>
                {category}
            </td>
            <td className="w-full lg:w-auto font-bold text-green-700 text-sm text-center border border-b block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Payment Status</span>
                {price}
            </td>
            <td className="w-full lg:w-auto text-xs p-2 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <div className="flex justify-center pb-1 items-center">
                    <label htmlFor="delete-service-modal" onClick={() => setDeleteService(service)} className="text-black rounded shadow px-1 py-1 cursor-pointer text-xs bg-secondary ">Delete Service</label>
                </div>

            </td>
        </tr>
    );
};

export default ManageServicesRow;