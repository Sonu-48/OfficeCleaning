import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  styled,
  Grid,
  Link,
  List,
  ListItem,
  Stack,
  Button,
  Paper,
} from "@mui/material";
import { NavLink, Link as ReactRouterLink } from "react-router-dom";

const Wrapper = styled("div")({
  padding: "10px 0px",
  "& span": {
    color: "#b4d56c",
  },
  "& a": {
    color: "#2175a9",
    fontSize: "15px",
    fontWeight: "700",
    padding: "7px 0px",
  },
 
  "& h5": {
    color: "#2175a9",
  },
  ".social-link-box": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    ".social-inner-box": {
      "& a": {
        marginLeft: "10px",
      },
    },
    ".separator": {
      color: "#b4d56c  ",
    },
  },
  ".sub-header-outer": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "23px 0px 10px",
    position:'relative',
    "& a":{
      borderBottom: "2px solid #fff",
      textAlign:'center',
      marginLeft: "19px",
    },
    "& a:hover .sub-menu-header":{
        display:'block',
    },
    "& a.active": {
      borderBottom: "2px solid #b4d56c",
    },
    "& a:hover": {
      borderBottom: "2px solid #b4d56c",
    },
  },
  ".sub-menu-header": {
    display: "none",
    position:'absolute',
    zIndex:'99',
    background:'#2175a9',
    borderRadius:'5px',
    width:'230px',
    marginTop:'5px',
    "& a":{
      color:'#fff',
      textDecoration:'none',
      borderBottom:'2px solid #fff',
      width:'100%',
      transition:'0.2s',
      "&:hover":{
        borderColor:'#b4d56c',
        paddingLeft:'10px',
        color:'#b4d56c',

      }
    }
  },
});

