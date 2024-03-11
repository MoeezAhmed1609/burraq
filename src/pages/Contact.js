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
        className="w-full h-fit py-24 px-5 md:py-24 md:px-14 pb-10 sm:pb-10 lg:px-32 bg-no-repeat bg-center"
        container
        sx={{
          backgroundImage: `url(${watermark})`,
          backgroundSize: {
            md: "40%",
            sm: "55%",
            xs: "0",
          },
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          className="bg-no-repeat bg-center"
          sx={{
            backgroundImage: `url(${watermark})`,
            backgroundSize: {
              md: "0",
              sm: "0",
              xs: "90%",
            },
          }}
        >
          <Typography className="poppins text-5xl text-black">
            Contact Us
          </Typography>
          <Box className="py-5 border-b-2 border-dashed">
            <Typography className="poppins text-base sm:text-lg uppercase font-semibold text-[#02adec]">
              Sharjah Office
            </Typography>
            <Typography className="poppins text-base capitalize font-medium text-[#25252A] w-3/4">
              1307 - 13th floor al mulla towerittihad road near ansar mall
            </Typography>
            <Typography className="poppins text-base sm:text-lg font-medium capitalize text-[#25252A] w-3/4">
              tel: +971 6 5616976
            </Typography>
          </Box>
          <Box className="py-5 border-b-2 border-dashed">
            <Typography className="poppins text-base sm:text-lg uppercase font-semibold text-[#02adec]">
              Showroom
            </Typography>
            <Typography className="poppins text-base capitalize font-medium text-[#25252A] w-3/4">
              5,6 & 7 Nakhel Road,Deira Tel: +971 4 2248520
            </Typography>
          </Box>
          <Box className="py-5 border-b-2 border-dashed">
            <Typography className="poppins text-base sm:text-lg uppercase font-semibold text-[#02adec]">
              WAREHOUSE
            </Typography>
            <Typography className="poppins text-base capitalize font-medium text-[#25252A] w-3/4">
              F-7 Industrial Area No. 8Sharjah Tel: +971 6 5313787
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          className="w-full h-fit py-10 px-5 md:py-10 md:px-5 lg:p-10 mt-8 sm:mt-0 bg-[#F4F6F7] rounded-md flex flex-col items-center"
        >
          <Typography className="poppins text-3xl md:px-3 px-0 lg:px-0 text-black">
            Request a Quote Today
          </Typography>
          <Box className="flex flex-col items-start w-full px-0 sm:px-5 pt-8">
            <Typography className="poppins font-semibold uppercase text-xs text-black">
              Your Name
            </Typography>
            <input
              type="text"
              className="text-black bg-white rounded-md w-full text-xs outline-none poppins p-4"
              placeholder="Enter your name"
            />
          </Box>
          <Box className="flex flex-col items-start w-full px-0 sm:px-5 pt-3">
            <Typography className="poppins font-semibold uppercase text-xs text-black">
              Email Address
            </Typography>
            <input
              type="email"
              className="text-black bg-white rounded-md w-full text-xs outline-none poppins p-4"
              placeholder="Enter your email"
            />
          </Box>
          <Box className="flex flex-col items-start w-full px-0 sm:px-5 pt-3">
            <Typography className="poppins font-semibold uppercase text-xs text-black">
              phone
            </Typography>
            <input
              type="text"
              className="text-black bg-white rounded-md w-full text-xs outline-none poppins p-4"
              placeholder="Enter your phone"
            />
          </Box>
          <Box className="flex flex-col items-start w-full px-0 sm:px-5 pt-3">
            <Typography className="poppins font-semibold uppercase text-xs text-black">
              Message
            </Typography>
            <input
              type="text"
              className="text-black bg-white rounded-md w-full text-xs outline-none poppins p-4"
              placeholder="Enter your message"
            />
          </Box>
          <Box className="flex flex-col items-start w-full px-0 sm:px-5 pt-3">
            <Button className="bg-[#02ADEC] text-white rounded-sm text-xs poppins py-2.5 px-8">
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Grid container className="w-full h-fit px-5 md:px-10 lg:px-32 mb-16">
        <Grid item xs={12} sm={6} className="mt-12">
          <Box className="w-full h-fit flex">
            <Box className="flex justify-center items-center h-14 sm:h-20 w-14 sm:w-20 rounded-lg bg-[#02ADEC]">
              <LocalPhoneOutlinedIcon className="text-white text-2xl sm:text-4xl" />
            </Box>
            <Box className="ps-3 h-14 sm:h-20 flex flex-col justify-center">
              <Typography className="poppins text-base text-[#02ADEC] font-semibold">
                Phone
              </Typography>
              <Typography className="poppins text-base text-black">
                800-NOVEX (66839)
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} className="mt-12">
          <Box className="w-full h-fit flex">
            <Box className="flex justify-center items-center h-14 sm:h-20 w-14 sm:w-20 rounded-lg bg-[#02ADEC]">
              <ChatBubbleOutlineOutlinedIcon className="text-white text-2xl sm:text-4xl" />
            </Box>
            <Box className="ps-3 h-14 sm:h-20 flex flex-col justify-center">
              <Typography className="poppins text-base text-[#02ADEC] font-semibold">
                Email
              </Typography>
              <Typography className="poppins text-sm sm:text-base text-black">
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
