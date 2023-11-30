import React from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeTopCarousel = () => {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    arrows: false,
    adaptiveHeight: true,

    customPaging: (i) => (
      <div
        style={{
          content: "",
          height: "2px",
          width: "20px",
          background: "#00C2FF",
          color: "#00C2FF",
          border: "1px blue solid #00C2FF",
        }}
      >
        <span className="text-transparent">{i + 1}</span>
      </div>
    ),
  };

  const SliderData = [
    {
      img: "https://i.ibb.co/DMfRscC/depositphotos-103091708-stock-photo-auto-parts-on-concrete-wall.webp",
      title:"Quality Auto Parts for Every Need",
      desc:"Discover a comprehensive range of top-notch auto parts and accessories designed to keep your vehicle running smoothly.Our collection includes everything from essential engine components to stylish accessories, ensuring your car performs at its best while reflecting your personal style."
    },
    {
      img: "https://i.ibb.co/9t6Qv6V/desktop-wallpaper-car-parts-auto-parts.jpg",
      title:"Unleash Your Car's Potential with Premium Auto Parts",
      desc:"Explore a world of possibilities for your vehicle with our premium selection of auto parts. From performance-enhancing upgrades to reliable replacements, our products are engineered to meet the highest standards of quality and durability, empowering you to unleash your car's true potential on the road."
    },
    {
      img: "https://i.ibb.co/Gn5F065/istockphoto-478107962-612x612.jpg",
      title:"Elevate Your Driving Experience with Top-Grade Auto Parts",
      desc:"Elevate every drive with our top-grade auto parts and accessories. Whether you're a car enthusiast seeking performance boosts or a practical driver in need of reliable replacements, our diverse range of products ensures that your vehicle operates flawlessly while reflecting your individual style."
    },
    {
      img: "https://i.ibb.co/jvSPp2N/car-parts-car-parts-red-wallpaper-preview.jpg",
      title:"Revitalize Your Car with High-Quality Auto Parts",
      desc:"Revitalize your car's performance and appearance with our high-quality auto parts. From essential components to eye-catching accessories, we offer a carefully curated selection that caters to both your vehicle's needs and your personal preferences, ensuring an enhanced driving experience every time."
    },
    {
      img: "https://i.ibb.co/Yh9LvnN/How-Auto-Parts-Stores-Create-Their-Database-1024x584.webp",
      title:"Your Trusted Source for Auto Parts and Beyond",
      desc:"Look no further for all your auto parts needs. Our extensive catalog features a wide array of products, each chosen for its quality and performance. Trust us to provide not only the parts you require but also the expertise and guidance to make informed choices for your vehicle's maintenance and enhancement."
    },
  ];

  return (
    <div className="-mb-2">
      <Slider {...settings}>
        {SliderData.map((data, idx) => {
          return (
            <div
              key={idx}
              className={`bg-gradient-to-tr from-gray-900 to-gray-600 relative h-[60vh] md:h-[85vh] bg-cover bg-center`}
            >
              <img
                src={data?.img}
                alt=""
                className="w-full absolute mix-blend-overlay h-full object-cover"
              />
              <div className="w-full p-5 text-center absolute bottom-20 md:bottom-40 space-y-5">
                  <h3
                    style={{ fontFamily: "Silk Serif" }}
                    className="w-full md:w-4/5 mx-auto text-2xl md:text-5xl text-white"
                  >
                    {data?.title}
                  </h3>
                  <p className="py-5 md:w-5/6 text-center mx-auto text-gray-300 text-sm">{data?.desc}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default HomeTopCarousel;