function Header() {
  const [showmenu, setShowmenu] = useState(false);
  return (
    <Wrapper>
      <Container>
        {/* Header */}
        <Box pt={1}>
          <Grid container spacing={3}>
            <Grid
              item
              lg={3}
              md={4}
              sm={6}
              xs={12}
              sx={{ paddingLeft: "0px", display: "flex", alignItems: "center",justifyContent:{lg:'start',md:'start',sm:'center',xs:'center'} }}
            >
              <Link to="/" component={ReactRouterLink}>
                <img src="/images/logo.png" alt="Office Cleaning" />
              </Link>
            </Grid>
            <Grid
              item
              lg={4}
              md={4}
              sm={6}
              xs={12}
              sx={{ paddingLeft: "0px", display: "flex", alignItems: "center",justifyContent:'center' }}
            >
              <Box align="center">
                <Typography variant="h5" sx={{fontSize:'21px'}}>
                  Instant <span>Estimate</span> Instant &nbsp;
                  <span>Turnaround. </span>
                  Instant <span>Results</span>
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              lg={5}
              md={4}
              sm={6}
              xs={12}
              sx={{
                paddingLeft: "0px",
                display: "flex",
                alignItems: "center",
                justifyContent:{lg:'end',md:'end',sm:'center',xs:'center'}
              }}
            >
              <Box className="social-link-box">
                <Link href="tel:0203 815 7968 " style={{fontWeight:'500',fontSize:'20px'}}>0203 815 7968 </Link>
                <Box className="separator">/</Box>
                <Box className="social-inner-box">
                  <Link href="" target="_blank">
                    <img src="/images/facebook-icon.png" alt="Facebook" />
                  </Link>
                  <Link href="" target="_blank">
                    <img src="/images/twitter-icon.png" alt="Twitter" />
                  </Link>
                  <Link href="" target="_blank">
                    <img src="/images/youtube-icon.png" alt="YouTube" />
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* Menu header link */}
        <Stack
          sx={{ display: { lg: "block", md: "none", sx: "noe", xs: "none" } }}
        >
          <Box className="sub-header-outer">
            <NavLink component={ReactRouterLink} to="/get-your-quote-now">
              Free Quote Form
            </NavLink>
            <NavLink component={ReactRouterLink} to="/">
              Home
            </NavLink>
            <NavLink component={ReactRouterLink} to="/about-us">
              About Us
            </NavLink>
            <NavLink component={ReactRouterLink} to="/cleaning-service">
              Cleaning Services
              <Box className="sub-menu-header">
                <List>
                  <ListItem>
                    <Link component={ReactRouterLink} to="/carpet-cleaning-london">Carpet Cleaning</Link>
                  </ListItem>
                  <ListItem>
                    <Link component={ReactRouterLink} to="/one-off-cleaning-london">One Off Cleaning</Link>
                  </ListItem>
                  <ListItem>
                    <Link component={ReactRouterLink} to="/office-cleaning-services">Office Cleaning</Link>
                  </ListItem>
                  <ListItem>
                    <Link component={ReactRouterLink} to="/commercial-cleaning">Commercial Cleaning</Link>
                  </ListItem>
                  <ListItem>
                    <Link component={ReactRouterLink} to="/window-cleaning">Window Cleaning</Link>
                  </ListItem>
                  <ListItem>
                    <Link component={ReactRouterLink} to="/office-cleaning-london">Office Cleaning London</Link>
                  </ListItem>
                  <ListItem>
                    <Link component={ReactRouterLink} to="/daytime-cleaning-benefits">Daytime Cleaning Benefits</Link>
                  </ListItem>
                  <ListItem>
                    <Link component={ReactRouterLink} to="/evening-cleaning-benefits">
                      Evening Cleaning Benefits
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </NavLink>
            <NavLink component={ReactRouterLink} to="/blog">
              Blog
            </NavLink>
            <NavLink component={ReactRouterLink} to="/faqs">
              FAQs
            </NavLink>
            <NavLink component={ReactRouterLink} to="/contact-us">
              Contact Us
            </NavLink>
            <NavLink component={ReactRouterLink} to="/how-it-works">
              How does it work
            </NavLink>
            <NavLink component={ReactRouterLink} to="/why-us">
              Why Us
            </NavLink>
            <NavLink component={ReactRouterLink} to="/feedback">
              Feedback
            </NavLink>
          </Box>
        </Stack>

        {/* mobile menu */}
       <Stack sx={{display:{lg:'none',md:'block',sm:'block',xs:'block'}}}>
       <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            justifyContent: "start",
            borderBottom: "none",
            borderRadius: "0px",
            padding: "7px 15px",
          }}
          onClick={() => setShowmenu(!showmenu)}
        >
          Menu
        </Button>
        <Box sx={{display:showmenu? 'block':'none'}} component={Paper}>
          <List className="list">
            <ListItem>
              <Link component={ReactRouterLink} to="/get-your-quote-now">Free Quote Form</Link>
            </ListItem>
            <ListItem>
              <Link component={ReactRouterLink} to="/">Home</Link>
            </ListItem>
            <ListItem>
              <Link component={ReactRouterLink} to="/about-us">About Us</Link>
            </ListItem>
            <ListItem>
              <Link component={ReactRouterLink} to="/cleaning-service"> Cleaning Services</Link>
              <Box className="sub-menu-header">
                <List>
                  <ListItem>
                    <Link component={ReactRouterLink} to="/carpet-cleaning-london">Carpet Cleaning</Link>
                  </ListItem>
                  <ListItem>
                    <Link component={ReactRouterLink} to="/one-off-cleaning-london">One Off Cleaning</Link>
                  </ListItem>
                  <ListItem>
                    <Link component={ReactRouterLink} to="/office-cleaning-services">Office Cleaning</Link>
                  </ListItem>
                  <ListItem>
                    <Link component={ReactRouterLink} to="/commercial-cleaning">Commercial Cleaning</Link>
                  </ListItem>
                  <ListItem>
                    <Link component={ReactRouterLink} to="/window-cleaning">Window Cleaning</Link>
                  </ListItem>
                  <ListItem>
                    <Link component={ReactRouterLink} to="/office-cleaning-london">Office Cleaning London</Link>
                  </ListItem>
                  <ListItem>
                    <Link component={ReactRouterLink} to="/daytime-cleaning-benefits">Daytime Cleaning Benefits</Link>
                  </ListItem>
                  <ListItem>
                    <Link component={ReactRouterLink} to="/evening-cleaning-benefits">
                      Evening Cleaning Benefits
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </ListItem>
            <ListItem>
              <Link component={ReactRouterLink} to="/blog">Blog</Link>
            </ListItem>
            <ListItem>
              <Link component={ReactRouterLink} to="/faqs">FAQs</Link>
            </ListItem>
            <ListItem>
              <Link component={ReactRouterLink} to="/contact-us">Contact Us</Link>
            </ListItem>
            <ListItem>
              <Link component={ReactRouterLink} to="/how-it-works">How does it work</Link>
            </ListItem>
            <ListItem>
              <Link component={ReactRouterLink} to="/why-us">Why Us</Link>
            </ListItem>
            <ListItem>
              <Link component={ReactRouterLink} to="/feedback">Feedback</Link>
            </ListItem>
          </List>
        </Box>
       </Stack>
      </Container>
    </Wrapper>
  );
}
export default Header;
