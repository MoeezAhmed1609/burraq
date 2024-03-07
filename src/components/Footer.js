import React, { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

import bg from "../assets/footer_bg.jpg";
import footer_logo from "../assets/footer_logo.svg";
import { footerLinks, footerSocials } from "../data";
import footer_payments from "../assets/footer_payments.svg";

const Footer = () => {
  const [email, setEmail] = useState("");
  return (
    <Box
      className="w-full h-fit sm:h-[90vh] bg-cover bg-no-repeat bg-center p-8 md:p-10 lg:p-20 pb-3"
      sx={{ backgroundImage: `url(${bg})` }}
    >
      <Grid container>
        <Grid item xs={12} sm={5} className="mb-6 sm:mb-0">
          <Box className="flex justify-center sm:justify-start">
            <img
              src={footer_logo}
              alt="burraq star logo"
              className="h-28 w-auto text-center"
            />
          </Box>
          <Typography className="text-[10px] mt-7 mb-4 w-[95%] text-white font-semibold poppins">
            Lorem ipsum dolor sit amet consectetur. Ultricies viverra id egestas
            pharetra fermentum. Lorem ipsum dolor sit amet consectetur.
            Ultricies viverra id
          </Typography>
          <input
            type="text"
            className="bg-white rounded-md py-2.5 px-4 w-[65%] text-xs"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button className="text-white bg-[#FF3030] capitalize poppins py-2.5 px-4 ms-2 text-xs">
            Submit
          </Button>
        </Grid>
        <Grid item xs={12} sm={4} className="flex justify-between mb-6 sm:mb-0">
          {footerLinks.map((links, i) => (
            <Box
              className={`w-1/2 text-white gap-y-4 font-semibold text-xs flex flex-col ${
                i === 1 && "ps-5"
              } poppins`}
              key={i}
            >
              <Link to={links.link}>{links.title}</Link>
              {links.links.map((link, index) => (
                <Link key={index} to={link.link}>
                  {link.name}
                </Link>
              ))}
            </Box>
          ))}
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box
            className={`w-full text-white gap-y-4 font-semibold text-xs flex flex-col  poppins`}
          >
            <Link to={"/"}>Contact Us</Link>
            <Link className="flex gap-x-2" to="/">
              <LocationOnOutlinedIcon className="text-sm" />
              <Typography className="text-xs poppins font-semibold">
                600 N Washington Ave Suite C203
              </Typography>
            </Link>
            <Link className="flex gap-x-2" to="/">
              <LocalPhoneOutlinedIcon className="text-sm" />
              <Typography className="text-xs poppins font-semibold">
                +008 0642 118
              </Typography>
            </Link>
            <Link className="flex gap-x-2" to="/">
              <EmailOutlinedIcon className="text-sm" />
              <Typography className="text-xs poppins font-semibold">
                bestxtore@gmail.com
              </Typography>
            </Link>
            <Typography className="text-xs poppins font-semibold pt-4">
              Service Time
            </Typography>
            <Box className="flex gap-x-2">
              <AccessTimeOutlinedIcon className="text-sm" />
              <Typography className="text-xs poppins font-semibold">
                24-hour (Monday - Sunday)
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={5}
          className="h-[21vh] flex justify-center sm:justify-start items-end"
        >
          <Typography className="text-xs poppins text-white font-semibold pt-4">
            Copyright 2023 Burraq Star
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          className="h-[21vh] flex justify-center sm:justify-start items-end gap-x-2"
        >
          {footerSocials.map((social, i) => (
            <Link to={social.link} key={i} className="text-sm text-white">
              {social.icon}
            </Link>
          ))}
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          className="h-[21vh] flex items-end justify-center sm:justify-start"
        >
          <img
            src={footer_payments}
            className="h-8 w-auto"
            alt="footer payments icons"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
