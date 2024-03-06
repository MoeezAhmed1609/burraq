import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import bg from "../../assets/servicebg.jpg";

const Wrapper = () => {
  return (
    <Box className="w-full h-fit py-6 px-5 sm:px-14">
      <Grid container>
        <Grid item xs={12} sm={12} md={4} className="flex justify-center">
          <img className="w-full h-auto" src={bg} alt="Profile" />
        </Grid>
        <Grid item xs={12} sm={12} md={8} className="px-0 sm:px-8">
          <Typography className="poppins capitalize text-3xl font-bold w-full text-[#2E2E2E] mb-5 py-2">
            Customer service is the next competitive battle ground
          </Typography>
          <Typography className="text-xs pb-4 text-[#152E3A] poppins">
            Not only on the quality standards but also focusing on the after
            sale services through follow-up, open door communication & feedback
            analysis. BSTC ensures the satisfaction of valued customers by
            taking it as a first priority through cost effective solutions. We
            are proud to further our commitment to fostering the client needs
            and requirements with innovation and empowerment through Real World
            Applications in the industry. With a theme of “Right the First Time”
            we deliver the best, according to the needs and requirments of our
            prestegious customers and eliminating the gap between the perception
            and reality through our customer care policy standards, norms and
            business ethics.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Wrapper;