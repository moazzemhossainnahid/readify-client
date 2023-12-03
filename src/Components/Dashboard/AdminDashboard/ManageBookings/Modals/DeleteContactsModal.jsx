
import { toast } from 'react-toastify';

const DeleteContactsModal = ({ deleteContact, setNumber, number }) => {

    console.log(deleteContact);

    const handleDelete = (id) => {
        const url = `https://readify-server-five.vercel.app/api/v1/contacts/${id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data?.deletedCount > 0) {
                    toast.success(` Contact Data has been deleted.`);
                    setNumber(number + 1);
                }else if(data?.status === 'fail'){
                    toast.error(` Somethig wrong...`);
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="delete-contact-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="delete-contact-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='mb-4 badge badge-error text-2xl badge-lg p-4'>Delete Contact Data</h1>
                    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-3">
                        <div className="w-full md:w-4/5 order-2 md:order-1">
                            <h3 className="font-bold text-lg">{deleteContact?.name}</h3>
                            <p className='my-4'>Service: {deleteContact?.service}</p>
                            <p className='my-4'>Phone: {deleteContact?.phone}</p>
                            <p className='my-4'>Email: {deleteContact?.email}</p>
                            <p className='my-4'>Address: {deleteContact?.address}</p>
                            <p className='my-4'>Message: {deleteContact?.message}</p>
                        </div>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="delete-contact-modal" onClick={() => handleDelete(deleteContact?._id)} className="btn bg-gray-700 text-white">Delete</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DeleteContactsModal;