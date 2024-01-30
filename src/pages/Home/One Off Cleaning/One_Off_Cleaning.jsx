import React from "react";
import { Container, Box, Typography, Button, styled } from "@mui/material";
import Header from "../../../HomeLayout/Header";
import Footer from "../../../HomeLayout/Footer";
import PageHelmet from "../../../Components/PageHelmet";
import { Link, useNavigate } from "react-router-dom";

const OneoffcleaningWrapper = styled("div")({
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
    "& a": {
      color: "#2175a9!important",
    },
  },
});

function One_Off_Cleaning() {
  const navigate = useNavigate();
  return (
    <>
      <PageHelmet title="One Off Deep Clean,London Cleaning Services -Out Of Hour">
        <Header />
        <OneoffcleaningWrapper>
          <Container>
            <Box pt={2} pb={2}>
              <img
                src="/images/off_cleaning_service.jpg"
                alt="Off Cleaning Banner"
              />
            </Box>
            {/* One Off Cleaning in London */}
            <Box>
              <Typography variant="h2">One Off Cleaning in London</Typography>
              <Typography variant="body1">
                If you are looking for &nbsp;
                <span>one off cleaning services in the London</span>
                &nbsp;area from a professional and approved provider then Out of
                hour can assist. We take the hard work out of finding the right
                people for the job with our advanced requirement matching
                algorithms.
              </Typography>
              <Typography variant="body1"><span>One off cleaning </span> is often required when you move premises or are moving back in after a refurbishment. There can be the need for a one off deep clean, often 6 monthly or yearly, or if you are leaving for good and handing back the keys (end of tenancy clean) then a thorough clean beforehand will ensure the return of your deposit and a good reputation left behind long after your departure.</Typography>
              <Typography variant="body1">Moving office or workplace is stressful – Just researching and choosing the right London cleaning provider can take up valuable time and effort. Out of hour cleaning services that fit your schedule and enable you to relax in the knowledge that a trustworthy team are taking care of the project on your behalf means more time to concentrate on the important aspects of your move.</Typography>
              <Typography variant="body1">There are many benefits to our free quote comparison service. Let us take a look at your requirements and narrow your search to those companies that closely match your criteria. You can view their reputation, reviews and profiles before selecting just the right team for your <span> one off cleaning job in London </span>. Clients inform us that they require a reliable, approved and quality service from our one off cleaning companies and we listen. All of our suppliers are fully vetted, insured and experienced in providing
              <Link to="/carpet-cleaning-london" style={{color:'#2175a9',fontWeight:'600'}}> carpet cleaning services in London.</Link>
              </Typography>
              <Typography variant="body1">Fill out our free quote form now and let us use our expertise to help you glide through your one off cleaning experience.</Typography>
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
        </OneoffcleaningWrapper>
        <Footer />
      </PageHelmet>
    </>
  );
}
export default One_Off_Cleaning;
