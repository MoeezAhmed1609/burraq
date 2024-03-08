import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { routes } from "../data";

const NavigationBar = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const categories = ["Electrical", "Sanitary"];
  return (
    <Box className="h-12  w-full bg-[#2858a3] items-center justify-center gap-x-6 hidden sm:hidden lg:flex">
      <Link
        to="/"
        className="poppins text-sm text-white flex items-center relative"
        onClick={() => setCategoryOpen(!categoryOpen)}
      >
        Category
        {categoryOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        {categoryOpen && (
          <Box className="absolute z-50 top-9 left-0 block bg-[#f1f1f1] text-black h-fit p-5 rounded-b-md border-b-[3px] border-[#2858a3]">
            {categories.map((cat, i) => (
              <Link
                key={i}
                to="/category"
                className={`w-full flex items-center justify-between gap-x-14 ${
                  i + 1 !== categories.length && "border-b-2 pb-2 mb-2"
                } `}
              >
                {cat}
                <ArrowRightIcon className="text-sm text-[#2858a3]" />
              </Link>
            ))}
          </Box>
        )}
      </Link>
      {routes.map((route, i) => (
        <Link to="/" key={i} className="flex items-center">
          {route?.icon && (
            <span className="text-lg text-[#FC4747] -mt-1 pe-1.5">
              {route?.icon}
            </span>
          )}
          <Typography className="poppins text-sm text-white">
            {route.title}
          </Typography>
        </Link>
      ))}
    </Box>
  );
};

export default NavigationBar;
