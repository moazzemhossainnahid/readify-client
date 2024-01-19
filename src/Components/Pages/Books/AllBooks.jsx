import React, { useEffect, useState } from "react";
import useBooks from "../../../Hooks/useBooks";
import AllBooksGrid from "./AllBooksGrid";
import EmptyList from "../../Others/EmptyList/EmptyList";
import Loading from "../../Others/Loading/Loading";
import auth from "../../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import SearchBar from "../../Others/SearchBar";

const AllBooks = () => {
  const [books] = useBooks();
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);

  const [searchKey, setSearchKey] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);


  useEffect(() => {
    fetch('https://readify-server-five.vercel.app/api/v1/orders')
      .then(res => res.json())
      .then(data => setOrders(data?.data?.result))
  }, [])

  const myAllOrders = orders && orders?.filter(o => o?.cus_email === user?.email && o?.paymentStatus === "paid");


  useEffect(() => {
    setFilteredBooks(books)
  }, [books])


  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for book by category
  const handleSearchResults = () => {
    // console.log(searchKey.length);
    if (searchKey.length > 0) {
      const result = books?.filter((book) =>
        book.category.toLowerCase().includes(searchKey.toLowerCase().trim()) ||
        book.name.toLowerCase().includes(searchKey.toLowerCase().trim())
      );
      setFilteredBooks(result);
    } else {
      setFilteredBooks(books)
    }

  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setSearchKey('');
    // console.log("clear");
    setFilteredBooks(books);
  };


  const allBooks = filteredBooks;

  console.log("allBooks",allBooks);

  return (
    <div className="w-full h-full py-20">
      <h1 className="text-3xl md:text-5xl pb-10 font-semibold leading-10 text-gray-800 text-center">
        All Of Our Books
      </h1>


      {/* Search Bar */}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      {allBooks && allBooks?.length > 0 ?
        <div className="w-full md:w-5/6 mx-auto p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center">
          {allBooks?.map((book) => (
            <AllBooksGrid myAllOrders={myAllOrders} book={book} key={book?._id} />
          ))}
        </div> : <Loading />
      }
    </div>
  );
};

export default AllBooks;
