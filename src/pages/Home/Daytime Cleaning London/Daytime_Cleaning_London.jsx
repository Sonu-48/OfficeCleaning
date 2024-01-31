import React from "react";
import { Container, Box, Typography, Button, styled } from "@mui/material";
import Header from "../../../HomeLayout/Header";
import Footer from "../../../HomeLayout/Footer";
import PageHelmet from "../../../Components/PageHelmet";
import { Link, useNavigate } from "react-router-dom";

const OneoffcleaningWrapper = styled("div")({
  "& a": {
    color: "#2175a9",
    fontWeight: "600",
  },
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
  },
});

function Daytime_Cleaning_London() {
  const navigate = useNavigate();
  return (
    <>
      <PageHelmet title="Daytime Cleaning London Company - Benefits - Out of Hours">
        <Header />
        <OneoffcleaningWrapper>
          <Container>
            <Box pt={2} pb={2}>
              <img
                src="/images/daytime-cleaning.jpg"
                alt="Off Cleaning Banner" width="100%" loading="lazy"
              />
            </Box>
            {/* Daytime Cleaning */}
            <Box>
              <Typography variant="h2">Daytime Cleaning</Typography>
              <Typography variant="body1">
                The days of working long, night-time hours for cleaning crews
                seems to still be here, while the popularity of cleaning during
                the day is on the rise. It only makes sense for progressive and
                forward-thinking companies to have their cleaning crew working
                daytime hours.
              </Typography>
              <Typography variant="body1">
                There may be some perceived challenges to
                <Link to="/commercial-cleaning"> commercial cleaning </Link> during the day, but most
                of these are easily side-stepped. Perhaps there are some
                sections of the building that have higher congestion of human
                traffic during the day, and cleaning at that time would be
                difficult and problematic. Closing down certain areas of the
                building can be a quick, easy solution to this problem. Creating
                a flexible working environment can only be a positive change.
              </Typography>
              <Typography variant="body1">
                If the cleaners can interact with the other workers of the
                facility, and a repertoire between the two can be created, then
                the cleaning will be done faster and more efficiently. If a mess
                is made, there will be someone on staff to clean it up at that
                time, and the source of any problems can be found easily. The
                benefits to daytime cleaning are very nearly limitless.
              </Typography>
            </Box>

            {/* Access to smart & wearable technology */}
            <Box>
              <Typography variant="h3">
                Access to smart & wearable technology
              </Typography>
              <Typography variant="body1">
                By having access to smart & wearable technology, Out of Hours
                can help your company reduce their cleaning costs; this is done
                through the use of intelligence with their data, allowing for
                improved services.
              </Typography>
            </Box>
            {/* Agile & Flexible working environments */}
            <Box>
              <Typography variant="h3">
                Agile & Flexible working environments
              </Typography>
              <Typography variant="body1">
                In order to provide greater flexibility with agreements and
                contracts, we hope to create an agile future that can change the
                way buildings are cleaned and maintained. This can be done
                through a closer understanding of clients business & the
                buildings progression.
              </Typography>
            </Box>
            {/* Visible customer facing interaction */}
            <Box>
              <Typography variant="h3">
                Visible customer facing interaction
              </Typography>
              <Typography variant="body1">
                We focus on visible customer services and hope to see clients
                enjoying interactions with our employees and contractors on a
                daily basis. An enjoyable work environment and recognition of
                good effort can develop and display extra interpersonal skills.
              </Typography>
            </Box>
            {/* Progressive training*/}
            <Box>
              <Typography variant="h3">Progressive training</Typography>
              <Typography variant="body1">
                Our unique skills will become a recognisable brand trait, what
                could even be identified by members of the public based purely
                on what we do.
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
        </OneoffcleaningWrapper>
        <Footer />
      </PageHelmet>
    </>
  );
}
export default Daytime_Cleaning_London;
