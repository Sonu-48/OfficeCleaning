import React from "react";
import {
  Container,
  Box,
  Grid,
  styled,
  Typography,
  Button,
} from "@mui/material";
import Header from "../../../HomeLayout/Header";
import Footer from "../../../HomeLayout/Footer";
import { useNavigate } from "react-router-dom";
import PageHelmet from "../../../Components/PageHelmet";

const WhyUsSection = styled("div")({
  ".mobile-banner": {
    position: "relative",
    marginTop: "150px",
    "& img": {
      objectFit: "cover",
      maxWidth: "100%",
    },
  },
  ".mobile-img": {
    position: "absolute",
    top: "-140px",
    right: "25px",
    width: " 35%",
    "& img": {
      maxWidth: "100%",
    },
  },
  ".communication-tool": {
    maxWidth: "600px",
    marginTop: "50px",
    "& h3": {
      color: "#333",
      lineHeight: "30px",
    },
  },
  ".lsit-item": {
    "& p": {
      color: "#000",
    },
  },
  
  ".office-cleaner": {
    padding: "20px 0px",
    "& h1": {
      color: "#404040",
      fontSize: "45px",
      fontStyle: "italic",
      lineHeight: "60px",
      fontWeight: "normal",
    },
    "& p": {
      textAlign: "end",
      color: "#a5a5a5",
      fontSize: "18px",
      padding: "20px 0px 10px",
    },
  },
  ".inner-box": {
    padding: "20px 10px",

    "& h4": {
      color: "#2175a9",
      padding: "10px 0px 20px",
    },
  },
  ".apart-from":{
    padding:'20px 0px',
    "& h2":{
        color:'#2175a9',
        fontSize:'32px',
    },
    "& h3":{
        color:'#2175a9',
        padding:'20px 0px',
    }
  },
  "@media screen and (max-width:600px)":{
    ".office-cleaner":{
        "& h1":{
            fontSize:'30px!important',
            lineHeight:'40px',
        },
        "& p":{
            fontSize:'15px',
            textAlign:'center!important'
        }
    },
    ".mobile-img":{
        top:'-30px',
    },
    ".mobile-banner":{
        marginTop:'40px'
    }
  }
});

function Why_Us() {
  const navigate=useNavigate();
  return (
    <>
     <PageHelmet title="What makes Our of Hour Cleaning Services diffrent? - Out Of Hour">
     <Header />
      <WhyUsSection>
        <Container>
          <Box className="mobile-banner">
            <img src="/images/blue-back-min.jpg" alt="Blue Banner" />
            <Typography variant="body1">What makes</Typography>
            <Typography variant="body1">Out of Hour Cleaning</Typography>
            <Typography variant="body1">Services different?</Typography>
            <Box className="mobile-img">
              <img src="/images/mob_01-min.png" alt="Mobile" />
            </Box>
          </Box>
          <Box className="communication-tool">
            <Typography variant="h3">
              We use a unique management and communication tool that allows us
              to:
            </Typography>
            <Box pt={3} pb={3}>
              <Box className="lsit-item">
                <Box className="circle-box"></Box>
                <Typography variant="body2">
                  Identify issues and quickly take action
                </Typography>
              </Box>
              <Box className="lsit-item">
                <Box className="circle-box"></Box>
                <Typography variant="body2">
                  Support our cleaners when they are onsite
                </Typography>
              </Box>
              <Box className="lsit-item">
                <Box className="circle-box"></Box>
                <Typography variant="body2">
                  Manage supply orders and inventory in real-time
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className="office-cleaner">
            <Typography variant="h1">
              Our office cleaners use Swept, and we noticed adifference
              instantly. They know when little things come up and just deal with
              it!
            </Typography>
            <Typography variant="body1">
              BRIANNA STRATTON – THE BRIDGE, HALIFAX, NOVA SCOTIA
            </Typography>
          </Box>
          {/* Multilingual Communicatio section */}
          <Box
            sx={{
              borderTop: "2px dotted #6eb3de",
              borderBottom: "2px dotted #6eb3de",
              padding: "30px 0px",
            }}
          >
            <Grid container spacing={3}>
              <Grid item lg={4} md={4} sm={6} xs={12}>
                <Box
                  className="inner-box"
                  sx={{ borderRight: "2px dotted #6eb3de" }}
                >
                  <Typography variant="h4">
                    Multilingual Communication
                  </Typography>
                  <Typography variant="body1">
                    This industry is full of talentedindividuals who do not
                    fluently speak english. We cancommunicate
                    messages,instructions, and all feedback intheir native
                    language. This allows our cleaners to know exactly what is
                    expected of them while they are in your office.
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={4} md={4} sm={6} xs={12}>
                <Box
                  className="inner-box"
                  sx={{ borderRight: "2px dotted #6eb3de" }}
                >
                  <Typography variant="h4">Problem Reporting</Typography>
                  <Typography variant="body1">
                    Nobody is perfect, but we separate ourselves by being
                    proactive if something does come up. Our cleaners are
                    trained to report any issue, big or small, at the end of
                    their shift so that the manager is aware and can deal with
                    it right away.
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={4} md={4} sm={6} xs={12}>
                <Box className="inner-box">
                  <Typography variant="h4">
                    Specific Site Training/Instructions
                  </Typography>
                  <Typography variant="body1">
                    This industry is full of talentedindividuals who do not
                    fluently speak english. We cancommunicate
                    messages,instructions, and all feedback intheir native
                    language. This allows our cleaners to know exactly what is
                    expected of them while they are in your office.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          {/* What sets us apart from the rest section */}
          <Box className="apart-from">
            <Typography variant="h2">
              What sets us apart from the rest
            </Typography>
            <Typography variant="h3">Benefit 1.</Typography>
            <Typography variant="body1">
              We use performance measured data to monitor reliable comparisons
              of performance. This helps us to recognise and take action to
              improve cleaning standards for our clients.
            </Typography>
            <Typography variant="h3">Benefit 2.</Typography>
            <Typography variant="body1">
              Evaluate who is performing quality cleaning at increasingly high
              levels over a period of time and that remains consistent – You
              then select the most suitable fit for your needs
            </Typography>
            <Typography variant="h3">Benefit 3.</Typography>
            <Typography variant="body1">
              Receive a FREE wall mounted Ipad in your building. Our dashboard
              feature allows you to login onsite and monitor time and
              attendance, communicate messages to cleaners, rate & review, keep
              track on your supplies when running low on something & re-order
              automatically and know what cleaning tasks were completed.
            </Typography>
            <Typography variant="h3">Benefit 4.</Typography>
            <Typography variant="body1">
              Bespoke requirements with an option to compare and choose cleaner
              by background verification checked, location, availability,
              reputation, and consistent ranking performance.
            </Typography>
            <Typography variant="h3">Benefit 5.</Typography>
            <Typography variant="body1">
              We routinely perform regular site audits frequently to our clients
              ensuring high standards are always kept throughout with unexpected
              site visits to cleaners onsite to see how well their standards are
              maintained.
            </Typography>
            <Box pt={2} pb={2} align="center">
                <Button variant="contained" color="primary" onClick={()=>navigate('/get-your-quote-now')}>Quote Request Form</Button>
            </Box>
          </Box>
        </Container>
      </WhyUsSection>
      <Footer />
     </PageHelmet>
    </>
  );
}
export default Why_Us;
