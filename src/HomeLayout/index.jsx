import { Box } from "@mui/material";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Bannerpage from "../pages/Home/LandingPage/Bannerpage";
import Instant_Estimate from "../pages/Home/LandingPage/Instant_Estimate";
import Our_of_Our from "../pages/Home/LandingPage/Out_of_Our";
import How_it_Works from "../pages/Home/LandingPage/How_it_Works";
import Reasons_to_Choose from "../pages/Home/LandingPage/Reasons_to_Choose";
import Reviews from "../pages/Home/LandingPage/Reviews";

const HomeLayout = () => {
  return (
    <Box>
      <Header />
      <Bannerpage />
      <Instant_Estimate />
      <Our_of_Our/>
      <How_it_Works/>
      <Reasons_to_Choose/>
      <Reviews/>
      <Footer />
    </Box>
  );
};
export default HomeLayout;
