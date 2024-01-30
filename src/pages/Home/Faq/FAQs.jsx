import React from "react";
import { Container, Box, Typography, styled } from "@mui/material";
import Header from "../../../HomeLayout/Header";
import Footer from "../../../HomeLayout/Footer";
import PageHelmet from "../../../Components/PageHelmet";

const FQASection= styled('div')({
    padding:'20px 0px 50px',
    ".faq-section":{
        paddingTop:'40px',
        "& h2":{
            color:'#2175a9'
        },
        "& h3":{
            color:'#2175a9',
            padding:'20px 0px',
        }
    }
})

function FAQs() {
  return (
    <>
     <PageHelmet title="FAQs - Out Of Hour">
     <Header />
      <FQASection>
        <Container>
          <Box>
            <img src="/images/banner-faq-page.jpg" alt="Faq Banner" width="100%"/>
          </Box>
          <Box className="faq-section">
            <Typography variant="h2">FAQ’s Questions & Answers</Typography>
            <Typography variant="h3">
              What Happens When I Request a quote?
            </Typography>
            <Typography variant="body1">
              Once you request a quote we will assess your needs and call you to
              confirm the details along with finding out a little more. This
              enables us to deliver bespoke solutions tailored to your
              requirements.
            </Typography>
            <Typography variant="body1">
              Once the form has been completed, Out of Hours will contact you in
              order to verify your details and display which contractors are
              available. You select the contractor best suited to you and you’re
              done.
            </Typography>
            <Typography variant="h3">
              Am I secured to a cleaning schedule & contract?
            </Typography>
            <Typography variant="body1">
              Not in the slightest degree – you can adjust your cleaning
              schedule at whatever time. You can likewise cancel at whatever
              time, however we trust you’ll adore us to stick around.
            </Typography>
            <Typography variant="h3">
              Will I have the same cleaner each time?
            </Typography>
            <Typography variant="body1">
              We keep the same cleaner at all times. In the event that for
              reasons unknown you are unhappy with standard of cleaning, we can
              change cleaners to suit – no questions or quibbles asked ?
            </Typography>
            <Typography variant="h3">
              How do you vet your cleaning contractors?
            </Typography>
            <Typography variant="body1">
              We have a strict vetting process that allows zero margin for
              error. For your peace of mind, we request that all contractors are
              DBS background checked, formerly known as CRB checked. This is
              done alongside any verification of references provided by the
              contractors, before being selected by Out of Hours. We don’t leave
              any of this to chance.
            </Typography>
            <Typography variant="h3">
              Do you have to see my office before I join?
            </Typography>
            <Typography variant="body1">
              When you sign up to our service we request that we come and go
              through an onsite walkthrough date. On that date you will meet
              your territory manager, who will work with you to build up a
              cleaning specification list for you building and provide an
              accurate quote which will be very near to the online estimate
              provided. We’ll then schedule a FREE trial clean or deep clean to
              get your commercial space looking incredible.
            </Typography>
            <Typography variant="h3">
              I Have More Than One Business That Needs Cleaners, What Should I
              Do?
            </Typography>
            <Typography variant="body1">
              We’re always on the end of a phone to help with any queries you
              may have. We will get back to you as soon as possible. If your
              needs are more complex, just call us and we’ll do the rest.
            </Typography>
            <Typography variant="h3">
              I am on a Limited budget, can you help?
            </Typography>
            <Typography variant="body1">
              We can send for the most affordable cleaning contractors in London
              that still share our ethos of excellence and honesty.
            </Typography>
            <Typography variant="h3">
              How Do I Benefit from the Timekeeping Solution?
            </Typography>
            <Typography variant="body1">
              The timekeeping solution gives you peace of mind that your London
              cleaning company is monitored out of hours. It’s completely free
              to you for a minimum of one month and uses modern technology so
              cleaners clock in and out, logging their time to the nearest
              second.
            </Typography>
            <Typography variant="h3">
              I Need Cleaners In Office Hours, Can I still Use Your Service?
            </Typography>
            <Typography variant="body1">
              Our London cleaners also provide services within normal working
              hours.
            </Typography>
            <Typography variant="h3">
              What’s the arrangement with the wall mount Ipad?
            </Typography>
            <Typography variant="body1">
              We provide all new clients with a FREE Ipad which will go about as
              your administration cleaning management dashboard. You and your
              representatives will have the capacity to see when Out of Hour
              cleaning staff come in and out, leave notes & messages, track
              cleaning supplies, leave reviews or feedback and recognise what
              tasks were completed. We depend on client usage through the Ipad
              to ensure we’re continually achieving the standard you expect.
            </Typography>
            <Typography variant="h3">
              Could we utilize our own Ipad & how is it installed?
            </Typography>
            <Typography variant="body1">
              Sadly, you may not. In the event that anything turns out badly we
              can react promptly so it never turns in to your issue. Our Ipads
              are given in a robust durable wall mount and associated with a
              power supply via USB
            </Typography>
          </Box>
        </Container>
      </FQASection>
      <Footer />
     </PageHelmet>
    </>
  );
}
export default FAQs;
