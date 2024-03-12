import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import brands from "../../assets/brandslogo.svg";
import novex from "../../assets/novex.jpg";
import zilco from "../../assets/zilcoabout.png";
import cavil from "../../assets/cavilabout.png";
import buraq from "../../assets/buraqabout.png";

const Brands = () => {
  const data = [
    {
      image: novex,
      desc: "NOVEX is a well known brand of NOVEX ELECTRICAL CO. LTD. UK, established in 1987, with a wide range of outstanding quality products and huge production facilities. Due to its latest designs and high safety features NOVEX products have achieved ultimate success all over the world.",
    },
    {
      image: cavil,
      desc: "CAVIL is renowned brand from Italy for its qualitative products, very well tested and trusted in the Middle East and European markets. It is the first choice of domestic and industrial sector through the remarkable featured products including ventilators, ceiling fans, exhaust fans, wall mounted exhaust fans and LED light fittings.      ",
    },
    {
      image: zilco,
      desc: "ZILCO SWITCH GEAR CO. LTD. GMBH is a German Company, destined in the heart of Germany - Berlin, established in 1995, known as one of the most powerful brand in Switch Gear. ZILCO is a most demanding name for its qualitative products and competitive prices across the world.      ",
    },
    {
      image: buraq,
      desc: "BURAQ is a leading brand of BURAQ STAR GROUP OF COMPANIES originating from the land of PAKISTAN with an achievement of urge, devotion and commitment through a couple of decades. We are an absolutely professional manufacturers of Fans and Ventilators. Our dedicated team of electrical engineers and experts have achieved all the global standards and goals through latest techniques of research and development.      ",
    },
  ];
  return (
    <Box className="w-full relative flex justify-center items-center h-fit mt-8 sm:mt-0 sm:h-[80vh]">
      {/* <Box className="absolute -top-5 opacity-10">
        <img className="h-96 w-auto" src={brands} alt="brands logo" />
      </Box> */}
      <Grid
        container
        // pt-44 pb-20 
        className=" gap-y-6 sm:gap-y-0 px-5 sm:px-16"
      >
        {data.map((brand, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <img src={brand.image} alt={`brand${i}`} className="h-10 w-auto" />
            <Typography className="poppins text-[10px] leading-4 pe-4 text-[#152E3A] mt-6">
              {brand.desc}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Brands;
