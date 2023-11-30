import {
  faArrowAltCircleRight,
  faBookAtlas,
  faBraille,
  faCartShopping,
  faListCheck,
  faBookmark,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DBCards = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [parts, setParts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [services, setServices] = useState([]);
  const [stafs, setStafs] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`https://autoparts-service-server.vercel.app/api/v1/users`, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    fetch(`https://autoparts-service-server.vercel.app/api/v1/parts`, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setParts(data?.data?.result));
  }, []);

  useEffect(() => {
    fetch(`https://autoparts-service-server.vercel.app/api/v1/services`, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setServices(data?.data?.result));
  }, []);

  useEffect(() => {
    fetch(`https://autoparts-service-server.vercel.app/api/v1/stafs`, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setStafs(data?.data?.result));
  }, []);

  useEffect(() => {
    fetch(`https://autoparts-service-server.vercel.app/api/v1/orders`, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data?.data?.result));
  }, []);

  useEffect(() => {
    fetch(`https://autoparts-service-server.vercel.app/api/v1/bookings`, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setBookings(data?.data?.result));
  }, []);

  console.log(stafs);

  return (
    <div className="">
      <div className="grid md:grid-cols-2 gap-5 py-10">
        {/* Registered Users */}
        <div className="">
          <div className="flex items-center justify-between bg-[#252525] p-3 rounded-t-xl">
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
        {/* Total Products */}
        <div className="">
          <div className="flex items-center justify-between bg-[#17A2BB] p-3 rounded-t-xl">
            <div className="">
              <h3 className="text-3xl md:text-4xl font-bold py-2 text-white">
                {parts?.length}
              </h3>
              <h3 className="text-md font-bold text-white">Total Parts</h3>
            </div>
            <div className="">
              <FontAwesomeIcon
                className="text-[#42424281] text-3xl md:text-4xl"
                icon={faCartShopping}
              />
            </div>
          </div>
          <div
            onClick={() => navigate("/cpanel/mparts")}
            className="bg-[#0c93ab] cursor-pointer py-2 text-center rounded-b-xl"
          >
            <h2 className="text-md text-white">
              More Info{" "}
              <FontAwesomeIcon className="pl-2" icon={faArrowAltCircleRight} />{" "}
            </h2>
          </div>
        </div>
        {/* Total Services */}
        <div className="">
          <div className="flex items-center justify-between bg-[#219422] p-3 rounded-t-xl">
            <div className="">
              <h3 className="text-3xl md:text-4xl font-bold py-2 text-white">
                {services?.length}
              </h3>
              <h3 className="text-md font-bold text-white">Total Services</h3>
            </div>
            <div className="">
              <FontAwesomeIcon
                className="text-[#42424281] text-3xl md:text-4xl"
                icon={faBraille}
              />
            </div>
          </div>
          <div
            onClick={() => navigate("/cpanel/mservices")}
            className="bg-[#186e1a] cursor-pointer py-2 text-center rounded-b-xl"
          >
            <h2 className="text-md text-white">
              More Info{" "}
              <FontAwesomeIcon className="pl-2" icon={faArrowAltCircleRight} />{" "}
            </h2>
          </div>
        </div>

        {/* Total Stafs */}
        <div className="">
          <div className="flex items-center justify-between bg-[#572194b9] p-3 rounded-t-xl">
            <div className="">
              <h3 className="text-3xl md:text-4xl font-bold py-2 text-white">
                {stafs?.length}
              </h3>
              <h3 className="text-md font-bold text-white">Total Stafs</h3>
            </div>
            <div className="">
              <FontAwesomeIcon
                className="text-[#42424281] text-3xl md:text-4xl"
                icon={faBookAtlas}
              />
            </div>
          </div>
          <div
            onClick={() => navigate("/cpanel/mstafs")}
            className="bg-[#572194ea] cursor-pointer py-2 text-center rounded-b-xl"
          >
            <h2 className="text-md text-white">
              More Info{" "}
              <FontAwesomeIcon className="pl-2" icon={faArrowAltCircleRight} />{" "}
            </h2>
          </div>
        </div>

        {/* Total Orders */}
        <div className="">
          <div className="flex items-center justify-between bg-[#4040f5] p-3 rounded-t-xl">
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
            className="bg-[#2c2c9c] cursor-pointer py-2 text-center rounded-b-xl"
          >
            <h2 className="text-md text-white">
              More Info{" "}
              <FontAwesomeIcon className="pl-2" icon={faArrowAltCircleRight} />{" "}
            </h2>
          </div>
        </div>

        {/* Total Booking */}
        <div className="">
          <div className="flex items-center justify-between bg-[#ad5530] p-3 rounded-t-xl">
            <div className="">
              <h3 className="text-3xl md:text-4xl font-bold py-2 text-white">
                {bookings?.length}{" "}
              </h3>
              <h3 className="text-md font-bold text-white">Total Bookings</h3>
            </div>
            <div className="">
              <FontAwesomeIcon
                className="text-[#42424281] text-3xl md:text-4xl"
                icon={faBookmark}
              />
            </div>
          </div>
          <div
            onClick={() => navigate("/cpanel/mbookings")}
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
