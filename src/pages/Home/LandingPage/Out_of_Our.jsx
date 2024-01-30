import React from "react";
import { Container, Box, Typography, Grid, styled } from "@mui/material";
import { Link } from "react-router-dom";

const Wrapper = styled("div")({
    paddingBottom:'50px',
  "& span": {
    fontWeight: "600",
  },
  "& a": {
    color: "#2175a9",
    fontWeight: "600",
  },
});

function Our_of_Our() {
  return (
    <Wrapper>
      <Container>
        <Box align="center">
          <Typography variant="h2" color="#2175A4">
            Welcome to Out of Hour – professional office & commercial cleaning
            services London
          </Typography>
          <Typography variant="h3" pt={2} pb={1} color="#2175A4">
            save time when considering your options & compare cleaners that’s
            right for you from trusted & verified professional office cleaning
            services in London
          </Typography>
        </Box>
        <Grid container spacing={4} mt={1}>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <Typography variant="body1">
              We’re ready to find the best out of hours
              <span> professional </span>
              <Link to="/cleaning-service">office cleaning services</Link>
              <span> in London </span>
              for your business, comparing the best by location, availability,
              performance and reputation. You can claim back your time as we
              work hard to bring you the best London cleaning services for your
              requirements.
            </Typography>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <Typography variant="body1">
              Specialising in Out of Hours cleaning, we have access to a growing
              list of trusted London cleaners that don’t interrupt your daily
              business. Like waving a magic wand, you’ll find that no matter how
              you leave your workspace at night, in the morning it will always
              be clean and bright.
            </Typography>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <Typography variant="body1">
              For the first month, we’ll even keep track of their hours and
              attendance so you don’t have to <span>! </span>
              <Link to="/get-your-quote-now">Request a quote </Link>
              for free now and put us to work as you relax and wait for the
              results.
            </Typography>
            <Typography variant="body1" pt={2}>
              In just four, simple steps you can discover your ideal
              professional service in London
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}
export default Our_of_Our;
