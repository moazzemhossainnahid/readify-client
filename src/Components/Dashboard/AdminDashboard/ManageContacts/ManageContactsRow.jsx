import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const ManageContactsRow = ({ contact, index, setDeleteContact }) => {
  const { name, phone, email, address, message, createdAt } = contact;
  const options = {
    dateStyle: "short", // 'short' or 'long' based on your preference
  };
  return (
    <div className="">
      <div class="w-full flex flex-col justify-between bg-red-300 rounded-lg border border-red-300 mb-6 py-5 px-4">
        <div className="space-y-3">
          <h3 class="text-gray-800 leading-4 font-semibold">Name: {name}</h3>
          <h3 class="text-gray-800 leading-4 font-semibold">
            Email: {email}
          </h3>
          <div className="space-y-2">
            <p className="">
              <span className="font-semibold">Phone:</span> {phone}
            </p>
            <p className="">
              <span className="font-semibold">Address:</span> {address}
            </p>
            <p className="">
              <span className="font-semibold">Message:</span> {message}
            </p>
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between text-gray-800">
            <p class="text-sm">
              Date: {new Date(createdAt).toLocaleString(undefined, options)}
            </p>
            <label
              htmlFor="delete-contact-modal"
              onClick={() => setDeleteContact(contact)}
              class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-red-300 focus:ring-black"
              aria-label="edit note"
              role="button"
            >
              <FaTrashAlt />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageContactsRow;
