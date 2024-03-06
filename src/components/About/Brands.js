import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import brands from "../../assets/brandslogo.svg";
import novex from "../../assets/novex.jpg";

const Brands = () => {
  const data = [
    {
      image: novex,
      desc: "NOVEX is a well known brand of NOVEX ELECTRICAL CO. LTD. UK, established in 1987, with a wide range of outstanding quality products and huge production facilities. Due to its latest designs and high safety features NOVEX products have achieved ultimate success all over the world.",
    },
    {
      image: novex,
      desc: "NOVEX is a well known brand of NOVEX ELECTRICAL CO. LTD. UK, established in 1987, with a wide range of outstanding quality products and huge production facilities. Due to its latest designs and high safety features NOVEX products have achieved ultimate success all over the world.",
    },
    {
      image: novex,
      desc: "NOVEX is a well known brand of NOVEX ELECTRICAL CO. LTD. UK, established in 1987, with a wide range of outstanding quality products and huge production facilities. Due to its latest designs and high safety features NOVEX products have achieved ultimate success all over the world.",
    },
    {
      image: novex,
      desc: "NOVEX is a well known brand of NOVEX ELECTRICAL CO. LTD. UK, established in 1987, with a wide range of outstanding quality products and huge production facilities. Due to its latest designs and high safety features NOVEX products have achieved ultimate success all over the world.",
    },
  ];
  return (
    <Box className="h-fit w-full relative flex justify-center">
      <Box className="absolute -top-5 opacity-30">
        <img className="h-80 w-auto" src={brands} alt="brands logo" />
      </Box>
      <Grid container className="py-32 px-16 gap-y-6 sm:gap-y-0">
        {data.map((brand, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <img src={brand.image} alt={`brand${i}`} className="h-10 w-auto" />
            <Typography className="poppins text-xs px-2 text-[#152E3A] mt-6 border-none sm:border-r">
              {brand.desc}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Brands;
