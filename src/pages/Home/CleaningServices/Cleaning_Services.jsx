import React from "react";
import {
  Container,
  Box,
  Grid,
  Typography,
  styled,
  Button,
} from "@mui/material";
import Header from "../../../HomeLayout/Header";
import Footer from "../../../HomeLayout/Footer";
import { Link, useNavigate } from "react-router-dom";
import PageHelmet from "../../../Components/PageHelmet";

const ServiceWrapper = styled("div")({
  ".service-image-box": {
    background: "#2175a9",
    padding: "0.5rem",
    borderRadius: "0.5rem",
    "& img": {
      width: "100%",
      borderRadius: "0.5rem",
    },
    "& p": {
      color: "#fff",
    },
  },
  ".professional-cleaning-service": {
    paddingLeft: "10px",
    "& h2": {
      color: "#2175a9",
      fontSize: "32px",
      padding: "10px 0px",
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
      fontSize: "20px",
    },
    "& a": {
      color: "#2175a9",
    },
  },
  ".quote-request-btn":{
    padding:'40px 0px',
  }
});

function Cleaning_Services() {
  const navigate=useNavigate();
  return (
    <>
     <PageHelmet title="Professional Cleaning Services in London - Out of Hour">
     <Header />
      <ServiceWrapper>
        <Container>
          <Box>
            <img
              src="/images/cleaning-services-banner.jpg"
              alt="Cleaning Services" width="100%" loading="lazy"
            />
          </Box>
          <Grid container spacing={3} mt={1} pb={2}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Grid container spacing={3}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Box className="service-image-box">
                    <img
                      src="/images/service-evening-and-night-cleaning.jpg"
                      alt="Service Evening and Night" loading="lazy"
                    />
                    <Typography variant="body1">
                      Evening & Night Cleaning
                    </Typography>
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Box className="service-image-box">
                    <img
                      src="/images/service-early-morning-cleaning.jpg"
                      alt="Service Evening and Night" loading="lazy"
                    />
                    <Typography variant="body1">
                      Early Morning Cleaning
                    </Typography>
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Box className="service-image-box">
                    <img
                      src="/images/service-weekend-cleaning.jpg"
                      alt="Service Evening and Night" loading="lazy"
                    />
                    <Typography variant="body1">Weekend Cleaning</Typography>
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Box className="service-image-box">
                    <img
                      src="/images/service-commercial-cleaning.jpg"
                      alt="Service Evening and Night" loading="=lazy"
                    />
                    <Typography variant="body1">Commercial Cleaning</Typography>
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Box className="service-image-box">
                    <img
                      src="/images/service-office-cleaning.jpg"
                      alt="Service Evening and Night" loading="lazy"
                    />
                    <Typography variant="body1">Office Cleaning</Typography>
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Box className="service-image-box">
                    <img
                      src="/images/service-industrial.jpg"
                      alt="Service Evening and Night" loading="lazy"
                    />
                    <Typography variant="body1">Business Cleaning</Typography>
                  </Box>
                </Grid>
              </Grid>
              <Box align="center" className="quote-request-btn">
                <Button variant="contained" color="primary" onClick={()=>navigate('/get-your-quote-now')}>
                  Quote Request Form
                </Button>
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box className="professional-cleaning-service">
                <Typography variant="h2">
                  Professional Cleaning Services in London
                </Typography>
                <Typography variant="body1">
                  Out of Hours &nbsp;
                  <span>Professional Cleaning Services in London</span>
                  &nbsp;gives you complete peace of mind that your workspace is
                  in safe hands. As we completely verify every company we
                  suggest, you can choose cleaning Out of Hours, letting the
                  cleaners work as you rest.
                </Typography>
                <Typography variant="body1">
                  Many businesses make sacrifices when choosing their cleaning
                  service due to the issue of trust or supervision needed
                  they’ll often have cleaners working alongside employees
                  causing inconvenience.
                </Typography>
                <Typography variant="body1">
                  With Out of Hours, you benefit from the ultimate convenience
                  with confidence. Our strict vetting process ensures you can
                  relax while your cleaning is done while your workplace is
                  closed. This ensures there’s no disruption to work life and
                  you wake every morning to a fresh clean workplace.
                </Typography>
                <Typography variant="body1">
                  Our services excel at providing trusted out of hours cleaners
                  however we can also bring you quotes for almost any
                  professional cleaning service in London. With the cleaners
                  meeting our strict standards we’re certain whoever you choose
                  from your quote results, you’ll receive a service that exceeds
                  your expectations.
                </Typography>
                <Typography variant="h3">
                  <Link to="">Request a quote </Link>
                  for FREE now and see who we have in your area or call us and
                  we’ll do everything for you to make it even easier.
                </Typography>
                <Typography variant="body1">
                  You’re just one click away from a brighter, stress free,
                  cleaner working environment.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </ServiceWrapper>
      <Footer />
     </PageHelmet>
    </>
  );
}
export default Cleaning_Services;
