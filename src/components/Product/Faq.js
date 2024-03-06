import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box className="w-full h-fit mt-10">
      <Typography className="poppins text-3xl font-bold w-3/4 text-[#2E2E2E] uppercase py-2">
        FAQ
      </Typography>
      {[1, 2, 3, 4].map((index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          className={`my-3 rounded-lg shadow-none border-none ${
            expanded === `panel${index}`
              ? "bg-[#02ADEC] text-white"
              : "bg-[#F5F5F5] text-[#2E2E2E]"
          }`}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon className="bg-white rounded-full h-7 w-7 text-[#02ADEC]" />
            }
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "100%" }} className="poppins text-xs">
              Cavil is an Italian brand in which we produce Electrical &
              sanitary products?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-white text-xs poppins text-[#5D5D5D] py-3 px-5">
            Novex is a British brand in which we produce Electrical products.
            these products are recognized all around the world. product quality
            Is especially in the electrical we are inspired by British
            technology and the product
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Faq;
