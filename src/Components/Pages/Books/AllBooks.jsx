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
  const [categoryBook, setCategoryBook] = useState([]);



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

  /* ----------------------------------------------------------------*/
  /*                   Filter By Books Category                    */
  /* ----------------------------------------------------------------*/
  const filterByCategory = (e) => {
    const Category = e.target.value;
    console.log("Category", Category);
    if (Category === "All Books") {
      setCategoryBook(books)
    };
    const result = books?.filter(book => book?.category === Category);
    setFilteredBooks([]);
    setCategoryBook(result);
  };

  console.log("categoryBooks", categoryBook);

    // Load Books By Filter Type
    let loadBooks;

    if (filteredBooks?.length > 0) {
      loadBooks = filteredBooks
    }
    else if (categoryBook?.length > 0) {
      loadBooks = categoryBook
    }
    else {
      loadBooks = books
    };

  return (
    <div className="w-full h-full py-20">
      <h1 className="text-3xl md:text-5xl pb-10 font-semibold leading-10 text-gray-800 text-center">
        All Of Our Books
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-center gap-2 py-3 px-5">
        <h3 className="text-gray-400 font-bold">Showing <span className="text-gray-500">{loadBooks?.length}</span> Total Results.</h3>
        <div className="flex justify-between items-center gap-2 px-7">
          <h3 className="text-gray-700 font-bold">Sort By:</h3>
          <select onChange={filterByCategory} className="select bg-gray-300 max-w-xs">
            <option disabled selected>Select Book Category</option>
            <option key={`All Books`}>All Books</option>
            {
              [...new Set(books?.map(b => b?.category))].map(category => (
                <option key={category}>{category}</option>
              ))
            }

          </select>
        </div>
      </div>

      {/* Search Bar */}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />


      {loadBooks && loadBooks?.length > 0 ?
        <div className="w-full md:w-5/6 mx-auto p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center">
          {loadBooks?.map((book) => (
            <AllBooksGrid myAllOrders={myAllOrders} book={book} key={book?._id} />
          ))}
        </div> : <Loading />
      }
    </div>
  );
};

export default AllBooks;
