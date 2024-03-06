import React from "react";
import { Grid } from "@mui/material";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Slider({ images }) {
  const swiper = useSwiper();
  const handleOnSetSwiper = (i) => {
    swiper?.slideTo(i);
  };
  return (
    <>
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        className="h-[76vh] w-full popularSlider"
      >
        <div className="absolute bottom-5 left-[50%] z-50 hidden sm:block">
          <div className="swiper-button-next bg-black w-10 h-10 rounded-full flex items-center justify-center">
            <ChevronRightIcon className="text-[10px] text-white" />
          </div>
          <div className="swiper-button-prev bg-black w-10 h-10 rounded-full flex items-center justify-center">
            <ChevronLeftIcon className="text-[10px] text-white" />
          </div>
        </div>
        {images?.map((image, i) => (
          <SwiperSlide
            key={i}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundOrigin: "content-box",
              cursor: "pointer",
              height: "85%",
            }}
          />
        ))}
      </Swiper>
      {images?.length > 1 && (
        <Grid
          container
          sx={{
            height: "24vh",
            width: "100%",
            marginTop: "60px",
            overflow: "hidden",
          }}
        >
          {images?.map((image, i) => (
            <Grid item xs={4}>
              <img
                src={image}
                loading="lazy"
                alt={`Product${i}`}
                style={{
                  height: "auto",
                  width: "100%",
                  margin: "10px",
                  cursor: "pointer",
                }}
                onClick={() => handleOnSetSwiper(i)}
                key={i}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}
