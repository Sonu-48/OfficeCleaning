import React from "react";
import { Container, Box, Typography, Button, styled } from "@mui/material";
import Header from "../../../HomeLayout/Header";
import Footer from "../../../HomeLayout/Footer";
import { useNavigate } from "react-router-dom";
import PageHelmet from "../../../Components/PageHelmet";

const Wrapper= styled('div')({
    ".simple-steps":{
        padding:'20px 0px 30px',
        "& h2":{
            color:'#2175a9',
            fontSize:'32px',
        },
        "& h3":{
            color:'#2175a9',
            padding:'20px 0px',
        }
    }
})

function How_It_Works() {
  const navigate= useNavigate();
  return (
    <>
    <PageHelmet title="How It Works - Out Of Hour">
    <Header />
      <Wrapper>
        <Container>
          <Box className="simple-steps">
            <Typography variant="h2">
              How it works in 3 simple steps ?
            </Typography>
            <Typography variant="h3">
              Get your instant cleaning quote estimate
            </Typography>
            <Typography variant="body1">
              We provide you with a simple and hassle-free way to input your
              cleaning requirements online and to get an instant cleaning quote
              estimate. The quote estimate will be very near to the actual
              quote. The exact price will be determined based on whether you
              decide to add any additional changes to your cleaning
              specification or time adjustments, and after you claim your free
              trial clean.
            </Typography>
            <Typography variant="h3">Claim your free trial clean</Typography>
            <Typography variant="body1">
              If you like the quote estimate and want to give us a try. We can
              schedule your free cleaning sessions right away. Your first 3
              cleaning sessions are provided as a free trial, so you can see the
              standard we deliver before making any kind of commitment or paying
              a single penny. This also lets us get a better idea of how long it
              takes to thoroughly clean you building within a set timescale,
              which means you’ll never be overcharged when the cleaners leave
              early. We deliver honest value for money!
            </Typography>
            <Typography variant="h3">
              Schedule a site visit & sign up
            </Typography>
            <Typography variant="body1">
              If you are satisfied with our standard of service after your free
              trial cleaning sessions and want to continue to use Out of Hour,
              we will arrange for an area manager to attend your building, make
              any final adjustments to your cleaning plan and answer any
              questions you may have. This is your opportunity to formally sign
              up to our service. After that, just sit back and we’ll take care
              of all your cleaning requirements.
            </Typography>
            <Box align="center" pt={3}>
                <Button variant="contained" color="primary" onClick={()=>navigate('/get-your-quote-now')}>Quote Request Form</Button>
            </Box>
          </Box>
        </Container>
      </Wrapper>
      <Footer />
    </PageHelmet>
    </>
  );
}
export default How_It_Works;
