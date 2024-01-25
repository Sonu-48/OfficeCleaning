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
    marginLeft: "19px",
    padding: "7px 0px",
  },
  "& a.active": {
    borderBottom: "2px solid #b4d56c",
  },
  "& a:hover": {
    borderBottom: "2px solid #b4d56c",
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
    "& a:hover .sub-menu-header":{
        display:'block',
    }
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
              sx={{ paddingLeft: "0px", display: "flex", alignItems: "center",justifyContent:{lg:'satart',md:'start',sm:'center',xs:'center'} }}
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
              <Box>
                <Typography variant="h5">
                  Instant <span>Estimate</span> Instant{" "}
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
                <Link href="tel:0203 815 7968 ">0203 815 7968 </Link>
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
            <NavLink component={ReactRouterLink} to="/from">
              Free Quote Form
            </NavLink>
            <NavLink component={ReactRouterLink} to="/">
              Home
            </NavLink>
            <NavLink component={ReactRouterLink} to="/about-us">
              About Us
            </NavLink>
            <NavLink component={ReactRouterLink} to="/services">
              Cleaning Services
              <Box className="sub-menu-header">
                <List>
                  <ListItem>
                    <Link to="/carpet">Carpet Cleaning</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/cleaning">One Off Cleaning</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/office-cleaning">Office Cleaning</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/commercial-cleaning">Commercial Cleaning</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/window cleaning">Window Cleaning</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/office-london">Office Cleaning London</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/benefits">Daytime Cleaning Benefits</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/evening-cleaning">
                      Evening Cleaning Benefits
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </NavLink>
            <NavLink component={ReactRouterLink} to="/blog">
              Blog
            </NavLink>
            <NavLink component={ReactRouterLink} to="/faq">
              FAQs
            </NavLink>
            <NavLink component={ReactRouterLink} to="/contact">
              Contact Us
            </NavLink>
            <NavLink component={ReactRouterLink} to="/work">
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
              <Link to="">Free Quote Form</Link>
            </ListItem>
            <ListItem>
              <Link to="">Home</Link>
            </ListItem>
            <ListItem>
              <Link to="">About Us</Link>
            </ListItem>
            <ListItem>
              <Link to=""> Cleaning Services</Link>
              <Box className="sub-menu-header">
                <List>
                  <ListItem>
                    <Link to="/carpet">Carpet Cleaning</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/cleaning">One Off Cleaning</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/office-cleaning">Office Cleaning</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/commercial-cleaning">Commercial Cleaning</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/window cleaning">Window Cleaning</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/office-london">Office Cleaning London</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/benefits">Daytime Cleaning Benefits</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="/evening-cleaning">
                      Evening Cleaning Benefits
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </ListItem>
          </List>
        </Box>
       </Stack>
      </Container>
    </Wrapper>
  );
}
export default Header;
