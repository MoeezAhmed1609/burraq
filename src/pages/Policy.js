import React from "react";
import { Box, Typography } from "@mui/material";
import Hero from "../components/Category/Hero";
import bg from "../assets/about_hero.jpg";

const Policy = () => {
  const keys = [
    "BSTC warranty policy helps you stay covered in case of defects in material, design and workmanship after purchase of the product. On selected products and in instances where we are considered the seller, a twelve (12) months warranty will be provided for the eligible items purchased for all the buyers within UAE.",
    "The address provided during the Warranty claim request will be registered as the pick-up and delivery address for the claimed item. This cannot be modified.",
    "Warranty repairs will be carried out by our service centers.",

    "The original invoice is required to verify and validate the warranty period to benefit from warranty services.",

    "The warranty repair period is Fourteen (14) working days for the units covered under the warranty from the date of picking the product from the customer until dispatched.",
    "If your item can't be repaired but is still under the warranty, we will issue a replacement or, if a replacement isn't available, you will be refunded in full.",
    "To avail of warranty services if a defect occurs in your product within the valid warranty period, you can raise the request through our customer service email: ecommerce@buraqstar.com , BSTC warranty team shall contact you within 2 working days for claim validation.",
    "The customer shall ensure that the item is packed in its original box or wrapped safely to avoid any damage during transit. If the packaging is not done safely which leads to damage, BSTC will not be responsible for the same and the claimed item will be returned to the customer without servicing.",
    "You may contact us through email or by calling our call center on 800-NOVEX (UAE).",
  ];
  return (
    <Box className="w-full h-auto bg-white m-0 p-0">
      <Hero bg={bg} title={"Warranty Policy"} />
      <Box className="w-full h-fit py-10 px-10 sm:px-16">
        <Typography className="poppins text-xl font-semibold text-[#2E2E2E] capitalize py-2">
          About the Warranty Policy
        </Typography>
        {keys.map((key, i) => (
          <Typography key={i} className="text-xs poppins text-[#152E3A] pb-2">
            {i + 1}. {key}
          </Typography>
        ))}
        <Typography className="poppins text-xl font-semibold text-[#2E2E2E] capitalize pt-10 py-2">
          DEFECT OR DAMAGE TO YOUR PRODUCT
        </Typography>
        <Typography className="text-xs poppins text-[#152E3A] pb-2">
          Warranty policy helps you stay covered in case of defects in material,
          design and workmanship after purchase of the product. On selected
          products and in instances where we are considered the seller, a twelve
          (12) months warranty will be provided for the eligible items purchased
          for all the buyers within UAE. Warranty obligations are limited to
          repair of defective product or replacement of the defective part, or
          replacement or refund according to paid/sold price of the product
          itself (such decision at the product seller’s discretion).
        </Typography>
      </Box>
    </Box>
  );
};

export default Policy;
