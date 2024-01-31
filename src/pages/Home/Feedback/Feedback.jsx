import React from "react";
import { Container, Box, Typography, styled } from "@mui/material";
import Header from "../../../HomeLayout/Header";
import Footer from "../../../HomeLayout/Footer";
import PageHelmet from "../../../Components/PageHelmet";

const FeedbackWrapper = styled("div")({
  "& h2": {
    fontSize: "32px",
    color: "#2175a9",
    padding: "10px 0px",
  },
  "& p": {
    padding: "15px 0px",
  },
  ".lsit-item": {
    "& p": {
      padding: "0px",
    },
  },
});

function Feedback() {
  return (
    <>
    <PageHelmet title="Feedback- Out of Hour">
    <Header />
      <FeedbackWrapper>
        <Container>
          <Box pt={1}>
            <img src="/images/feedback-banner.jpg" alt="Feedback Banner" width="100%" loading="lazy"/>
          </Box>
          {/* Provide Feedback section */}
          <Typography variant="h2">Provide Feedback</Typography>
          <Box>
            <Typography variant="body1" sx={{ fontWeight: "600" }}>
              Rate your experience with a supplier.
            </Typography>
            <Typography variant="body1">
              Out of Hour would really appreciate hearing from you about your
              recent experience and here are just some of the main reasons –
            </Typography>
            <Box pt={1} pb={1}>
              <Box className="lsit-item">
                <Box className="circle-box"></Box>
                <Typography variant="body1">
                  Your feedback is essential to help us monitor performance
                </Typography>
              </Box>
              <Box className="lsit-item">
                <Box className="circle-box"></Box>
                <Typography variant="body1">
                  Feedback helps us to keep learning
                </Typography>
              </Box>
              <Box className="lsit-item">
                <Box className="circle-box"></Box>
                <Typography variant="body1">
                  We use feedback to improve and develop
                </Typography>
              </Box>
            </Box>
            <Typography variant="body1">
              Rating your experience will help us maintain a quality network of
              providers, and importantly, give all consumers valuable feedback
              in choosing and working with a provider.
            </Typography>
            <Typography variant="body1">
              At Out of Hour we always ensure we are up to date with additions
              and changes to cleaning providers. This all important knowledge of
              the industry is how we are able to provide you with the most
              current advice as to which London cleaning company is ideal for
              your needs as well as keeping you informed with their current
              level of service.
            </Typography>
          </Box>
          {/* We monitor reliable comparisons of performance section */}
          <Box>
            <Typography variant="body1" sx={{ fontWeight: "600" }}>
              We monitor reliable comparisons of performance.
            </Typography>
            <Typography variant="body1">
              We are keen to drive performance across the cleaning industry and
              particularly with our providers in the London area. We build on
              national quality requirements by measuring outcomes as well as
              processes.
            </Typography>
            <Typography variant="body1">
              This provides a basis for service improvement amongst providers.
              The overall aim is to make accurate comparisons across different
              service providers and be in the position to recognise and take
              action to improve cleaning standards for our clients.
            </Typography>
            <Typography variant="body1">
              Performance indications are based upon performance measured sample
              data. We support the development of best practice in cleaning
              standards.
            </Typography>
            <Typography variant="body1">
              All our partner service providers will be sent a personalised
              report each quarter. The report will place a strong emphasis on
              identifying providers who are performing at increasingly high
              levels. This report also enhances the competitiveness of our
              suppliers who strive to provide professional services at all
              times.
            </Typography>
            <Typography variant="body1">
              We would love to hear from you – you can visit our write a review
              section in the contractors profile and leave your feedback so you
              can let us know about your experience.
            </Typography>
          </Box>
        </Container>
      </FeedbackWrapper>
      <Footer />
    </PageHelmet>
     
    </>
  );
}
export default Feedback;
