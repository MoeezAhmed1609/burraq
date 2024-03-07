import React from "react";
import { Box, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { novexProducts } from "../../data";

const Popular = () => {
  return (
    <Box className="bg-transparent h-fit w-full py-16 px-5 md:px-10 lg:p-20">
      <Typography className="poppins text-4xl font-semibold text-black">
        Popular Search
      </Typography>
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay, Navigation]}
        className="h-full w-full popularSlider relative -mt-14"
      >
        <div className="absolute top-10 right-20">
          <div className="swiper-button-prev -left-10">
            <ChevronLeftIcon className="text-sm text-[#2858a3]" />
          </div>
          <div className="swiper-button-next -right-10">
            <ChevronRightIcon className="text-sm text-[#2858a3]" />
          </div>
        </div>
        {novexProducts.map((product, i) => (
          <SwiperSlide key={i} className="mt-20 pb-2">
            <Box
              sx={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
              className="h-80 w-full relative bg-white border rounded-2xl flex flex-col items-center py-5"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-[80%] h-auto"
              />
              <Box className="h-[60%] w-full flex flex-col justify-between items-center p-2.5 pt-2.5 sm:pt-2.5 lg:pt-8">
                <Typography className="text-base text-center font-semibold text-[#2858a3] poppins">
                  AED {product.price}
                </Typography>
                <Typography className="text-xs text-center line-through -mt-1 text-[#818181] poppins">
                  AED {product.discount}
                </Typography>
                <Typography className="text-xs pt-3 w-3/4 text-center px-2 uppercase leading-3 font-semibold text-black poppins">
                  {product.name}
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Popular;
