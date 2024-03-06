import React from "react";
import { Box } from "@mui/material";
import bg from "../assets/about_hero.jpg";
import Hero from "../components/Category/Hero";
import TermsAccord from "../components/TermsAccord";

const Terms = () => {
  return (
    <Box className="w-full h-auto bg-white m-0 p-0">
      <Hero bg={bg} title={"Terms & Conditions"} />
      <TermsAccord />
    </Box>
  );
};

export default Terms;
