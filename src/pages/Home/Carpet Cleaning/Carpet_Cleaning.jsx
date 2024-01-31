import React from "react";
import { Container, Box, Typography, Button, styled } from "@mui/material";
import Header from "../../../HomeLayout/Header";
import Footer from "../../../HomeLayout/Footer";
import PageHelmet from "../../../Components/PageHelmet";
import { Link, useNavigate } from "react-router-dom";

const CarpetWrapper= styled('div')({
    "& h2":{
        fontSize:'32px',
        color:'#2175a9',
    },
    "& span":{
        fontWeight:'600'
    },
    "& p":{
        paddingTop:'20px',
    },
    "& h3":{
        color:'#2175a9',
        paddingTop:'20px',
    },
    "& h4":{
        color:'#2175a9',
        paddingTop:'20px',
        fontStyle:'italic',
        "& a":{
            color:'#2175a9!important'
        }
    }
})

function Carpet_Cleaning() {
    const navigate = useNavigate();
  return (
    <>
      <PageHelmet title="Carpet Cleaning Services London-Commercial-Out Of Hour">
        <Header />
        <CarpetWrapper>
          <Container>
            <Box pt={2} pb={2}>
              <img src="/images/carpet-banner.jpg" alt="Carpet Banner" width="100%" loading="lazy"/>
            </Box>
            {/* Professional Carpet Cleaning Services London section */}
            <Box>
              <Typography variant="h2">
                Professional Carpet Cleaning Services London
              </Typography>
              <Typography variant="body1">
                Employing &nbsp;
                <span>professional carpet cleaning services in the London</span>
                &nbsp;area to give your carpets that deep clean periodically
                helps to remove spillages and pollutants. The safe use of
                chemicals and the adherence to health and safety regulations
                will be in place with an approved provider. Out of hour are
                specialists in vetting, selecting and promoting quality carpet
                cleaners in London.
              </Typography>
            </Box>
            {/* Why do carpets need cleaning section */}
            <Box>
              <Typography variant="h3">Why do carpets need cleaning</Typography>
              <Typography variant="body1">
                Dirt trapped inside carpets can irritate allergies and worsen
                asthma symptoms. High tech equipment is used nowadays to ensure
                not only the removal of stains but a reduction in harmful
                bacterial growth. Carpets are frequently used throughout meeting
                rooms, offices and function rooms to promote a warm and
                professional appearance – keeping them in tip top condition is
                extremely important.
              </Typography>
              <Typography variant="body1">
                High traffic areas of your premises will require more regular
                carpet cleaning services – in particular corridors, libraries or
                staff rooms. Our carefully selected providers all offer 
                <span> professional carpet cleaning services in London</span>.
                Commercial carpet cleaning companies listed with Out of hour are
                well trained, experienced and fully insured which means you can
                be safe in the knowledge that the appearance of your business
                for visitors, prospects and employees is of the highest
                standard.
              </Typography>
              <Typography variant="body1">
                There is much evidence to show that first impressions count to
                clients, and staff report being happier and more productive when
                working in a clean and healthy environment. This can lead to
                reduced employee sickness and improved efficiency savings.
              </Typography>
            </Box>
            {/* Why use our FREE service? section */}
            <Box>
              <Typography variant="h3">Why use our FREE service?</Typography>
              <Typography variant="body1">
                Out of hour ensures that all its
                <span> London carpet cleaning</span> providers are reputable,
                vetted and approved. Our service is free to use and enables you
                to compare carpet cleaning quotes, references and profiles then
                select the provider you would like to work with. Take control
                and let Out of hour provide you quotes from London suppliers
                that fit your requirements for locations, timing and
                professional quality.
              </Typography>
              <Typography variant="h4">
                <Link to="/get-your-quote-now" >Request a quote </Link> 
                for FREE now and see who we have in your area or call us and we’ll do everything for you to make it even easier.
              </Typography>
            </Box>
            <Box pt={3} pb={4} align="center">
                <Button variant="contained" color="primary" onClick={()=>navigate('/get-your-quote-now')}>Quote Request Form</Button>
            </Box>
          </Container>
        </CarpetWrapper>
        <Footer />
      </PageHelmet>
    </>
  );
}
export default Carpet_Cleaning;
