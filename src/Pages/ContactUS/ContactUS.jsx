import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';


const ContactUS = () => {
    return ( 
        <>
            <div className="hero" style={{ backgroundImage: "url('https://i.ibb.co/mGQd6t3/contact-us-concept.jpg')", height: '480px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div className="hero-content text-center font-thin">
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