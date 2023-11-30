import React, { useEffect, useState } from "react";
import DeleteServicesModal from "./Modals/DeleteServicesModal";
import ManageServicesRow from "./ManageServicesRow";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ManageServices = () => {
  const [number, setNumber] = useState(0);
  const [services, setServices] = useState(null);
  const [deleteService, setDeleteService] = useState(null);
  const { register, handleSubmit, reset } = useForm();
  const [allServices, setAllServices] = useState(false);

  const imageUrlKey = "e738f1d16de6b265746b7f82cc157644";

  useEffect(() => {
    fetch("https://autoparts-service-server.vercel.app/api/v1/services")
      .then((res) => res.json())
      .then((data) => setServices(data?.data));
  }, [number]);

  console.log(services);

  function generateSku() {
    const timestamp = Date.now();
    const randomChars = Math.random().toString(36).substring(2, 7); // Generate random alphanumeric characters
    const sku = `SKU-${timestamp}-${randomChars}`;
    return sku;
  }

  const newProductSku = generateSku();

  const handleAddService = async (data) => {
    const image = data.photoURL[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageUrlKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const service = {
            name: data.name,
            category: data.category,
            price: data.price,
            description: data.description,
            sku: newProductSku,
            image: img,
          };

          // send to database
          fetch(`https://autoparts-service-server.vercel.app/api/v1/services`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(service),
          })
            .then((res) => res.json())
            .then((data) => {
              //   console.log(data);
              if (data?.status === "Successful") {
                toast.success("Service Add Successfully");
                reset();
                setNumber(number + 1);
              } else {
                toast.error("Faild to Add Service");
              }
            });
        }
      });
  };

  return (
    <div className=" text-left h-full w-full">
      <div className="w-full flex items-center justify-center my-12">
        <div className="bg-white shadow rounded py-12 px-8 mb-20">
          <p className="md:text-3xl text-xl font-bold pb-10 leading-7 text-center text-gray-700">
            Total Services: {services?.totalServices}
          </p>
          <div className="pb-5">
            <label
              for="addService"
              className="rounded btn btn-sm btn-warning btn-outline"
            >
              Add Service
            </label>
          </div>
          <table className="border-collapse w-full bg-slate-200">
            {/* <!-- head --> */}
            <thead>
              <tr className="text-center">
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Index
                </th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Image
                </th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Name
                </th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Category
                </th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Price
                </th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}

              {allServices
                ? services?.result?.map((service, index) => (
                    <ManageServicesRow
                      key={service?._id}
                      service={service}
                      index={index}
                      setDeleteService={setDeleteService}
                    ></ManageServicesRow>
                  ))
                : services?.result
                    ?.slice(0, 7)
                    ?.map((service, index) => (
                      <ManageServicesRow
                        key={service?._id}
                        service={service}
                        index={index}
                        setDeleteService={setDeleteService}
                      ></ManageServicesRow>
                    ))}
            </tbody>
          </table>
          {services?.result?.length > 7 && (
            <div className="pt-7">
              <button
                onClick={() => setAllServices(!allServices)}
                className="btn btn-outline btn-secondary flex items-center justify-center mx-auto"
              >
                {`${allServices ? "See Less Services" : "See More Services"}`}{" "}
                <span className="text-2xl -mt-1">&#8608;</span>
              </button>
            </div>
          )}
        </div>
        {deleteService && (
          <DeleteServicesModal
            deleteService={deleteService}
            setNumber={setNumber}
            number={number}
          ></DeleteServicesModal>
        )}
      </div>

      {/* <!-- The add Service modal --> */}

      <input type="checkbox" id="addService" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative  bg-slate-300">
          <label
            for="addService"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold">Please Add New Service Ifdormation</h3>
          <form
            onSubmit={handleSubmit(handleAddService)}
            action=""
            className="py-3"
          >
            <input
              {...register("name")}
              type="text"
              placeholder="Enter Service Name"
              className="input bg-slate-100 my-2 input-ghost w-full block mx-auto max-w-xs"
            />
            <input
              {...register("category")}
              type="text"
              placeholder="Enter Service Category"
              className="input bg-slate-100 my-2 input-ghost w-full block mx-auto max-w-xs"
            />
            <input
              {...register("price")}
              type="text"
              placeholder="Enter Service Price"
              className="input bg-slate-100 my-2 input-ghost w-full block mx-auto max-w-xs"
            />
            <textarea
              {...register("description")}
              type="text"
              placeholder="Enter Service Description"
              className="input bg-slate-100 my-2 input-ghost w-full h-28 block mx-auto max-w-xs"
            />
            <input
              {...register("photoURL")}
              type="file"
              placeholder="Enter Your Image"
              className="file-input file-input-bordered bg-slate-100 my-2 items-center w-full mx-auto block max-w-xs"
            />
            <input
              className="btn px-7 btn-warning my-5 block mx-auto"
              type="submit"
              value="Add Service"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManageServices;
