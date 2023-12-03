import {
  faArrowAltCircleRight,
  faListCheck,
  faUsers,
  faContactBook,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DBCards = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [books, setBooks] = useState([]);
  const [orders, setOrders] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch(`https://readify-server-five.vercel.app/api/v1/users`, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    fetch(`https://readify-server-five.vercel.app/api/v1/books`, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setBooks(data?.data?.result));
  }, []);


  useEffect(() => {
    fetch(`https://readify-server-five.vercel.app/api/v1/orders`, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data?.data?.result));
  }, []);

  useEffect(() => {
    fetch(`https://readify-server-five.vercel.app/api/v1/contacts`, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setContacts(data?.data?.result));
  }, []);


  return (
    <div className="">
      <div className="grid md:grid-cols-2 gap-5 py-10">
        {/* Registered Users */}
        <div className="">
          <div className="flex items-center h-40 justify-between bg-[#252525] p-3 rounded-t-xl">
            <div className="">
              <h3 className="text-3xl md:text-4xl font-bold py-2 text-white">
                {users?.length}
              </h3>
              <h3 className="text-md font-bold text-white">Total Users</h3>
            </div>
            <div className="">
              <FontAwesomeIcon
                className="text-[#42424281] text-3xl md:text-4xl"
                icon={faUsers}
              />
            </div>
          </div>
          <div
            onClick={() => navigate("/cpanel/musers")}
            className="bg-[#1e1e1e] cursor-pointer py-2 text-center rounded-b-xl"
          >
            <h2 className="text-md text-white">
              More Info{" "}
              <FontAwesomeIcon className="pl-2" icon={faArrowAltCircleRight} />{" "}
            </h2>
          </div>
        </div>
        {/* Total Books */}
        <div className="">
          <div className="flex items-center h-40 justify-between bg-[#17A2BB] p-3 rounded-t-xl">
            <div className="">
              <h3 className="text-3xl md:text-4xl font-bold py-2 text-white">
                {books?.length}
              </h3>
              <h3 className="text-md font-bold text-white">Total Books</h3>
            </div>
            <div className="">
              <FontAwesomeIcon
                className="text-[#42424281] text-3xl md:text-4xl"
                icon={faBook}
              />
            </div>
          </div>
          <div
            onClick={() => navigate("/cpanel/mbooks")}
            className="bg-[#0c93ab] cursor-pointer py-2 text-center rounded-b-xl"
          >
            <h2 className="text-md text-white">
              More Info{" "}
              <FontAwesomeIcon className="pl-2" icon={faArrowAltCircleRight} />{" "}
            </h2>
          </div>
        </div>

        {/* Total Orders */}
        <div className="">
          <div className="flex items-center h-40 justify-between bg-[#c6399b] p-3 rounded-t-xl">
            <div className="">
              <h3 className="text-3xl md:text-4xl font-bold py-2 text-white">
                {orders?.length}{" "}
              </h3>
              <h3 className="text-md font-bold text-white">Total Orders</h3>
            </div>
            <div className="">
              <FontAwesomeIcon
                className="text-[#42424281] text-3xl md:text-4xl"
                icon={faListCheck}
              />
            </div>
          </div>
          <div
            onClick={() => navigate("/cpanel/morders")}
            className="bg-[#9c2c7a] cursor-pointer py-2 text-center rounded-b-xl"
          >
            <h2 className="text-md text-white">
              More Info{" "}
              <FontAwesomeIcon className="pl-2" icon={faArrowAltCircleRight} />{" "}
            </h2>
          </div>
        </div>

        {/* Total Contacts */}
        <div className="">
          <div className="flex items-center h-40 justify-between bg-[#ad5530] p-3 rounded-t-xl">
            <div className="">
              <h3 className="text-3xl md:text-4xl font-bold py-2 text-white">
                {contacts?.length}{" "}
              </h3>
              <h3 className="text-md font-bold text-white">Total Contacts</h3>
            </div>
            <div className="">
              <FontAwesomeIcon
                className="text-[#42424281] text-3xl md:text-4xl"
                icon={faContactBook}
              />
            </div>
          </div>
          <div
            onClick={() => navigate("/cpanel/mcontacts")}
            className="bg-[#8f4626] cursor-pointer py-2 text-center rounded-b-xl"
          >
            <h2 className="text-md text-white">
              More Info{" "}
              <FontAwesomeIcon className="pl-2" icon={faArrowAltCircleRight} />{" "}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DBCards;
