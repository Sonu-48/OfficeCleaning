import React from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  styled,
  Grid,
} from "@mui/material";
import Header from "../../../HomeLayout/Header";
import Footer from "../../../HomeLayout/Footer";
import PageHelmet from "../../../Components/PageHelmet";
import { useNavigate } from "react-router-dom";

const EveningcleaningWrapper = styled("div")({
  "& a": {
    color: "#2175a9",
    fontWeight: "600",
  },
  "& h2": {
    fontSize: "25px",
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
    fontSize: "20px",
    paddingTop: "20px",
  },
});

function Office_Cleaning_Services() {
  const navigate = useNavigate();
  return (
    <>
      <PageHelmet title="Office Cleaning Company London, Professional - Out of Hours">
        <Header />
        <EveningcleaningWrapper>
          <Container>
            <Grid container spacing={2} mt={1} mb={2}>
              <Grid item lg={5} md={6} sm={6} xs={12}>
                {/* Professional Office and Business Premises Cleaning in London */}
                <Box>
                  <Typography variant="h2">
                    Professional Office and Business Premises Cleaning in London
                  </Typography>
                  <Typography variant="body1">
                    Are you looking for an excellent cleaning service for your
                    London based business? We are highly professional cleaners,
                    providing an exceptionally high standard of office and
                    premises cleaning in London, and the London area.
                  </Typography>
                  <Typography variant="h3">
                    A superb standard of London office and business cleaning
                  </Typography>
                  <Typography variant="body1">
                    Clients depend on our thorough cleaning service for their
                    London offices and business premises.
                  </Typography>
                  <Box pl={5} pt={2}>
                    <Typography
                      variant="body1"
                      sx={{ paddingTop: "5px!important" }}
                    >
                      360 degree office cleaning.
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ paddingTop: "5px!important" }}
                    >
                      Thorough cleaning delivered by dependable, highly
                      professional cleaners who take pride in attention to
                      detail.
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ paddingTop: "5px!important" }}
                    >
                      State-of-the-art augmented reality cleaning equipment for
                      maximum cleanliness and hygiene.
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ paddingTop: "5px!important" }}
                    >
                      Eco-friendly cleaning solutions which minimise the use of
                      harmful chemicals.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={7} md={6} sm={6} xs={12}>
                <Box>
                  <img
                    src="/images/office-cleaning-img.jpg"
                    alt="Office Cleaning Banner"
                    width="100%" loading="lazy"
                  />
                </Box>
              </Grid>
            </Grid>

            {/* Premium cleaning services at affordable rates*/}
            <Box>
              <Typography variant="h3">
                Premium cleaning services at affordable rates
              </Typography>
              <Typography variant="body1">
                Keeping to a strict budget doesn’t have to mean sacrificing
                sanitary working conditions. Hiring our affordable cleaners
                comes with all of the benefits of a professional cleaning agency
                who take pride in their high standards, at a competitive price.
              </Typography>
            </Box>
            {/* Quality office cleaners on-budget */}
            <Box>
              <Typography variant="h3">
                Quality office cleaners on-budget
              </Typography>
              <Typography variant="body1">
                Highly trained cleaning teams have the skills and experience to
                ensure your London premises are cleaned safely, effectively, and
                thoroughly, whatever your office needs.
              </Typography>
            </Box>
            {/* An extremely thorough process of cleaning */}
            <Box>
              <Typography variant="h3">
                An extremely thorough process of cleaning
              </Typography>
              <Typography variant="body1">
                Our capable office cleaning team will analyse your business
                premises to ensure all areas are included, for a thorough
                cleaning service.
              </Typography>
              <Typography variant="body1">
                It’s this attention to detail which sets us apart from other
                London cleaning companies. We’re not a tick-box cleaning firm.
                Instead, we operate on the principles of truly noticeable
                cleanliness and client satisfaction.
              </Typography>
            </Box>
            {/* Safeguarding health and hygiene*/}
            <Box>
              <Typography variant="h3">
                Safeguarding health and hygiene
              </Typography>
              <Typography variant="body1">
                The environmentally friendly cleaning products which we use
                ensure rigorous hygiene, without any harmful side effects for
                those working and visiting. Our stringent cleaning procedures
                and thoroughly researched cleaning products are based on our
                desire to safeguard the health and wellbeing of staff and
                clients.
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
export default Office_Cleaning_Services;
