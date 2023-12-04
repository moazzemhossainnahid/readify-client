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
      img: "https://images7.alphacoders.com/133/thumbbig-1338193.webp",
      title:"Literary Haven",
      desc:"Discover a world of captivating stories at Literary Haven, your premier online book store. Immerse yourself in a diverse collection of genres and find your next literary adventure with ease."
    },
    {
      img: "https://images5.alphacoders.com/133/thumbbig-1338186.webp",
      title:"Pages Unbound",
      desc:"Unleash the power of words at Pages Unbound, the ultimate online book destination. Explore a curated selection of books that span every genre, ensuring there's something for every book lover."
    },
    {
      img: "https://images.alphacoders.com/132/thumbbig-1326370.webp",
      title:"E-Read Escapade",
      desc:"Embark on an e-reading escapade with our vast collection of digital books. From gripping novels to insightful non-fiction, E-Read Escapade is your go-to online book store for literary exploration."
    },
    {
      img: "https://images5.alphacoders.com/132/thumbbig-1326363.webp",
      title:"Novel Nook",
      desc:"Dive into the enchanting world of novels at Novel Nook, your virtual sanctuary for book enthusiasts. Browse through a carefully curated selection and let the magic of storytelling transport you to new realms"
    },
    {
      img: "https://images8.alphacoders.com/424/thumbbig-424848.webp",
      title:"Digital Bookshelf",
      desc:"Transform your reading experience with Digital Bookshelf, the online haven for bookworms. Explore a virtual library stocked with e-books and discover a convenient and delightful way to indulge in your literary passions."
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
