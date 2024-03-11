import React, { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { features } from "../../data";
import novex from "../../assets/novex.jpg";

const Description = () => {
  const [mode, setMode] = useState(1);
  return (
    <>
      <Grid item xs={12} className="mt-10">
        <Box className="w-full h-fit">
          <Box className="flex gap-x-3">
            <Button
              onClick={() => setMode(1)}
              className="bg-black py-4 px-10 text-lg text-white font-semibold poppins capitalize"
            >
              Overview
            </Button>
            <Button
              onClick={() => setMode(2)}
              className="bg-[#1E55AC] py-4 px-10 text-lg text-white font-semibold poppins capitalize"
            >
              Specifications
            </Button>
          </Box>
        </Box>
      </Grid>
      {mode === 1 ? (
        <Grid item xs={12} sm={7} className="mt-10">
          <Typography className="poppins text-xs leading-6 text-[#5D5D5D] py-1.5">
            Novex is a British brand in which we produce Electrical products.
            these products are recognized all around the world. product quality
            Is especially in the electrical we are inspired by British
            technology and the product safety feature to provide our customers
            with the best and most durable products. Buildings fitted with a
            fire break glass alarm allow occupants to activate the fire alarm
            and alert the fire brigade easily. The red panel on the wall houses
            a small button that when depressed will contact the Fire Brigade.
            The Fire Brigade will respond instantly to the building.The glass,
            or Perspex material is easy to break with your fist, elbow or a pen.
            Breaking the glass will sometimes activate the button automatically.
          </Typography>
          <img className="h-10 w-auto my-6" src={novex} alt="novex" />
          <Box className="flex items-center gap-x-4 mt-10">
            <Typography className="poppins text-base font-semibold text-[#2E2E2E] capitalize py-1.5">
              Date Sheet Option
            </Typography>
            <Button
              variant="outlined"
              className="border-[1.5px] font-semibold border-black py-3 px-8 capitalize text-black poppins text-base"
            >
              View
            </Button>
            <Button
              variant="outlined"
              className="border-[1.5px] font-semibold border-[#1E55AC] py-3 px-8 capitalize text-[#1E55AC] poppins text-base"
            >
              Download
            </Button>
          </Box>
        </Grid>
      ) : (
        <>
          <Grid item xs={12} sm={7} className="mt-10 hidden sm:block" />
          <Grid item xs={12} sm={5} className="mt-5">
            <Box className=" mt-6">
              {features.map((feat, i) => (
                <Box className="flex gap-x-6 my-2" key={i}>
                  <Typography className="poppins text-sm text-[#5D5D5D] w-[30%] uppercase">
                    {feat.title}
                  </Typography>
                  <Typography className="poppins text-sm text-[#5D5D5D] uppercase">
                    {feat.value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </>
      )}
    </>
  );
};

export default Description;
