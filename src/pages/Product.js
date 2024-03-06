import { Box, Divider, Grid } from "@mui/material";
import React from "react";
import Hero from "../components/Category/Hero";
import bg from "../assets/product_hero.jpg";
import Slider from "../components/Product/Slider";
import product1 from "../assets/product-1.jpg";
import product2 from "../assets/product-2.jpg";
import product3 from "../assets/product-3.jpg";
import Content from "../components/Product/Content";
import Description from "../components/Product/Description";
import Faq from "../components/Product/Faq";
import Popular from "../components/Home/Popular";
import BrandBanner from "../components/Home/BrandBanner";

const Product = () => {
  const images = [product1, product2, product3];
  return (
    <Box className="w-full h-auto bg-white m-0 p-0">
      <Hero bg={bg} title={"Product"} />
      <Grid container className="py-16 px-5 sm:p-16 pb-0">
        <Grid item sm={5} xs={12}>
          <Slider images={images} />
        </Grid>
        <Grid item sm={7} xs={12} className="pt-6 sm:pt-0">
          <Content />
        </Grid>
        <Description />
        <Grid xs={12}>
          <Faq />
          <Divider className="bg-black mt-16" />
        </Grid>
      </Grid>
      <Popular />
      <BrandBanner />
    </Box>
  );
};

export default Product;
