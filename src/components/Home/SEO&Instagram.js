import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import feed from "../../assets/feed.jpg";
import feed2 from "../../assets/feed2.jpg";
import feed3 from "../../assets/feed3.jpg";
import feed4 from "../../assets/feed4.jpg";

const SEOInstagram = () => {
  return (
    <>
      <Box className="w-full h-fit flex flex-col items-center">
        <Box className="w-full h-fit py-10 px-8 sm:px-28">
          <Typography className="text-xl pb-4 poppins text-[#141516] uppercase font-semibold">
            SEO Description
          </Typography>
          <Typography className="text-sm leading-7 poppins text-[#5D5D5D]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum deserunt
            mollit anim id est.
          </Typography>
        </Box>
        <Divider className="bg-[#CCCCCC] my-4 w-[90%]" />
        <Box className="flex justify-between px-8 sm:px-28 w-full pt-16 pb-4">
          <Typography className="text-3xl pb-4 poppins text-[#141516] capitalize font-semibold">
            <InstagramIcon className="text-4xl" /> Instagram Feed
          </Typography>
          <Box className="flex items-center gap-x-3">
            <Typography className="text-lg poppins text-[#02ADEC] ">
              <PersonOutlineOutlinedIcon />
              5k
            </Typography>
            <Typography className="text-lg poppins text-[#02ADEC] ">
              <FavoriteBorderOutlinedIcon />
              5k
            </Typography>
            <Typography className="text-lg poppins text-[#02ADEC] ">
              <QuestionAnswerOutlinedIcon />
              5k
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className="w-full h-72">
        <Slider />
      </Box>
    </>
  );
};

export default SEOInstagram;

const Slider = () => {
  return (
    <Swiper
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
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      className="h-full w-full pb-6 mb-10"
      modules={[Autoplay]}
    >
      {[
        feed,
        feed2,
        feed3,
        feed4,
        feed,
        feed2,
        feed3,
        feed4,
        feed,
        feed2,
        feed3,
        feed4,
      ].map((image, i) => (
        <SwiperSlide
          className="rounded-md bg-cover bg-no-repeat bg-center group transition"
          style={{ backgroundImage: `url(${image})` }}
          key={i}
        >
          <Box className="w-full hidden group-hover:flex cursor-pointer h-full rounded-md sale-gradient justify-center flex-col gap-y-1 items-center">
            <InstagramIcon className="text-6xl text-white" />
            <Typography className="text-base text-white">@buraqstar</Typography>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
