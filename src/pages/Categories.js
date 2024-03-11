import React, { useState } from "react";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import Hero from "../components/Category/Hero";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import TableRowsIcon from "@mui/icons-material/TableRows";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import product from "../assets/brand1.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BrandBanner from "../components/Home/BrandBanner";
import NewArrivals from "../components/Category/NewArrivals";
import bg from "../assets/category_hero.jpg";

const Categories = () => {
  const category = [
    {
      title: "Electrical",
      categories: [
        "Cable",
        "Control",
        "Gear",
        "Fan",
        "Lamp",
        "Light Fitting",
        "Switch",
        "Gear",
        "Wiring Accessories",
      ],
    },
    {
      title: "Sanitary",
      categories: [
        "Accessories",
        "Ceramic Closet",
        "Dispenser",
        "Drainer",
        "Dryer",
        "Flush System",
        "Garden",
        "Hose",
        "Mixer",
        "Pump",
        "Shower",
        "Tap",
        "Valve",
        "Water Treatment",
        "Wiring Accessories",
      ],
    },
  ];
  const [sortOn, setSortOn] = useState(false);
  let products = new Array(12).fill("").map((_, i) => i + 1);
  return (
    <Box className="w-full h-auto m-0 p-0">
      <Hero bg={bg} title={"Categories"} />
      <Grid container className="py-16 px-10 md:px-14 lg:px-36">
        <Grid item xs={12} sm={3}>
          <Typography className="text-black poppins text-2xl pb-10">
            Categories
          </Typography>
          {category.map((cat, i) => (
            <Box key={i} className="hidden sm:block">
              <Typography className="text-black poppins text-lg pb-2">
                {cat.title}
              </Typography>
              {cat.categories.map((val, index) => (
                <Typography
                  key={index}
                  className="text-[#5E5E5E] poppins text-xs pb-2 uppercase"
                >
                  {val}
                </Typography>
              ))}
              {i + 1 !== category.length && (
                <Divider className="bg-[#5E5E5E] my-6 w-[80%]" />
              )}
            </Box>
          ))}
        </Grid>
        <Grid item xs={12} sm={9}>
          <Box className="flex justify-between items-center">
            <Box className="relative">
              <Button
                variant="outlined"
                onClick={() => setSortOn(!sortOn)}
                className="w-fit bg-transparent rounded-none border-black border text-black uppercase text-sm poppins "
              >
                Sort By{" "}
                {sortOn ? (
                  <KeyboardArrowUpOutlinedIcon className="text-base ms-2" />
                ) : (
                  <KeyboardArrowDownOutlinedIcon className="text-base ms-2" />
                )}
              </Button>
              {sortOn && (
                <Box className="absolute gap-y-3 p-2.5 z-50 top-8 w-full left-0 bg-white border">
                  {[1, 2, 3, 4].map((index) => (
                    <Typography
                      key={index}
                      className="text-sm text-black poppins"
                    >
                      Sort By {index}
                    </Typography>
                  ))}
                </Box>
              )}
            </Box>
            <Box className="w-fit flex gap-x-3">
              {[
                <ViewColumnIcon />,
                <TableRowsIcon />,
                <FormatListBulletedIcon />,
              ].map((icon, i) => (
                <Typography
                  className="text-xs text-black cursor-pointer"
                  key={i}
                >
                  {icon}
                </Typography>
              ))}
            </Box>
          </Box>
          <Grid container className="mt-10">
            {products.slice(0, 12).map((prod, i) => (
              <Grid item xs={12} sm={6} md={4} className="px-2.5" key={i}>
                <Box className="w-full h-96">
                  <Box className="bg-white relative h-[70%] w-full flex justify-center items-center">
                    <img
                      className="h-[75%] w-auto"
                      src={product}
                      alt="product"
                    />
                    <Box className="absolute top-2.5 px-2.5 flex w-full h-fit justify-between">
                      <Box className="bg-[#FF0F0F] px-2 py-1 uppercase poppins text-white text-xs">
                        Hot
                      </Box>
                      <FavoriteBorderIcon className="text-[#FF0F0F] text-lg cursor-pointer" />
                    </Box>
                  </Box>
                  <Box className="text-center py-4">
                    <Typography className="poppins uppercase text-xs text-[#292A2C]">
                      1000W L/CONTROL DMR (SB) CHROME - NOVEXAED42
                    </Typography>
                    <Box className="flex justify-center gap-x-4 pt-1">
                      <Typography className="poppins uppercase text-xs text-[#FF0F0F]">
                        AED 20
                      </Typography>
                      <Typography className="poppins uppercase text-xs line-through text-[#5E5E5E]">
                        AED 25
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
            <Grid item xs={12} className="flex h-fit justify-center">
              <Button className=" bg-black text-white text-xs cursor-pointer poppins uppercase p-4 rounded-none">
                Load More
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <BrandBanner />
      <NewArrivals />
    </Box>
  );
};

export default Categories;
