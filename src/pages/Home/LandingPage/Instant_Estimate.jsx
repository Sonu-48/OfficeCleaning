import React from "react";
import { Container, Box, Typography, styled, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Wrapper = styled("div")({
  ".circle-outer-wrapper": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  paddingTop: "100px",
  paddingBottom:'50px',
  ".circle-wrapper": {
    position: "relative",
    maxWidth: "270px",
    "& p": {
      color: "#2b6f94",
      textAlign: "center",
      padding: "20px 0px",
    },
  },
  ".arrow": {
    position: "absolute",
    right: "-70px",
    bottom: "65px",
    zIndex: "22",
  },
  ".first-circle": {
    background: "linear-gradient(to bottom, #d6e8ae 0%,#c1dc85 100%)",
    width: "130px",
    height: "130px",
    borderRadius: "50%",
    border: "3px solid #AFCC6A",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    "& p": {
      color: "#406da8",
      fontWeight: "600",
      padding: "0px 5px",
      textWrap: "balance",
    },
  },
  ".circle-img": {
    position: "absolute",
    left: "120px",
    top: "0px",
    "& img": {
      height: "130px",
      width: "130px",
      borderRadius: "50%",
      border: "3px solid #3c797e",
    },
  },
  ".link-banner": {
    background: "linear-gradient(to bottom, #72bced 0%,#2275a9 100%)",
    border: "2px solid #2175a7",
    textAlign: "center",
    padding: "5px",
    marginTop: "30px",

    "& a": {
      fontSize: "18px",
      color: "#fff",
      fontWeight: "600",
    },
  },
  "@media screen and (max-width:768px)":{
    ".arrow":{
        display:'none',
    },
    ".circle-outer-wrapper":{
       flexDirection:'column',
    },
  }
});

function Instant_Estimate() {
  return (
    <Wrapper>
      <Container>
        <Grid container spacing={3}>
          <Grid item lg={10} xs={12} sx={{paddingLeft:'0px'}}>
            <Box className="circle-outer-wrapper">
              <Box className="circle-wrapper">
                <Box className="first-circle">
                  <Typography variant="body2">Instant Estimate</Typography>
                </Box>
                <Box className="circle-img">
                  <img src="/images/img1.jpg" alt="" />
                </Box>
                <Typography variant="body1">
                  Find out what your initial cleaning costs in seconds
                </Typography>
                <Box className="arrow">
                  <img src="/images/arrow-img.png" alt="Arrow" />
                </Box>
              </Box>
              <Box className="circle-wrapper">
                <Box className="first-circle">
                  <Typography variant="body2">Trusted Cleaner</Typography>
                </Box>
                <Box className="circle-img">
                  <img src="/images/img2.jpg" alt="" />
                </Box>
                <Typography variant="body1">
                  We only recommend consistent, quality rated cleaners
                </Typography>
                <Box className="arrow">
                  <img src="/images/arrow-img.png" alt="Arrow" />
                </Box>
              </Box>
              <Box className="circle-wrapper">
                <Box className="first-circle">
                  <Typography variant="body2">Quick & Easy Process</Typography>
                </Box>
                <Box className="circle-img">
                  <img src="/images/img3.jpg" alt="" />
                </Box>
                <Typography variant="body1">
                  Cleaners app that will act as your management dashboard
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={2} xs={12} sx={{paddingLeft:'0px!important'}}>
            <Box className="link-banner">
              <Link to="">Click Here to Get Your Instant Quote Estimate</Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}
export default Instant_Estimate;
