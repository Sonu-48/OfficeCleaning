import React from "react";
import { Box, Button, Container, TextField, Typography, styled,Grid, Select } from "@mui/material";

const BannerWrapper = styled("div")({
  backgroundImage: "url('/images/banner-bg.jpg')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  padding: "30px 0px",
  textAlign: "center",

  ".heading": {
    "& h2": {
      color: "#fff",
      textShadow: "1px 1px 1px #333",
    },
    "& h4": {
      textShadow: "1px 1px 1px #555",
      margin: "20px 0px",
    },
  },
  ".service-box": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    margin: "20px 0px",
    ".service-inner-box": {
      display: "flex",
      alignItems: "center",
      gap: "5px",
    },
    "& p": {
      fontWeight: "600",
      color: "#fff",
    },
    ".dot-box": {
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      background: "#b4d56c",
    },
  },
});

function Bannerpage() {
  return (
    <BannerWrapper>
      <Container>
        <Box className="heading">
          <Typography variant="h2">
            Get a quick instant office & commercial cleaning quote estimate in
            minutes
          </Typography>
          <Typography variant="h4">
            Find out how much you can save & claim 1 week free trial
          </Typography>
        </Box>
        <Grid container spacing={2}>
            <Grid item lg={3} md={4} sm={6} xs={12}>
                <TextField variant="filled" size="small" placeholder="Contact Details"/>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
                <Select>
                    <Menu item="Showrooms">Showrooms</Menu>
                    <Menu item="Building Type">Building Type</Menu>
                </Select>
            </Grid>
        </Grid>
        {/* Service Section */}
        <Box className="service-box">
          <Box className="service-inner-box">
            <Box className="dot-box"></Box>
            <Typography variant="body1">Time saving service</Typography>
          </Box>
          <Box className="service-inner-box">
            <Box className="dot-box"></Box>
            <Typography variant="body1">
              {" "}
              No obligation instant quote estimate{" "}
            </Typography>
          </Box>
          <Box className="service-inner-box">
            <Box className="dot-box"></Box>
            <Typography variant="body1">
              {" "}
              Short term agreements - cancel anytime
            </Typography>
          </Box>
        </Box>
        <Button variant="contained" color="primary">
          Get My Instant Quote
        </Button>
      </Container>
    </BannerWrapper>
  );
}
export default Bannerpage;
