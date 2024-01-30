import React from "react";
import { Container, Box, Typography, Button, styled } from "@mui/material";
import Header from "../../../HomeLayout/Header";
import Footer from "../../../HomeLayout/Footer";
import PageHelmet from "../../../Components/PageHelmet";
import { Link, useNavigate } from "react-router-dom";

const WindowcleaningWrapper = styled("div")({
    "& a": {
        color: "#2175a9",
        fontWeight:'600',
      },
  "& h2": {
    fontSize: "32px",
    color: "#2175a9",
  },
  "& span": {
    fontWeight: "600",
  },
  "& p": {
    paddingTop: "20px",
  },
  "& h3": {
    color: "#2175a9",
    paddingTop: "20px",
  },
  "& h4": {
    color: "#2175a9",
    paddingTop: "20px",
    fontStyle: "italic",
   
  },
});

function Window_Cleaning() {
  const navigate = useNavigate();
  return (
    <>
      <PageHelmet title="Window Cleaning Network London - Commercial - Out Of HOur">
        <Header />
        <WindowcleaningWrapper>
          <Container>
            <Box pt={2} pb={2}>
              <img
                src="/images/window-cleaning.jpg"
                alt="Window Cleaning Banner"
              />
            </Box>
            {/*Window Cleaning */}
            <Box>
              <Typography variant="h2">
               Window Cleaning
              </Typography>
              <Typography variant="body1">
              It isn’t just the inside of your office or business premises that will need a clean from time to time. The outside of the building can also need to look at its best.
              </Typography>
              <Typography variant="body1">
              Window Cleaning is an important part of the overall impression that you give people about your property and this is especially true when it comes to <Link to="/commercial-cleaning"> commercial</Link> <span> window cleaning in London </span> where the view that people have of your business can effect whether or not they choose your service of product.
              </Typography>
              <Typography variant="body1">
              At <Link to="/">Our of Hour</Link> our partners offer a dedicated <Link to="/commercial-cleaning">commercial</Link> <span> window cleaning service </span> that allows you to make the right impression. No more cloudy, smeared glass greeting your prospective clients; with our team of window cleaners you can be sure of glistening glass each and every time.
              </Typography>
              <Typography variant="body1">
              What is more, as with the rest of the <Link to="/">Our of Hour</Link> service our suppliers will work around the schedule and work patterns of your business, never completing the window cleaning at a time that is inconvenient to you and your employees. <br />
              You can be sure that the <Link to="/">Our of HOur</Link> service is one that you can not only trust in, but can be assured of high quality each and every time.
              </Typography>
              <Typography variant="body1">
              Our network of
                <span> window cleaning contractors in London  </span> always use the best techniques and products to provide a high level of clean and will never cut corners in our processes to complete a “quick job”. It is customer satisfaction that our cleaners see as their main aim!
              </Typography>
              <Typography variant="body1">
              So if you are looking for a dedicated <span> window cleaning service in London </span> that you can rely on then get in touch with <Link to="/">Our of HOur </Link> 
              today. We bring trusted, high quality cleaning to the world of <Link to="/commercial-cleaning">commercial </Link> window cleaning and will have the outside of your building looking as sparkling clean as the inside!
              </Typography>
              <Typography variant="body1">Contact us today, we are ready and waiting to help you!</Typography>
            </Box>

            {/* Why use our FREE service? section */}
            <Box>
              <Typography variant="h4">
                <Link to="/get-your-quote-now">Request a quote </Link>
                for FREE now and see who we have in your area or call us and
                we’ll do everything for you to make it even easier.
              </Typography>
            </Box>
            <Box pt={3} pb={4} align="center">
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate("/get-your-quote-now")}
              >
                Quote Request Form
              </Button>
            </Box>
          </Container>
        </WindowcleaningWrapper>
        <Footer />
      </PageHelmet>
    </>
  );
}
export default Window_Cleaning;
