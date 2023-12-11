import React from "react";
import useBooks from "../../../Hooks/useBooks";
import AllBooksGrid from "./AllBooksGrid";
import EmptyList from "../../Others/EmptyList/EmptyList";
import Loading from "../../Others/Loading/Loading";

const AllBooks = () => {
  const [books] = useBooks();

  // console.log(parts);
  return (
    <div className="w-full h-full py-20">
      <h1 className="text-3xl md:text-5xl pb-10 font-semibold leading-10 text-gray-800 text-center">
        All Of Our Books
      </h1>

      {books && books?.length > 0 ?
        <div className="w-full md:w-5/6 mx-auto p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center">
          {books?.map((book) => (
            <AllBooksGrid book={book} key={book?._id} />
          ))}
        </div> : <Loading />
      }
    </div>
  );
};

export default AllBooks;
