import React from "react";
import { Container, Box, Typography, Grid, styled } from "@mui/material";
import Header from "../../../HomeLayout/Header";
import Footer from "../../../HomeLayout/Footer";
import { Link } from "react-router-dom";

const AboutSection = styled("div")({
  ".sidebox": {
    background: "#2175a9",
    padding: "2.5rem 1.5rem",
    borderRadius: "0.75rem",
    border: "1px solid #1a296a",
    marginBottom: "1.5rem",

    "& p": {
      color: "#fff",
      fontWeight: "600",
    },
  },
  ".sidebox-icon": {
    display: "flex",
    alignItems: "cener",
    gap: "15px",
    marginTop: "20px",
    "& h3": {
      fontSize: "1.20rem",
      color: "#fff",
      textTransform: "capitalize",
    },
    "& p": {
      fontWeight: "400",
      textWrap: "balance",
      paddingTop: "5px",
    },
  },
  ".about-right-box":{
    "& h3":{
        color:'#2175a9',
        padding:'20px 0px',
    },
    "& a":{
        color:'#2175a9',
        fontWeight:'600',
    },
    "& span":{
        fontWeight:'600',
    }
  }
});

function About_Us() {
  return (
    <>
      <Header />
      <AboutSection>
        <Container>
          <Box>
            <img src="/images/about-us-banner.jpg" alt="Banner" width="100%"/>
          </Box>
          <Grid container spacing={4} mt={2} mb={1}>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Box className="sidebox">
                <Typography variant="body1" align="center">
                  Why use Out of Hour?
                </Typography>
                <Box className="sidebox-icon">
                  <Box>
                    <img src="/images/checkmark-internal.png" alt="Checkmark" />
                  </Box>
                  <Box>
                    <Typography variant="h3">REDUCED COSTS</Typography>
                    <Typography variant="body1">
                      cost effective cleaning at a price that’s right for you
                    </Typography>
                  </Box>
                </Box>
                <Box className="sidebox-icon">
                  <Box>
                    <img src="/images/checkmark-internal.png" alt="Checkmark" />
                  </Box>
                  <Box>
                    <Typography variant="h3">TIME SAVED</Typography>
                    <Typography variant="body1">
                      Compare different cleaners in one place
                    </Typography>
                  </Box>
                </Box>
                <Box className="sidebox-icon">
                  <Box>
                    <img src="/images/checkmark-internal.png" alt="Checkmark" />
                  </Box>
                  <Box>
                    <Typography variant="h3">A BETTER FIT</Typography>
                    <Typography variant="body1">
                      Proven skills and experience in relevant cleaning sectors
                    </Typography>
                  </Box>
                </Box>
                <Box className="sidebox-icon">
                  <Box>
                    <img src="/images/checkmark-internal.png" alt="Checkmark" />
                  </Box>
                  <Box>
                    <Typography variant="h3">TRUSTED SERVICES</Typography>
                    <Typography variant="body1">
                      vetted & approved to ensure quality of service & customer
                      satisfaction
                    </Typography>
                  </Box>
                </Box>
                <Box className="sidebox-icon">
                  <Box>
                    <img src="/images/checkmark-internal.png" alt="Checkmark" />
                  </Box>
                  <Box>
                    <Typography variant="h3">FREE SERVICE</Typography>
                    <Typography variant="body1">
                      many aspects of our service is free with quick customer
                      service support.
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box className="sidebox">
                <img src="/images/quality-assurance.png" alt="Quality" />
              </Box>
              <Box className="sidebox">
                <Typography variant="body1" align="center" sx={{fontSize:'20px'}}>
                  It’s FREE to use our service so you can relax as we do the
                  hard work. Bringing you the best search matches from our
                  database of vetted cleaners.
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={8} md={8} sm={6} xs={12}>
              <Box className="about-right-box">
              <Typography variant="h2" color="#2175a9">About Us</Typography>
              <Box>
                <Typography variant="h3">
                  The Professional London Cleaning Company
                </Typography>
                <Typography variant="body1">
                  As two experienced industry professionals, Jes Ellis and Linda
                  Fouracres conceived Out of Hour when they realised a need for
                  trusted, flexible cleaning services in London.
                  <br /><br />
                  Jes has spent over a decade in the London cleaning service
                  industry, working from inside along with being a successful
                  business development manager for a reputable cleaning company.
                  She brings her expertise, experience, contacts and incredible
                  insights to Out of Hour, allowing us to deliver a service that
                  provides the ideal cleaning solutions for small and medium
                  businesses. <br /><br />
                  Jes has spent over a decade in the London cleaning service
                  industry, working from inside along with being a successful
                  business development manager for a reputable cleaning company.
                  She brings her expertise, experience, contacts and incredible
                  insights to Out of Hour, allowing us to deliver a service that
                  provides the ideal cleaning solutions for small and medium
                  businesses. <br /><br />
                  Together, we form a dynamic team that gives you an
                  all-encompassing service forced on flexibility, value for
                  money, ease of use, excellent customer care and an
                  unparalleled cleaning service.
                </Typography>
              </Box>
              <Box pb={2}>
                <Typography variant="h3">
                  Easy Solutions to Cleaning Problems
                </Typography>
                <Typography variant="body1">
                  We came together with a view to eliminate the frustration
                  surrounding procuring &nbsp;{" "}
                  <Link to="">London cleaning services for business.</Link>
                  We have experienced first-hand the extra work it creates
                  seeking out a reputable company, checking references and
                  supervising the work so it is up to scratch. <br /><br />
                  Time and again we were disappointed as the company’s promises
                  were not fulfilled and their work didn’t meet the standards
                  we’d set. We also found that no qualifications are needed to
                  be a cleaning operative, many were taking advantage of this
                  fact by being dishonest in their advertising and claims.
                  <br /><br />
                  Securing high quality, trusted, verified cleaners for business
                  became our speciality and we found this skill would make light
                  work of sifting through many adverts as we displayed a talent
                  for sorting the wheat from the chaff.
                  <br /><br />
                  Now we offer this service <span>FREE</span> to all businesses,
                  bringing only cleaners we believe in while providing bespoke
                  cleaning needs based on budget, services, experience or
                  location.
                  <br /><br />
                  To see the process of verification or to find out more please
                  &nbsp;<Link to=""> visit our FAQs.</Link>
                  <br /><br />
                  You can also &nbsp;<Link to="">request a quote</Link>{" "}
                  &nbsp;now to put us to the test and benefit from our complete
                  customer support.
                  <br /><br />
                  Discover today why we are the right place to come when you
                  need high quality yet cost-effective cleaning services.
                </Typography>
              </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </AboutSection>
      <Footer />
    </>
  );
}
export default About_Us;
