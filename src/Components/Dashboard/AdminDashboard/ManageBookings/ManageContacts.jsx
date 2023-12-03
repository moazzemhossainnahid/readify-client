import React, { useEffect, useState } from "react";
import DeleteContactsModal from "./Modals/DeleteContactsModal";
import ManageContactsRow from "./ManageContactsRow";

const ManageContacts = () => {
  const [number, setNumber] = useState(0);
  const [contacts, setContacts] = useState(null);
  const [deleteContact, setDeleteContact] = useState(null);
  const [allContacts, setAllContacts] = useState(false);

  useEffect(() => {
    fetch("https://readify-server-five.vercel.app/api/v1/contacts")
      .then((res) => res.json())
      .then((data) => setContacts(data?.data));
  }, [number]);

  return (
    <div className=" text-left h-full w-full">
      <div className="w-full flex items-center justify-center my-12">
        <div className="bg-white shadow rounded py-12 px-8 mb-20">
          <p className="md:text-3xl text-xl font-bold pb-10 leading-7 text-center text-gray-700">
            Total Contacts Data: {contacts?.result?.length}
          </p>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto">
            {/* <!-- row 1 --> */}

            {allContacts
              ? contacts?.result?.map((contact, index) => (
                <ManageContactsRow
                  key={contact?._id}
                  contact={contact}
                  index={index}
                  setDeleteContact={setDeleteContact}
                ></ManageContactsRow>
              ))
              : contacts?.result
                ?.slice(0, 4)
                ?.map((contact, index) => (
                  <ManageContactsRow
                    key={contact?._id}
                    contact={contact}
                    index={index}
                    setDeleteContact={setDeleteContact}
                  ></ManageContactsRow>
                ))}
          </div>
          {contacts?.result?.length > 4 && (
            <div className="pt-7">
              <button
                onClick={() => setAllContacts(!allContacts)}
                className="btn btn-outline btn-secondary flex items-center justify-center mx-auto"
              >
                {`${allContacts ? "See Less Contacts" : "See More Contacts"}`}{" "}
                <span className="text-2xl -mt-1">&#8608;</span>
              </button>
            </div>
          )}
        </div>
        {deleteContact && (
          <DeleteContactsModal
            deleteContact={deleteContact}
            setNumber={setNumber}
            number={number}
          ></DeleteContactsModal>
        )}
      </div>
    </div>
  );
};

export default ManageContacts;
