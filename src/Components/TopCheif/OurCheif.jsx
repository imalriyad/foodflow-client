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
    <div 
     className="bg-[#f1f2f6] pb-14 md:pt-10 overflow-hidden">
      <p className="text-mainColor text-center font-bold text-sm md:text-base group-hover:text-white mt-3">
      Master Chefs
        </p>
      <h1 className="md:text-5xl text-2xl gap-2 font-bold text-center py-8 flex items-center justify-center">
        Our Master Chefs <TbChefHat></TbChefHat>
      </h1>
      <div className="mx-auto max-w-screen-xl lg:px-0 px-12 ">
        <Slider {...settings}>
          <div className="p-4 cursor-pointer drop-shadow-md relative ">
         
            <img
              src="https://themewagon.github.io/restoran/img/team-1.jpg"
              alt=""
              className="rounded-lg relative"
            />
            
            <div className=" mx-auto absolute bottom-6 w-[90%] opacity-0 transition-opacity duration-300">
              <div className="flex justify-center">
                <img
                  src="https://i.postimg.cc/4ypGT0S1/telegram.png"
                  className="lg:w-[40px]  cursor-pointer lg:h-[40px]  w-[35px] h-[35px]  "
                  alt=""
                />
                <img
                  src="https://i.postimg.cc/FHNrh9mk/linkdin.png"
                  className="lg:w-[40px] cursor-pointer  lg:h-[40px] w-[35px] h-[35px]  "
                  alt=""
                />
                <img
                  src="https://i.postimg.cc/T30RwZY7/mail.png"
                  className="lg:w-[40px]  cursor-pointer lg:h-[40px] w-[35px] h-[35px] "
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="p-4  cursor-pointer drop-shadow-md relative">
            <img
              src="https://themewagon.github.io/restoran/img/team-2.jpg"
              alt=""
              className="rounded-lg"
            />
            <div className=" mx-auto absolute bottom-6 w-[90%] opacity-0 transition-opacity duration-300">
              <div className="flex justify-center">
                <img
                  src="https://i.postimg.cc/4ypGT0S1/telegram.png"
                  className="lg:w-[40px]  cursor-pointer lg:h-[40px]  w-[35px] h-[35px]  "
                  alt=""
                />
                <img
                  src="https://i.postimg.cc/FHNrh9mk/linkdin.png"
                  className="lg:w-[40px] cursor-pointer  lg:h-[40px] w-[35px] h-[35px]  "
                  alt=""
                />
                <img
                  src="https://i.postimg.cc/T30RwZY7/mail.png"
                  className="lg:w-[40px]  cursor-pointer lg:h-[40px] w-[35px] h-[35px] "
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="p-4  cursor-pointer drop-shadow-md relative">
            <img
              src="https://themewagon.github.io/restoran/img/team-3.jpg"
              alt=""
              className="rounded-lg"
            />
            <div className=" mx-auto absolute bottom-6 w-[90%] opacity-0 transition-opacity duration-300">
              <div className="flex justify-center">
                <img
                  src="https://i.postimg.cc/4ypGT0S1/telegram.png"
                  className="lg:w-[40px]  cursor-pointer lg:h-[40px]  w-[35px] h-[35px]  "
                  alt=""
                />
                <img
                  src="https://i.postimg.cc/FHNrh9mk/linkdin.png"
                  className="lg:w-[40px] cursor-pointer  lg:h-[40px] w-[35px] h-[35px]  "
                  alt=""
                />
                <img
                  src="https://i.postimg.cc/T30RwZY7/mail.png"
                  className="lg:w-[40px]  cursor-pointer lg:h-[40px] w-[35px] h-[35px] "
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="p-4  cursor-pointer drop-shadow-md relative">
            <img
              src="https://themewagon.github.io/restoran/img/team-4.jpg"
              alt=""
              className="rounded-lg"
            />
            <div className=" mx-auto absolute bottom-6 w-[90%] opacity-0 transition-opacity duration-300">
              <div className="flex justify-center">
                <img
                  src="https://i.postimg.cc/4ypGT0S1/telegram.png"
                  className="lg:w-[40px]  cursor-pointer lg:h-[40px]  w-[35px] h-[35px]  "
                  alt=""
                />
                <img
                  src="https://i.postimg.cc/FHNrh9mk/linkdin.png"
                  className="lg:w-[40px] cursor-pointer  lg:h-[40px] w-[35px] h-[35px]  "
                  alt=""
                />
                <img
                  src="https://i.postimg.cc/T30RwZY7/mail.png"
                  className="lg:w-[40px]  cursor-pointer lg:h-[40px] w-[35px] h-[35px] "
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="p-4  cursor-pointer drop-shadow-md cursor-pointer relative">
            <img
              src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="rounded-lg "
            />
            <div className="mx-auto absolute bottom-6 w-[90%] opacity-0 transition-opacity duration-300">
              <div className="flex justify-center">
                <img
                  src="https://i.postimg.cc/4ypGT0S1/telegram.png"
                  className="lg:w-[40px] cursor-pointer lg:h-[40px] w-[35px] h-[35px]"
                  alt=""
                />
                <img
                  src="https://i.postimg.cc/FHNrh9mk/linkdin.png"
                  className="lg:w-[40px] cursor-pointer lg:h-[40px] w-[35px] h-[35px]"
                  alt=""
                />
                <img
                  src="https://i.postimg.cc/T30RwZY7/mail.png"
                  className="lg:w-[40px] cursor-pointer lg:h-[40px] w-[35px] h-[35px]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default OurCheif;
