import React from "react";
import { Container, Box, Typography, Button, styled } from "@mui/material";
import Header from "../../../HomeLayout/Header";
import Footer from "../../../HomeLayout/Footer";
import PageHelmet from "../../../Components/PageHelmet";
import { Link, useNavigate } from "react-router-dom";

const CommercialWrapper = styled("div")({
  "& h2": {
    fontSize: "32px",
    color: "#2175a9",
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
  },
  "& h4": {
    color: "#2175a9",
    paddingTop: "20px",
    fontStyle: "italic",
    "& a": {
      color: "#2175a9!important",
    },
  },
});

function Commercial_Cleaning() {
  const navigate = useNavigate();
  return (
    <>
      <PageHelmet title="Commercial Cleaning London - Professional Service">
        <Header />
        <CommercialWrapper>
          <Container>
            <Box pt={2} pb={2}>
              <img
                src="/images/commercial-cleaning.jpg"
                alt="Commercial Cleaning Banner"
              />
            </Box>
            {/* Commercial cleaning in London */}
            <Box>
              <Typography variant="h2">
                Commercial cleaning in London
              </Typography>
              <Typography variant="body1">
                There are many things to take into consideration when thinking
                about hiring a team for your &nbsp;
                <span>commercial cleaning company in London</span>. &nbsp;Many
                people site price as being a big factor but selecting a provider
                just on price can be a mistake. The cheapest might not be the
                most hygienic, thorough or even be approved.
              </Typography>
              <Typography variant="body1">
                Having access to the most reputed and professional cleaners can
                mean the difference between success and failure for a company.
                Your first impression should be smart helping you to win new
                contracts and your staff benefit from coming into a clean and
                fresh working environment thus reducing sickness and boosting
                productivity.
              </Typography>
              <Typography variant="body1">
                Reliability is another factor along with references. This is an
                area that <Link to="/" style={{color:'#2175a9',fontWeight:'600'}}>Out of hour</Link> can help with – we ensure that our
                commercial cleaning partners are fully vetted and reviews
                checked before they are even considered for recommendation. We
                know that services should be affordable but not at the sacrifice
                of quality.
              </Typography>
              <Typography variant="body1">
                A professional company will have strict policies and procedures
                that will cover all sizes of building, health and safety
                guidelines and safe handling of chemicals. Modern and effective
                cleaning providers use the latest technologies and techniques
                that would not be available to an in house team. They will
                encompass your company requirements into their procedures and be
                able to show they have built a good reputation for their work
                for other similar organisations.
              </Typography>
              <Typography variant="body1">
                <span>Commercial cleaning in London </span> is a competitive
                industry – by using our quote service you can take advantage of
                our extensive background checks, reference checking and up to
                date reviews to be sure that you are having a choice from the
                best matched{" "}
                <span> commercial cleaning providers in London.</span>
              </Typography>
              <Typography variant="body1">
                It only takes a minute to put your preferred requirements into
                our quote form. Our algorithms select the best matches, we check
                your detailed requirements and provide you with a shortlist of
                the most suitable providers. The service is completely free so
                there is nothing to lose. Fill out a quote form here.
              </Typography>
            </Box>

            {/* Why use our FREE service? section */}
            <Box>
              <Typography variant="h4">
                <Link to="/get-your-quote-now">Request a quote </Link>
                for FREE now and see who we have in your area or call us and
                we’ll do everything for you to make it even easier.
              </Typography>
            </Box>
            <Box pt={3} pb={4} align="center">
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate("/get-your-quote-now")}
              >
                Quote Request Form
              </Button>
            </Box>
          </Container>
        </CommercialWrapper>
        <Footer />
      </PageHelmet>
    </>
  );
}
export default Commercial_Cleaning;
