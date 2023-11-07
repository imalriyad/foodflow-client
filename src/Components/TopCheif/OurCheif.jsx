import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TbChefHat } from "react-icons/tb";
import "./slider.css";
function OurCheif() {
  const [settings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  });

  return (
    <div className="bg-[#f1f2f6] pb-14 md:pt-10 overflow-hidden">
      <h1 className="md:text-5xl text-2xl gap-2 font-bold text-center py-10 flex items-center justify-center">
        Our Master Chefs <TbChefHat></TbChefHat>
      </h1>
      <div className="mx-auto max-w-screen-xl lg:px-0 px-12 ">
        <Slider {...settings}>
          <div className="p-4 drop-shadow-md ">
            <img
              src="https://themewagon.github.io/restoran/img/team-1.jpg"
              alt=""
              className="rounded-lg"
            />
          </div>
          <div className="p-4 drop-shadow-md">
            <img
              src="https://themewagon.github.io/restoran/img/team-2.jpg"
              alt=""
              className="rounded-lg"
            />
          </div>
          <div className="p-4 drop-shadow-md">
            <img
              src="https://themewagon.github.io/restoran/img/team-3.jpg"
              alt=""
              className="rounded-lg"
            />
          </div>
          <div className="p-4 drop-shadow-md">
            <img
              src="https://themewagon.github.io/restoran/img/team-4.jpg"
              alt=""
              className="rounded-lg"
            />
          </div>
          <div className="p-4 drop-shadow-md">
            <img
              src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="rounded-lg"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default OurCheif;
