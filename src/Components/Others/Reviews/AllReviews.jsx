
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import AllReviewsCard from "./AllReviewsCard";
import 'swiper/swiper-bundle.css';
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import useReviews from "../../../Hooks/useReviews";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Loading from "../Loading/Loading";


const AllReviews = () => {
  const [reviews] = useReviews();

  // console.log(reviews);
  return (
    <div className="max-width py-10 w-full">
      <div className="h-full w-full flex justify-center items-center gap-5 overflow-x-auto mt-10 md:mt-0">
{reviews && reviews?.length > 0 ?         <Swiper
          breakpoints={{
            380: {
              width: 380,
              slidesPerView: 1,
            },
            640: {
              width: 640,
              slidesPerView: 2,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
            1024: {
              width: 1024,
              slidesPerView: 3,
            },
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          grabCursor={true}
          modules={[Autoplay]}
          className="w-fit h-full flex justify-center items-center "
        >

          {
            reviews && reviews?.map((review, idx) => (
              <div key={idx} className="">
                <SwiperSlide>
                  <AllReviewsCard review={review} />
                </SwiperSlide>
              </div>
            ))
          }
        </Swiper> : <Loading/>}
      </div>
    </div>
  );
};

export default AllReviews;
