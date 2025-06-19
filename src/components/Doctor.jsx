import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Doctors = () => {
  const data = [
    {
      img: "/src/assets/doc/doc4.jpg",
      name: "Dr. Ananya Reddy",
      specialties: "Orthopedic Surgeon",
    },
    {
      img: "/src/assets/doc/doc3.jpg",
      name: "Dr. Rajesh Sharma",
      specialties: "Cardiologist",
    },
    {
      img: "/src/assets/doc/doc2.jpg",
      name: "Dr. Meera Iyer",
      specialties: "Pediatrician",
    },
    {
      img: "/src/assets/doc/doc1.jpg",
      name: "Dr. Arjun Patel",
      specialties: "Neurologist",
    },
    {
      img: "/src/assets/doc/doc5.jpg",
      name: "Dr. Naresh Menon",
      specialties: "Dermatologist",
    },
    {
      img: "/src/assets/doc/doc6.jpg",
      name: "Dr. Sameer Khan",
      specialties: "Ophthalmologist",
    },
  ];

  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16">
      <div className="flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start text-[#dd8036]">
            Our Doctors
          </h1>
          <p className="mt-2 text-center lg:text-start text-gray-700">
            Meet our team of expert doctors committed to your care and wellness.
          </p>
        </div>
        <div className="flex gap-5 mt-4 lg:mt-0">
          <button
            className="bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickPrev()}
          >
            <FaArrowLeft size={25} />
          </button>
          <button
            className="bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickNext()}
          >
            <FaArrowRight size={25} />
          </button>
        </div>
      </div>

      <div className="mt-5">
        <Slider ref={slider} {...settings}>
          {data.map((e, index) => (
            <div key={index} className="px-3">
              {" "}
              {/* Gap between cards */}
              <div className="h-[350px] bg-white text-black rounded-xl shadow-md cursor-pointer transition-transform duration-300 hover:scale-105">
                <img
                  src={e.img}
                  alt={e.name}
                  className="h-66 w-full object-cover rounded-t-xl"
                  onError={(event) =>
                    (event.currentTarget.src = "/fallback.jpg")
                  }
                />
                <div className="flex flex-col justify-center items-center p-4">
                  <h1 className="font-semibold text-xl">{e.name}</h1>
                  <h3 className="text-gray-600 pt-1">{e.specialties}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Doctors;
