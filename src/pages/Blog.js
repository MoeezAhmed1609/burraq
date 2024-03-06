import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import RelatedSlider from "../components/Blogs/RelatedSlider";
import BlogLayout from "../components/Blogs/Blog";
import Aside from "../components/Blogs/Aside";

const Blog = () => {
  return (
    <Box className="w-full h-auto m-0 py-16 px-5 sm:p-16  bg-white">
      <Grid container>
        <Grid item xs={12} sm={8}>
          <BlogLayout />
        </Grid>
        <Grid item xs={12} sm={4} className="mt-10 sm:mt-0">
          <Aside />
        </Grid>
        <Grid item xs={12}>
          <RelatedSlider />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Blog;
