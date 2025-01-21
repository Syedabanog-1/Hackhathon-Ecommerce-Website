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
      img: "/blackSofaChair.png",
      title: "Comfort Chair",
      price: "$280",
    },
    {
      id: 1,
      img: "/BlackChairWithCushion.jpg",
      title: "Cusion Chair",
       price: "160",
      },
      {
        id: 2,
        img: "/GreenSofa.jpg",
        title: "Long Green Sofa",
        price: "$320",
        
      },
      {
        id: 3,
        img: "/PairOfChairs.png",
        title: "Moveable Desk Chair",
        price: "$270",
        
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
            mainTitle={item.title}
            price={item.price}
          />
          
        ))}
      </Slider>
      
          </div>
  );
};

export default Hero;