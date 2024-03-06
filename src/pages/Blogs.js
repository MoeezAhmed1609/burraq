import React from "react";
import { Box } from "@mui/material";
import Hero from "../components/Category/Hero";
import bg from "../assets/category_hero.jpg";
import Slider from "../components/Blogs/Slider";
import SliderTwo from "../components/Blogs/SliderTwo";
import BrandBanner from "../components/Home/BrandBanner";

const Blogs = () => {
  return (
    <Box className="w-full h-auto m-0 p-0">
      <Hero bg={bg} title={"Blogs"} />
      <Slider />
      <SliderTwo />
      <BrandBanner />
    </Box>
  );
};

export default Blogs;
