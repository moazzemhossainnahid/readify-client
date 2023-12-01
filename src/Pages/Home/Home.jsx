import React from 'react';
import HomeBanner from '../../Components/Pages/Home/HomeBanner';
import Newsletter from '../../Components/Pages/Home/Newsletter';
import AboutOurCompany from '../../Components/Pages/Home/AboutOurCompany';
import BooksThree from '../../Components/Pages/Home/BooksThree';
import ServiceThree from '../../Components/Pages/Home/ServiceThree';
import HomeTopCarousel from '../../Components/Pages/Home/HomeTopCarousel';

const Home = () => {
    return (
        <div className='w-full'>
            <HomeTopCarousel/>
            <HomeBanner/>
            <BooksThree/>
            <ServiceThree/>
            <AboutOurCompany/>
            <Newsletter/>
        </div>
    );
};

export default Home;