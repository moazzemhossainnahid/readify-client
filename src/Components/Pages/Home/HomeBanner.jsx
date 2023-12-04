import React from 'react';
import { Link } from 'react-scroll';

const HomeBanner = () => {
    return (
        <div className='w-full'>
            <div className="2xl:mx-auto 2xl:container">
                <div className="relative rounded-md">
                    <img src="https://images6.alphacoders.com/408/thumbbig-408916.webp" alt="city view" className="w-full h-full rounded-md  object-center object-fill absolute sm:block hidden" />
                    <img src="https://images4.alphacoders.com/130/thumbbig-1305884.webp" alt="city view" className="w-full h-full rounded-md absolute object-center object-fill sm:hidden" />
                    <div className="text-xl relative bg-gradient-to-r from-blue-700 to-transparent w-full h-full z-40 top-0 md:p-16 p-6 flex flex-col justify-between rounded-md ">
                        <div className='w-full mx-auto justify-center'>
                            <h1 className="md:text-5xl mx-auto text-3xl font-bold md:leading-10 leading-9 text-white sm:w-auto w-64">Act Before It’s Too Late!</h1>
                            <p className="text-lg leading-6 text-white text-center xl:w-5/12 lg:w-8/12 md:w-10/12 mx-auto 2xl:pr-12 mt-4">A good idiom for kids is "It's raining cats and dogs." Kids know what both cats and dogs are from an early age.</p>
                        </div>
                        <div className="md:mt-12 mt-20">
                            <Link to='aboutTT' smooth={true} duration={500} className="text-base cursor-pointer font-medium leading-4 text-indigo-700 bg-white sm:w-auto w-full rounded p-4 focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-white">Explore More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HomeBanner;