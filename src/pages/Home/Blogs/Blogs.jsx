import React from "react";
import { Container, Box, Typography, styled } from "@mui/material";
import PageHelmet from "../../../Components/PageHelmet";
import Header from "../../../HomeLayout/Header";
import Footer from "../../../HomeLayout/Footer";

const BlogWrapper = styled("div")({
    ".blog-outer":{
        marginBottom:'34px',
        "& h3":{
            color:'#2175a9',
            paddingBottom:'10px'
        }
    },
  ".blog-inner-wrapper": {
    display: "flex",
    alignItem: "center",
    gap: "20px",
    marginTop:'10px',
  },
  "@media screen and (max-width:600px)":{
    ".blog-inner-wrapper":{
        flexWrap:'wrap'
    }
  }
});

function Blogs() {
  return (
    <>
      <PageHelmet title="Blog- Out Of Hour">
        <Header />
        <BlogWrapper>
          <Container>
            <Box>
              <img src="/images/blog-page-banner.jpg" alt="Blog Banner" width="100%"/>
            </Box>
            {/* UK Theatres Set To Reopen With Enhanced Cleaning Measures */}
            <Box className="blog-outer">
              <Typography variant="h3" pt={3}>
                UK Theatres Set To Reopen With Enhanced Cleaning Measures
              </Typography>
              <Box className="blog-inner-wrapper">
                <img src="/images/blog-img1.jpg" alt="Blog" />

                <Typography variant="body1">
                  As Prime Minister Boris Johnson has confirmed that most of the
                  remaining lockdown restrictions will be lifted from July 19,
                  the UK live events industry is set to swing back into action,
                  with some venues reopening for the first time in 16 months.
                  Amid concerns about rising Covid cases, venues will be keen to
                  reassure audiences about their hygiene and safety measures as
                  they begin to operate at full capacity. Broadway World spoke
                  to Julian Bird, Chief Executive of the Society of London
                  Theatres (SOLT), about his thoughts on the full reopening of
                  London’s vibrant cultural scene. Bird commented: ‘As
                  throughout the pandemic, the safety and confidence of our
                  audiences and staff remains paramount. Theatres will continue
                  to use our […]
                </Typography>
              </Box>
            </Box>
            {/* Advert Ban Reflects Gender Reality Of Cleaning */}
            <Box className="blog-outer">
              <Typography variant="h3">
                Advert Ban Reflects Gender Reality Of Cleaning
              </Typography>
              <Box className="blog-inner-wrapper">
                <img src="/images/blog-img2.jpg" alt="Blog" />

                <Typography variant="body1">
                  In an age when gender-based discrimination and stereotypes are
                  increasingly frowned upon, some may have failed to notice the
                  changing reality of the commercial cleaning sector. Just as
                  some jobs – such as construction and engineering – are seen as
                  ‘male’ occupations and others like nursing and midwifery are
                  considered traditionally female roles, so it is that cleaning
                  is traditionally seen as something women do. However, the
                  reality of professional cleaning services in London is quite
                  different. Because of this, those making outdated assumptions
                  can end up being embarrassed. This has just happened to the
                  makers of a TV advert for a JML cleaning device, the Hurricane
                  Spin Scrubber, which showed several different women using the
                  tool around the house. […]
                </Typography>
              </Box>
            </Box>
            {/* 4 Tips For Hiring Commercial Cleaners */}
            <Box className="blog-outer">
              <Typography variant="h3">
                4 Tips For Hiring Commercial Cleaners
              </Typography>
              <Box className="blog-inner-wrapper">
                <img src="/images/blog-img3.jpg" alt="Blog" />

                <Typography variant="body1">
                  In an age when gender-based discrimination and stereotypes are
                  increasingly frowned upon, some may have failed to notice the
                  changing reality of the commercial cleaning sector. Just as
                  some jobs – such as construction and engineering – are seen as
                  ‘male’ occupations and others like nursing and midwifery are
                  considered traditionally female roles, so it is that cleaning
                  is traditionally seen as something women do. However, the
                  reality of professional cleaning services in London is quite
                  different. Because of this, those making outdated assumptions
                  can end up being embarrassed. This has just happened to the
                  makers of a TV advert for a JML cleaning device, the Hurricane
                  Spin Scrubber, which showed several different women using the
                  tool around the house. […]
                </Typography>
              </Box>
            </Box>
            {/* Shoppers Urged To Do Their Bit As Shops Reopen */}
            <Box className="blog-outer">
              <Typography variant="h3">
                Shoppers Urged To Do Their Bit As Shops Reopen
              </Typography>
              <Box className="blog-inner-wrapper">
                <img src="/images/blog-img4.jpg" alt="Blog" />

                <Typography variant="body1">
                  Non-essential retail businesses were allowed to reopen as of
                  Monday 12 April, as well as pubs, bars, and restaurants that
                  are fortunate to have outdoor seating, having spent most of
                  the last year closed due to the lockdown restrictions. As
                  eager shoppers rush to the high street, the British Retail
                  Consortium (BRC) has said that retail businesses have spent
                  millions of pounds on measures designed to keep stores
                  COVID-secure, including safety glass, queue management
                  systems, social distancing signage, better ventilation, and
                  more frequent cleaning. The BRC has added that customers also
                  need to do that part to help prevent the spread of the
                  coronavirus and reduce the chances of another lockdown, but
                  following seven steps to keep retail open and […]
                </Typography>
              </Box>
            </Box>
            {/* What Does A Commercial Cleaning Company Do? */}
            <Box className="blog-outer">
              <Typography variant="h3">
                What Does A Commercial Cleaning Company Do?
              </Typography>
              <Box className="blog-inner-wrapper">
                <img src="/images/blog-img5.jpg" alt="Blog" />

                <Typography variant="body1">
                  Commercial cleaning companies exist to provide businesses with
                  cleaning solutions to ensure the workplace is tidy, clean, and
                  fit for purpose. They will undertake a variety of tasks that
                  include disinfecting desks and touchpoints, mopping floors and
                  emptying bins, completing industrial carpet cleans, and
                  COVID-secure measures. With people gearing up to return to the
                  office soon, we wanted to have a look at some reasons why you
                  should hire a commercial cleaning company for your office or
                  workplace. Why should you hire a commercial cleaner? Save time
                  Running a business will undoubtedly keep you busy with a
                  never-ending list of tasks, and maintaining the cleanliness of
                  the office may end up falling to the bottom of the list. Even
                  […]
                </Typography>
              </Box>
            </Box>
          </Container>
        </BlogWrapper>
        <Footer />
      </PageHelmet>
    </>
  );
}
export default Blogs;
