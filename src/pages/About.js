import React from "react";
import { Box, Divider } from "@mui/material";
import bg from "../assets/about_hero.jpg";
import Hero from "../components/Category/Hero";
import Message from "../components/About/Message";
import Banner from "../components/About/Banner";
import Brands from "../components/About/Brands";
import Certifications from "../components/About/Certifications";
import Banner2 from "../components/About/Banner2";
import Gallery from "../components/About/Gallery";
import Wrapper from "../components/About/Wrapper";

const About = () => {
  return (
    <Box className="w-full h-auto bg-white m-0 p-0">
      <Hero bg={bg} title={"About Us"} />
      <Message />
      <Banner />
      <Brands />
      <Box className="flex justify-center">
        <Divider className="bg-[#CCCCCC] w-[90%] mb-10" />
      </Box>
      <Certifications />
      <Banner2 />
      <Gallery />
      <Box className="flex justify-center bg-[#F4F6F7] pt-6">
        <Divider className="bg-[#CCCCCC] w-[90%] mb-10" />
      </Box>
      <Wrapper />
    </Box>
  );
};

export default About;
