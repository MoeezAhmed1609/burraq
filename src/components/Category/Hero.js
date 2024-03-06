import React from "react";
import { Box, Typography } from "@mui/material";

const Hero = ({ bg, title }) => {
  return (
    <Box
      sx={{ backgroundImage: `url(${bg})` }}
      className="w-full h-56 bg-cover bg-no-repeat bg-center px-10 sm:px-24 flex items-end pb-14"
    >
      <Typography className="text-white text-3xl sm:text-6xl font-semibold poppins">
        {title}
      </Typography>
    </Box>
  );
};

export default Hero;
