import React from "react";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const SocialLinkBar = () => {
  // Language Menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorElLanguage, setAnchorElLanguage] = React.useState(null);
  const openLanguage = Boolean(anchorEl);
  const handleClickLanguage = (event) => {
    setAnchorElLanguage(event.currentTarget);
  };
  const handleCloseLanguage = () => {
    setAnchorElLanguage(null);
  };
  return (
    <Box
      className={`w-full flex justify-center flex-col md:flex-row social-bar md:justify-start items-center text-white bg-[#2858a3] md:h-11 h-fit gap-x-5 gap-y-3 md:gap-y-0 py-2.5 md:py-0 text-xs md:text-sm`}
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
      <Box className="md:w-1/2 w-full flex justify-between items-center h-full">
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
        <Box className="flex justify-between items-center">
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className="text-white poppins text-xs flex items-center"
          >
            AED
            {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>AED</MenuItem>
            <MenuItem onClick={handleClose}>USD</MenuItem>
            <MenuItem onClick={handleClose}>PKR</MenuItem>
          </Menu>
          <Button
            id="basic-button"
            aria-controls={openLanguage ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openLanguage ? "true" : undefined}
            onClick={handleClickLanguage}
            className="text-white poppins text-xs flex items-center"
          >
            EN
            {openLanguage ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorElLanguage}
            open={openLanguage}
            onClose={handleCloseLanguage}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleCloseLanguage}>EN</MenuItem>
            <MenuItem onClick={handleCloseLanguage}>AR</MenuItem>
            <MenuItem onClick={handleCloseLanguage}>UR</MenuItem>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};

export default SocialLinkBar;
