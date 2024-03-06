import { Box } from "@mui/material";
import React from "react";

import NavigationBar from "./NavigationBar";
import SocialLinkBar from "./SocialLinkBar";
import HeaderBar from "./HeaderBar";

const Header = () => {
  return (
    <Box className={`z-50 w-full`}>
      <Box className=" w-full">
        {/* Social Links Bar */}
        <SocialLinkBar />
        {/* Header Bar */}
        <HeaderBar />
        {/* Navigation Bar */}
        <NavigationBar />
      </Box>
    </Box>
  );
};

export default Header;
