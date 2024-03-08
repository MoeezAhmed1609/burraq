import React from "react";
import { Box, Button, Typography } from "@mui/material";
import bg from "../../assets/offerbg.jpg";

const OffersBanner = () => {
  return (
    <Box className="w-full h-screen px-5 sm:px-20 py-8 ">
      <Box
        className="rounded-xl bg-no-repeat bg-cover bg-center h-full w-full flex flex-col justify-center ps-10"
        sx={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <Typography className="text-3xl md:text-4xl xl:text-6xl font-semibold text-white poppins capitalize">
          Top Offers
        </Typography>
        <Typography className="text-3xl md:text-4xl xl:text-6xl font-semibold text-white poppins capitalize">
          No 1. brand in UAE
        </Typography>
        <Button className="uppercase text-white bg-[#02ADEC] p-4 rounded-lg w-fit text-xs poppins font-semibold px-12 mt-6">
          Explore Now
        </Button>
      </Box>
    </Box>
  );
};

export default OffersBanner;
