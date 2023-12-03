import { useEffect, useState } from 'react';

const useReviews = () => {
    const [orders, setOrders] = useState([]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://readify-server-five.vercel.app/api/v1/orders`, {
            method: "GET",
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data?.data?.result))
    }, []);


    // console.log(allReviews);

    useEffect(() => {
        setReviews(orders?.filter(o => o?.review))
    }, [orders])


    return [reviews];
};

export default useReviews;