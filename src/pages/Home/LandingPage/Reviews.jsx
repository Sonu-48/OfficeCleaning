import React from "react";
import { Container, Box, Typography, styled, Link } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Link } from "react-router-dom";

const ReviewSection = styled("div")({
  marginTop: "30px",
  marginBottom: "40px",
  "& a": {
    fontWeight: "600",
    textDecoration: "none",
  },

  ".review-one": {
    background: "#6698FF",
    padding: "40px 0px",
    minHeight: "50px",
  },
  ".review-two": {
    background: "#9370DB",
    padding: "40px 0px",
    minHeight: "50px",
  },
  ".review-three": {
    background: "#98FF98",
    padding: "40px 0px",
    minHeight: "50px",
  },
  ".quote-outer": {
    display: "flex",
    alignItems: "start",
    gap: "20px",
    "& h6": {
      fontWeight: "300",
      paddingTop: "10px",
    },
  },
  ".trustpilot": {
    paddingTop: "10px",
    "& a": {
      color: "#2175a9",
      textDecoration: "none",
    },
  },
});

function Reviews() {
  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplaySpeed:3000,
  };
  return (
    <ReviewSection>
      <Container sx={{ maxWidth: "1900px!important" }}>
        <Slider {...settings}>
          <Box className="review-one">
            <Container>
              <Box className="quote-outer">
                <Box>
                  <img src="/images/quotes.png" alt="Quotes" />
                </Box>
                <Box>
                  <Typography variant="h3" color="#fff">
                    "We've only been using Out of Hour for around three weeks,
                    but our initial experience has been excellent. Our office
                    looks and feels clean and tidy"
                  </Typography>
                  <Typography variant="h6">
                    -Alderson , &nbsp;
                    <Link href="https://www.trustpilot.com/review/outofhour.co.uk?utm_medium=trustbox&utm_source=MicroReviewCount" target="_blank">
                    Waterstones
                    </Link>
                    , Executive Assistant
                  </Typography>
                  <Box className="trustpilot">
                    <Link href="https://www.trustpilot.com/review/outofhour.co.uk?utm_medium=trustbox&utm_source=MicroReviewCount" target="_blank">
                      See our reviews * on trustpilot
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Container>
          </Box>
          <Box className="review-two">
            <Container>
              <Box className="quote-outer">
                <Box>
                  <img src="/images/quotes.png" alt="Quotes" />
                </Box>
                <Box>
                  <Typography variant="h3">
                    "Excellent service, quick response, easy communication and
                    just an easy overall experience"
                  </Typography>
                  <Typography variant="h6" color="#000">
                    - Hannah LevineGreen  , &nbsp;
                    <Link color="#000" href="https://www.trustpilot.com/review/outofhour.co.uk?utm_medium=trustbox&utm_source=MicroReviewCount" target="_blank">
                    Planet Design Engineers
                    </Link>
                    , Senior Account Director
                  </Typography>
                  <Box className="trustpilot">
                    <Link href="https://www.trustpilot.com/review/outofhour.co.uk?utm_medium=trustbox&utm_source=MicroReviewCount" target="_blank">
                      See our reviews * on trustpilot
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Container>
          </Box>
          <Box className="review-three">
            <Container>
              <Box className="quote-outer">
                <Box>
                  <img src="/images/quotes.png" alt="Quotes" />
                </Box>
                <Box>
                  <Typography variant="h3">
                  "Very happy with the service provided from the initial set up of the contract to any changes. Very straightforward and professional"
                  </Typography>
                  <Typography variant="h6" color="#000">
                    -James , &nbsp;
                    <Link color="#000" href="https://www.trustpilot.com/review/outofhour.co.uk?utm_medium=trustbox&utm_source=MicroReviewCount" target="_blank">
                    JonesBonsucro
                    </Link>
                    , Product Manager
                  </Typography>
                  <Box className="trustpilot">
                    <Link href="https://www.trustpilot.com/review/outofhour.co.uk?utm_medium=trustbox&utm_source=MicroReviewCount" target="_blank">
                      See our reviews * on trustpilot
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Container>
          </Box>
        </Slider>
      </Container>
    </ReviewSection>
  );
}
export default Reviews;
