import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import blogImage from "../../assets/blog.jpg";

const Aside = () => {
  const blog = {
    image: blogImage,
    title: "effective and safe solutions in the field of the electronic",
    caption:
      "Novex is a British brand in which we produce Electrical products. these products ",
  };
  return (
    <Box className="px-4 w-full h-fit ">
      <Box className="w-full h-fit border-2 relative p-4 pt-10">
        <Box className="absolute -top-4 left-0 w-full flex justify-center">
          <Typography className="text-center w-fit px-4 bg-[#f5f5f5] text-black poppins text-xl ">
            Latest Posts
          </Typography>
        </Box>
        {[1, 2, 3].map((index) => (
          <Box key={index} className="flex pb-3">
            <img src={blogImage} className="h-20 w-auto" alt="blog" />
            <Box className="ps-2">
              <Typography className="text-black poppins text-xs capitalize pb-2 font-semibold ">
                {blog.title}
              </Typography>
              <Typography className="text-black poppins text-xs ">
                JANUARY 19, 2023
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Box className="mt-10 bg-[#F6F6F6] w-full h-fit p-5">
        <Typography className="text-center text-black poppins text-xl ">
          Newsletter
        </Typography>
        <Box className="flex justify-center w-full">
          <Divider className="bg-[#F5AC55] w-10 h-[2px] my-5" />
        </Box>
        <Typography className="text-center w-full px-2 text-black poppins text-sm ">
          Subscribe to our newsletter for exclusive content and all of the
          behind the scenes details.
        </Typography>
        <input
          type="email"
          className="bg-white outline-none p-3 text-black text-xs my-3 w-full"
          placeholder="Your Email Address"
        />
        <Button className="bg-[#F5AC55] w-full py-3 rounded-none text-xs text-white poppins">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Aside;
