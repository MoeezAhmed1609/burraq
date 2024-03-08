import React from "react";
import { Box, Typography } from "@mui/material";
import bg from "../../assets/brandbg.jpg";
import novex from "../../assets/novex.jpg";
import brand1 from "../../assets/brand1.png";
import brand2 from "../../assets/brand2.png";

const BrandBanner = () => {
  return (
    <Box className="w-full h-fit sm:h-[26vh] px-5 md:px-[4%] lg:px-[8%] mb-10">
      <Box
        className="w-full h-full rounded-lg bg-no-repeat bg-cover bg-center flex flex-col sm:flex-row gap-y-6 py-4 sm:py-0 sm:gap-y-0 justify-around items-center"
        sx={{ backgroundImage: `url(${bg})` }}
      >
        <img src={novex} className="h-16 w-auto" alt="brand logo" />
        <Typography className="poppins text-2xl sm:text-3xl tex-center px-2 font-semibold text-white">
          Avail Supreme Deals
        </Typography>
        <Box className="flex items-center">
          <img src={brand1} className="h-24 w-auto" alt="brand logo" />
          <img src={brand2} className="h-24 w-auto" alt="brand logo" />
        </Box>
      </Box>
    </Box>
  );
};

export default BrandBanner;
