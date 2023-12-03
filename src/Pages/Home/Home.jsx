import React from 'react';
import HomeBanner from '../../Components/Pages/Home/HomeBanner';
import Newsletter from '../../Components/Pages/Home/Newsletter';
import AboutOurCompany from '../../Components/Pages/Home/AboutOurCompany';
import BooksThree from '../../Components/Pages/Home/BooksThree';
import OurReviews from '../../Components/Pages/Home/OurReviews';
import HomeTopCarousel from '../../Components/Pages/Home/HomeTopCarousel';

const Home = () => {
    return (
        <div className='w-full'>
            <HomeTopCarousel/>
            <HomeBanner/>
            <BooksThree/>
            <OurReviews/>
            <AboutOurCompany/>
            <Newsletter/>
        </div>
    );
};

export default Home;