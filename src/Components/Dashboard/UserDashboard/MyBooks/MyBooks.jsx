import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../../firebase.init';
import { useForm } from 'react-hook-form';
import AddReviewsModal from './Modals/AddReviewsModal';
import ViewReviewsModal from './Modals/ViewReviewsModal';

const MyBooks = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const [addReview, setAddReview] = useState(null);
    const [viewReview, setViewReview] = useState(null);
    const [number, setNumber] = useState(0);


    useEffect(() => {
        fetch('https://readify-server-five.vercel.app/api/v1/orders')
            .then(res => res.json())
            .then(data => setOrders(data?.data?.result))
    }, [])

    const myBooks = orders && orders?.filter(o => o?.cus_email === user?.email && o?.paymentStatus === "paid");

    return (
        <div className='container'>
            <div className="py-7">
                <h3 className="text-3xl text-dark font-bold">My Books - {`${myBooks?.length}`}</h3>
                <div className="w-full px-3 md:px-7 grid grid-cols-1 md:grid-cols-2 gap-3 justify-center items-center py-10 mx-auto h-full">
                    {
                        myBooks?.map(book => (

                            <div key={book?._id} className="flex flex-col md:flex-row gap-2 relative items-center md:h-72 bg-[#EBEFEE] w-full h-fit rounded-lg bg-red shadow-lg">
                                <div className="w-4/5 p-5 md:w-2/5 mx-auto">
                                    <img className=" object-cover" src={book?.product_image} alt="" />
                                </div>
                                <div className="p-6 w-full md:w-3/5 mx-auto flex flex-col justify-start text-left">
                                    <h5 className="text-gray-900 text-xl font-semibold mb-2">Book Name: <span className="text-green-700">{book?.product_name}</span></h5>
                                    <p className="text-gray-700 text-xs md:text-base font-semibold mb-4">Status: <span className=" text-xs md:text-base px-3 py-1 rounded-full bg-rose-700 text-white">{book?.paymentStatus}</span></p>
                                    <p className="text-gray-700 text-xs md:text-base font-semibold mb-4">Category: {book?.product_category}</p>
                                    <p className="text-gray-700 text-xs md:text-base font-semibold mb-4">Descriptions: {`${book?.product_profile?.slice(0,50)}...`}</p>
                                </div>
                                {/* <div className="absolute right-2 bottom-2">
                                    {
                                        book?.review ? <label
                                            htmlFor="view-review-modal"
                                            className="rounded btn btn-sm btn-info btn-outline"
                                            onClick={() => setViewReview(book)}
                                        >
                                            View Your Review
                                        </label> :
                                            <label
                                                htmlFor="add-review-modal"
                                                className="rounded btn btn-sm btn-info btn-outline"
                                                onClick={() => setAddReview(book)}
                                            >
                                                Add Review
                                            </label>
                                    }
                                </div> */}
                                <div className="absolute right-2 bottom-2">
                                    {
                                        book?.review && <label
                                            htmlFor="view-review-modal"
                                            className="rounded btn btn-sm btn-info btn-outline"
                                            onClick={() => setViewReview(book)}
                                        >
                                            View Your Review
                                        </label>
                                    }
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
            {addReview && (
                <AddReviewsModal
                    addReview={addReview}
                    setNumber={setNumber}
                    number={number}
                ></AddReviewsModal>
            )}
            {viewReview && (
                <ViewReviewsModal
                    viewReview={viewReview}
                ></ViewReviewsModal>
            )}
        </div>
    );
};

export default MyBooks;