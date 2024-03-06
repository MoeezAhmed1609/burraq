import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Badge,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";

import logo from "../assets/burraqstar.svg";
import { routes } from "../data";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid white`,
    padding: "0 4px",
  },
}));

const HeaderBar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  // Drawer
  const [open, setOpen] = useState(false);
  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      className="flex flex-col h-full justify-center px-5"
      role="presentation"
      onClick={() => setOpen(false)}
    >
      <img
        src={logo}
        className="h-[54px] md:h-[62px] lg:h-[70px] w-auto mb-8"
        alt="burraq star logo"
      />
      {routes.map((route, i) => (
        <>
          <Link to="/" key={i} className="flex items-center">
            {route?.mobIcon && (
              <span className="text-lg text-[#2858A3] -mt-1 pe-4">
                {route?.mobIcon}
              </span>
            )}
            <Typography className="poppins text-base text-black">
              {route.title}
            </Typography>
          </Link>
          <Divider className="my-4" />
        </>
      ))}
    </Box>
  );
  return (
    <Box className="h-20 sm:h-28 w-full relative sm:static bg-white gap-x-20 flex items-center px-2.5 sm:px-9 py-5">
      <Box className="flex items-center gap-x-3">
        <IconButton
          className="p-0 block sm:block lg:hidden"
          onClick={() => setOpen(true)}
        >
          <MenuIcon className="text-3xl text-[#2858A3]" />
        </IconButton>
        <Drawer open={open} onClose={() => setOpen(false)}>
          {DrawerList}
        </Drawer>
        <img
          src={logo}
          className="h-[54px] md:h-[62px] lg:h-[70px] w-auto"
          alt="burraq star logo"
        />
      </Box>
      <Box className="flex items-center h-full gap-x-2 sm:gap-x-5 w-[75%]">
        <Box className="w-[55%] h-[85%] bg-[#f0f0f0] rounded-lg hidden sm:flex items-center justify-between px-8 py-4">
          <input
            className="w-[80%] bg-transparent outline-none text-[#2858A3]"
            placeholder="Search Here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <SearchIcon className="cursor-pointer text-2xl text-[#2858A3]" />
        </Box>

        <SearchIcon
          className="cursor-pointer text-2xl text-[#2858A3] block sm:hidden"
          onClick={() => setSearchOpen(!searchOpen)}
        />

        <Link to="/">
          <GridViewOutlinedIcon className="text-2xl sm:text-4xl text-[#4C4C4C] cursor-pointer" />
        </Link>
        <Link to="/">
          <IconButton>
            <StyledBadge badgeContent={4} color="primary">
              <ShoppingCartIcon className="text-[#2858A3] text-2xl sm:text-4xl" />
            </StyledBadge>
          </IconButton>
        </Link>

        <Link to="/" className="h-full flex items-center">
          <Button className="min-w-fit h-[85%] rounded-full sm:rounded-full lg:rounded-lg px-1 sm:px-6 gap-x-0 sm:gap-x-6 text-white bg-[#2858a3] cursor-pointer flex items-center">
            <AccountCircleIcon className="text-2xl sm:text-4xl" />
            <Typography className="poppins font-semibold hidden sm:hidden lg:block">
              My Account
            </Typography>
          </Button>
        </Link>
      </Box>
      {searchOpen && (
        <Box className="h-16 w-full absolute -bottom-[65px] left-0 flex items-center sm:hidden p-2.5 bg-[#f0f0f0]">
          <Box className="w-full h-full bg-white rounded-lg flex items-center justify-between px-8 py-4">
            <input
              className="w-[80%] bg-transparent outline-none text-[#2858A3]"
              placeholder="Search Here..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <SearchIcon className="cursor-pointer text-2xl text-[#2858A3]" />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default HeaderBar;
