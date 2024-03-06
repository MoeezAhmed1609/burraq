import React from "react";
import { Box } from "@mui/material";
import Slider from "../components/Home/Slider";
import CategorySlider from "../components/Home/CategorySlider";
import Qualities from "../components/Home/Qualities";
import BrandBanner from "../components/Home/BrandBanner";
import PopularSlider from "../components/Home/PopularSlider";
import BrandsBanner from "../components/Home/BrandsBanner";
import MobilePopularSlider from "../components/Home/MobilePopularSlider";
import SaleSection from "../components/Home/SaleSection";
import Popular from "../components/Home/Popular";
import OffersBanner from "../components/Home/OffersBanner";
import SEOInstagram from "../components/Home/SEO&Instagram";

const Home = () => {
  return (
    <Box className="w-full h-auto m-0 p-0">
      <Slider />
      <CategorySlider />
      <Qualities />
      <BrandBanner />
      <PopularSlider />
      <MobilePopularSlider />
      <BrandsBanner />
      <SaleSection />
      <Popular />
      <OffersBanner />
      <SEOInstagram />
    </Box>
  );
};

export default Home;
