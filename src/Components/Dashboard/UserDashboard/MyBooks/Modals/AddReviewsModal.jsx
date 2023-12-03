
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../../../../firebase.init';

const AddReviewsModal = ({ addReview, setNumber, number }) => {
    // console.log(addReview);
    const { _id } = addReview;
    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);

    const handleAddReview = async (data) => {

        if (data?.rating > 5 || data?.rating < 1) {
            return toast.error("Rating Must be in 1-5")
        }

        const review = {
            name: user?.displayName,
            email: user?.email,
            image: user?.photoURL ? user?.photoURL : "https://www.shareicon.net/data/2016/05/26/771188_man_512x512.png",
            rating: data?.rating,
            review: data?.review,
        };

        // send to database
        fetch(`https://readify-server-five.vercel.app/api/v1/orders/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(review),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data?.acknowledged && data?.modifiedCount > 0) {
                    toast.success("Review Add Successfully");
                    reset();
                    setNumber(number + 1);
                    window.location.reload();
                } else {
                    toast.error("Faild to Add Review");
                }
            });

    };


    return (
        <div>
            <input type="checkbox" id="add-review-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="add-review-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='mb-4 badge badge-error text-2xl badge-lg p-4'>Add Review for {addReview?.product_name}</h1>
                    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-3">
                        <form
                            onSubmit={handleSubmit(handleAddReview)}
                            action=""
                            className="py-3 w-full space-y-5"
                        >
                            <input
                                {...register("rating")}
                                type="number"
                                required
                                placeholder="Enter Rating (Must be in 1-5)"
                                className="input bg-slate-100 my-2 input-ghost w-full block mx-auto"
                            />
                            <textarea
                                {...register("review")}
                                type="text"
                                required
                                placeholder="Enter Your Review"
                                className="input bg-slate-100 my-2 h-24 input-ghost w-full block mx-auto"
                            />
                            <input
                                className="btn px-7 btn-primary my-5 block mx-auto"
                                type="submit"
                                value="Add review"
                            />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddReviewsModal;