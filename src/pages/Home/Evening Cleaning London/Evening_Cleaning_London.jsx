import React from "react";
import { Container, Box, Typography, Button, styled } from "@mui/material";
import Header from "../../../HomeLayout/Header";
import Footer from "../../../HomeLayout/Footer";
import PageHelmet from "../../../Components/PageHelmet";
import { Link, useNavigate } from "react-router-dom";

const EveningcleaningWrapper = styled("div")({
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

function Evening_Cleaning_London() {
  const navigate = useNavigate();
  return (
    <>
      <PageHelmet title="Evening Cleaning London Company - Benefits - Out of Hours">
        <Header />
        <EveningcleaningWrapper>
          <Container>
            <Box pt={2} pb={2}>
              <img
                src="/images/evening-cleaning1.jpg"
                alt="Evening Cleaning Banner" width="100%"
              />
            </Box>
            {/* Evening Cleaning */}
            <Box>
              <Typography variant="h2">Evening Cleaning</Typography>
              <Typography variant="body1">
                For businesses, whether big or small, the cleaning and care of
                the building is extremely important. Not only are there laws in
                place that dictate the codes and standards to which businesses
                must be held, but the general satisfaction and productivity of
                workers and customers both rely on a clean, impressive
                environment.
              </Typography>
              <Typography variant="body1">
                A lot of businesses these days take advantage of the benefits of
                a cleaning crew that performs their duties after hours and on
                weekends. Why would cleaning at night be more beneficial to a
                company? There are many reasons why cleaning at times when
                employees and customers might not be present is a positive
                choice for a company.
              </Typography>
            </Box>

            {/* Reduce Disruption*/}
            <Box>
              <Typography variant="h3">Reduce Disruption</Typography>
              <Typography variant="body1">
                It’s less disruptive. The tasks of a cleaning crew can be loud,
                intrusive, and unsightly – that’s just part of it. If the
                cleaning takes place at night, or on weekends, your employees
                will not be bothered by the loud sounds of industrial-strength
                vacuums, the constant hum of floor cleaners, or the general
                banging sounds that can occur from various cleaning tools.
              </Typography>
            </Box>
            {/* Exposure to toxins */}
            <Box>
              <Typography variant="h3">Exposure to toxins</Typography>
              <Typography variant="body1">
                It keeps your employees from unnecessary exposure. Sometimes,
                cleaning materials contain chemicals that may not be the best
                things to breathe in at a constant rate. While the cleaners
                often carry masks of some sort for this purpose, your other
                employees probably aren’t as prepared. Also, trash collection
                occurring at night saves your employees from seeing and smelling
                the unsightly garbage the cleaners will be collecting.
              </Typography>
            </Box>
            {/* Health & Safety */}
            <Box>
              <Typography variant="h3">Health & Safety</Typography>
              <Typography variant="body1">
                It keeps your employees safe. Similar to the masks, your
                cleaning crew will have the protection necessary for all sorts
                of scenarios that can occur, whereas your employees will not.
                For instance, when cleaning higher places such as light fixtures
                or ceiling fans, your cleaning crew will probably wear the sort
                of protective gear necessary for if something were to fall. Your
                other employees walking by might not, and therefore could be put
                at risk. Nighttime cleaning saves them from that risk.
              </Typography>
            </Box>
            {/* Time Saving*/}
            <Box>
              <Typography variant="h3">Time Saving</Typography>
              <Typography variant="body1">
                It saves time. If your cleaning crew operated during the day,
                how would any sanitation get done? You would have to stop the
                employees from doing their jobs so your cleaners could wipe down
                keyboards, computer screens, and desks. If the cleaning took
                place at night, there would be no one present for the cleaners
                to work around. That would cut their cleaning time down
                drastically, saving you money while increasing efficiency.
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
        </EveningcleaningWrapper>
        <Footer />
      </PageHelmet>
    </>
  );
}
export default Evening_Cleaning_London;
