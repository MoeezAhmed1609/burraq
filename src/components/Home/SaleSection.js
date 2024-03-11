import React from "react";
import { Box, Button, Grid, Rating, Typography } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import fire from "../../assets/fire.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import salebackground from "../../assets/salebackground.jpg";
import product from "../../assets/brand1.png";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { novexProducts } from "../../data";

const SaleSection = () => {
  return (
    <Box className="w-full h-fit relative flex flex-col items-center">
      <Box className="h-56 sm:h-48 w-full bg-transparent" />
      <Box
        className="absolute top-16 w-[85%] h-fit sm:h-56 rounded-2xl bg-no-repeat bg-center bg-cover"
        sx={{ backgroundImage: `url(${salebackground})` }}
      >
        <Box className="sale-gradient rounded-2xl h-full w-full px-10 py-6">
          <Grid container className="h-full">
            <Grid
              item
              md={4}
              sm={5}
              xs={12}
              className="flex flex-col h-full justify-between py-4"
            >
              <Box>
                <Typography className="text-3xl text-white font-semibold poppins">
                  Flash Sale
                </Typography>
                <Typography className="text-[10px] text-white poppins pt-4 w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </Typography>
              </Box>
              <Typography className="text-3xl text-white font-semibold poppins">
                05 : 42 : 19 : 54
              </Typography>
            </Grid>
            <Grid
              item
              md={8}
              sm={7}
              xs={12}
              className="ps-0 sm:ps-8 pt-4 sm:pt-0"
            >
              <Slider />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box className="h-fit text-white w-full bg-[#141516] pt-60 sm:pt-40 pb-14 px-6 sm:p-14">
        <ProductsSlider />
      </Box>
    </Box>
  );
};

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#b4c5df",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    background: "linear-gradient(96.23deg, #1B54AD 12.98%, #02ADEC 86.27%)",
  },
}));

export default SaleSection;

const Slider = () => {
  return (
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
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-full w-full sale-slider relative"
      style={{
        "--swiper-pagination-color": "white",
        "--swiper-pagination-bullet-inactive-color": "#b4c5df",
        "--swiper-pagination-bullet-inactive-opacity": "0.3",
        "--swiper-pagination-bullet-size": "10px",
        "--swiper-pagination-bullet-horizontal-gap": "4px",
      }}
    >
      {[1, 2, 3, 4, 5].map((index) => (
        <SwiperSlide key={index}>
          <Box
            className="w-full h-28 bg-white rounded-lg p-4 flex"
            sx={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
          >
            <img className="w-[30%] h-fit" src={product} alt="product" />
            <Box className="flex justify-between flex-col ps-2">
              <Typography className="text-black poppins text-xs font-semibold uppercase w-3/4">
                BRACKET FAN (V-COOL) 30
              </Typography>
              <Box className="w-full">
                <Box className="flex justify-between items-end mb-2">
                  <Typography className="text-[#2858a3] poppins text-xs font-semibold uppercase w-1/2">
                    AED 408
                  </Typography>
                  <Typography className="text-[#A7A7A7] poppins text-[10px] w-1/2">
                    24 left
                  </Typography>
                </Box>
                <BorderLinearProgress variant="determinate" value={70} />
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
      <Box className="absolute bottom-3 right-0">
        <Link to="/">
          <Typography className="text-white border-b-[1.5px] border-white text-[10px] poppins font-semibold">
            View More
          </Typography>
        </Link>
      </Box>
    </Swiper>
  );
};

const ProductsSlider = () => {
  return (
    <Swiper
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      //   pagination={{
      //     clickable: true,
      //   }}
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
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      }}
      modules={[Autoplay, Navigation]}
      className="h-full w-full popularSlider drop-pagination relative"
      style={{
        "--swiper-pagination-color": "#2858a3",
        "--swiper-pagination-bullet-inactive-color": "transparent",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "16px",
        "--swiper-pagination-bullet-horizontal-gap": "6px",
      }}
    >
      <div className="absolute top-10 right-10">
        <div className="swiper-button-prev -left-10">
          <ChevronLeftIcon className="text-sm text-white" />
        </div>
        <div className="swiper-button-next -right-10">
          <ChevronRightIcon className="text-sm text-white" />
        </div>
      </div>
      <div className="absolute bg-[#FF3030] p-4 pe-14 w-fit montserrat top-2 left-0 font-semibold rounded-full poppins text-white text-2xl flex items-center">
        <img src={fire} alt="fire" className="h-7 w-fit me-2" /> Hot Sale!
      </div>
      {novexProducts.map((product, i) => (
        <SwiperSlide key={i} className="mt-20">
          <Box className="h-[80vh] w-full relative bg-white border rounded-2xl flex flex-col items-center py-5">
            <Box className="absolute top-3 right-3 text-sm poppins flex justify-center items-center bg-black text-white rounded-full w-14 h-14">
              Sold
            </Box>
            <img
              src={product.image}
              alt={product.name}
              className="h-[40%] w-auto"
            />
            <Box className="h-[60%] w-full flex flex-col justify-between items-center p-2.5 pt-2.5 sm:pt-2.5 lg:pt-2.5">
              <Typography className="text-base text-center font-semibold text-[#2858a3] poppins">
                AED {product.price}
              </Typography>
              <Typography className="text-xs text-center line-through -mt-4 text-[#818181] poppins">
                AED {product.discount}
              </Typography>
              <Typography className="text-xs sm:text-sm lg:text-sm text-center px-2 uppercase leading-3 font-semibold text-black poppins">
                {product.name}
              </Typography>
              <Rating
                name="read-only"
                className="text-[#FD6C28]"
                value={product.rating}
                readOnly
                size="small"
              />
              <BorderLinearProgress
                variant="determinate"
                value={70}
                className="w-[90%]"
              />
              <Typography className="text-[10px] text-center text-[#818181] poppins">
                {56} left stock
              </Typography>
              <Button
                variant="outlined"
                className="w-full py-2.5 text-[#2858a3] border-2 normal-case poppins text-xs border-[#2858a3] bg-transparent rounded-md"
              >
                Add to Cart
              </Button>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
