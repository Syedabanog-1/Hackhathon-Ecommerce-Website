"use client";
import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const sliderData = [
    {
      id: 0,
      img: "/pexels-photo.jpeg",
      title: "Trending Item",
      mainTitle: "Moveable Chair",
      price: "$15",
    },
    {
      id: 1,
      img: "/pexels-photo-627901.webp",
      title: "Trending Accessories",
      mainTitle: "Wings Chair",
      price: "$20",
    },
    {
      id: 2,
      img: "/pexels-photo-4464815.webp",
      title: "Welcome To Chairy",
      mainTitle: "Best Furniture Collection For Your Interior",
      price: "$30",
    },
  ];

  return (
    <div className="container pt-6 lg:pt-0">
      <Slider {...settings}>
        {sliderData.map((item) => (
          <Slide
            key={item.id}
            img={item.img}
            title={item.title}
            mainTitle={item.mainTitle}
            price={item.price}
          />
          
        ))}
      </Slider>
      <button className="bg-red-300 text-white mt-4 py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-200">
              Shop Now 
            </button>
    </div>
  );
};

export default Hero;