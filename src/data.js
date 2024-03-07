import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import XIcon from "@mui/icons-material/X";
import brand1 from "./assets/brand1.png";
import brand2 from "./assets/brand2.png";
import { FaTiktok } from "react-icons/fa";

export const routes = [
  {
    title: "Best Deals",
    mobIcon: <ThumbUpOffAltIcon />,
  },
  {
    title: "New Arrivals",
    mobIcon: <AutoAwesomeOutlinedIcon />,
  },
  {
    title: "Brands",
    mobIcon: <TipsAndUpdatesOutlinedIcon />,
  },
  {
    title: "Catalogue",
    icon: <MenuBookOutlinedIcon />,
    mobIcon: <MenuBookOutlinedIcon />,
  },
  {
    title: "Contact Us",
    mobIcon: <LocalPhoneOutlinedIcon />,
  },
  {
    title: "Flash Sale",
    icon: <LocalFireDepartmentOutlinedIcon />,
    mobIcon: <LocalFireDepartmentOutlinedIcon />,
  },
];

export const footerLinks = [
  {
    title: "Customer Service",
    link: "",
    links: [
      {
        name: "My Account",
        link: "/",
      },
      {
        name: "Payments",
        link: "/",
      },
      {
        name: "Term of use",
        link: "/",
      },
      {
        name: "Deliveries of Returns",
        link: "/",
      },
      {
        name: "Gift Card",
        link: "/",
      },
      {
        name: "Refund & Return Policy",
        link: "/",
      },
      {
        name: "FAQs",
        link: "/",
      },
    ],
  },
  {
    title: "About Us",
    link: "",
    links: [
      {
        name: "Product",
        link: "/",
      },
      {
        name: "Our Story",
        link: "/",
      },
      {
        name: "Job Opportunities",
        link: "/",
      },
      {
        name: "Store Locator",
        link: "/",
      },
      {
        name: "Blog",
        link: "/",
      },
      {
        name: "Reviews",
        link: "/",
      },
      {
        name: "Trending Search",
        link: "/",
      },
    ],
  },
];

export const footerSocials = [
  { icon: <FacebookOutlinedIcon />, link: "/" },
  { icon: <InstagramIcon />, link: "/" },
  { icon: <XIcon />, link: "/" },
  { icon: <PinterestIcon />, link: "/" },
  { icon: <FaTiktok className="text-base mb-1" />, link: "/" },
];

export const novexProducts = [
  {
    image: brand1,
    name: "Control DMR Double",
    price: 70,
    discount: 90,
    rating: 3.4,
    reviews: "11.3k",
  },
  {
    image: brand2,
    name: "Control DMR Double",
    price: 70,
    discount: 90,
    rating: 3.4,
    reviews: "11.3k",
  },
  {
    image: brand1,
    name: "Control DMR Double",
    price: 70,
    discount: 90,
    rating: 3.4,
    reviews: "11.3k",
  },
  {
    image: brand2,
    name: "Control DMR Double",
    price: 70,
    discount: 90,
    rating: 3.4,
    reviews: "11.3k",
  },
  {
    image: brand1,
    name: "Control DMR Double",
    price: 70,
    discount: 90,
    rating: 3.4,
    reviews: "11.3k",
  },
  {
    image: brand2,
    name: "Control DMR Double",
    price: 70,
    discount: 90,
    rating: 3.4,
    reviews: "11.3k",
  },
  {
    image: brand1,
    name: "Control DMR Double",
    price: 70,
    discount: 90,
    rating: 3.4,
    reviews: "11.3k",
  },
  {
    image: brand2,
    name: "Control DMR Double",
    price: 70,
    discount: 90,
    rating: 3.4,
    reviews: "11.3k",
  },
  {
    image: brand1,
    name: "Control DMR Double",
    price: 70,
    discount: 90,
    rating: 3.4,
    reviews: "11.3k",
  },
  {
    image: brand2,
    name: "Control DMR Double",
    price: 70,
    discount: 90,
    rating: 3.4,
    reviews: "11.3k",
  },
  {
    image: brand1,
    name: "Control DMR Double",
    price: 70,
    discount: 90,
    rating: 3.4,
    reviews: "11.3k",
  },
  {
    image: brand2,
    name: "Control DMR Double",
    price: 70,
    discount: 90,
    rating: 3.4,
    reviews: "11.3k",
  },
];

export const features = [
  {
    title: "Size",
    value: ":to be provided",
  },
  {
    title: "Voltage",
    value: ":220V~240V AC 50/60Hz",
  },
  {
    title: "Watts",
    value: ":to be provided",
  },
  {
    title: "RPM",
    value: ":to be provided",
  },
  {
    title: "CFM",
    value: ":to be provided",
  },
];
