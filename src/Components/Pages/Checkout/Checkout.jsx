import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutCourseDetails from './CheckoutCourseDetails';
import CheckoutForm from './CheckoutForm';
import useBooks from '../../../Hooks/useBooks';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import Swal from 'sweetalert2';
import AddReviewsModal from '../../Dashboard/UserDashboard/MyBooks/Modals/AddReviewsModal';

const Checkout = () => {
    const reviewLabelRef = useRef(null);
    const [parts] = useBooks();
    const { id } = useParams();
    const Item = parts?.find(data => data?._id === id);
    const [urlData, setURLData] = useState({});
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const [addReview, setAddReview] = useState(null);
    const [number, setNumber] = useState(0);

    useEffect(() => {
        fetch('https://readify-server-five.vercel.app/api/v1/orders')
            .then(res => res.json())
            .then(data => setOrders(data?.data?.result))
    }, [])

    const myAllOrders = orders && orders?.filter(o => o?.cus_email === user?.email && o?.paymentStatus === "paid");

    const lastOrder = myAllOrders && myAllOrders?.length > 0 ? myAllOrders[myAllOrders?.length - 1] : null;


    const myLastReviewedBook = lastOrder && lastOrder?.review;
    const myLastUnreviewedBook = lastOrder && !lastOrder?.review;

    useEffect(() => {
        if (myLastUnreviewedBook) {
            setAddReview(lastOrder)
        }
    }, [myLastUnreviewedBook, lastOrder])

    useEffect(() => {
        if (myLastUnreviewedBook) {
            Swal.fire({
                title: `
                    <div style="color: #333; font-size: 18px; font-weight: bold;">
                        Do you want to give a review for your previous purchased book?
                    </div>
                    <div style="color: #666; font-size: 14px;">
                    If you give a review, you'll get a 
                    <span style="color: #008000; font-size: 20px; font-weight: bold;">15% discount</span> on this order.
                    </div>
                    `,
                showCancelButton: true,
                confirmButtonText: "Yes",
                denyButtonText: `No`,
            }).then(async (result) => {
                if (result?.isConfirmed) {
                    setAddReview(lastOrder);
                    reviewLabelRef?.current?.click();
                }
            });
        }
    }, [myLastUnreviewedBook]);

    console.log("addReview", addReview);
    
    return (
        <div className='bg-white'>
            <div className='hidden'>

                <label
                    htmlFor="add-review-modal"
                    className="rounded btn btn-sm btn-info btn-outline"
                    onClick={() => setAddReview(lastOrder)}
                    ref={reviewLabelRef}
                >
                    Add Review
                </label>

                {/* Your component JSX */}
            </div>
            <div className="bg-white py-5 ">
                <h2 className="md:container sm:px-2 mx-auto text-3xl text-black font-bold font-mono">
                    Checkout
                </h2>
            </div>
            <div className="md:container sm:px-2 mx-auto grid md:grid-cols-3 py-5 gap-5">
                <CheckoutForm myLastReviewedBook={myLastReviewedBook} item={Item} setURLData={setURLData} urlData={urlData} />
                <CheckoutCourseDetails myLastReviewedBook={myLastReviewedBook} item={Item} />
            </div>
            {addReview && (
                <AddReviewsModal
                    addReview={addReview}
                    setNumber={setNumber}
                    number={number}
                ></AddReviewsModal>
            )}
        </div>
    );
};

export default Checkout;