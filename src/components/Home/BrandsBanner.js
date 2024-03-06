import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import brandslogo from "../../assets/brandslogo.svg";
import novex from "../../assets/novexlogo.svg";
import cavil from "../../assets/cavillogo.svg";
import buraq from "../../assets/buraqlogo.svg";
import zilco from "../../assets/zilcologo.svg";

const BrandsBanner = () => {
  return (
    <Box className="h-fit w-full flex flex-col justify-center">
      <img src={brandslogo} alt="brands logo" className="h-52 w-auto" />
      <Box className="h-fit sm:h-72 w-full brands-gradient -mt-[97px] -z-10 flex justify-end flex-col pb-4 pt-20 sm:pt-0 items-center">
        <Typography className="poppins text-white font-semibold text-4xl">
          Our Brands
        </Typography>
        <Grid
          container
          className="w-full h-fit flex justify-center items-center px-10 md:px-24 mt-5"
        >
          {[buraq, cavil, novex, zilco].map((brand, i) => (
            <Grid item xs={6} sm={3} key={i} className="">
              <Box
                className="h-24 w-[90%] bg-no-repeat bg-contain bg-bottom"
                sx={{ backgroundImage: `url(${brand})` }}
              ></Box>
              <Divider orientation="vertical" className="bg-white" />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default BrandsBanner;
