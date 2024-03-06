import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Pagination, Autoplay } from "swiper/modules";

import slide1 from "../../assets/slide_1.jpg";
import { Box, Button, Typography } from "@mui/material";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Pagination]}
        className="slider"
        style={{
          "--swiper-pagination-color": "#ffffff",
          "--swiper-pagination-bullet-inactive-color": "transparent",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "16px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
      >
        <SwiperSlide
          className="bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${slide1})` }}
        >
          <Box className="flex flex-col justify-center items-center text-white h-full w-full gap-y-4">
            <Typography className="text-lg font-semibold poppins uppercase">
              Hot Products
            </Typography>
            <Typography className="text-2xl sm:text-5xl w-full sm:w-[60%] text-center font-semibold poppins uppercase">
              Get Your <span className="text-5xl sm:text-7xl">Equipments</span>{" "}
              Online
            </Typography>
            <Typography className="text-lg poppins uppercase">
              Start From <span className="font-bold">28 AED</span>
            </Typography>
            <Button className="text-white rounded-lg bg-[#FF3030] uppercase poppins py-2.5 px-5 ms-2 text-xs">
              Shop Now
            </Button>
          </Box>
        </SwiperSlide>
        <SwiperSlide
          className="bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${slide1})` }}
        >
          <Box className="flex flex-col justify-center items-center text-white h-full w-full gap-y-4">
            <Typography className="text-lg font-semibold poppins uppercase">
              Hot Products
            </Typography>
            <Typography className="text-2xl sm:text-5xl w-full sm:w-[60%] text-center font-semibold poppins uppercase">
              Get Your <span className="text-5xl sm:text-7xl">Accessories</span>{" "}
              Online
            </Typography>
            <Typography className="text-lg poppins uppercase">
              Start From <span className="font-bold">28 AED</span>
            </Typography>
            <Button className="text-white rounded-lg bg-[#FF3030] uppercase poppins py-2.5 px-5 ms-2 text-xs">
              Shop Now
            </Button>
          </Box>
        </SwiperSlide>
        <SwiperSlide
          className="bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${slide1})` }}
        >
          <Box className="flex flex-col justify-center items-center text-white h-full w-full gap-y-4">
            <Typography className="text-lg font-semibold poppins uppercase">
              Hot Products
            </Typography>
            <Typography className="text-2xl sm:text-5xl w-full sm:w-[60%] text-center font-semibold poppins uppercase">
              Get Your <span className="text-5xl sm:text-7xl">Liabilities</span>{" "}
              Online
            </Typography>
            <Typography className="text-lg poppins uppercase">
              Start From <span className="font-bold">28 AED</span>
            </Typography>
            <Button className="text-white rounded-lg bg-[#FF3030] uppercase poppins py-2.5 px-5 ms-2 text-xs">
              Shop Now
            </Button>
          </Box>
        </SwiperSlide>
        <SwiperSlide
          className="bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${slide1})` }}
        >
          <Box className="flex flex-col justify-center items-center text-white h-full w-full gap-y-4">
            <Typography className="text-lg font-semibold poppins uppercase">
              Hot Products
            </Typography>
            <Typography className="text-2xl sm:text-5xl w-full sm:w-[60%] text-center font-semibold poppins uppercase">
              Get Your <span className="text-5xl sm:text-7xl">Products</span>{" "}
              Online
            </Typography>
            <Typography className="text-lg poppins uppercase">
              Start From <span className="font-bold">28 AED</span>
            </Typography>
            <Button className="text-white rounded-lg bg-[#FF3030] uppercase poppins py-2.5 px-5 ms-2 text-xs">
              Shop Now
            </Button>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
