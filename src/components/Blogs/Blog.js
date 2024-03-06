import React from "react";
import { Typography } from "@mui/material";
import bg from "../../assets/blogbg.jpg";

const BlogLayout = () => {
  return (
    <>
      <Typography className="poppins text-4xl text-black pb-8">
        Novex is a British brand in which we produce Electrical
      </Typography>
      <img className="w-full h-auto" src={bg} alt="blog bg" />
      <Typography className="poppins text-base text-black py-6">
        JANUARY 19, 2023
      </Typography>
      <Typography className="poppins text-sm text-black">
        Due to its inexhaustible efforts to maintain high standards of products
        through constantly innovative, cost effective and safe solutions in the
        field of the electronics, BSGC has successfully built a world class
        business group.Our continuous striving through strategic alliance, and
        result oriented products has been a key contributor to expand, capture
        and win the future leads locally and globally. Despite of volatile
        changes company is still flexibly positioned in its diverse market and
        commercializes differentiated world class, economical approach products
        and services that enable their value based customer to progress their
        own sustainable objectives.Management recognizes the needs to do more
        with embed safety measures to the workplace and end users of the
        electrical products through accredited bodies including ESMA, ROHS which
        reduces the risk assessment process for any major hazards. More than
        that with significant presence in emerging markets, offering
        opportunities, strategic focus development through abreast of changes,
        innovations and insight of leading vision Buraq
      </Typography>
    </>
  );
};

export default BlogLayout;
