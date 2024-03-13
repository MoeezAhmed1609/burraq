import React from "react";
import { Box, Button, Typography } from "@mui/material";

const BlogCard = ({ blog }) => {
  return (
    <Box className="h-fit w-full relative  flex flex-col">
      <img src={blog.image} alt={blog.name} className="w-full h-auto" />
      <Typography className="text-xl pt-3 capitalize font-semibold text-black poppins">
        {blog.title}
      </Typography>
      <Typography className="text-xs pt-3 text-black poppins">
        {blog.caption}
      </Typography>
      <Button className="poppins text-xs capitalize w-fit pt-5 text-[#02ADEC] p-0">
        Read More
      </Button>
    </Box>
  );
};

export default BlogCard;
