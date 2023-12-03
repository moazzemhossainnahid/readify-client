
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import AllReviewsCard from "./AllReviewsCard";
import 'swiper/swiper-bundle.css';
import useReviews from "../../../Hooks/useReviews";


const AllReviews = () => {
  const [reviews] = useReviews();

  console.log(reviews);
  return (
    <div className="max-width py-10 w-full">
      <div className="h-full w-full flex justify-center items-center gap-5 overflow-x-auto mt-10 md:mt-0">
        <Swiper
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
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
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
        </Swiper>
      </div>
    </div>
  );
};

export default AllReviews;
