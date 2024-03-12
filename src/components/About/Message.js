import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import watermark from "../../assets/watermark.svg";
import profile from "../../assets/profile.jpg";
import signature from "../../assets/signature.svg";

const Message = () => {
  const list = [
    "A well known, unbeatable name in the world of Electrical",
    "• Easy to approach",
    "• User friendly products",
    "• Proactive approach",
    "• Quality Oriented Products",
    "• Think Local Act Global",
    "• Where Life comes with comfort",
    "• Purely focused on customer needs",
    "• Value driven & customized solutions",
    "• Cost effective products",
    "• Dynamic strategic collegial approach",
  ];
  return (
    <Grid
      container
      className="py-16 px-4 sm:py-[70px] sm:ps-[70px] sm:pe-10 relative h-fit"
    >
      <Box className="absolute top-6 right-0">
        <img className="h-[70vh] w-auto" src={watermark} alt="watermark" />
      </Box>
      <Grid item xs={12}>
        <Typography className="poppins uppercase text-3xl ps-3 font-bold w-3/4 text-[#2E2E2E] mb-5 py-2">
          Chairman's Message
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={3}
        className="py-6 px-4 border-r-0 sm:border-r-0 lg:border-r-2 border-[#009EE2] flex justify-center"
      >
        <img className="w-auto z-10" src={profile} alt="Profile" />
      </Grid>
      <Grid item xs={12} sm={12} md={9} className="py-6 px-4">
        <Typography className="text-sm xl:text-base pb-4 text-[#152E3A] nunito">
          As a chairman it is with great pride to see that BURAQ STAR GROUP OF
          COMPANIES has successfully planned and managed its transformation to
          compete both at regional and international level since its inception
          in 2002. Due to its inexhaustible efforts to maintain high standards
          of products through constantly innovative, cost effective and safe
          solutions in the field of the electronics, BSGC has successfully built
          a world class business group.Our continuous striving through strategic
          alliance, and result oriented products has been a key contributor to
          expand, capture and win the future leads locally and globally.
        </Typography>
        <Typography className="text-sm xl:text-base text-[#152E3A] nunito">
          Despite of volatile changes company is still flexibly positioned in
          its diverse market and commercializes differentiated world class,
          economical approach products and services that enable their value
          based customer to progress their own sustainable objectives.Management
          recognizes the needs to do more with embed safety measures to the
          workplace and end users of the electrical products through accredited
          bodies including ESMA, ROHS which reduces the risk assessment process
          for any major hazards. More than that with significant presence in
          emerging markets, offering opportunities, strategic focus development
          through abreast of changes, innovations and insight of leading vision
          Buraq will be leading name to provide the quality oriented products in
          the electronics world.Going forward with all employees, our dealers,
          business partners across the world for their continued support, which
          I greatly appreciate and cherish
        </Typography>
      </Grid>
      <Grid xs={12} sm={3} className="hidden md:hidden lg:block" />
      <Grid item xs={12} sm={9} className="px-4 sm:px-10">
        <Box className="w-fit mt-0 sm:mt-4 pe-3 h-fit pb-2 border-b-2">
          <img src={signature} alt="signature" className="h-8 w-fit" />
        </Box>
        <Typography className="text-lg  text-black poppins pt-3">
          Sumair Malik
        </Typography>
      </Grid>
      <Grid item xs={12} className="py-6 px-4 sm:px-10 mt-10">
        <Typography className="text-sm xl:text-base pb-4 text-[#152E3A] nunito">
          Buraq Star Group of Companies, sound as a well reputed name in the
          manufacturing of wide range of high standards electrical products with
          an aim to cater the overall requirements of global market.BSGC is
          doing OEM through their leading and famous brands in the Middle East
          market, neighbouring and African countries.With the Total Quality
          Management as a central concept of business, we always ensure the
          delivery of valuable, reliable products to our valued customers.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} className="pt-6 sm:py-6 px-4 sm:px-10">
        <ul>
          {list.slice(0, 6).map((point, i) => (
            <li
              key={i}
              className="text-sm xl:text-base text-[#152E3A] nunito py-1.5"
            >
              {point}
            </li>
          ))}
        </ul>
      </Grid>
      <Grid item xs={12} sm={6} className="pb-6 sm:py-6 px-4 sm:px-10">
        <ul>
          {list.slice(6, 12).map((point, i) => (
            <li
              key={i}
              className="text-sm xl:text-base text-[#152E3A] nunito py-1.5"
            >
              {point}
            </li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
};

export default Message;
