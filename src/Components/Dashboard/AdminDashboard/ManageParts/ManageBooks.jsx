import React, { useEffect, useState } from "react";

import ManageBooksRow from "./ManageBooksRow";
import DeleteBooksModal from "./Modals/DeleteBooksModal";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ManageBooks = () => {
  const [number, setNumber] = useState(0);
  const [books, setBooks] = useState(null);
  const [deleteBook, setDeleteBook] = useState(null);
  const { register, handleSubmit, reset } = useForm();
  const [allBooks, setAllBooks] = useState(false);

  const imageUrlKey = "e738f1d16de6b265746b7f82cc157644";

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/books")
      .then((res) => res.json())
      .then((data) => setBooks(data?.data));
  }, [number]);

  // console.log(books);

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
          const book = {
            name: data.name,
            category: data.category,
            price: data.price,
            stock: data.stock,
            description: data.description,
            sku: newProductSku,
            image: img,
          };

          // send to database
          fetch(`http://localhost:5000/api/v1/books`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(book),
          })
            .then((res) => res.json())
            .then((data) => {
              //   console.log(data);
              if (data?.status === "Successful") {
                toast.success("Book Add Successfully");
                reset();
                setNumber(number + 1);
              } else {
                toast.error("Faild to Add Book");
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
            Total Books: {books?.totalBooks}
          </p>
          <div className="pb-5">
            <label
              for="addBooks"
              className="rounded btn btn-sm btn-primary btn-outline"
            >
              Add Books
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

              {allBooks
                ? books?.result?.map((book, index) => (
                    <ManageBooksRow
                      key={book?._id}
                      book={book}
                      index={index}
                      setDeleteBook={setDeleteBook}
                    ></ManageBooksRow>
                  ))
                : books?.result
                    ?.slice(0, 7)
                    ?.map((book, index) => (
                      <ManageBooksRow
                        key={book?._id}
                        book={book}
                        index={index}
                        setDeleteBook={setDeleteBook}
                      ></ManageBooksRow>
                    ))}
            </tbody>
          </table>
          {books?.result?.length > 7 && (
            <div className="pt-7">
              <button
                onClick={() => setAllBooks(!allBooks)}
                className="btn btn-outline btn-secondary flex items-center justify-center mx-auto"
              >
                {`${allBooks ? "See Less Books" : "See More Books"}`}{" "}
                <span className="text-2xl -mt-1">&#8608;</span>
              </button>
            </div>
          )}
        </div>
        {deleteBook && (
          <DeleteBooksModal
          deleteBook={deleteBook}
            setNumber={setNumber}
            number={number}
          ></DeleteBooksModal>
        )}
      </div>

      {/* <!-- The add Parts modal --> */}

      <input type="checkbox" id="addBooks" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative  bg-slate-300">
          <label
            for="addBooks"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold">Please Add New Books Information</h3>
          <form
            onSubmit={handleSubmit(handleAddService)}
            action=""
            className="py-3"
          >
            <input
              {...register("name")}
              type="text"
              required
              placeholder="Enter Book Name"
              className="input bg-slate-100 my-2 input-ghost w-full block mx-auto max-w-xs"
            />
            <input
              {...register("category")}
              type="text"
              required
              placeholder="Enter Book Category"
              className="input bg-slate-100 my-2 input-ghost w-full block mx-auto max-w-xs"
            />
            <input
              {...register("price")}
              type="text"
              required
              placeholder="Enter Book Price"
              className="input bg-slate-100 my-2 input-ghost w-full block mx-auto max-w-xs"
            />
            <input
              {...register("stock")}
              type="text"
              required
              placeholder="Enter Book Stock"
              className="input bg-slate-100 my-2 input-ghost w-full block mx-auto max-w-xs"
            />
            <textarea
              {...register("description")}
              type="text"
              required
              placeholder="Enter Book Description"
              className="input bg-slate-100 my-2 input-ghost w-full block mx-auto max-w-xs"
            />
            <input
              {...register("photoURL")}
              type="file"
              required
              placeholder="Enter Your Image"
              className="file-input file-input-bordered bg-slate-100 my-2 items-center w-full mx-auto block max-w-xs"
            />
            <input
              className="btn px-7 btn-primary my-5 block mx-auto"
              type="submit"
              value="Add Book"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManageBooks;
