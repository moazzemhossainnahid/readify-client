import React from "react";
import useBooks from "../../../Hooks/useBooks";
import AllBooksGrid from "../Parts/AllBooksGrid";
import { useNavigate } from "react-router-dom";

const BooksThree = () => {
  const [books] = useBooks();
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div className="py-10">
        <h3 className="text-xl md:text-2xl lg:text-4xl font-bold text-center font-display py-7">
          Our top 3 Books
        </h3>
        <div className="w-[70px] mx-auto h-[3px] bg-[#1584f3] mb-10 relative ">
          <div className="radiant bg-[#FFFFFF]"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5 p5 md:px-10">
          {books &&
            books?.slice(0,3)?.map((book) => (
              <AllBooksGrid book={book} key={book?._id} />
            ))}
        </div>
      </div>
      <button onClick={() => navigate('/books')} className="btn btn-outline btn-danger">See More Books</button>
    </div>
  );
};

export default BooksThree;
