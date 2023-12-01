import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useBooks from "../../../Hooks/useBooks";
import EmptyList from "../../Others/EmptyList/EmptyList";
import Chip from "../../Others/Chip";
import RelatedBooks from "./RelatedBooks";

const SingleBooksDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [books] = useBooks();
  const [book, setBook] = useState(null);


  useEffect(() => {
    let book = books?.find((p) => p._id === id);
    if (book) {
      setBook(book);
    }
  }, [books, id]);

  return (
    <div className="w-full">
      <div className="container py-7 w-full md:w-3/4 mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="blog-goBack w-32 rounded mx-3 justify-start px-5 py-2 flex text-indigo-600 bg-gray-200"
        >
          <span> &#8592;</span> <span className="pl-2">Go Back</span>
        </button>
        {book ? (
          <div className="blog-wrap pt-10">
            <header>
              <p className="blog-date pb-5 font-semibold text-gray-500">
                Published {new Date(book.createdAt).toLocaleString()}
              </p>
              <h1 className="text-black pb-3 text-2xl md:text-4xl font-bold">
                {book?.name}
              </h1>
              <div className="blog-subCategory w-full flex justify-center">
                <Chip label={book?.category} />
              </div>
            </header>
            <img className="py-5 mx-auto" src={book?.image} alt="cover" />
            <div className="space-y-4">
              <h2 className="text-gray-500text-xs font-semibold">
                Stock: {book?.stock}
              </h2>
              <h2 className="text-indigo-700 text-xs font-semibold">
                {book?.sku.slice(0, 17)}
              </h2>
              <h3 className="text-indigo-700 text-xl font-semibold">
                <span className="pr-3"> Price:</span>
                <span className="pr-1">&#2547;</span>
                {book?.price}/=
              </h3>
            </div>
            <div className="">
              <p className="blog-desc p-5 md:px-10">{book?.description}</p>
            </div>
            <div className="pt-7">
              <button onClick={() => navigate(`/checkout/${book?._id}`)} className="btn btn-outline btn-secondary flex items-center justify-center mx-auto">Checkout this Item <span className="text-2xl -mt-1">&#8608;</span></button>
            </div>
          </div>
        ) : (
          <EmptyList />
        )}
      </div>
      <RelatedBooks book={book} />
    </div>
  );
};

export default SingleBooksDetails;
