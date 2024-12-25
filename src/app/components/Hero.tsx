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
      img: "/desk chair.png",
      title: "Trending Accessories",
      mainTitle: "Wings Chair",
      price: "$30",
    },
    {
      id: 1,
      img: "/table chair.png",
      title: "Trending Item",
      mainTitle: "Moveable Chair",
      price: "$40",
      },
      {
        id: 2,
        img: "/orange chair.png",
        title: "Trending Item",
        mainTitle: "Comfort Chair",
        price: "$20",
        
      },
      {
        id: 3,
        img: "/plain bl-chair.png",
        title: "Stylish",
        mainTitle: "Plain Chair",
        price: "$25",
        
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
          </div>
  );
};

export default Hero;