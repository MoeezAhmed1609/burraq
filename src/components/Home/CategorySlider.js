import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Box, Button, Typography } from "@mui/material";

import category1 from "../../assets/category_1.jpg";

export default function CategorySlider() {
  // ["Equipments", "Accessories", "Liabilities", "Products"]
  return (
    <Box className="h-screen w-full pb-0 p-10 md:py-20 md:px-14 md:pb-0 lg:pb-0 lg:p-24">
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="h-full categorySlider"
        style={{
          "--swiper-pagination-color": "#2858a3",
          "--swiper-pagination-bullet-inactive-color": "transparent",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "16px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
      >
        {[
          "Get Your Fans From Us",
          "the Best Sanitary Items",
          "Quality Hose Suppliers in UAE",
          "Get Your Fans From Us",
          "the Best Sanitary Items",
          "Quality Hose Suppliers in UAE",
        ].map((val, i) => (
          <SwiperSlide
            key={i}
            className="rounded-2xl flex flex-col h-[76%] items-center justify-end p-8  bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${category1})` }}
          >
            <Typography className="text-2xl text-center text-white capitalize font-semibold poppins">
              {val}
            </Typography>
            <Button className="text-white rounded-md bg-[#2858a3] uppercase poppins py-1 px-4 mt-3 font-semibold text-[10px]">
              Shop Now
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
