import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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

const Doctors = () => {
  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
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
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16">
      <div className=" flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Our Doctors
          </h1>
          <p className=" mt-2 text-center lg:text-start">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
            quidem.
          </p>
        </div>
        <div className="flex gap-5 mt-4 lg:mt-0">
          <button
            className=" bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickPrev()}
          >
            <FaArrowLeft size={25} />
          </button>
          <button
            className=" bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
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
              {/* spacing between cards */}
              <div className="h-[370px] bg-white text-black rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <img
                  src={e.img}
                  alt={e.name}
                  className="h-68 w-full object-cover rounded-t-xl"
                />
                <div className="flex flex-col justify-center items-center p-4">
                  <h1 className="font-semibold text-xl text-center">
                    {e.name}
                  </h1>
                  <h3 className="pt-2 text-gray-600 text-center">
                    {e.specialties}
                  </h3>
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
