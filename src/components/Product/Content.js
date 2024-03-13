import React from "react";
import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

const Content = () => {
  return (
    <Box className="h-full w-full px-0 sm:px-10">
      <Box className="w-fit border border-[#FF3030] px-1.5 poppins text-xs text-[#FF3030] uppercase bg-transparent">
        Stock Availability
      </Box>
      <Typography className="poppins text-3xl font-bold w-full sm:w-3/4 text-[#2E2E2E] capitalize py-2">
        Fire break glass w/o key type - novex
      </Typography>
      <Typography className="poppins text-xs text-[#02ADEC] capitalize py-1.5">
        By Fire break glass
      </Typography>
      <Typography className="poppins text-xs text-[#1E55AC] capitalize py-1.5">
        ED1D452
      </Typography>
      <Typography className="poppins text-xs text-[#5D5D5D] capitalize py-1.5">
        <span className="pe-1">Availability: </span>13 Available in Stock
      </Typography>
      <Divider className="bg-[#eff0f0] mt-6 mb-4" />
      <Box className="flex">
        <Typography className="poppins text-sm text-[#2E2E2E] capitalize py-1.5 pe-2">
          Tag:
        </Typography>
        <Typography className="poppins text-sm text-[#5D5D5D] capitalize py-1.5">
          Electrical Accessories, Electronic Products
        </Typography>
      </Box>
      <Box className="flex my-3 w-full">
        <Box className="flex items-center flex-wrap w-full">
          <Box className="w-full sm:w-[55%] flex items-center">
            <Typography className="poppins text-sm sm:text-base text-[#2E2E2E] capitalize py-1.5 pe-2">
              Choose Quantity:
            </Typography>
            <Box className="flex items-center justify-between bg-transparent border rounded-md px-3 py-1.5">
              <IconButton size="small" className="">
                <Remove className="text-sm text-black" />
              </IconButton>
              <span className="px-4">1</span>
              <IconButton size="small" className="">
                <Add className="text-sm text-black" />
              </IconButton>
            </Box>
          </Box>
          <Button className="bg-[#1E55AC] w-full sm:w-[45%] mt-2.5 sm:mt-0 py-2.5 px-8 text-white poppins capitalize">
            Add to cart
          </Button>
        </Box>
      </Box>
      <Box className="flex items-center gap-x-3 my-3">
        <Box className="">
          <Typography className="poppins text-sm text-[#9AA5B3] capitalize">
            20% Off
          </Typography>
          <Typography className="poppins text-base line-through text-[#FF3030] capitalize">
            19.00 AED
          </Typography>
        </Box>
        <Typography className="poppins text-4xl font-bold text-[#1E55AC] uppercase py-1.5">
          14.00 AED
        </Typography>
        <Typography className="poppins text-sm text-[#9AA5B3] capitalize">
          (05) Reviews
        </Typography>
      </Box>
      <Typography className="poppins text-sm text-[#5D5D5D] capitalize py-1.5">
        Novex is a British brand in which we produce Electrical products. these
        products are recognized all around the world. product quality Is
        especially in the electrical we are inspired by British technology.
      </Typography>
      {/* <Box className="gap-y-4 mt-6">
        {features.map((feat, i) => (
          <Box className="flex gap-x-6" key={i}>
            <Typography className="poppins text-sm text-[#5D5D5D] w-20 uppercase">
              {feat.title}
            </Typography>
            <Typography className="poppins text-sm text-[#5D5D5D] uppercase">
              {feat.value}
            </Typography>
          </Box>
        ))}
      </Box> */}
    </Box>
  );
};

export default Content;
