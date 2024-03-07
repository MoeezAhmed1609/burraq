import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import brandslogo from "../../assets/brandslogo.svg";
import novex from "../../assets/novex logo.png";
import cavil from "../../assets/cavillogo.svg";
import buraq from "../../assets/buraqlogo.svg";
import zilco from "../../assets/zilcologo.png";

const BrandsBanner = () => {
  return (
    <Box className="h-fit w-full flex flex-col justify-center">
      <img src={brandslogo} alt="brands logo" className="h-52 w-auto z-10" />
      <Box className="h-fit sm:h-72 w-full brands-gradient -mt-[97px] flex justify-end flex-col pt-20 sm:pt-0 items-center">
        <Box className="w-full h-full flex flex-col justify-end">
          <Typography className="poppins w-full text-white text-center font-semibold text-4xl pt-5 sm:pt-0 pb-6">
            Our Brands
          </Typography>
          <Box className="w-full h-fit sm:h-28 pb-5 gap-y-5 flex flex-wrap justify-evenly items-center">
            <div className="w-1/2 sm:w-1/4">
              <img src={buraq} alt="logo" className="h-16 " />
            </div>
            <div className="w-1/2 sm:w-1/4">
              <img src={cavil} alt="logo" className="h-20 -mt-5 " />
            </div>
            <div className="w-1/2 sm:w-1/4">
              <img src={novex} alt="logo" className="h-12 " />
            </div>
            <div className="w-1/2 sm:w-1/4">
              <img src={zilco} alt="logo" className="h-16 -mt-3 " />
            </div>
            {/* {[buraq, cavil, novex, zilco].map((image, i) => (
            ))} */}
          </Box>
        </Box>
        {/* <Grid
          container
          className="w-full h-fit flex justify-center items-end px-10 md:px-24"
        >
          <Grid item xs={12} className="h-fit">
            <Typography className="poppins text-white text-center font-semibold text-4xl">
              Our Brands
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} className="">
            <Box
              className="h-24 w-[90%] bg-no-repeat bg-contain bg-bottom"
              sx={{ backgroundImage: `url(${buraq})` }}
            ></Box>
          </Grid>
          <Grid item xs={6} sm={3} className="">
            <Box
              className="h-24 w-[90%] bg-no-repeat bg-contain bg-bottom"
              sx={{ backgroundImage: `url(${cavil})` }}
            ></Box>
            <Divider orientation="vertical" className="bg-white" />
          </Grid>
          <Grid item xs={6} sm={3} className="">
            <Box
              className="h-28 w-[90%] bg-no-repeat bg-contain bg-bottom"
              sx={{ backgroundImage: `url(${novex})` }}
            ></Box>
            <Divider orientation="vertical" className="bg-white" />
          </Grid>
          <Grid item xs={6} sm={3} className="">
            <Box
              className="h-24 w-[90%] bg-no-repeat bg-contain bg-bottom"
              sx={{ backgroundImage: `url(${zilco})` }}
            ></Box>
            <Divider orientation="vertical" className="bg-white" />
          </Grid>
        </Grid> */}
      </Box>
    </Box>
  );
};

export default BrandsBanner;
