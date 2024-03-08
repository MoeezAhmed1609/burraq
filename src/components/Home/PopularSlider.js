import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import bg from "../../assets/sliderbg.jpg";
import { novexProducts } from "../../data";

export default function PopularSlider() {
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
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay, Navigation]}
      className="h-auto w-full popularSlider relative mb-10 hidden sm:block"
      style={{
        "--swiper-pagination-color": "#2858a3",
        "--swiper-pagination-bullet-inactive-color": "transparent",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "16px",
        "--swiper-pagination-bullet-horizontal-gap": "6px",
      }}
    >
      <div className="absolute top-10 right-20">
        <div className="swiper-button-prev -left-10">
          <ChevronLeftIcon className="text-sm text-[#5D5D5D]" />
        </div>
        <div className="swiper-button-next -right-10">
          <ChevronRightIcon className="text-sm text-[#5D5D5D]" />
        </div>
      </div>
      <SwiperSlide className="pt-16 pb-8 px-5 md:px-[4%] lg:px-[8%]">
        <Grid container>
          <Grid item xs={12} sm={6} className="pe-4 pb-8 ">
            <Box
              className="h-[70vh] w-full rounded-lg bg-cover bg-no-repeat bg-center p-12"
              sx={{ backgroundImage: `url(${bg})` }}
            >
              <Typography className="text-3xl text-white poppins font-semibold w-3/4">
                Popular Novex Products
              </Typography>
              <Button className="text-white rounded-md bg-[#FF3030] uppercase poppins py-2.5 px-5 mt-5 cursor-pointer text-[10px]">
                View New Products
              </Button>
            </Box>
          </Grid>
          {novexProducts.slice(0, 6).map((product, i) => (
            <Grid item xs={12} sm={3} className="pe-4 pb-8" key={i}>
              <Box className="h-[70vh] w-full relative bg-white border rounded-lg flex flex-col items-center py-5">
                <IconButton className="absolute top-3 right-3">
                  <FavoriteBorderIcon className="text-2xl text-[#cccccc]" />
                </IconButton>
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-1/2 w-auto"
                />
                <Box className="h-1/2 w-full flex flex-col justify-between p-2.5 pt-2.5 sm:pt-2.5 lg:pt-8">
                  <Typography className="text-sm sm:text-lg lg:text-lg xl:text-2xl text-center w-full px-1 text-black poppins">
                    {product.name}
                  </Typography>
                  <Box>
                    <Box className="flex justify-between px-2 md:px-2 lg:px-5 items-center w-full pb-3">
                      <Typography className="text-lg sm:text-xl xl:text-2xl font-semibold text-left text-[#FF3030] poppins">
                        AED {product.price}
                      </Typography>
                      <Typography className="text-sm sm:text-base xl:text-lg line-through text-left text-[#818181] poppins">
                        AED {product.discount}
                      </Typography>
                    </Box>
                    <Box className="flex items-center w-full px-2 md:px-2 lg:px-5">
                      <StarIcon className="text-base text-[#2858a3]" />
                      <Typography className="text-sm  text-black poppins">
                        {product.rating}
                      </Typography>
                      <Typography className="text-xs ps-2 text-[#818181] poppins">
                        ( {product.reviews} Reviews )
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </SwiperSlide>
      <SwiperSlide className="pt-16 pb-8 px-5 md:px-[4%] lg:px-[8%]">
        <Grid container>
          <Grid item xs={12} sm={6} className="pe-4 pb-8 ">
            <Box
              className="h-[70vh] w-full rounded-lg bg-cover bg-no-repeat bg-center p-12"
              sx={{ backgroundImage: `url(${bg})` }}
            >
              <Typography className="text-3xl text-white poppins font-semibold w-3/4">
                Popular Novex Products
              </Typography>
              <Button className="text-white rounded-md bg-[#FF3030] uppercase poppins py-2.5 px-5 mt-5 cursor-pointer text-[10px]">
                View New Products
              </Button>
            </Box>
          </Grid>
          {novexProducts.slice(0, 6).map((product, i) => (
            <Grid item xs={12} sm={3} className="pe-4 pb-8" key={i}>
              <Box className="h-[70vh] w-full relative bg-white border rounded-lg flex flex-col items-center py-5">
                <IconButton className="absolute top-3 right-3">
                  <FavoriteBorderIcon className="text-2xl text-[#cccccc]" />
                </IconButton>
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-1/2 w-auto"
                />
                <Box className="h-1/2 w-full flex flex-col justify-between p-2.5 pt-2.5 sm:pt-2.5 lg:pt-8">
                  <Typography className="text-sm sm:text-lg lg:text-lg xl:text-2xl text-center w-full px-1 text-black poppins">
                    {product.name}
                  </Typography>
                  <Box>
                    <Box className="flex justify-between px-2 md:px-2 lg:px-5 items-center w-full pb-3">
                      <Typography className="text-lg sm:text-xl xl:text-2xl font-semibold text-left text-[#FF3030] poppins">
                        AED {product.price}
                      </Typography>
                      <Typography className="text-sm sm:text-base xl:text-lg line-through text-left text-[#818181] poppins">
                        AED {product.discount}
                      </Typography>
                    </Box>
                    <Box className="flex items-center w-full px-2 md:px-2 lg:px-5">
                      <StarIcon className="text-base text-[#2858a3]" />
                      <Typography className="text-sm  text-black poppins">
                        {product.rating}
                      </Typography>
                      <Typography className="text-xs ps-2 text-[#818181] poppins">
                        ( {product.reviews} Reviews )
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </SwiperSlide>
      <SwiperSlide className="pt-16 pb-8 px-5 md:px-[4%] lg:px-[8%]">
        <Grid container>
          <Grid item xs={12} sm={6} className="pe-4 pb-8 ">
            <Box
              className="h-[70vh] w-full rounded-lg bg-cover bg-no-repeat bg-center p-12"
              sx={{ backgroundImage: `url(${bg})` }}
            >
              <Typography className="text-3xl text-white poppins font-semibold w-3/4">
                Popular Novex Products
              </Typography>
              <Button className="text-white rounded-md bg-[#FF3030] uppercase poppins py-2.5 px-5 mt-5 cursor-pointer text-[10px]">
                View New Products
              </Button>
            </Box>
          </Grid>
          {novexProducts.slice(0, 6).map((product, i) => (
            <Grid item xs={12} sm={3} className="pe-4 pb-8" key={i}>
              <Box className="h-[70vh] w-full relative bg-white border rounded-lg flex flex-col items-center py-5">
                <IconButton className="absolute top-3 right-3">
                  <FavoriteBorderIcon className="text-2xl text-[#cccccc]" />
                </IconButton>
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-1/2 w-auto"
                />
                <Box className="h-1/2 w-full flex flex-col justify-between p-2.5 pt-2.5 sm:pt-2.5 lg:pt-8">
                  <Typography className="text-sm sm:text-lg lg:text-lg xl:text-2xl text-center w-full px-1 text-black poppins">
                    {product.name}
                  </Typography>
                  <Box>
                    <Box className="flex justify-between px-2 md:px-2 lg:px-5 items-center w-full pb-3">
                      <Typography className="text-lg sm:text-xl xl:text-2xl font-semibold text-left text-[#FF3030] poppins">
                        AED {product.price}
                      </Typography>
                      <Typography className="text-sm sm:text-base xl:text-lg line-through text-left text-[#818181] poppins">
                        AED {product.discount}
                      </Typography>
                    </Box>
                    <Box className="flex items-center w-full px-2 md:px-2 lg:px-5">
                      <StarIcon className="text-base text-[#2858a3]" />
                      <Typography className="text-sm  text-black poppins">
                        {product.rating}
                      </Typography>
                      <Typography className="text-xs ps-2 text-[#818181] poppins">
                        ( {product.reviews} Reviews )
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </SwiperSlide>
    </Swiper>
  );
}
