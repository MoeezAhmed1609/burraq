import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import Hero from "../components/Category/Hero";
import bg from "../assets/contactbg.jpg";
import watermark from "../assets/contactsvg.svg";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import BrandBanner from "../components/Home/BrandBanner";

const Contact = () => {
  return (
    <Box className="w-full h-auto bg-white m-0 p-0">
      <Hero bg={bg} title={"Contact Us"} />
      <Grid
        className="w-full h-fit py-24 px-5 sm:p-24 bg-no-repeat bg-center"
        container
        sx={{ backgroundImage: `url(${watermark})`, backgroundSize: "35%" }}
      >
        <Grid item xs={12} sm={6}>
          <Typography className="poppins text-5xl text-black">
            Contact Us
          </Typography>
          <Box className="pt-10">
            <Typography className="poppins text-base uppercase font-semibold text-[#02adec]">
              Sharjah Office
            </Typography>
            <Typography className="poppins text-sm capitalize text-[#25252A] w-1/2">
              1307 - 13th floor al mulla towerittihad road near ansar mall
            </Typography>
            <Typography className="poppins text-sm capitalize text-[#25252A] w-1/2">
              tel: +971 6 5616976
            </Typography>
          </Box>
          <Box className="pt-10">
            <Typography className="poppins text-base uppercase font-semibold text-[#02adec]">
              Showroom
            </Typography>
            <Typography className="poppins text-sm capitalize text-[#25252A] w-1/2">
              5,6 & 7 Nakhel Road,Deira Tel: +971 4 2248520
            </Typography>
          </Box>
          <Box className="pt-10">
            <Typography className="poppins text-base uppercase font-semibold text-[#02adec]">
              Warehouse
            </Typography>
            <Typography className="poppins text-sm capitalize text-[#25252A] w-1/2">
              F-7 Industrial Area No. 8Sharjah Tel: +971 6 5313787
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          className="w-full h-fit p-10 mt-8 sm:mt-0 bg-[#F4F6F7] rounded-md flex flex-col items-center"
        >
          <Typography className="poppins text-3xl text-black">
            Request a Quote Today
          </Typography>
          <Box className="flex flex-col items-start w-full px-5 pt-8">
            <Typography className="poppins font-semibold uppercase text-xs text-black">
              Your Name
            </Typography>
            <input
              type="text"
              className="text-black bg-white rounded-md w-full text-xs outline-none poppins p-4"
              placeholder="Enter your name"
            />
          </Box>
          <Box className="flex flex-col items-start w-full px-5 pt-3">
            <Typography className="poppins font-semibold uppercase text-xs text-black">
              Email Address
            </Typography>
            <input
              type="email"
              className="text-black bg-white rounded-md w-full text-xs outline-none poppins p-4"
              placeholder="Enter your email"
            />
          </Box>
          <Box className="flex flex-col items-start w-full px-5 pt-3">
            <Typography className="poppins font-semibold uppercase text-xs text-black">
              phone
            </Typography>
            <input
              type="text"
              className="text-black bg-white rounded-md w-full text-xs outline-none poppins p-4"
              placeholder="Enter your phone"
            />
          </Box>
          <Box className="flex flex-col items-start w-full px-5 pt-3">
            <Typography className="poppins font-semibold uppercase text-xs text-black">
              Message
            </Typography>
            <input
              type="text"
              className="text-black bg-white rounded-md w-full text-xs outline-none poppins p-4"
              placeholder="Enter your message"
            />
          </Box>
          <Box className="flex flex-col items-start w-full px-5 pt-3">
            <Button className="bg-[#02ADEC] text-white rounded-sm text-xs poppins py-2.5 px-8">
              Submit
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} className="mt-8">
          <Box className="w-full h-fit flex">
            <Box className="flex justify-center items-center h-14 w-14 rounded-md bg-[#02ADEC]">
              <LocalPhoneOutlinedIcon className="text-white text-2xl" />
            </Box>
            <Box className="ps-3">
              <Typography className="poppins text-base text-[#02ADEC] font-semibold">
                Phone
              </Typography>
              <Typography className="poppins text-base text-black">
                800-NOVEX (66839)
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} className="mt-8">
          <Box className="w-full h-fit flex">
            <Box className="flex justify-center items-center h-14 w-14 rounded-md bg-[#02ADEC]">
              <ChatBubbleOutlineOutlinedIcon className="text-white text-2xl" />
            </Box>
            <Box className="ps-3">
              <Typography className="poppins text-base text-[#02ADEC] font-semibold">
                Email
              </Typography>
              <Typography className="poppins text-base text-black">
                ecommerce@buraqstar.com
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <BrandBanner />
    </Box>
  );
};

export default Contact;
