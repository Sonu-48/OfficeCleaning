import React from "react";
import { Container, Box, Typography, styled, Grid } from "@mui/material";

const Wrapper = styled("div")({
  paddingBottom: "40px",
  "& h3": {
    color: "#2175A4",
    paddingBottom: "20px",
  },
  ".circle-wrapper": {
    position: "relative",
  },
  ".arrow": {
    position: "absolute",
    left: "35px",
    // bottom: "65px",
    zIndex: "22",
  },
  ".circle-outer": {
    display: "flex",
    alignItems: "center",
    "& p": {
      paddingLeft: "20px",
    },
  },
  ".circle-box": {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    color: "#fff",
    background: "#1a2a6b",
    fontSize: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

function How_it_Works() {
  return (
    <Wrapper>
      <Container>
        <Typography variant="h3">How Does It Work?</Typography>
        <Grid container spacing={2}>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box className="circle-wrapper">
              <Box className="circle-outer">
                <Box className="circle-box">1</Box>
                <Typography variant="body1">
                  Input your cleaning requirements
                </Typography>
              </Box>
              <Box className="arrow">
                <img src="/images/step-bg.png" alt="Step" />
              </Box>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box className="circle-wrapper">
              <Box className="circle-outer">
                <Box className="circle-box">2</Box>
                <Typography variant="body1">
                  Get instant quote estimate
                </Typography>
              </Box>
              <Box className="arrow">
                <img src="/images/step-bg.png" alt="Step" />
              </Box>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box className="circle-wrapper">
              <Box className="circle-outer">
                <Box className="circle-box">3</Box>
                <Typography variant="body1">
                  Claim 1 week free trial clean
                </Typography>
              </Box>
              <Box className="arrow">
                <img src="/images/step-bg.png" alt="Step" />
              </Box>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box className="circle-wrapper">
              <Box className="circle-outer">
                <Box
                  className="circle-box"
                  sx={{ background: "#b4d56c!important" }}
                >
                  4
                </Box>
                <Typography variant="body1" pb={1}>
                  Schedule a site visit & sign up
                </Typography>
              </Box>
              <Box className="arrow">
                <img src="/images/stepend-bg.png" alt="Step" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}
export default How_it_Works;
