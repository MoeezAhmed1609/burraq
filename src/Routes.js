import React from "react";
// React Router Dom Import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Css import
import "./App.css";
// Pages
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Product from "./pages/Product";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Policy from "./pages/Policy";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Categories />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
