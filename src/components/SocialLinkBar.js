import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const SocialLinkBar = () => {
  const [openLanguage, setOpenLanguage] = useState(false);
  const [openCurrency, setOpenCurrency] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [currency, setCurrency] = useState("AED");

  console.log({
    openCurrency,
    openLanguage,
    language,
    currency,
  });

  return (
    <Box
      className={`w-full hidden sm:flex justify-center flex-col md:flex-row social-bar md:justify-start items-center text-white bg-[#2858a3] md:h-11 h-fit gap-x-5 gap-y-3 md:gap-y-0 py-2.5 md:py-0 text-xs md:text-sm`}
    >
      <Box className="md:w-1/2 w-full flex gap-x-8 justify-center items-center h-full">
        <Box className="flex gap-x-2">
          <PhoneIcon className=" text-sm" />
          <Typography className="uppercase text-[10px] poppins">
            800 NOVEX
          </Typography>
        </Box>
        <Box className="flex gap-x-2">
          <EmailIcon className=" text-sm" />
          <Typography className="lowercase text-[10px] poppins">
            ecommerce@buraqstar.com
          </Typography>
        </Box>
      </Box>
      <Box className="md:w-1/2 w-full flex justify-center items-center h-full">
        <Box className="flex items-center gap-x-8 border-r-2 border-white md:pe-8 sm:pe-5 pe-0">
          <Box className="flex gap-x-2 cursor-pointer items-center">
            <LocationOnIcon className="text-xl" />
            <Typography className="capitalize text-xs poppins">
              Store Locations
            </Typography>
          </Box>
          <Box className="flex gap-x-2 cursor-pointer items-center">
            <LocalShippingIcon className="text-xl" />
            <Typography className="capitalize text-xs poppins">
              Track Your Order
            </Typography>
          </Box>
        </Box>
        <Box className="flex justify-between items-center ps-5">
          <Button
            className="flex items-center relative text-white poppins my-2 text-xs"
            onClick={() => setOpenCurrency(!openCurrency)}
          >
            {currency}
            {openCurrency ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            {openCurrency && (
              <Box className="w-full h-fit z-50 py-3 flex justify-center items-center flex-col border-2 bg-white absolute top-8 rounded-md left-0">
                {["AED", "PKR", "USD"].map((lang, i) => (
                  <Typography
                    className="poppins text-black my-2 text-xs"
                    key={i}
                    onClick={() => setCurrency(lang)}
                  >
                    {lang}
                  </Typography>
                ))}
              </Box>
            )}
          </Button>
          <Button
            className=" flex items-center relative text-white"
            onClick={() => setOpenLanguage(!openLanguage)}
          >
            <Typography className="poppins text-white my-2 text-xs w-full">
              {language}
            </Typography>
            {openLanguage ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            {openLanguage && (
              <Box className="w-full h-fit z-50 py-3 flex justify-center items-center flex-col border-2 bg-white absolute top-8 rounded-md left-0">
                {["EN", "AR", "UR"].map((lang, i) => (
                  <Typography
                    className="poppins text-black my-2 text-xs"
                    key={i}
                    onClick={() => setLanguage(lang)}
                  >
                    {lang}
                  </Typography>
                ))}
              </Box>
            )}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SocialLinkBar;
