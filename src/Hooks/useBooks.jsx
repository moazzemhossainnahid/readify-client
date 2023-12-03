import { useEffect, useState } from 'react';

const useBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch(`https://readify-server-five.vercel.app/api/v1/books`, {
            method: "GET",
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
            }
        })
            .then(res => res.json())
            .then(data => setBooks(data?.data?.result))
    }, []);

    // console.log(parts);

    return [books];
};

export default useBooks;