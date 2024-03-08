import React from "react";
import { Box, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { novexProducts } from "../../data";
import blogImage from "../../assets/blog.jpg";
import BlogCard from "./BlogCard";

const Slider = () => {
  const blog = {
    image: blogImage,
    title: "the Best Sanitary Items",
    caption:
      "Novex is a British brand in which we produce Electrical products. these products ",
  };
  return (
    <Box className="bg-transparent h-fit w-full py-16 px-5 md:px-10 lg:p-20">
      <Typography className="poppins text-4xl font-semibold text-black">
        Check Our Blogs
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
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
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
        modules={[Autoplay, Navigation]}
        className="h-full w-full popularSlider relative -mt-14"
      >
        <div className="absolute top-10 right-20 hidden sm:block">
          <div className="swiper-button-prev -left-14 bg-[#02adec] w-10 h-10 flex justify-center items-center rounded-full">
            <ChevronLeftIcon className="text-sm text-white" />
          </div>
          <div className="swiper-button-next -right-14  bg-[#02adec] w-10 h-10 flex justify-center items-center rounded-full">
            <ChevronRightIcon className="text-sm text-white" />
          </div>
        </div>
        {[1, 2, 3, 4, 5, 6, 7].map((product, i) => (
          <SwiperSlide key={i} className="mt-20 pb-2">
            <BlogCard blog={blog} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Slider;
