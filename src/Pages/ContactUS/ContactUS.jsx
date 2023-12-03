import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const ContactUS = () => {
    const { register, handleSubmit, reset } = useForm();

    const handleContactForm = async (data) => {

        const info = {
            name: data.name,
            phone: data.phone,
            email: data.email,
            address: data.address,
            message: data.message,
        };

        // send to database
        fetch(`https://readify-server-five.vercel.app/api/v1/contacts`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(info),
        })
            .then((res) => res.json())
            .then((data) => {
                //   console.log(data);
                if (data?.status === "Successful") {
                    toast.success("Data Add Successfully");
                    reset();
                } else {
                    toast.error("Faild to Add Data");
                }
            });
    };

    return (
        <>
            <div className="hero relative" style={{ backgroundImage: "url('https://i.ibb.co/mGQd6t3/contact-us-concept.jpg')", height: '480px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div className="absolute top-7 left-5 z-10 hidden md:block">
                    <form
                        onSubmit={handleSubmit(handleContactForm)}
                        action=""
                        className="py-3"
                    >
                        <input
                            {...register("name")}
                            type="text"
                            required
                            placeholder="Enter Your Name"
                            className="input bg-slate-100 my-2 input-ghost w-full block mx-auto max-w-xs"
                        />
                        <input
                            {...register("phone")}
                            type="text"
                            required
                            placeholder="Enter Your Phone"
                            className="input bg-slate-100 my-2 input-ghost w-full block mx-auto max-w-xs"
                        />
                        <input
                            {...register("email")}
                            type="text"
                            required
                            placeholder="Enter Your Email"
                            className="input bg-slate-100 my-2 input-ghost w-full block mx-auto max-w-xs"
                        />
                        <input
                            {...register("address")}
                            type="text"
                            required
                            placeholder="Enter Your Address"
                            className="input bg-slate-100 my-2 input-ghost w-full block mx-auto max-w-xs"
                        />
                        <textarea
                            {...register("message")}
                            type="text"
                            required
                            placeholder="Enter Your Message"
                            className="input bg-slate-100 my-2 h-20 input-ghost w-full block mx-auto max-w-xs"
                        />
                        <input
                            className="btn px-7 btn-primary my-5 block mx-auto"
                            type="submit"
                            value="Send"
                        />
                    </form>
                </div>
                <div className="hero-content text-center font-thin relative">
                    <div className="max-w-md">
                        <h1 className="text-3xl md:text-5xl font-bold mb-2 text-slate-100">Feel Free to
                        </h1>
                        <h1 className='text-slate-300 mb-5 text-3xl md:text-5xl font-bold'>Contact With US</h1>
                        <p className="mb-5 text-slate-500">Check Out Our Services!</p>

                    </div>
                </div>
            </div>

            <div>
                <h1 className='text-center text-5xl font-semibold mt-8'>Contacts</h1>
                <div className='divider w-14 mt-2 bg-primary h-1 mx-auto'></div>
                <div className='grid md:grid-cols-3 grid-cols-1 mx-auto w-full md:mt-12'>
                    <div className='md:border-r-2 px-3 py-6 flrx justify-center text-center items-center w-full mx-auto'>
                        <FontAwesomeIcon icon={faLocationDot} className="text-primary text-5xl mb-3" />
                        <p>4321 Dhaka, <br />
                            Bangladesh</p>
                    </div>
                    <div className='md:border-r-2 text-center px-3 py-6'>
                        <FontAwesomeIcon icon={faPhoneFlip} className="text-primary text-5xl mb-3" />
                        <p>8 800 2336 7811 <br />
                            8 988 2737 1132</p>
                    </div>
                    <div className='py-6 text-center px-3'>
                        <FontAwesomeIcon icon={faEnvelope} className="text-primary text-5xl mb-2" />
                        <p>support@readify.com</p>
                    </div>
                </div>
            </div>
            <div className='overflow-hidden p-5 my-10'>
                <iframe title='map' className='w-full lg:w-[95vw] h-[300px] mx-auto rounded-md' id="gmap_canvas" src="https://maps.google.com/maps?q=%20daffodilinternationaluniversity%20%20bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
        </>
    );
};

export default ContactUS;