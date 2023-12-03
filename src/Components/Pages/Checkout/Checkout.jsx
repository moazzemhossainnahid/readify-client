import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutCourseDetails from './CheckoutCourseDetails';
import CheckoutForm from './CheckoutForm';
import useBooks from '../../../Hooks/useBooks';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const Checkout = () => {
    const [parts] = useBooks();
    const { id } = useParams();
    const Item = parts?.find(data => data?._id === id);
    const [urlData, setURLData] = useState({});
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const [addReview, setAddReview] = useState(null);


    useEffect(() => {
        fetch('http://localhost:5000/api/v1/orders')
            .then(res => res.json())
            .then(data => setOrders(data?.data?.result))
    }, [])

    const myOrders = orders && orders?.filter(o => o?.cus_email === user?.email && o?.paymentStatus === "paid");

//  console.log("myOrders",myOrders);

    return (
        <div className='bg-white'>
            <div className="bg-white py-5 ">
                <h2 className="md:container sm:px-2 mx-auto text-3xl text-black font-bold font-mono">
                    Checkout
                </h2>
            </div>
            <div className="md:container sm:px-2 mx-auto grid md:grid-cols-3 py-5 gap-5">
                <CheckoutForm myOrders={myOrders}  item={Item} setURLData={setURLData} urlData={urlData} />
                <CheckoutCourseDetails myOrders={myOrders} item={Item} />
            </div>
        </div>
    );
};

export default Checkout;