import React from "react";
import { Box } from "@mui/material";
import Hero from "../components/Category/Hero";
import bg from "../assets/about_hero.jpg";
import Faq from "../components/Product/Faq";

const FAQ = () => {
  return (
    <Box className="w-full h-auto bg-white m-0 p-0">
      <Hero bg={bg} title={"FAQ"} />
      <Box className="w-full h-fit px-5 md:px-10 sm:px-16 pt-10 pb-16">
        <Faq />
      </Box>
    </Box>
  );
};

export default FAQ;
