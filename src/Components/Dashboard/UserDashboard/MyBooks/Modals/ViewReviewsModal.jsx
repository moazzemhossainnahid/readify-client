
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../../../../firebase.init';
import { FaTrash } from 'react-icons/fa';

const ViewReviewsModal = ({ viewReview }) => {

    // console.log(viewReview);
    const { name, email, rating, review, image } = viewReview?.review;

    const id = viewReview?._id;


    const handleDelete = () => {
        const url = `https://readify-server-five.vercel.app/api/v1/orders/${id}/review`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.status === "Successful") {
                    toast.success(` Review for (${viewReview?.product_name}) has been deleted.`);
                    window.location.reload();
                } else if (data?.status === 'fail') {
                    toast.error(` Something wrong...`);
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="view-review-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="view-review-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='mb-4 badge badge-error text-2xl badge-lg p-4'>View Review for {viewReview?.product_name}</h1>
                    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-3">
                        <div className="w-full relative flex flex-col py-7 md:flex-row justify-between items-center gap-3">
                            <div className="w-full md:w-4/5 text-start order-2 md:order-1">
                                <h3 className="font-bold text-lg">{name}</h3>
                                <p className='my-4'>Email: {email}</p>
                                <p className='my-4'>Rating: {rating}</p>
                                <p className='my-4'>Review: {review}</p>
                            </div>
                            <div className="w-full md:w-1/5 order-1 md:order-2">
                                <img src={image} alt="cover" className="w-24 h-24 rounded-full mx-auto" />
                            </div>
                            {/* <div onClick={handleDelete} className="absolute bottom-2 cursor-pointer hover:text-red-500 right-2">
                                <FaTrash />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ViewReviewsModal;