import { KeyboardArrowUp } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  Typography,
  styled,
  Link,
  Button,
  IconButton,
  Tooltip,
} from "@mui/material";
import React from "react";

const FooterWrapper = styled("div")({
  background: "#1b2a6b",
  padding: "3rem 0 0rem ",
  "& a": {
    textDecoration: "none",
  },

  ".footer-link": {
    marginTop: "20px",
    "& P": {
      color: "#fff",
    },
    "& a": {
      display: "block",
      textDecoration: "none",
      color: "#fff",
      padding: "5px 0px",
    },
  },
  ".bark-review": {
    background: "rgb(33, 51, 68)",
    borderTop: "4px solid rgb(28, 44, 59)",
    padding: "10px",
    textAlign: "center",
  },
  ".review-outer": {
    width: "192px",
    border: "4px solid rgb(28, 44, 59)",
    marginTop: "20px",
  },
  ".address-box": {
    maxWidth: "300px",
  },
});

function Footer() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Box>
      <FooterWrapper>
        <Container>
          <Grid container spacing={3}>
            <Grid item lg={5} md={4} sm={6} xs={12}>
              <Typography variant="h4">Find Us</Typography>
              <Box className="footer-link address-box">
                <Typography variant="body1">
                  Find Us Out of Hour Cleaning Services 152 - 160 City Road,
                  <br />
                  London <br /> EC1V 2NX
                </Typography>
              </Box>
              <Box className="review-outer">
                <Link
                  href="https://www.bark.com/en/gb/company/out-of-hour-cleaning-services/QR94/"
                  target="_blank"
                >
                  <img
                    src="/images/cert-excellence-medium.png"
                    alt="Cert"
                    width="100%"
                    loading="lazy"
                  />

                  <Box className="bark-review">
                    <Typography variant="body1">
                      Out of Hour Cleaning Services
                    </Typography>
                  </Box>
                </Link>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Typography variant="h4">Contact Us</Typography>
              <Box className="footer-link">
                <Typography variant="body1">By Phone</Typography>
                <Typography variant="body1" sx={{ fontWeight: "600" }}>
                  0203 815 7968
                </Typography>
              </Box>
              <Box className="footer-link">
                <Typography variant="body1">By Email</Typography>
                <Link href="mailto:info@outofhour.co.uk">
                  info@outofhour.co.uk
                </Link>
              </Box>
              <Box mt={3} mb={2}>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  href="https://www.youtube.com/watch?v=CnJINUEeS3U"
                  target="_blank"
                >
                  Watch 1 min video tour
                </Button>
              </Box>
              <Link
                href="https://www.trustpilot.com/review/outofhour.co.uk?utm_medium=trustbox&utm_source=MicroReviewCount"
                target="_blank"
              >
                See our reviews * on trustpilot
              </Link>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Link href="https://twitter.com/OutofHour" target="_blank">
                Tweets by @OutofHour
              </Link>
            </Grid>
          </Grid>
          <Box pt={2}>
            <Typography variant="body1" color="#fff">
              © 2022 Copyright Out of Hour | Sitemap | Articles
            </Typography>
          </Box>
        </Container>
      </FooterWrapper>
      {/* Back to top button */}
      <Box sx={{ background: "#142250", padding: "0px 0px 5px" }}>
        <Container>
          <Box align="center">
            <Tooltip title="Back to top">
              <IconButton onClick={handleClick} sx={{ background: "#b4d56c" }}>
                <KeyboardArrowUp style={{ fontSize: "30px" }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
export default Footer;
