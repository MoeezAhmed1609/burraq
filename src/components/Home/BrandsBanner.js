import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import brandslogo from "../../assets/brandslogo.svg";
import novex from "../../assets/novex logo.png";
import cavil from "../../assets/cavillogo.svg";
import buraq from "../../assets/buraqlogo.svg";
import zilco from "../../assets/zilcologo.png";
import novexorange from "../../assets/novexorange.svg";
import cavilyellow from "../../assets/cavilyellow.svg";
import buraqgreen from "../../assets/buraqgreen.svg";
import zilcoblue from "../../assets/zilcoblue.svg";

const BrandsBanner = () => {
  return (
    <Box className="h-fit w-full flex flex-col items-center justify-center">
      <Box className="w-fit h-fit bg-white rounded-full z-10 flex justify-center items-center">
        <img src={brandslogo} alt="brands logo" className="h-52 w-auto " />
      </Box>
      <Box className="h-fit sm:h-72 w-full brands-gradient -mt-[97px] flex justify-end flex-col pt-20 sm:pt-0 items-center">
        <Box className="w-full h-full flex flex-col justify-end items-center">
          <Typography className="poppins w-full text-white text-center font-semibold text-4xl pt-5 sm:pt-0 pb-6">
            Our Brands
          </Typography>

          <Box className="w-[85%] h-fit sm:h-28 pb-5 gap-y-5 flex flex-wrap justify-evenly items-center">
            <div className="w-1/2 sm:w-1/4 flex justify-between items-center group transition-all duration-500">
              <img
                src={buraq}
                alt="logo"
                className="h-16 px-2.5 sm:px-0 block group-hover:hidden"
              />
              <img
                src={buraqgreen}
                alt="logo"
                className="h-16 px-2.5 sm:px-0 hidden group-hover:block"
              />
              <Divider
                className="bg-white h-14 w-[1.5px] hidden sm:block ms-5"
                orientation="vertical"
              />
            </div>
            <div className="w-1/2 sm:w-1/4 flex justify-center items-center group transition-all duration-500">
              <img
                src={cavil}
                alt="logo"
                className="h-20 -mt-5  px-2.5 sm:px-0 block group-hover:hidden"
              />
              <img
                src={cavilyellow}
                alt="logo"
                className="h-20 -mt-5  px-2.5 sm:px-0 hidden group-hover:block"
              />
              <Divider
                className="bg-white h-14 w-[1.5px] hidden sm:block ms-5"
                orientation="vertical"
              />
            </div>
            <div className="w-1/2 sm:w-1/4 flex justify-center items-center group transition-all duration-500">
              <img
                src={novex}
                alt="logo"
                className="h-12 block group-hover:hidden px-2.5 sm:px-0"
              />
              <img
                src={novexorange}
                alt="logo"
                className="h-12 hidden group-hover:block px-2.5 sm:px-0"
              />

              <Divider
                className="bg-white h-14 w-[1.5px] hidden sm:block ms-5"
                orientation="vertical"
              />
            </div>
            <div className="w-1/2 sm:w-1/4 flex justify-center items-center group transition-all duration-500">
              <img
                src={zilco}
                alt="logo"
                className="h-16 -mt-3  px-2.5 sm:px-0 block group-hover:hidden"
              />
              <img
                src={zilcoblue}
                alt="logo"
                className="h-16 -mt-3  px-2.5 sm:px-0 hidden group-hover:block"
              />
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BrandsBanner;
