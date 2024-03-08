import React from "react";
import { Box, Typography } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StarIcon from "@mui/icons-material/Star";
import ReplayIcon from "@mui/icons-material/Replay";
import ForumIcon from "@mui/icons-material/Forum";
import CreditScoreIcon from "@mui/icons-material/CreditScore";

const Qualities = () => {
  const features = [
    {
      logo: <LocalShippingIcon className="text-6xl" />,
      title: "Free delivery",
      subtitle: "from AED 40",
    },
    {
      logo: <StarIcon className="text-6xl" />,
      title: "Best Quality",
      subtitle: "Brand",
    },
    {
      logo: <ReplayIcon className="text-6xl" />,
      title: "1 year",
      subtitle: "for free return",
    },
    {
      logo: <ForumIcon className="text-6xl" />,
      title: "Feedback",
      subtitle: "99% real data",
    },
    {
      logo: <CreditScoreIcon className="text-6xl" />,
      title: "Payment",
      subtitle: "Secure",
    },
  ];

  return (
    <Box className="h-fit w-full p-6 gap-x-10 gap-y-5 flex justify-center items-center flex-wrap my-6">
      {features.map((val, i) => (
        <Box className="flex flex-col items-center group" key={i}>
          <Box className="bg-white p-1 rounded-xl ">
            <span className="text-[#2858a3] ">{val.logo}</span>
          </Box>
          <Box className="flex justify-center w-32 sm:w-40 item-center flex-col p-5 pt-8 group-hover:bg-white rounded-lg group-hover:border -mt-6 -z-10">
            <Typography className="text-base text-center poppins text-black font-semibold ">
              {val.title}
            </Typography>
            <Typography className="text-xs text-center poppins text-black">
              {val.title}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Qualities;
